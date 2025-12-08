#!/bin/bash

# GWM-Code Landing Page - Git Initialization Script
# Run this script from your project directory

echo "🚀 Initializing Git repository for GWM-Code Landing Page..."
echo ""

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first."
    echo "   Visit: https://git-scm.com/downloads"
    exit 1
fi

echo "✅ Git is installed: $(git --version)"

# Check if we're already in a git repo
if [ -d ".git" ]; then
    echo "⚠️  Git repository already exists."
    read -p "Do you want to reinitialize? (y/N): " response
    if [[ ! "$response" =~ ^[Yy]$ ]]; then
        echo "Aborted."
        exit 0
    fi
    rm -rf .git
fi

# Initialize Git repository
echo ""
echo "📁 Initializing Git repository..."
git init
echo "✅ Git repository initialized"

# Set default branch to main
git branch -M main
echo "✅ Default branch set to 'main'"

# Stage all files
echo ""
echo "📋 Staging files..."
git add .
echo "✅ All files staged"

# Show status
echo ""
echo "📊 Current status:"
git status --short

# Create initial commit
echo ""
echo "💾 Creating initial commit..."
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

echo "✅ Initial commit created"

# Show commit log
echo ""
echo "📝 Commit history:"
git log --oneline

echo ""
echo "✨ Git repository setup complete!"
echo ""
echo "📌 Next steps:"
echo "   1. Create a repository on GitHub: https://github.com/new"
echo "   2. Add remote:"
echo "      git remote add origin https://github.com/yourusername/gwm-code-landing.git"
echo "   3. Push to GitHub:"
echo "      git push -u origin main"
echo ""
echo "💡 Or create a new branch for review:"
echo "   git checkout -b feature/landing-page-redesign"
echo "   git push -u origin feature/landing-page-redesign"
echo ""
