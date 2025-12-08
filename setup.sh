#!/bin/bash

# GWM-Code Landing Page Setup Script
# This script helps you organize the redesigned landing page files

echo "🚀 Setting up GWM-Code Landing Page..."

# Create directory structure if it doesn't exist
echo "📁 Creating directory structure..."
mkdir -p app
mkdir -p public

# Copy files to proper Next.js structure
echo "📋 Moving files to correct locations..."

# Move page and layout to app directory
if [ -f "page.jsx" ]; then
    cp page.jsx app/page.jsx
    echo "✅ Copied page.jsx to app/"
fi

if [ -f "layout.jsx" ]; then
    cp layout.jsx app/layout.jsx
    echo "✅ Copied layout.jsx to app/"
fi

if [ -f "globals.css" ]; then
    cp globals.css app/globals.css
    echo "✅ Copied globals.css to app/"
fi

# Copy config files to root
if [ -f "tailwind.config.js" ]; then
    cp tailwind.config.js .
    echo "✅ Copied tailwind.config.js to root"
fi

if [ -f "postcss.config.js" ]; then
    cp postcss.config.js .
    echo "✅ Copied postcss.config.js to root"
fi

if [ -f "package.json" ]; then
    cp package.json .
    echo "✅ Copied package.json to root"
fi

echo ""
echo "✨ Setup complete!"
echo ""
echo "📝 Next steps:"
echo "1. Install dependencies: npm install"
echo "2. Run dev server: npm run dev"
echo "3. Review changes at: http://localhost:3000"
echo ""
echo "🔄 To commit to Git:"
echo "   git add ."
echo "   git commit -m 'Redesigned landing page with B2B best practices'"
echo "   git push origin main"
echo ""
