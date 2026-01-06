# Quick Domain Setup - amzdudes.io

## 🚀 Fast Setup (5 Minutes)

### Step 1: Add Domain to Vercel
1. Vercel Dashboard → Your Project → Settings → Domains
2. Add: `amzdudes.io`
3. Add: `www.amzdudes.io`
4. Copy the DNS records shown

### Step 2: Update DNS in Your Registrar
1. Login to where you bought `amzdudes.io`
2. Go to DNS Management / DNS Zone Editor
3. Add these records:

**For Root Domain:**
```
Type: CNAME
Name: @ (or leave blank)
Value: cname.vercel-dns.com
```

**For WWW:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
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

