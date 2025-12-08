@echo off
REM GWM-Code Landing Page Setup Script for Windows
REM This script helps you organize the redesigned landing page files

echo 🚀 Setting up GWM-Code Landing Page...
echo.

REM Create directory structure if it doesn't exist
echo 📁 Creating directory structure...
if not exist "app" mkdir app
if not exist "public" mkdir public

REM Copy files to proper Next.js structure
echo 📋 Moving files to correct locations...

if exist "page.jsx" (
    copy /Y page.jsx app\page.jsx
    echo ✅ Copied page.jsx to app\
)

if exist "layout.jsx" (
    copy /Y layout.jsx app\layout.jsx
    echo ✅ Copied layout.jsx to app\
)

if exist "globals.css" (
    copy /Y globals.css app\globals.css
    echo ✅ Copied globals.css to app\
)

if exist "tailwind.config.js" (
    copy /Y tailwind.config.js .
    echo ✅ Copied tailwind.config.js to root
)

if exist "postcss.config.js" (
    copy /Y postcss.config.js .
    echo ✅ Copied postcss.config.js to root
)

if exist "package.json" (
    copy /Y package.json .
    echo ✅ Copied package.json to root
)

echo.
echo ✨ Setup complete!
echo.
echo 📝 Next steps:
echo 1. Install dependencies: npm install
echo 2. Run dev server: npm run dev
echo 3. Review changes at: http://localhost:3000
echo.
echo 🔄 To commit to Git:
echo    git add .
echo    git commit -m "Redesigned landing page with B2B best practices"
echo    git push origin main
echo.
pause
