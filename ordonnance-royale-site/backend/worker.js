// ═══════════════════════════════════════════════════════════
// CLOUDFLARE WORKER — Stripe Checkout pour Ordonnance Royale
// ═══════════════════════════════════════════════════════════
//
// Ce code reçoit le panier depuis votre site et crée une
// session Stripe Checkout pour le paiement.
//
// La clé secrète Stripe est stockée dans les "Secrets" du Worker
// (variable d'environnement sécurisée).
// ═══════════════════════════════════════════════════════════

export default {
  async fetch(request, env) {
    // CORS — Permettre les requêtes depuis votre site
    const corsHeaders = {
      'Access-Control-Allow-Origin': 'https://ordonnanceroyale.com',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    // Pré-flight OPTIONS
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 200, headers: corsHeaders });
    }

    // Seules les requêtes POST sont acceptées
    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Méthode non autorisée' }), {
        status: 405,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    try {
      const body = await request.json();
      const { panier, livraison, promo, client } = body;

      // Validation
      if (!panier || !panier.length) {
        return jsonResponse({ error: 'Panier vide' }, 400, corsHeaders);
      }

      // Construire les line_items pour Stripe
      const formData = new URLSearchParams();
      formData.append('mode', 'payment');
      formData.append('payment_method_types[]', 'card');
      formData.append('payment_method_types[]', 'paypal');
      formData.append('locale', 'fr');
      formData.append('success_url', 'https://ordonnanceroyale.com/merci.html?session_id={CHECKOUT_SESSION_ID}');
      formData.append('cancel_url', 'https://ordonnanceroyale.com/panier.html');

      // Pays autorisés pour la livraison
      const countries = ['FR', 'BE', 'CH', 'LU', 'DE', 'IT', 'ES', 'NL', 'PT', 'GB', 'CA', 'US'];
      countries.forEach((c, i) => {
        formData.append(`shipping_address_collection[allowed_countries][${i}]`, c);
      });

      // Email pré-rempli
      if (client?.email) {
        formData.append('customer_email', client.email);
      }

      // Métadonnées (pour vos archives)
      if (client?.prenom) formData.append('metadata[client_prenom]', client.prenom);
      if (client?.nom) formData.append('metadata[client_nom]', client.nom);
      if (client?.tel) formData.append('metadata[client_tel]', client.tel);
      if (livraison?.pays) formData.append('metadata[livraison_pays]', livraison.pays);
      if (promo?.code) formData.append('metadata[promo_code]', promo.code);

      // Articles du panier
      panier.forEach((item, i) => {
        const description = [];
        if (item.taille) description.push(`Format ${item.taille}`);
        if (item.cat) description.push(item.cat);
        if (item.perso) description.push(`Couleurs perso : ${item.perso}`);

        formData.append(`line_items[${i}][price_data][currency]`, 'eur');
        formData.append(`line_items[${i}][price_data][product_data][name]`, item.nom);
        if (description.length) {
          formData.append(`line_items[${i}][price_data][product_data][description]`, 
            description.join(' · ').substring(0, 500));
        }
        formData.append(`line_items[${i}][price_data][unit_amount]`, 
          String(Math.round(item.prix * 100))); // Centimes
        formData.append(`line_items[${i}][quantity]`, String(item.qte));
      });

      // Livraison
      if (livraison && livraison.amount > 0) {
        formData.append('shipping_options[0][shipping_rate_data][type]', 'fixed_amount');
        formData.append('shipping_options[0][shipping_rate_data][fixed_amount][amount]', 
          String(Math.round(livraison.amount * 100)));
        formData.append('shipping_options[0][shipping_rate_data][fixed_amount][currency]', 'eur');
        formData.append('shipping_options[0][shipping_rate_data][display_name]', 
          `Livraison ${livraison.label || livraison.paysLabel || livraison.pays}`);
        
        // Estimation de délai
        if (livraison.jours) {
          const [min, max] = livraison.jours.split('-').map(s => parseInt(s) || 5);
          formData.append('shipping_options[0][shipping_rate_data][delivery_estimate][minimum][unit]', 'business_day');
          formData.append('shipping_options[0][shipping_rate_data][delivery_estimate][minimum][value]', String(min));
          formData.append('shipping_options[0][shipping_rate_data][delivery_estimate][maximum][unit]', 'business_day');
          formData.append('shipping_options[0][shipping_rate_data][delivery_estimate][maximum][value]', String(max));
        }
      }

      // Code promo : créer un coupon à la volée
      if (promo && promo.code && promo.value) {
        const couponData = new URLSearchParams();
        couponData.append('name', `Code ${promo.code}`);
        couponData.append('duration', 'once');
        if (promo.type === 'percent') {
          couponData.append('percent_off', String(promo.value));
        } else {
          couponData.append('amount_off', String(Math.round(promo.value * 100)));
          couponData.append('currency', 'eur');
        }

        const couponRes = await fetch('https://api.stripe.com/v1/coupons', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${env.STRIPE_SECRET_KEY}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: couponData,
        });

        if (couponRes.ok) {
          const coupon = await couponRes.json();
          formData.append('discounts[0][coupon]', coupon.id);
        }
      }

      // Créer la session Stripe Checkout
      const stripeRes = await fetch('https://api.stripe.com/v1/checkout/sessions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${env.STRIPE_SECRET_KEY}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData,
      });

      const session = await stripeRes.json();

      if (!stripeRes.ok) {
        console.error('Erreur Stripe complète:', JSON.stringify(session));
        console.error('Données envoyées:', JSON.stringify(Object.fromEntries(formData)));
        return jsonResponse({
          error: 'Erreur Stripe',
          stripe_error: session.error?.message || 'Erreur inconnue',
          stripe_code: session.error?.code || '',
          stripe_param: session.error?.param || '',
          stripe_type: session.error?.type || '',
        }, 500, corsHeaders);
      }

      // Renvoyer l'URL de paiement
      return jsonResponse({ url: session.url, sessionId: session.id }, 200, corsHeaders);

    } catch (err) {
      console.error('Erreur serveur:', err.message);
      console.error('Stack:', err.stack);
      return jsonResponse({
        error: 'Erreur serveur',
        details: err.message,
        stack: err.stack?.substring(0, 500),
      }, 500, corsHeaders);
    }
  },
};

function jsonResponse(data, status, corsHeaders) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });
}
