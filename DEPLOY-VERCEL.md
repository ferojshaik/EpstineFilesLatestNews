# Deploy to Vercel + Connect Hostinger Domain

## Part 1: Deploy to Vercel

### Option A – Deploy with GitHub (recommended)

1. **Push your project to GitHub** (if not already):
   - Create a repo at [github.com/new](https://github.com/new).
   - In your project folder run:
     ```bash
     git init
     git add .
     git commit -m "Initial commit"
     git branch -M main
     git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
     git push -u origin main
     ```

2. **Sign in to Vercel**
   - Go to [vercel.com](https://vercel.com) and sign up / log in (use **Continue with GitHub**).

3. **Import the project**
   - Click **Add New…** → **Project**.
   - Under **Import Git Repository**, select your repo (e.g. `epstein-investigation-tracker`).
   - Vercel will detect Vite. Leave **Build Command** as `npm run build` and **Output Directory** as `dist`.
   - Click **Deploy**.

4. **Wait for the build** (1–2 minutes). You’ll get a URL like `epstein-investigation-tracker.vercel.app`.

---

### Option B – Deploy with Vercel CLI (no GitHub)

1. **Install Vercel CLI** (one time):
   ```bash
   npm install -g vercel
   ```

2. **Deploy from your project folder**:
   ```bash
   cd c:\Users\shaik\Downloads\epstein-investigation-tracker
   vercel
   ```
   - Log in when prompted.
   - Accept defaults (link to existing project or create new one).
   - When asked “Set up and deploy?”, choose **Y**.
   - You’ll get a URL like `epstein-investigation-tracker-xxx.vercel.app`.

---

## Part 2: Connect Your Hostinger Domain

1. **In Vercel**
   - Open your project → **Settings** → **Domains**.
   - Under **Add**, enter your domain (e.g. `yourdomain.com`) and click **Add**.
   - Also add `www.yourdomain.com` if you want `www` to work.
   - Vercel will show which DNS records to add.

2. **In Hostinger**
   - Log in to [hostinger.com](https://www.hostinger.com) → **hPanel**.
   - Go to **Domains** → your domain → **DNS / Nameservers** or **Manage DNS**.
   - Add the records Vercel shows, for example:

   | Type  | Name | Value / Target        |
   |-------|------|----------------------|
   | A     | @    | `76.76.21.21`        |
   | CNAME | www  | `cname.vercel-dns.com` |

   (Use the exact values Vercel shows for your project.)

3. **Wait for DNS**
   - Save in Hostinger. It can take 5–60 minutes (sometimes up to 48 hours).
   - Vercel will issue an SSL certificate automatically; your site will be available at `https://yourdomain.com`.

---

## Updates

- **If you used GitHub:** Push changes to your repo; Vercel will redeploy automatically.
- **If you used CLI:** Run `vercel --prod` in your project folder to deploy again.
