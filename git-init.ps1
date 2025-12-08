# GWM-Code Landing Page - Git Initialization Script
# Run this script in PowerShell from your project directory

Write-Host "🚀 Initializing Git repository for GWM-Code Landing Page..." -ForegroundColor Cyan
Write-Host ""

# Check if git is installed
try {
    $gitVersion = git --version
    Write-Host "✅ Git is installed: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Git is not installed. Please install Git first:" -ForegroundColor Red
    Write-Host "   https://git-scm.com/download/win" -ForegroundColor Yellow
    exit 1
}

# Check if we're already in a git repo
if (Test-Path ".git") {
    Write-Host "⚠️  Git repository already exists." -ForegroundColor Yellow
    $response = Read-Host "Do you want to reinitialize? (y/N)"
    if ($response -ne "y" -and $response -ne "Y") {
        Write-Host "Aborted." -ForegroundColor Yellow
        exit 0
    }
    Remove-Item -Recurse -Force ".git"
}

# Initialize Git repository
Write-Host ""
Write-Host "📁 Initializing Git repository..." -ForegroundColor Cyan
git init
Write-Host "✅ Git repository initialized" -ForegroundColor Green

# Set default branch to main
git branch -M main
Write-Host "✅ Default branch set to 'main'" -ForegroundColor Green

# Stage all files
Write-Host ""
Write-Host "📋 Staging files..." -ForegroundColor Cyan
git add .
Write-Host "✅ All files staged" -ForegroundColor Green

# Show status
Write-Host ""
Write-Host "📊 Current status:" -ForegroundColor Cyan
git status --short

# Create initial commit
Write-Host ""
Write-Host "💾 Creating initial commit..." -ForegroundColor Cyan
git commit -m "feat: Professional B2B landing page for GWM-Code

Complete redesign based on B2B SaaS best practices.

Key Features:
- Professional light theme with blue accents
- Lead capture form above the fold
- Trust signals (stats, case studies, testimonials)
- Outcome-focused copy with specific metrics
- 4-step transparent process
- Responsive design (mobile-first)

Tech Stack: Next.js 14, Tailwind CSS, Framer Motion, Lucide React

Expected Results: 7-15% conversion rate, 60%+ form completion"

Write-Host "✅ Initial commit created" -ForegroundColor Green

# Show commit log
Write-Host ""
Write-Host "📝 Commit history:" -ForegroundColor Cyan
git log --oneline

Write-Host ""
Write-Host "✨ Git repository setup complete!" -ForegroundColor Green
Write-Host ""
Write-Host "📌 Next steps:" -ForegroundColor Cyan
Write-Host "   1. Create a repository on GitHub: https://github.com/new" -ForegroundColor White
Write-Host "   2. Add remote:" -ForegroundColor White
Write-Host "      git remote add origin https://github.com/yourusername/gwm-code-landing.git" -ForegroundColor Gray
Write-Host "   3. Push to GitHub:" -ForegroundColor White
Write-Host "      git push -u origin main" -ForegroundColor Gray
Write-Host ""
Write-Host "💡 Or create a new branch for review:" -ForegroundColor Yellow
Write-Host "   git checkout -b feature/landing-page-redesign" -ForegroundColor Gray
Write-Host "   git push -u origin feature/landing-page-redesign" -ForegroundColor Gray
Write-Host ""
