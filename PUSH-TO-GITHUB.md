# Fix Vercel build – push all files to GitHub

Vercel builds from your GitHub repo. If files are missing there, the build fails.

## Run these in your project folder (PowerShell or Git Bash)

```bash
cd c:\Users\shaik\Downloads\epstein-investigation-tracker

# See what's tracked and what's missing
git status

# Add everything (components, public, etc.)
git add .

# Commit
git commit -m "Add all files: components, public/index.css, fix Vercel build"

# Push to GitHub (use your repo URL if different)
git push origin main
```

## Files that must be in the repo

- `App.tsx`
- `index.html`, `index.tsx`
- `components/Header.tsx`
- `components/NewsCard.tsx`
- `components/AdPlaceholder.tsx`
- `services/newsService.ts`, `services/geminiService.ts`
- `public/index.css`, `public/.htaccess`
- `constants.tsx`, `types.ts`
- `package.json`, `package-lock.json`
- `vite.config.ts`, `tsconfig.json`, `vercel.json`

After pushing, Vercel will redeploy automatically and the build should succeed.
