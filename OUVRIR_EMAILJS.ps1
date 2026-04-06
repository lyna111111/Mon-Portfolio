# Script PowerShell pour ouvrir EmailJS et les guides
# Double-cliquez sur ce fichier pour l'exécuter

Write-Host "╔══════════════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║         Configuration EmailJS - Ouverture automatique           ║" -ForegroundColor Cyan
Write-Host "╚══════════════════════════════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""

# Ouvrir EmailJS dans le navigateur
Write-Host "🌐 Ouverture d'EmailJS dans votre navigateur..." -ForegroundColor Green
Start-Process "https://www.emailjs.com/"
Start-Sleep -Seconds 2

# Ouvrir le guide détaillé
Write-Host "📖 Ouverture du guide détaillé..." -ForegroundColor Green
Start-Process "CONFIGURATION_EMAILJS_DETAILLEE.md"
Start-Sleep -Seconds 1

# Ouvrir l'aide-mémoire pour noter les clés
Write-Host "📝 Ouverture de l'aide-mémoire pour noter vos clés..." -ForegroundColor Green
Start-Process "MES_CLES_EMAILJS.txt"
Start-Sleep -Seconds 1

Write-Host ""
Write-Host "✅ Tout est ouvert !" -ForegroundColor Green
Write-Host ""
Write-Host "📋 PROCHAINES ÉTAPES :" -ForegroundColor Yellow
Write-Host "1. Créez un compte sur EmailJS (dans le navigateur)" -ForegroundColor White
Write-Host "2. Suivez le guide détaillé étape par étape" -ForegroundColor White
Write-Host "3. Notez vos 3 clés dans MES_CLES_EMAILJS.txt" -ForegroundColor White
Write-Host "4. Mettez à jour src/components/Contact.js avec vos clés" -ForegroundColor White
Write-Host ""
Write-Host "💡 Consultez CONFIGURATION_EMAILJS_DETAILLEE.md pour le guide complet !" -ForegroundColor Cyan
Write-Host ""
Write-Host "Appuyez sur une touche pour fermer..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
