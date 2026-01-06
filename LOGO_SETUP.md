# Logo Setup Guide

## 📁 Where to Place Your Logo File

### Step 1: Move logo.png to Public Folder

**Place your `logo.png` file here:**
```
frontend/public/logo.png
```

### Step 2: File Structure

Your project structure should look like:
```
frontend/
├── public/
│   └── logo.png          ← Place your logo here
├── app/
├── components/
│   └── Logo.tsx          ← Already updated to use logo.png
└── ...
```

## ✅ How It Works

The Logo component is already configured to use `/logo.png`:
- Next.js automatically serves files from `public/` folder
- The logo will be accessible at: `https://your-domain.com/logo.png`
- The component uses Next.js Image optimization

## 🎨 Logo Specifications (Recommended)

For best results, your logo.png should be:
- **Format:** PNG (with transparency) or SVG
- **Size:** 
  - Width: 400-600px (will be scaled)
  - Height: Auto (maintain aspect ratio)
- **Background:** Transparent (PNG) or white
- **Resolution:** High resolution (2x for retina displays)

## 📝 Usage

The Logo component is already being used in:
- ✅ Header (top navigation)
- ✅ Footer

You can also use it anywhere:
```tsx
import Logo from '@/components/Logo'

// Default size
<Logo />

// Small size
<Logo size="small" />

// Large size
<Logo size="large" />

// Without tagline
<Logo showTagline={false} />
```

## 🔄 After Adding logo.png

1. **Place file:** `frontend/public/logo.png`
2. **Test locally:**
   ```bash
   cd frontend
   npm run dev
   ```
3. **Verify:** Logo should appear in header and footer
4. **Commit and push:**
   ```bash
   git add frontend/public/logo.png
   git commit -m "Add logo.png"
   git push
   ```

## 🐛 Troubleshooting

### Logo Not Showing
- Check file is in `frontend/public/logo.png` (not `frontend/public/images/logo.png`)
- Verify filename is exactly `logo.png` (case-sensitive)
- Clear browser cache
- Check browser console for 404 errors

### Logo Too Large/Small
- Adjust `size` prop: `small`, `default`, or `large`
- Or modify dimensions in `Logo.tsx` component

### Logo Looks Blurry
- Use higher resolution image (2x size)
- Use SVG format for crisp rendering at any size
- Ensure image is not being stretched

## 📦 Alternative: SVG Logo

If you have `logo.svg` instead:
1. Place: `frontend/public/logo.svg`
2. Update Logo.tsx: Change `/logo.png` to `/logo.svg`

## 🎯 Next Steps

1. ✅ Move `logo.png` to `frontend/public/` folder
2. ✅ Test locally with `npm run dev`
3. ✅ Commit and push to GitHub
4. ✅ Vercel will auto-deploy with your logo

