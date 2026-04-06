# 🚀 GUIDE COMPLET - Configuration EmailJS pour votre Portfolio
## Configuration étape par étape pour recevoir les emails à lyna.can20@gmail.com

---

## 📋 ÉTAPE 1 : Créer un compte EmailJS (5 minutes)

### 1.1 Ouvrir le site EmailJS
1. Ouvrez votre navigateur (Chrome, Firefox, Edge...)
2. Allez sur : **https://www.emailjs.com/**
3. Cliquez sur le bouton **"Sign Up Free"** (en haut à droite)

### 1.2 S'inscrire
Vous avez 2 options :

**Option A : Avec Google (RECOMMANDÉ - Plus rapide)**
1. Cliquez sur **"Sign up with Google"**
2. Choisissez votre compte Gmail : **lyna.can20@gmail.com**
3. Autorisez EmailJS
4. ✅ Votre compte est créé !

**Option B : Avec email**
1. Entrez votre email : **lyna.can20@gmail.com**
2. Créez un mot de passe
3. Cliquez sur **"Sign Up"**
4. Vérifiez votre boîte mail et confirmez votre compte
5. ✅ Votre compte est créé !

---

## 📧 ÉTAPE 2 : Configurer le Service Email (Gmail)

### 2.1 Ajouter un service
1. Une fois connecté, vous verrez le **Dashboard**
2. Dans le menu de gauche, cliquez sur **"Email Services"**
3. Cliquez sur le bouton **"Add New Service"**

### 2.2 Choisir Gmail
1. Vous verrez plusieurs options (Gmail, Outlook, Yahoo, etc.)
2. Cliquez sur **"Gmail"**
3. Cliquez sur **"Connect Account"**

### 2.3 Connecter votre Gmail
1. Une fenêtre Google s'ouvre
2. Sélectionnez votre compte : **lyna.can20@gmail.com**
3. Autorisez EmailJS à envoyer des emails
4. Vous revenez sur EmailJS

### 2.4 Configurer le service
1. **Service Name** : Laissez le nom par défaut ou mettez "Portfolio Contact"
2. **Service ID** : 🔴 **IMPORTANT - NOTEZ CETTE CLÉ !**
   - Exemple : `service_abc1234`
   - **COPIEZ-LA** quelque part (Notepad, bloc-notes)
3. Cliquez sur **"Create Service"**
4. ✅ Service créé !

---

## 📝 ÉTAPE 3 : Créer le Template Email

### 3.1 Aller dans Email Templates
1. Dans le menu de gauche, cliquez sur **"Email Templates"**
2. Cliquez sur **"Create New Template"**

### 3.2 Configurer le template
Vous verrez un éditeur avec plusieurs sections :

#### A. Settings (Paramètres)
1. **Template Name** : "Portfolio Contact Form"
2. **Template ID** : 🔴 **IMPORTANT - NOTEZ CETTE CLÉ !**
   - Exemple : `template_xyz7890`
   - **COPIEZ-LA** quelque part

#### B. To Email (Destinataire)
1. Dans le champ **"To Email"**, entrez : **lyna.can20@gmail.com**
2. ✅ C'est ici que vous recevrez tous les messages !

#### C. Subject (Sujet de l'email)
Remplacez le contenu par :
```
Nouveau message de {{from_name}} - Portfolio
```

#### D. Content (Contenu de l'email)
Remplacez tout le contenu par ce texte :

```
Vous avez reçu un nouveau message depuis votre portfolio !

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 NOM : {{from_name}}

📧 EMAIL : {{from_email}}

📌 SUJET : {{subject}}

💬 MESSAGE :
{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Ce message a été envoyé depuis le formulaire de contact de votre portfolio.
Répondez directement à {{from_email}} pour contacter cette personne.

Date : {{reply_to}}
```

### 3.3 Sauvegarder
1. Cliquez sur **"Save"** (en haut à droite)
2. ✅ Template créé !

---

## 🔑 ÉTAPE 4 : Récupérer votre Public Key

### 4.1 Aller dans Account
1. Dans le menu de gauche, cliquez sur **"Account"**
2. Cliquez sur **"General"** (si ce n'est pas déjà sélectionné)

### 4.2 Copier la Public Key
1. Vous verrez une section **"API Keys"**
2. Trouvez **"Public Key"**
3. 🔴 **IMPORTANT - NOTEZ CETTE CLÉ !**
   - Exemple : `AbCdEfGhIj1234567890`
   - **COPIEZ-LA** quelque part

---

## 💻 ÉTAPE 5 : Mettre à jour votre code

### 5.1 Ouvrir le fichier Contact.js
1. Ouvrez Visual Studio Code (ou votre éditeur)
2. Ouvrez le fichier : `src/components/Contact.js`

### 5.2 Remplacer les clés

#### Modification 1 : Public Key (ligne 44)
**AVANT :**
```javascript
const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";
```

**APRÈS :** (remplacez par VOTRE clé)
```javascript
const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "AbCdEfGhIj1234567890";
```

#### Modification 2 : Service ID (ligne 72)
**AVANT :**
```javascript
process.env.REACT_APP_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
```

**APRÈS :** (remplacez par VOTRE Service ID)
```javascript
process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_abc1234',
```

#### Modification 3 : Template ID (ligne 73)
**AVANT :**
```javascript
process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
```

**APRÈS :** (remplacez par VOTRE Template ID)
```javascript
process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_xyz7890',
```

### 5.3 Sauvegarder
1. Appuyez sur **Ctrl + S** pour sauvegarder
2. ✅ Code mis à jour !

---

## 🎯 ÉTAPE 6 : Tester le formulaire

### 6.1 Ouvrir votre portfolio
1. Votre serveur devrait déjà tourner (npm start)
2. Ouvrez votre navigateur
3. Allez sur : **http://localhost:3000**

### 6.2 Tester l'envoi
1. Scrollez jusqu'à la section **"Contact"**
2. Remplissez le formulaire :
   - **Nom** : Test Portfolio
   - **Email** : test@exemple.com
   - **Sujet** : Test du formulaire
   - **Message** : Ceci est un test pour vérifier que le formulaire fonctionne !
3. Cliquez sur **"Envoyer le message"**
4. Vous devriez voir : ✅ **"Message envoyé avec succès !"**

### 6.3 Vérifier votre email
1. Ouvrez Gmail
2. Allez sur : **lyna.can20@gmail.com**
3. Vous devriez avoir reçu un email avec votre message de test !
4. ✅ **ÇA MARCHE !** 🎉

---

## 🔧 DÉPANNAGE

### ❌ Problème : "Erreur lors de l'envoi"

**Solution 1 : Vérifier les clés**
- Assurez-vous d'avoir bien copié les 3 clés (Public Key, Service ID, Template ID)
- Vérifiez qu'il n'y a pas d'espaces avant ou après les clés
- Les clés sont sensibles à la casse (majuscules/minuscules)

**Solution 2 : Vérifier la console**
1. Appuyez sur **F12** dans votre navigateur
2. Allez dans l'onglet **"Console"**
3. Essayez d'envoyer le formulaire
4. Regardez les messages d'erreur en rouge
5. Partagez-moi l'erreur si vous ne comprenez pas

**Solution 3 : Redémarrer le serveur**
1. Dans le terminal, appuyez sur **Ctrl + C**
2. Tapez : `npm start`
3. Attendez que le serveur redémarre
4. Réessayez

### ❌ Problème : "Je ne reçois pas les emails"

**Solution 1 : Vérifier les spams**
- Regardez dans votre dossier **Spam/Courrier indésirable**

**Solution 2 : Vérifier le template**
- Retournez sur EmailJS
- Vérifiez que **"To Email"** est bien : **lyna.can20@gmail.com**

**Solution 3 : Tester depuis EmailJS**
1. Allez sur EmailJS
2. Cliquez sur **"Email Templates"**
3. Cliquez sur votre template
4. Cliquez sur **"Test it"**
5. Remplissez les champs et envoyez
6. Vérifiez si vous recevez l'email de test

---

## 📊 RÉCAPITULATIF DES 3 CLÉS À COPIER

Gardez ces 3 clés précieusement :

```
┌─────────────────────────────────────────────────────┐
│ 1️⃣  PUBLIC KEY                                      │
│    Exemple : AbCdEfGhIj1234567890                   │
│    Où ? Account > General > API Keys                │
├─────────────────────────────────────────────────────┤
│ 2️⃣  SERVICE ID                                      │
│    Exemple : service_abc1234                        │
│    Où ? Email Services > Votre service              │
├─────────────────────────────────────────────────────┤
│ 3️⃣  TEMPLATE ID                                     │
│    Exemple : template_xyz7890                       │
│    Où ? Email Templates > Votre template            │
└─────────────────────────────────────────────────────┘
```

---

## ✅ CHECKLIST FINALE

Avant de tester, vérifiez que vous avez bien :

- [ ] Créé un compte EmailJS
- [ ] Connecté votre Gmail (lyna.can20@gmail.com)
- [ ] Créé un Service Email et noté le Service ID
- [ ] Créé un Template Email et noté le Template ID
- [ ] Récupéré votre Public Key
- [ ] Mis à jour les 3 clés dans Contact.js (lignes 44, 72, 73)
- [ ] Sauvegardé le fichier Contact.js
- [ ] Testé le formulaire sur http://localhost:3000

---

## 🎉 FÉLICITATIONS !

Si tout fonctionne, vous recevrez maintenant tous les messages de votre portfolio directement à **lyna.can20@gmail.com** !

**Limite gratuite :** 200 emails/mois (largement suffisant pour un portfolio)

**Besoin d'aide ?** Partagez-moi les messages d'erreur et je vous aiderai !

---

📧 Email de réception : **lyna.can20@gmail.com**
🔗 GitHub : **https://github.com/lyna111111**
