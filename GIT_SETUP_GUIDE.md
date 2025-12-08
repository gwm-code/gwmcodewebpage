# Git Setup Guide for GWM-Code Landing Page

## Quick Start (Windows PowerShell)

Once you have all files downloaded:

```powershell
# Navigate to your project
cd "D:\gwmcode webpage"

# Run the Git initialization script
.\git-init.ps1

# If you get an error about execution policy, run this first:
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```

## Manual Git Setup (Step by Step)

If you prefer to do it manually or the script doesn't work:

### 1. Initialize Git Repository

```powershell
cd "D:\gwmcode webpage"

# Initialize Git
git init

# Set default branch to main
git branch -M main
```

### 2. Add .gitignore

Make sure `.gitignore` file is in your project root (already created for you).

### 3. Stage All Files

```powershell
# Add all files
git add .

# Check what will be committed
git status
```

### 4. Create Initial Commit

```powershell
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
```

## Connecting to GitHub

### Option 1: Create New Repository on GitHub

1. Go to https://github.com/new
2. Create a new repository called `gwm-code-landing`
3. **Don't** initialize with README, .gitignore, or license
4. Click "Create repository"

Then run these commands:

```powershell
# Add GitHub as remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/gwm-code-landing.git

# Push to GitHub
git push -u origin main
```

### Option 2: Use Existing Repository

If you already have a repo:

```powershell
# Add remote (replace with your actual repo URL)
git remote add origin https://github.com/YOUR_USERNAME/your-repo-name.git

# Push to GitHub
git push -u origin main
```

## Creating a Feature Branch (Recommended)

If you want to review changes before merging to main:

```powershell
# Create and switch to new branch
git checkout -b feature/landing-page-redesign

# Push branch to GitHub
git push -u origin feature/landing-page-redesign
```

Then create a Pull Request on GitHub to review the changes.

## Common Git Commands

```powershell
# Check status
git status

# See what changed
git diff

# View commit history
git log --oneline

# Add specific files
git add app/page.jsx

# Commit with message
git commit -m "your message here"

# Push changes
git push

# Pull latest changes
git pull

# Create new branch
git checkout -b branch-name

# Switch branches
git checkout main

# See all branches
git branch -a
```

## File Structure Check

Before committing, verify your structure:

```
D:\gwmcode webpage\
├── .git/                    (created by git init)
├── .gitignore              ✅ Must have this
├── .gitattributes          ✅ Optional but recommended
├── app/
│   ├── page.jsx           ✅
│   ├── layout.jsx         ✅
│   └── globals.css        ✅
├── node_modules/           ❌ (excluded by .gitignore)
├── package.json           ✅
├── package-lock.json      ✅ (created after npm install)
├── tailwind.config.js     ✅
├── postcss.config.js      ✅
├── README.md              ✅
├── DESIGN_NOTES.md        ✅ (optional)
└── LAYOUT_GUIDE.md        ✅ (optional)
```

## Troubleshooting

### PowerShell Execution Policy Error

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```

### Git Not Found

Install Git: https://git-scm.com/download/win

### Authentication Issues with GitHub

Use Personal Access Token instead of password:
1. Go to GitHub Settings → Developer settings → Personal access tokens
2. Generate new token (classic)
3. Select `repo` scope
4. Use token as password when pushing

Or set up SSH keys: https://docs.github.com/en/authentication/connecting-to-github-with-ssh

### Line Ending Issues

The `.gitattributes` file handles this automatically.

## Next Steps After Push

1. ✅ Verify files on GitHub
2. ✅ Set up GitHub Pages (if using)
3. ✅ Configure deployment (Vercel/Netlify)
4. ✅ Add collaborators if needed
5. ✅ Set up branch protection rules

## Deployment to Vercel (Recommended for Next.js)

```powershell
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel
```

Or use the Vercel GitHub integration:
1. Go to https://vercel.com
2. Click "Import Project"
3. Connect your GitHub repository
4. Deploy automatically on every push

---

**Need Help?** Let me know if you run into any issues!
