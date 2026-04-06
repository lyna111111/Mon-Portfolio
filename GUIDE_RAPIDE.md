# 🚀 Guide Rapide - Configuration du Formulaire de Contact

## ✅ Ce qui a été fait

J'ai configuré un formulaire de contact complet avec :
- ✅ Champs : Nom, Email, Sujet, Message
- ✅ Validation des champs
- ✅ Messages de succès/erreur
- ✅ Animation de chargement
- ✅ Design moderne et responsive
- ✅ Envoi d'emails via EmailJS vers **lyna.can20@gmail.com**

## 📝 Ce que vous devez faire maintenant

### Option 1 : Configuration Rapide (Directement dans le code)

1. Créez un compte sur [EmailJS](https://www.emailjs.com/)
2. Configurez Gmail comme service email
3. Créez un template d'email
4. Ouvrez `src/components/Contact.js` et remplacez :
   - Ligne 44 : `YOUR_PUBLIC_KEY` par votre clé publique
   - Ligne 72 : `YOUR_SERVICE_ID` par votre ID de service
   - Ligne 73 : `YOUR_TEMPLATE_ID` par votre ID de template

### Option 2 : Configuration Sécurisée (Variables d'environnement)

1. Créez un fichier `.env` à la racine du projet
2. Copiez le contenu de `.env.example`
3. Remplissez avec vos vraies clés EmailJS
4. Redémarrez le serveur de développement

```bash
# Arrêtez le serveur (Ctrl+C)
npm start
```

## 📖 Documentation Complète

Consultez `EMAILJS_CONFIGURATION.md` pour un guide détaillé étape par étape avec captures d'écran.

## 🎯 Test

1. Allez sur votre portfolio
2. Scrollez jusqu'à la section Contact
3. Remplissez le formulaire
4. Cliquez sur "Envoyer le message"
5. Vérifiez votre email lyna.can20@gmail.com

## 💡 Astuce

EmailJS offre 200 emails gratuits par mois, parfait pour un portfolio !

## ❓ Besoin d'aide ?

Si vous rencontrez des problèmes :
1. Vérifiez la console du navigateur (F12)
2. Assurez-vous que toutes les clés sont correctes
3. Vérifiez que votre compte EmailJS est actif
