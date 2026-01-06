# Vercel Deployment Settings

## Correct Settings for Your Project

Since your **Root Directory** is set to `frontend`, Vercel will automatically:
- Change to the `frontend/` directory
- Run commands from that directory

## Build Settings (Fill in Vercel Dashboard)

### ✅ Framework Preset
- **Value:** `Next.js` (auto-detected)

### ✅ Root Directory
- **Value:** `frontend` (already set correctly)

### ✅ Build Command
- **Value:** `npm run build`
- **Note:** Don't use `cd frontend && npm run build` since root directory is already `frontend`

### ✅ Output Directory
- **Value:** `.next`
- **Note:** Don't use `frontend/.next` since root directory is already `frontend`

### ✅ Install Command
- **Value:** `npm install`
- **Note:** Don't use `cd frontend && npm install` since root directory is already `frontend`

## Environment Variables

**Remove the example variable:**
- Delete `EXAMPLE_NAME` if you don't need it

**Add if needed (currently none required):**
- No environment variables needed for basic deployment

## Summary

When Root Directory is set to `frontend`, Vercel automatically:
1. Changes to `frontend/` directory
2. Runs all commands from there
3. Looks for `.next` in that directory

So your commands should be:
- Build: `npm run build` (not `cd frontend && npm run build`)
- Output: `.next` (not `frontend/.next`)
- Install: `npm install` (not `cd frontend && npm install`)

