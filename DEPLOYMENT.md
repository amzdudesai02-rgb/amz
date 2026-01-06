# Deployment Guide

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Start Production Server**
   ```bash
   npm start
   ```

## Deploying to Vercel (Recommended)

### Option 1: Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow the prompts to link your project

### Option 2: Vercel Dashboard

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Configure:
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: `npm run build`
   - Output Directory: `.next`
6. Add your domain `amzdudes.io` in Project Settings > Domains
7. Deploy!

## Domain Configuration

### Main Domain (amzdudes.io)

1. In your DNS provider, add an A record or CNAME pointing to Vercel
2. In Vercel, add `amzdudes.io` and `www.amzdudes.io` as domains
3. SSL certificates are automatically provisioned

### Subdomains

Each tool subdomain should be configured separately:
- `reimbursement.amzdudes.io` → Your reimbursement tool deployment
- `crm.amzdudes.io` → Your CRM tool deployment
- `sop.amzdudes.io` → Your SOP Hub tool deployment (when ready)
- `automation.amzdudes.io` → Your automation tool deployment (when ready)

## Environment Variables

Currently, no environment variables are required. If you need to add any:

1. Create `.env.local` for local development
2. Add variables in Vercel Dashboard > Settings > Environment Variables

## Performance Optimization

The platform is already optimized with:
- Next.js automatic code splitting
- Image optimization (when using Next.js Image component)
- Static generation where possible
- Tailwind CSS purging unused styles

## Monitoring

Consider adding:
- Vercel Analytics (built-in)
- Sentry for error tracking
- Google Analytics for user tracking

## Updates

To add new tools:
1. Edit `lib/tools.ts`
2. Add your tool configuration
3. Push changes
4. Vercel will automatically redeploy

