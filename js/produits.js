"use strict";

// ============================================
//  ORDONNANCE ROYALE — Catalogue produits
//  Pour ajouter un produit : copiez un bloc
//  et modifiez les valeurs. C'est tout !
// ============================================

const PRODUITS = [

  // ── AFFICHES ────────────────────────────

  {
    id: "jean-3-16",
    nom: "Car Dieu a tant aimé le monde",
    ref: "Jean 3:16",
    categorie: ["amour", "jean"],
    prix: 12.90,
    image: "images/produits/jean3_16.webp",
    badge: "",
    description: "Car Dieu a tant aimé le monde qu'il a donné son Fils unique, afin que quiconque croit en lui ne périsse point, mais qu'il ait la vie éternelle.",
    bestseller: true
  },

  {
    id: "jean-14-6",
    nom: "Chemin, Vérité & Vie",
    ref: "Jean 14:6",
    categorie: ["foi", "jean"],
    prix: 12.90,
    image: "images/produits/jean14_6.webp",
    badge: "",
    description: "Je suis le chemin, la vérité, et la vie. Nul ne vient au Père que par moi.",
    bestseller: true
  },

  {
    id: "jean-4-14",
    nom: "Source d'eau jaillissant en vie éternelle",
    ref: "Jean 4:14",
    categorie: ["foi", "jean"],
    prix: 12.90,
    image: "images/produits/jean4_14.webp",
    badge: "",
    description: "Celui qui boira de l'eau que je lui donnerai n'aura jamais soif.",
    bestseller: false
  },

  {
    id: "job-22-21-30",
    nom: "À tes résolutions répondra le succès",
    ref: "Job 22:21-30",
    categorie: ["prosperite", "force"],
    prix: 12.90,
    image: "images/produits/job22_21-30.webp",
    badge: "",
    description: "À tes résolutions répondra le succès, sur tes sentiers brillera la lumière.",
    bestseller: true
  },

  {
    id: "psaume-118-24",
    nom: "C'est ici la journée que l'Éternel a faite",
    ref: "Psaumes 118:24",
    categorie: ["foi", "psaumes"],
    prix: 12.90,
    image: "images/produits/psaume118_24.webp",
    badge: "",
    description: "C'est ici la journée que l'Éternel a faite : qu'elle soit pour nous un sujet d'allégresse et de joie !",
    bestseller: false
  },

  {
    id: "notre-pere",
    nom: "Notre Père qui es aux Cieux",
    ref: "Matthieu 6:9-13",
    categorie: ["priere", "amour"],
    prix: 12.90,
    image: "images/produits/Notre_pere.webp",
    badge: "",
    description: "Notre Père qui es aux cieux ! Que ton nom soit sanctifié ; que ton règne vienne ; que ta volonté soit faite sur la terre comme au ciel.",
    bestseller: true
  },

  {
    id: "ma-grace-te-suffit",
    nom: "Ma grâce te suffit",
    ref: "2 Corinthiens 12:9",
    categorie: ["force", "foi"],
    prix: 12.90,
    image: "images/produits/ma_grace_te_suffit.webp",
    badge: "",
    description: "Ma grâce te suffit, car ma puissance s'accomplit dans la faiblesse.",
    bestseller: true
  },

  {
    id: "les-bontes-de-leternel",
    nom: "Les bontés de l'Éternel ne sont pas épuisées",
    ref: "Lamentations 3:21-23",
    categorie: ["foi", "confiance"],
    prix: 12.90,
    image: "images/produits/les_bontes_de_leternel.webp",
    badge: "",
    description: "Les bontés de l'Éternel ne sont pas épuisées, ses compassions ne sont pas à leur terme ; elles se renouvellent chaque matin.",
    bestseller: false
  },

  {
    id: "le-pouvoir-de-marcher",
    nom: "Je vous ai donné le pouvoir de marcher",
    ref: "Luc 10:19",
    categorie: ["protection", "force"],
    prix: 12.90,
    image: "images/produits/le_pouvoir_de_marcher.webp",
    badge: "",
    description: "Voici, je vous ai donné le pouvoir de marcher sur les serpents et les scorpions, et sur toute la puissance de l'ennemi.",
    bestseller: false
  },

  {
    id: "psaume-23",
    nom: "Oui, le bonheur et la grâce m'accompagneront",
    ref: "Psaume 23",
    categorie: ["foi", "psaumes", "confiance"],
    prix: 12.90,
    image: "images/produits/psaumes23pres.webp",
    badge: "Nouveau",
    description: "Oui, le bonheur et la grâce m'accompagneront tous les jours de ma vie.",
    bestseller: false
  },

  {
    id: "la-gloire-de-la-seconde-maison",
    nom: "La gloire de cette dernière maison",
    ref: "Aggée 2:9",
    categorie: ["prosperite", "foi"],
    prix: 12.90,
    image: "images/produits/la_gloire_de_la_seconde_maison.webp",
    badge: "",
    description: "La gloire de cette dernière maison sera plus grande que celle de la première, dit l'Éternel des armées.",
    bestseller: false
  },

  {
    id: "proverbes-31",
    nom: "La Femme du Proverbes 31",
    ref: "Proverbes 31",
    categorie: ["femme", "proverbes"],
    prix: 12.90,
    image: "images/produits/PROVERBES31copie.webp",
    badge: "",
    description: "Qui peut trouver une femme vertueuse ? Elle a bien plus de valeur que les perles.",
    bestseller: true
  },

  {
    id: "lamour-ne-meurt-jamais-roses",
    nom: "L'amour ne meurt jamais — Roses",
    ref: "1 Corinthiens 13:4-7",
    categorie: ["amour"],
    prix: 12.90,
    image: "images/produits/lamournemeurtjamais1.webp",
    badge: "",
    description: "L'amour est patient, il est plein de bonté ; l'amour ne meurt jamais.",
    bestseller: false
  },

  {
    id: "lamour-ne-meurt-jamais-coeurs",
    nom: "L'amour ne meurt jamais — Cœurs",
    ref: "1 Corinthiens 13:4-7",
    categorie: ["amour"],
    prix: 12.90,
    image: "images/produits/lamournemeurtjamais.webp",
    badge: "",
    description: "L'amour est patient, il est plein de bonté ; l'amour ne meurt jamais.",
    bestseller: true
  },

  {
    id: "kairos",
    nom: "Kaïros — Au bon endroit, au bon moment",
    ref: "Ecclésiaste 9:11",
    categorie: ["foi", "prosperite"],
    prix: 12.90,
    image: "images/produits/kairos.webp",
    badge: "",
    description: "Je serai au bon endroit, au bon moment. Car tout dépend pour eux du temps et des circonstances.",
    bestseller: false
  },

  {
    id: "hebreux-13-8",
    nom: "Hier, aujourd'hui & éternellement",
    ref: "Hébreux 13:8",
    categorie: ["foi", "confiance"],
    prix: 12.90,
    image: "images/produits/hebreux13_8.webp",
    badge: "",
    description: "Jésus-Christ est le même hier, aujourd'hui, et éternellement.",
    bestseller: false
  },

  {
    id: "femme-de-valeur-couronne",
    nom: "Femme de valeur, tu es une couronne",
    ref: "Proverbes 12:4",
    categorie: ["femme", "proverbes"],
    prix: 12.90,
    image: "images/produits/Femmedevaleurcopie.webp",
    badge: "Nouveau",
    description: "Femme de valeur, tu es une couronne pour ton mari.",
    bestseller: false
  },

  {
    id: "fais-de-leternel-tes-delices",
    nom: "Fais de l'Éternel tes délices",
    ref: "Psaume 37:4-5",
    categorie: ["foi", "psaumes", "confiance"],
    prix: 12.90,
    image: "images/produits/fais_de_l_eternel_tes_delices.webp",
    badge: "",
    description: "Fais de l'Éternel tes délices, et il te donnera ce que ton cœur désire.",
    bestseller: false
  },

  {
    id: "courageux-fort",
    nom: "Fort & Courageux — Josué 1:9",
    ref: "Josué 1:9",
    categorie: ["force", "enfant"],
    prix: 12.90,
    image: "images/produits/courageux_fort.webp",
    badge: "",
    description: "Je t'ai commandé d'être fort et courageux. Ne tremble pas, n'aie pas peur, car moi, le Seigneur ton Dieu, je serai avec toi partout où tu iras.",
    bestseller: false
  },

  {
    id: "lion-esaie-49-2",
    nom: "Il a rendu ma bouche semblable à un glaive",
    ref: "Ésaïe 49:2",
    categorie: ["force", "protection"],
    prix: 12.90,
    image: "images/produits/lion_sarah_3f70fed7-6039-4e85-a636-d3798390f9a0.webp",
    badge: "",
    description: "Il a rendu ma bouche semblable à un glaive tranchant, il m'a couvert de l'ombre de sa main.",
    bestseller: false
  },

  {
    id: "demander-en-priere",
    nom: "Tout ce que tu demanderas en priant",
    ref: "Marc 11:23-24",
    categorie: ["foi", "priere"],
    prix: 12.90,
    image: "images/produits/demander_en_priere.webp",
    badge: "",
    description: "Tout ce que tu demanderas en priant, crois que tu l'as reçu, et tu le verras s'accomplir.",
    bestseller: false
  },

  {
    id: "projet-de-paix",
    nom: "Des projets de paix et non de malheur",
    ref: "Jérémie 29:11",
    categorie: ["foi", "esperance"],
    prix: 12.90,
    image: "images/produits/projetdepaix.webp",
    badge: "",
    description: "Car je connais les projets que j'ai formés sur vous, dit l'Éternel, projets de paix et non de malheur, afin de vous donner un avenir et de l'espérance.",
    bestseller: true
  },

  {
    id: "ouvre-la-porte",
    nom: "Ouvre la porte !",
    ref: "Apocalypse 3:20",
    categorie: ["foi", "invitation"],
    prix: 12.90,
    image: "images/produits/ouvre_la_porte.webp",
    badge: "",
    description: "Voici, je me tiens à la porte, et je frappe. Si quelqu'un entend ma voix et ouvre la porte, j'entrerai chez lui.",
    bestseller: false
  },

  // ── ACCESSOIRES ─────────────────────────

  {
    id: "onglets-bibliques-noir",
    nom: "Onglets Bibliques Noir & Blanc + 1 marque page",
    ref: "Accessoire",
    categorie: ["accessoire"],
    prix: 6.90,
    prixBarre: 9.90,
    image: "images/produits/IMG_8108.webp",
    badge: "Promo",
    description: "Onglets bibliques noirs et blancs pour organiser votre Bible. Inclus : 1 marque page offert.",
    bestseller: false
  },

  // ── SUR MESURE ──────────────────────────

  {
    id: "ordonnance-personnalisee",
    nom: "Ordonnance personnalisée sur mesure",
    ref: "Sur mesure",
    categorie: ["perso"],
    prix: 40.00,
    image: "images/produits/ordo_perso.webp",
    badge: "",
    description: "Ton passage, ton illustration, tes couleurs, ton format, ton cadre. Une affiche créée uniquement pour toi.",
    bestseller: false,
    lien: "ordonnance.html"
  },

];

// ── IMAGE LIFESTYLE ──────────────────────
// Utilisée dans la section "Guide des formats"
const IMAGE_FORMATS = "images/produits/SIZE_OR.webp";
const IMAGE_ONGLETS_DETAIL = "images/produits/IMG_8096.webp";

// ============================================
//  COMMENT AJOUTER UN NOUVEAU PRODUIT :
//
//  1. Ajoutez votre image dans images/produits/
//  2. Copiez un bloc { id: ... } ci-dessus
//  3. Modifiez : id, nom, ref, categorie,
//     prix, image, badge, description
//  4. Sauvegardez — la boutique se met à jour
//     automatiquement !
// ============================================