# Configuration EmailJS pour le Formulaire de Contact

## 📧 Étapes de Configuration

### 1. Créer un compte EmailJS

1. Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
2. Cliquez sur "Sign Up" pour créer un compte gratuit
3. Confirmez votre email

### 2. Configurer votre Service Email

1. Dans le dashboard EmailJS, allez dans **Email Services**
2. Cliquez sur **Add New Service**
3. Choisissez **Gmail** (puisque vous utilisez lyna.can20@gmail.com)
4. Connectez votre compte Gmail
5. Notez le **Service ID** (ex: `service_abc123`)

### 3. Créer un Template Email

1. Allez dans **Email Templates**
2. Cliquez sur **Create New Template**
3. Utilisez ce template :

```
Subject: Nouveau message de {{from_name}}

De: {{from_name}}
Email: {{from_email}}
Sujet: {{subject}}

Message:
{{message}}

---
Ce message a été envoyé depuis votre portfolio.
```

4. Dans les paramètres du template :
   - **To Email**: lyna.can20@gmail.com
   - Notez le **Template ID** (ex: `template_xyz789`)

### 4. Obtenir votre Public Key

1. Allez dans **Account** > **General**
2. Trouvez votre **Public Key** (ex: `abcdefghij123456`)

### 5. Mettre à jour le code

Ouvrez le fichier `src/components/Contact.js` et remplacez :

```javascript
// Ligne 42 - Remplacez YOUR_PUBLIC_KEY
emailjs.init("YOUR_PUBLIC_KEY"); // ← Mettez votre Public Key ici

// Lignes 68-69 - Remplacez YOUR_SERVICE_ID et YOUR_TEMPLATE_ID
await emailjs.send(
  'YOUR_SERVICE_ID',  // ← Mettez votre Service ID ici
  'YOUR_TEMPLATE_ID', // ← Mettez votre Template ID ici
  templateParams
);
```

### Exemple de configuration finale :

```javascript
// Ligne 42
emailjs.init("abcdefghij123456");

// Lignes 68-69
await emailjs.send(
  'service_abc123',
  'template_xyz789',
  templateParams
);
```

## 🎯 Test du Formulaire

1. Remplissez tous les champs du formulaire
2. Cliquez sur "Envoyer le message"
3. Vous devriez voir un message de succès
4. Vérifiez votre boîte mail lyna.can20@gmail.com

## 🔧 Dépannage

### Le formulaire ne s'envoie pas ?

1. Vérifiez la console du navigateur (F12) pour les erreurs
2. Assurez-vous que les 3 clés sont correctement configurées
3. Vérifiez que votre compte EmailJS est actif

### Vous ne recevez pas les emails ?

1. Vérifiez vos spams
2. Vérifiez que l'email de destination dans le template est correct
3. Testez l'envoi depuis le dashboard EmailJS

## 📊 Limite Gratuite

EmailJS offre **200 emails/mois** gratuitement, ce qui est largement suffisant pour un portfolio personnel.

## 🔒 Sécurité

Les clés EmailJS sont publiques et peuvent être exposées dans le code frontend. C'est normal et sécurisé car :
- Vous pouvez limiter les domaines autorisés dans les paramètres EmailJS
- Vous pouvez activer le CAPTCHA pour éviter le spam
- Les clés ne permettent que l'envoi d'emails, pas l'accès à votre compte

## 📝 Notes

- Les emails seront envoyés à : **lyna.can20@gmail.com**
- Le formulaire inclut : nom, email, sujet et message
- Validation automatique des champs
- Messages de succès/erreur
- Animation de chargement pendant l'envoi
