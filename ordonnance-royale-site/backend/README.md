# 🚀 GUIDE DÉPLOIEMENT — Cloudflare Workers + Stripe

## 📋 Vue d'ensemble (15 minutes)

Vous allez :
1. Créer un compte Cloudflare (si vous n'en avez pas)
2. Créer un Worker via l'interface web (pas besoin de terminal !)
3. Coller le code `worker.js`
4. Ajouter votre clé Stripe en secret
5. Récupérer l'URL et me l'envoyer

---

## ÉTAPE 1 : Compte Cloudflare (3 min)

### Vous avez déjà un compte ?
Si vous avez acheté ou géré votre nom de domaine via Cloudflare, vous avez déjà un compte. Allez direct à l'**ÉTAPE 2**.

### Si vous n'avez pas de compte :
1. Allez sur https://dash.cloudflare.com/sign-up
2. Créez un compte avec votre email
3. Validez votre email
4. **Aucune carte bancaire requise** ✅

---

## ÉTAPE 2 : Récupérer votre clé Stripe TEST (2 min)

1. Connectez-vous sur https://dashboard.stripe.com
2. ⚠️ **Activez le mode TEST** en haut à droite (toggle "Voir les données de test")
3. Allez dans **Développeurs** → **Clés API**
4. Cliquez sur **« Révéler la clé secrète de test »**
5. Copiez la clé qui commence par `sk_test_...`
6. Gardez-la dans un bloc-notes pour l'étape 5

---

## ÉTAPE 3 : Créer un Worker (5 min)

1. Connectez-vous sur https://dash.cloudflare.com
2. Dans le menu de gauche, cliquez sur **« Workers & Pages »**
3. Cliquez sur **« Create application »** (ou "Créer une application")
4. Choisissez **« Create Worker »** (créer un Worker)
5. Donnez-lui un nom : `ordonnance-royale-stripe`
6. Cliquez sur **« Deploy »** (déployer)

✅ Votre Worker est créé ! Vous voyez une URL type :
```
https://ordonnance-royale-stripe.VOTRE-COMPTE.workers.dev
```
**📝 Notez cette URL**, vous en aurez besoin.

---

## ÉTAPE 4 : Coller le code (3 min)

1. Sur la page de votre Worker, cliquez sur **« Edit code »** (Modifier le code)
2. Vous voyez un éditeur avec un code par défaut
3. **Sélectionnez tout le code** (Ctrl+A) et **supprimez-le**
4. **Ouvrez le fichier `worker.js`** que je vous ai fourni
5. **Copiez tout son contenu**
6. **Collez-le** dans l'éditeur Cloudflare
7. En haut à droite, cliquez sur **« Save and Deploy »** (Sauvegarder et déployer)

---

## ÉTAPE 5 : Ajouter la clé Stripe en secret (2 min)

1. Retournez sur la page principale de votre Worker (cliquez sur le nom du Worker)
2. Allez dans l'onglet **« Settings »** (Paramètres)
3. Cherchez la section **« Variables and Secrets »** (Variables et Secrets)
4. Cliquez sur **« Add »** (Ajouter)
5. Remplissez :
   - **Variable name** : `STRIPE_SECRET_KEY`
   - **Type** : ⚠️ **Choisir « Secret »** (pas "Plaintext" !)
   - **Value** : Collez votre clé `sk_test_...` 
6. Cliquez sur **« Save »** (Sauvegarder)

⚠️ **Important** : Le type doit être **« Secret »** pour que la clé soit chiffrée.

---

## ÉTAPE 6 : Tester que ça marche (1 min)

Ouvrez votre URL Worker dans le navigateur :
```
https://ordonnance-royale-stripe.VOTRE-COMPTE.workers.dev
```

Vous devriez voir :
```
{"error": "Méthode non autorisée"}
```

✅ **C'est NORMAL !** Ça veut dire que le Worker fonctionne — il refuse juste les requêtes GET (il accepte uniquement POST avec un panier).

---

## ÉTAPE 7 : M'envoyer l'URL Worker

Copiez l'URL exacte de votre Worker (ex: `https://ordonnance-royale-stripe.deborah123.workers.dev`) et **envoyez-la moi**.

Je vais alors :
- ✅ Modifier votre `checkout.html` pour qu'il appelle cette URL
- ✅ Connecter le bouton « Payer » à Stripe
- ✅ Vous fournir le fichier mis à jour à uploader sur Hostinger

---

## 🧪 PLUS TARD : Tester avec une carte test

Quand tout sera connecté, testez le paiement avec :

| Numéro carte | CVV | Date | Résultat |
|---|---|---|---|
| `4242 4242 4242 4242` | n'importe quoi | future | ✅ Paiement OK |
| `4000 0000 0000 9995` | n'importe quoi | future | ❌ Refusée |

⚠️ Ce sont des cartes test Stripe — aucun argent n'est débité.

---

## 🚀 PLUS TARD : Passage en production

Quand tout fonctionne en mode test :

1. Sur Stripe, basculez en mode **« Live »**
2. Récupérez votre nouvelle clé `sk_live_...`
3. Sur Cloudflare, modifiez la variable `STRIPE_SECRET_KEY` avec la nouvelle clé
4. Redéployez (clic sur "Save and Deploy")
5. **Vous recevez de vrais paiements !** 🎉

---

## ❓ Questions courantes

**Combien ça coûte ?**
- Cloudflare Workers : **0€** (100k requêtes/jour gratuites)
- Stripe : 0€ d'abonnement, juste 1.4% + 0.25€ par paiement réussi

**C'est sécurisé ?**
- Votre clé Stripe est dans un Secret Cloudflare chiffré
- Stripe gère tout le côté carte bancaire (vous n'y touchez jamais)

**Et si j'ai 1000 commandes/jour ?**
- Largement gérable : Cloudflare permet 100 000 requêtes/jour gratuitement
- Au-delà (rare !) : 0,30$ pour 1 million de requêtes

---

## 🆘 En cas de problème

Si vous bloquez à une étape, dites-moi exactement :
- À quelle étape vous êtes
- Le message d'erreur que vous voyez
- Si possible, une capture d'écran

Je vous guide étape par étape ! 💪
