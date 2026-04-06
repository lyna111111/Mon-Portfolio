@echo off
chcp 65001 >nul
color 0B
cls

echo ╔══════════════════════════════════════════════════════════════════╗
echo ║         Configuration EmailJS - Ouverture automatique           ║
echo ╚══════════════════════════════════════════════════════════════════╝
echo.

echo 🌐 Ouverture d'EmailJS dans votre navigateur...
start https://www.emailjs.com/
timeout /t 2 /nobreak >nul

echo 📖 Ouverture du guide détaillé...
start CONFIGURATION_EMAILJS_DETAILLEE.md
timeout /t 1 /nobreak >nul

echo 📝 Ouverture de l'aide-mémoire pour noter vos clés...
start MES_CLES_EMAILJS.txt
timeout /t 1 /nobreak >nul

echo.
echo ✅ Tout est ouvert !
echo.
echo 📋 PROCHAINES ÉTAPES :
echo 1. Créez un compte sur EmailJS (dans le navigateur)
echo 2. Suivez le guide détaillé étape par étape
echo 3. Notez vos 3 clés dans MES_CLES_EMAILJS.txt
echo 4. Mettez à jour src/components/Contact.js avec vos clés
echo.
echo 💡 Consultez CONFIGURATION_EMAILJS_DETAILLEE.md pour le guide complet !
echo.
echo Appuyez sur une touche pour fermer...
pause >nul
