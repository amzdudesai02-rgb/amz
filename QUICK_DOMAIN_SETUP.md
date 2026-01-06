# Quick Domain Setup - amzdudes.io

## 🚀 Fast Setup (5 Minutes)

### Step 1: Add Domain to Vercel
1. Vercel Dashboard → Your Project → Settings → Domains
2. Add: `amzdudes.io`
3. Add: `www.amzdudes.io`
4. Copy the DNS records shown (will show specific values)

### Step 2: Update DNS in Your Registrar

**If you already have DNS records (like Hostinger):**

1. **Add TXT Record (Verification):**
   ```
   Type: TXT
   Name: _vercel
   Value: [copy full value from Vercel]
   ```

2. **Edit Existing WWW CNAME:**
   - Find your existing `www` CNAME record
   - Click "Edit"
   - Change value to: `[copy from Vercel - looks like: dd75ce966cfb977c.vercel-dns-017.com.]`
   - Save

**If starting fresh:**

1. Login to where you bought `amzdudes.io`
2. Go to DNS Management / DNS Zone Editor
3. Add these records:

**For Root Domain:**
```
Type: CNAME
Name: @ (or leave blank)
Value: [copy from Vercel]
```

**For WWW:**
```
Type: CNAME
Name: www
Value: [copy from Vercel]
```

**For Verification:**
```
Type: TXT
Name: _vercel
Value: [copy from Vercel]
```

### Step 3: Wait & Verify
- Wait 1-24 hours for DNS propagation
- Check: [whatsmydns.net](https://www.whatsmydns.net)
- Visit: `https://amzdudes.io` (should work after propagation)

## ✅ Done!

Your main domain is now configured. SSL will be automatic.

## 📋 Next: Subdomains

When ready, add subdomains:
- `reimbursement.amzdudes.io`
- `crm.amzdudes.io`
- `api.amzdudes.io` (for backend)

See `DOMAIN_SETUP_GUIDE.md` for detailed instructions.

