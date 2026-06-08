# 📘 Guide d'utilisation — Page admin Ordonnance Royale

Bienvenue dans votre espace d'administration ! Ce guide vous explique tout ce que vous pouvez faire avec la page `admin.html`.

---

## 🚀 Démarrage rapide

### 1. Comment ouvrir la page admin

1. Trouvez le fichier `admin.html` sur votre ordinateur
2. **Double-cliquez dessus** : ça ouvre la page dans votre navigateur (Chrome, Firefox, Safari, Edge…)
3. ✅ C'est tout !

⚠️ **IMPORTANT** : Cette page reste **sur votre ordinateur**, elle n'est **pas en ligne**. Personne d'autre ne peut y accéder.

---

## 🛍 Gérer vos affiches

### Ajouter une nouvelle affiche

1. Cliquez sur **« + Nouvelle affiche »** ou sur la carte **« + Ajouter une affiche »**
2. **Image** : cliquez sur la zone, choisissez votre fichier image (JPG ou PNG)
   - L'image sera automatiquement redimensionnée et optimisée
3. **Titre** : nom de l'affiche (ex : « Joshua — Vaillant Héros »)
4. **Référence biblique** : le verset court (ex : « Sois fort et courageux » Josué 1 : 5)
5. **Thème** : choisissez parmi Foi, Amour, Femme de Valeur, Force, Sagesse, Espérance
6. **Prix de base** : prix du format A4 (ex : 29.90)
7. **Verset complet** (optionnel mais recommandé) :
   - **Titre** : ex « Josué 1 : 5 »
   - **Texte** : le verset complet
   - **Contexte** : un petit texte explicatif
8. Cliquez sur **« Sauvegarder »**

### Modifier une affiche existante

1. Sur la carte de l'affiche, cliquez sur **« ✏️ Modifier »**
2. Changez ce que vous voulez
3. Cliquez sur **« Sauvegarder »**

### Supprimer une affiche

1. Sur la carte de l'affiche, cliquez sur **« 🗑 »**
2. Confirmez la suppression
3. ⚠️ Cette action est **irréversible** ! Pensez à faire une sauvegarde avant.

### Rechercher une affiche

Utilisez la barre de recherche en haut. Elle cherche dans :
- Le titre
- Le verset
- Le thème

---

## 📤 Mettre les modifications en ligne

Quand vous avez fini d'ajouter/modifier des affiches, **publiez-les sur votre site** :

### Étape 1 : Exporter les fichiers

1. Cliquez sur **« ⬇ Exporter le site »** (en haut à droite)
2. Lisez les instructions dans la fenêtre
3. Cliquez sur **« ⬇ Télécharger les 3 fichiers »**
4. Votre navigateur téléchargera **3 fichiers** :
   - `index.html`
   - `boutique.html`
   - `produit.html`

### Étape 2 : Uploader sur Hostinger

1. Connectez-vous sur https://hpanel.hostinger.com
2. Allez dans **« Fichiers »** → **« File Manager »** ou **« Gestionnaire de fichiers »**
3. Naviguez vers le dossier **`public_html/`**
4. **Glissez-déposez** vos 3 fichiers téléchargés dans la fenêtre
5. Lorsque Hostinger demande **« Écraser ? »**, cliquez sur **« Oui »** ou **« Remplacer »**
6. ✅ **C'est fait !** Vos modifications sont **immédiatement** visibles sur ordonnanceroyale.com

⏱️ **Temps total** : 5 minutes maximum

---

## 💾 Sauvegarder vos données

⚠️ **TRÈS IMPORTANT** : Faites des **sauvegardes régulières** ! Si vous changez de navigateur ou videz l'historique, vous pourriez perdre vos données.

### Comment sauvegarder

1. Cliquez sur **« 💾 Sauvegarder »** (en haut à droite)
2. Cliquez sur **« ⬇ Télécharger une sauvegarde »**
3. Un fichier JSON est téléchargé (gardez-le précieusement, par exemple sur un cloud Google Drive / Dropbox / iCloud)

### Quand sauvegarder

- ✅ **Toujours** après avoir ajouté plusieurs affiches
- ✅ **Avant** de supprimer une affiche
- ✅ **Avant** de changer d'ordinateur ou de navigateur
- ✅ **Au moins une fois par mois** pour rester safe

### Restaurer une sauvegarde

1. Cliquez sur **« 💾 Sauvegarder »**
2. Sous **« Restaurer depuis une sauvegarde »**, cliquez sur **« Choisir un fichier »**
3. Sélectionnez votre fichier `.json` de sauvegarde
4. Confirmez la restauration

⚠️ **Attention** : Restaurer **remplace** toutes vos affiches actuelles par celles de la sauvegarde.

---

## 💡 Astuces

### Préparer vos images avant l'upload

Pour les meilleurs résultats :
- ✅ Utilisez des images **PNG ou JPG**
- ✅ **Sans fond noir** autour (sinon il apparaîtra dans la card)
- ✅ Ratio **3:4** (portrait) idéalement
- ✅ Min 600px de large

### Bien rédiger les versets

- **Référence courte** (sur la card) : 1-2 lignes max, ex « Sois fort et courageux » Josué 1 : 5
- **Verset complet** (sur la fiche produit) : peut être plus long, gardez l'orthographe biblique
- **Contexte** : 1-2 phrases qui donnent du sens au verset

### Utiliser un seul ordinateur

Vos données sont stockées dans **votre navigateur sur votre ordinateur**. Si vous changez d'appareil :
1. **Sauvegardez** sur l'ancien (bouton 💾)
2. **Restaurez** sur le nouveau

---

## 🆘 Problèmes courants

### « Mes affiches ont disparu après avoir vidé l'historique »

➡️ Restaurez votre dernière sauvegarde (bouton 💾 puis « Choisir un fichier »)

### « L'export ne marche pas »

➡️ Vérifiez que vous avez au moins **1 affiche** avec image avant d'exporter
➡️ Autorisez les **téléchargements multiples** dans votre navigateur si demandé

### « Mon image est trop grande »

➡️ Limite : **10 MB par image**
➡️ Utilisez un outil comme https://tinypng.com pour la compresser avant

### « Les modifications ne s'affichent pas sur le site »

➡️ Avez-vous bien uploadé les **3 fichiers** sur Hostinger ?
➡️ Avez-vous **vidé le cache** du navigateur ? (Ctrl+F5 ou Cmd+Shift+R)

### « J'ai supprimé une affiche par erreur »

➡️ Si vous avez une **sauvegarde récente**, restaurez-la
➡️ Sinon, recréez l'affiche manuellement

---

## 📞 Besoin d'aide ?

Si vous bloquez sur quelque chose :
1. Faites une sauvegarde immédiatement (bouton 💾)
2. Notez précisément ce qui ne marche pas
3. Faites une capture d'écran si possible

---

## ✨ Pour aller plus loin

### Ce que la page admin **NE PEUT PAS** faire

Pour ces choses, vous aurez besoin de demander à un développeur :

- ❌ Modifier le **design** du site (couleurs, polices)
- ❌ Ajouter de **nouvelles pages**
- ❌ Modifier les **prix de livraison**
- ❌ Modifier les **codes promo**
- ❌ Changer les **textes** des autres pages (À propos, Contact, etc.)

### Limites techniques

- Maximum recommandé : **50 affiches** (au-delà, ça peut ralentir)
- Les images sont stockées en base64 → chaque affiche pèse environ **150 KB**
- Les fichiers HTML générés peuvent peser plusieurs MB (c'est normal)

---

🙏 Bonne gestion de votre boutique **Ordonnance Royale** !
