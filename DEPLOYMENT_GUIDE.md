# Complete Deployment Guide

## 🚀 Quick Deploy to Vercel

### Step 1: Prepare Your Repository

1. **Initialize Git (if not already done):**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: AMZDudes Platform"
   ```

2. **Push to GitHub:**
   ```bash
   git remote add origin <your-github-repo-url>
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy to Vercel

#### Option A: Vercel Dashboard (Easiest)

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"New Project"**
3. Import your GitHub repository
4. Vercel will auto-detect:
   - Framework: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
5. Click **"Deploy"**
6. Wait for deployment (usually 2-3 minutes)

#### Option B: Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **Follow prompts:**
   - Set up and deploy? **Yes**
   - Which scope? **Your account**
   - Link to existing project? **No**
   - Project name? **amzdudes-platform** (or your choice)
   - Directory? **./**
   - Override settings? **No**

5. **Deploy to production:**
   ```bash
   vercel --prod
   ```

### Step 3: Configure Domain

1. **In Vercel Dashboard:**
   - Go to your project
   - Click **Settings** → **Domains**
   - Add `amzdudes.io`
   - Add `www.amzdudes.io` (optional)

2. **In Your DNS Provider:**
   - Add CNAME record:
     - Name: `@` or `amzdudes.io`
     - Value: `cname.vercel-dns.com`
   - Or add A record (if CNAME not supported):
     - Use IP addresses provided by Vercel

3. **Wait for SSL:**
   - Vercel automatically provisions SSL certificates
   - Usually takes 1-24 hours

## 🔧 Environment Setup

### Local Development

1. **Frontend:**
   ```bash
   npm install
   npm run dev
   ```
   Visit: http://localhost:3000

2. **Backend (Optional - for testing Python API):**
   ```bash
   pip install -r requirements.txt
   uvicorn api.tools:app --reload --port 8000
   ```
   Visit: http://localhost:8000/docs

### Production Environment Variables

Currently, no environment variables are required. If you add any:

1. **In Vercel Dashboard:**
   - Settings → Environment Variables
   - Add variables for Production, Preview, and Development

2. **Common variables you might add:**
   ```
   NEXT_PUBLIC_API_URL=https://api.amzdudes.io
   DATABASE_URL=postgresql://...
   API_KEY=your-secret-key
   ```

## 📦 Build & Test Locally

### Build for Production

```bash
npm run build
npm start
```

This will:
1. Build the Next.js application
2. Optimize assets
3. Start production server on port 3000

### Test Production Build

```bash
npm run build
npm start
```

Visit http://localhost:3000 to test production build locally.

## 🌐 Subdomain Configuration

Each tool subdomain needs separate deployment:

### Reimbursement Tool
- Subdomain: `reimbursement.amzdudes.io`
- Deploy your reimbursement tool separately
- Point DNS to its deployment URL

### CRM Tool
- Subdomain: `crm.amzdudes.io`
- Deploy your CRM tool separately
- Point DNS to its deployment URL

### SOP Hub (Coming Soon)
- Subdomain: `sop.amzdudes.io`
- Deploy when ready
- Point DNS to its deployment URL

### Automation Tool (Coming Soon)
- Subdomain: `automation.amzdudes.io`
- Deploy when ready
- Point DNS to its deployment URL

## 🔄 Updating the Platform

### Adding New Tools

1. **Edit `lib/tools.ts`:**
   ```typescript
   {
     id: 'new-tool',
     name: 'New Tool Name',
     description: 'Description',
     subdomain: 'newtool.amzdudes.io',
     status: 'active',
     features: ['Feature 1', 'Feature 2'],
     icon: 'IconName',
     color: 'bg-color-500',
   }
   ```

2. **Also update `api/tools.py`** (if using Python backend):
   Add the same tool to `TOOLS_DATA` array

3. **Commit and push:**
   ```bash
   git add .
   git commit -m "Add new tool"
   git push
   ```

4. **Vercel auto-deploys** (if connected to GitHub)

### Updating Design

1. Modify components in `components/`
2. Update styles in `app/globals.css`
3. Change colors in `tailwind.config.ts`
4. Commit and push - Vercel auto-deploys

## 🐛 Troubleshooting

### Build Fails

1. **Check Node.js version:**
   ```bash
   node --version  # Should be 18+
   ```

2. **Clear cache and reinstall:**
   ```bash
   rm -rf node_modules .next
   npm install
   npm run build
   ```

3. **Check for TypeScript errors:**
   ```bash
   npm run lint
   ```

### Domain Not Working

1. **Check DNS propagation:**
   - Use [whatsmydns.net](https://www.whatsmydns.net)
   - Verify CNAME/A records are correct

2. **Check Vercel domain settings:**
   - Ensure domain is added in Vercel
   - Wait for SSL certificate (can take up to 24 hours)

3. **Clear browser cache:**
   - Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

### API Not Working

1. **Check API routes:**
   - Visit `/api/tools` directly
   - Should return JSON response

2. **Check browser console:**
   - Look for CORS errors
   - Check network tab for failed requests

3. **Verify API endpoints:**
   - Test with curl or Postman
   - Check API route files in `app/api/`

## 📊 Monitoring & Analytics

### Vercel Analytics (Built-in)

1. **Enable in Vercel Dashboard:**
   - Settings → Analytics
   - Enable Web Analytics

### Custom Analytics

Add Google Analytics or other services:
1. Add script to `app/layout.tsx`
2. Or use Next.js Analytics component

## 🔒 Security Checklist

- [ ] SSL certificate enabled (automatic with Vercel)
- [ ] Environment variables set securely
- [ ] API endpoints protected (if needed)
- [ ] CORS configured properly
- [ ] Rate limiting added (if needed)
- [ ] Input validation on forms (if added)

## 📈 Performance Optimization

The platform is already optimized with:
- ✅ Next.js automatic code splitting
- ✅ Image optimization (when using Next.js Image)
- ✅ Static generation where possible
- ✅ Tailwind CSS purging unused styles
- ✅ Font optimization (Inter font)

### Further Optimizations

1. **Add Image Optimization:**
   - Use Next.js `Image` component
   - Optimize images before upload

2. **Enable Caching:**
   - API routes use `revalidate` for caching
   - Static pages are cached automatically

3. **Monitor Performance:**
   - Use Vercel Analytics
   - Check Lighthouse scores

## 🎯 Next Steps

After deployment:

1. ✅ Test all tool links
2. ✅ Verify domain is working
3. ✅ Check mobile responsiveness
4. ✅ Test API endpoints
5. ✅ Set up monitoring
6. ✅ Configure backups (if using database)
7. ✅ Set up CI/CD (already done with Vercel)

## 📞 Support

For deployment issues:
- Check Vercel documentation: https://vercel.com/docs
- Check Next.js documentation: https://nextjs.org/docs
- Review error logs in Vercel Dashboard

