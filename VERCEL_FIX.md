# Fix for Vercel Error

## Error Message
"Invalid request: should NOT have additional property 'rootDirectory'"

## Solution

The `rootDirectory` property should **NOT** be in `vercel.json`. It should be set in the Vercel Dashboard UI instead.

## Steps to Fix

### 1. In Vercel Dashboard (Current Page)

**Set Root Directory in the UI:**
- Keep the **Root Directory** field as: `frontend`
- This is set in the form, NOT in vercel.json

**Update Build Settings:**
- **Build Command:** `npm run build` (remove `cd frontend &&`)
- **Output Directory:** `.next` (remove `frontend/`)
- **Install Command:** `npm install` (remove `cd frontend &&`)

**Remove Environment Variable:**
- Delete the `EXAMPLE_NAME` variable (click the minus icon)

### 2. The vercel.json file is now fixed

The file has been updated to remove `rootDirectory`. Vercel will:
- Auto-detect Next.js framework
- Use the Root Directory you set in the UI (`frontend`)
- Run commands from the `frontend/` directory automatically

## Correct Settings Summary

**In Vercel Dashboard:**
- ✅ Root Directory: `frontend` (set in UI)
- ✅ Build Command: `npm run build`
- ✅ Output Directory: `.next`
- ✅ Install Command: `npm install`
- ✅ Framework: Next.js (auto-detected)

**In vercel.json:**
- ✅ Just `{ "version": 2 }` (minimal config)

## Now Click "Deploy"

After updating the build settings in the form, click the **Deploy** button. The error should be gone!

