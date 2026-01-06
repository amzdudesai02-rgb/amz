# Vercel Deployment Guide

Complete guide to deploy your AMZDudes frontend to Vercel.

## 🚀 Quick Deploy (Recommended)

### Method 1: Vercel Dashboard (Easiest)

1. **Go to Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Sign in with GitHub (recommended)

2. **Import Project:**
   - Click **"Add New..."** → **"Project"**
   - Click **"Import Git Repository"**
   - Select your repository: `amzdudesai02-rgb/amz`
   - Click **"Import"**

3. **Configure Project:**
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** `frontend` ⚠️ **IMPORTANT**
   - **Build Command:** `npm run build` (default)
   - **Output Directory:** `.next` (default)
   - **Install Command:** `npm install` (default)

4. **Environment Variables (if needed):**
   - Add any environment variables here
   - Currently none required

5. **Deploy:**
   - Click **"Deploy"**
   - Wait 2-3 minutes for deployment

6. **Configure Domain:**
   - After deployment, go to **Settings** → **Domains**
   - Add `amzdudes.io`
   - Add `www.amzdudes.io` (optional)
   - Update DNS records as instructed

### Method 2: Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login:**
   ```bash
   vercel login
   ```

3. **Navigate to frontend:**
   ```bash
   cd frontend
   ```

4. **Deploy:**
   ```bash
   vercel
   ```
   
   Follow the prompts:
   - Set up and deploy? **Yes**
   - Which scope? **Your account**
   - Link to existing project? **No** (first time)
   - Project name? **amzdudes-platform** (or your choice)
   - Directory? **./** (current directory)
   - Override settings? **No**

5. **Deploy to Production:**
   ```bash
   vercel --prod
   ```

## ⚙️ Configuration

### Root Directory Setup

Since your frontend is in the `frontend/` folder, you need to configure Vercel:

**Option 1: In Vercel Dashboard**
- Set **Root Directory** to `frontend` during import

**Option 2: Using vercel.json (Already configured)**

The `vercel.json` in the root is configured, but you may need to update it:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "frontend/package.json",
      "use": "@vercel/next"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/$1"
    }
  ]
}
```

### Project Settings in Vercel Dashboard

After first deployment, update settings:

1. Go to **Project Settings** → **General**
2. Set **Root Directory** to `frontend`
3. **Build Command:** `npm run build`
4. **Output Directory:** `.next`
5. **Install Command:** `npm install`

## 🌐 Domain Configuration

### Step 1: Add Domain in Vercel

1. Go to **Project Settings** → **Domains**
2. Add your domain: `amzdudes.io`
3. Add `www.amzdudes.io` (optional)
4. Copy the DNS records shown

### Step 2: Update DNS Records

In your domain registrar (where you bought amzdudes.io):

**Option A: CNAME (Recommended)**
- Type: `CNAME`
- Name: `@` or `amzdudes.io`
- Value: `cname.vercel-dns.com`

**Option B: A Records**
- Use the IP addresses provided by Vercel
- Usually 4 A records pointing to Vercel IPs

**For www subdomain:**
- Type: `CNAME`
- Name: `www`
- Value: `cname.vercel-dns.com`

### Step 3: Wait for SSL

- Vercel automatically provisions SSL certificates
- Usually takes 1-24 hours
- You'll see "Valid" status when ready

## 🔄 Automatic Deployments

### GitHub Integration (Already Set Up)

Once connected:
- **Push to `main`** → Auto-deploys to production
- **Push to other branches** → Creates preview deployments
- **Pull Requests** → Creates preview deployments

### Manual Deployments

1. **Via Dashboard:**
   - Go to **Deployments** tab
   - Click **"Redeploy"** on any deployment

2. **Via CLI:**
   ```bash
   cd frontend
   vercel --prod
   ```

## 📊 Monitoring & Analytics

### View Deployments

- **Dashboard:** See all deployments
- **Logs:** Click any deployment to see build logs
- **Analytics:** Enable in Project Settings → Analytics

### Enable Analytics

1. Go to **Project Settings** → **Analytics**
2. Enable **Web Analytics**
3. View metrics in **Analytics** tab

## 🐛 Troubleshooting

### Build Fails

**Error: Cannot find module**
- Check `package.json` has all dependencies
- Verify `node_modules` is not committed (it's in .gitignore)

**Error: Build command failed**
- Check build logs in Vercel dashboard
- Verify Node.js version (should be 18+)
- Check for TypeScript errors locally first

**Error: Root directory not found**
- Verify Root Directory is set to `frontend`
- Check that `frontend/package.json` exists

### Domain Not Working

**DNS not propagating:**
- Wait 24-48 hours for DNS propagation
- Check with [whatsmydns.net](https://www.whatsmydns.net)
- Verify DNS records are correct

**SSL certificate pending:**
- Wait up to 24 hours
- Check domain status in Vercel dashboard
- Ensure DNS is correctly configured

### Environment Variables

If you need to add environment variables:

1. Go to **Project Settings** → **Environment Variables**
2. Add variables for:
   - **Production**
   - **Preview**
   - **Development**
3. Redeploy after adding variables

## ✅ Post-Deployment Checklist

- [ ] Frontend deployed successfully
- [ ] Domain configured (`amzdudes.io`)
- [ ] SSL certificate active
- [ ] Site loads correctly
- [ ] All routes working
- [ ] API routes working (`/api/tools`, `/api/stats`)
- [ ] Analytics enabled (optional)
- [ ] GitHub integration working (auto-deploy on push)

## 🔗 Useful Links

- [Vercel Dashboard](https://vercel.com/dashboard)
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js on Vercel](https://vercel.com/docs/frameworks/nextjs)
- [Domain Configuration](https://vercel.com/docs/concepts/projects/domains)

## 📝 Notes

- Vercel automatically detects Next.js
- Builds are cached for faster deployments
- Preview deployments are created for every branch/PR
- Production deployments only happen on `main` branch
- Free tier includes 100GB bandwidth/month

