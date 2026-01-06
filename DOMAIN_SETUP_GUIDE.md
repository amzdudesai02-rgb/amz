# Domain Configuration Guide - amzdudes.io

Complete guide to configure your `amzdudes.io` domain and subdomains.

## 🌐 Domain Structure Overview

```
amzdudes.io                    → Main platform (Frontend on Vercel)
├── www.amzdudes.io           → Redirect to main domain
├── reimbursement.amzdudes.io → Reimbursement Tool
├── crm.amzdudes.io           → CRM Tool
├── sop.amzdudes.io           → SOP Hub (Coming Soon)
└── automation.amzdudes.io    → Automation Tool (Coming Soon)
```

## 📋 Step 1: Configure Main Domain (amzdudes.io)

### For Vercel (Frontend)

1. **In Vercel Dashboard:**
   - Go to your project → **Settings** → **Domains**
   - Click **"Add Domain"**
   - Enter: `amzdudes.io`
   - Click **"Add"**

2. **Vercel will show DNS records:**
   - You'll see something like:
     ```
     Type: A
     Name: @
     Value: 76.76.21.21 (example IP)
     ```
   - OR
     ```
     Type: CNAME
     Name: @
     Value: cname.vercel-dns.com
     ```

3. **Add www subdomain:**
   - Also add: `www.amzdudes.io`
   - Vercel will auto-configure redirect

### DNS Configuration

**Go to your domain registrar** (where you bought amzdudes.io):

**Option A: CNAME (Recommended)**
- **Type:** `CNAME`
- **Name:** `@` or leave blank (root domain)
- **Value:** `cname.vercel-dns.com`
- **TTL:** `3600` (or default)

**Option B: A Records** (if CNAME not supported for root)
- Add 4 A records with IPs provided by Vercel:
  ```
  Type: A
  Name: @
  Value: [IP 1 from Vercel]
  
  Type: A
  Name: @
  Value: [IP 2 from Vercel]
  
  Type: A
  Name: @
  Value: [IP 3 from Vercel]
  
  Type: A
  Name: @
  Value: [IP 4 from Vercel]
  ```

**For www subdomain:**
- **Type:** `CNAME`
- **Name:** `www`
- **Value:** `cname.vercel-dns.com`
- **TTL:** `3600`

## 📋 Step 2: Configure Subdomains

### reimbursement.amzdudes.io

**If deploying on separate hosting:**

1. **Add DNS Record:**
   - **Type:** `CNAME`
   - **Name:** `reimbursement`
   - **Value:** `[your-hosting-provider-domain]`
   - **TTL:** `3600`

2. **Or if using IP:**
   - **Type:** `A`
   - **Name:** `reimbursement`
   - **Value:** `[your-server-ip]`
   - **TTL:** `3600`

### crm.amzdudes.io

**Same process:**
- **Type:** `CNAME` or `A`
- **Name:** `crm`
- **Value:** Your CRM tool hosting domain/IP

### sop.amzdudes.io (Coming Soon)

**Prepare for future:**
- **Type:** `CNAME` or `A`
- **Name:** `sop`
- **Value:** Will be set when SOP Hub is deployed

### automation.amzdudes.io (Coming Soon)

**Prepare for future:**
- **Type:** `CNAME` or `A`
- **Name:** `automation`
- **Value:** Will be set when Automation Tool is deployed

## 📋 Step 3: Configure Backend API (Optional)

### api.amzdudes.io (For Backend API)

**If deploying backend separately:**

**For Render:**
- **Type:** `CNAME`
- **Name:** `api`
- **Value:** `[your-render-app].onrender.com`

**For Hostinger VPS:**
- **Type:** `A`
- **Name:** `api`
- **Value:** `[your-vps-ip]`

## 🔒 Step 4: SSL Certificates

### Vercel (Automatic)
- Vercel automatically provisions SSL certificates
- Usually takes 1-24 hours after DNS propagation
- Check status in Vercel Dashboard → Domains

### Other Hosting Providers
- **Let's Encrypt:** Free SSL certificates
- **Cloudflare:** Free SSL + CDN (recommended)
- **Hostinger:** Usually includes SSL

## ⏱️ Step 5: DNS Propagation

### Wait for DNS Propagation
- **Usually:** 1-24 hours
- **Can check:** [whatsmydns.net](https://www.whatsmydns.net)
- Enter your domain and check global DNS propagation

### Verify DNS Records
```bash
# Check A record
dig amzdudes.io A

# Check CNAME
dig www.amzdudes.io CNAME

# Check subdomain
dig reimbursement.amzdudes.io A
```

## ✅ Step 6: Verification Checklist

### Main Domain
- [ ] DNS records added in registrar
- [ ] Domain added in Vercel
- [ ] SSL certificate active (green lock)
- [ ] Site loads at `https://amzdudes.io`
- [ ] `www.amzdudes.io` redirects to main domain

### Subdomains
- [ ] `reimbursement.amzdudes.io` → Working
- [ ] `crm.amzdudes.io` → Working
- [ ] SSL certificates for subdomains active

### Backend (if separate)
- [ ] `api.amzdudes.io` → Backend API accessible
- [ ] SSL certificate active
- [ ] CORS configured for frontend domain

## 🔧 Step 7: Update Frontend Configuration

### Update API URLs (if backend is separate)

**In `frontend/lib/api.ts`:**
```typescript
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.amzdudes.io'
```

**In Vercel Environment Variables:**
- Add: `NEXT_PUBLIC_API_URL=https://api.amzdudes.io`

### Update Tool Subdomains

**In `frontend/lib/tools.ts`:**
- Verify all subdomain URLs are correct:
  ```typescript
  subdomain: 'reimbursement.amzdudes.io'
  subdomain: 'crm.amzdudes.io'
  // etc.
  ```

## 🌍 Step 8: Use Cloudflare (Optional but Recommended)

### Benefits
- **Free SSL:** Automatic SSL certificates
- **CDN:** Faster loading worldwide
- **DDoS Protection:** Built-in protection
- **DNS Management:** Easy DNS management

### Setup Cloudflare

1. **Sign up:** [cloudflare.com](https://cloudflare.com)
2. **Add Site:** Enter `amzdudes.io`
3. **Scan DNS:** Cloudflare will detect existing records
4. **Update Nameservers:**
   - Cloudflare will provide nameservers
   - Update in your domain registrar
   - Example:
     ```
     ns1.cloudflare.com
     ns2.cloudflare.com
     ```
5. **Configure DNS:**
   - Add all your DNS records in Cloudflare
   - Enable **Proxy** (orange cloud) for CDN
   - SSL/TLS → Set to **Full** or **Full (strict)**

## 📊 Step 9: Monitoring & Testing

### Test All Domains

```bash
# Main domain
curl -I https://amzdudes.io

# Subdomains
curl -I https://reimbursement.amzdudes.io
curl -I https://crm.amzdudes.io

# Backend API
curl https://api.amzdudes.io/api/health
```

### Check SSL

- Visit each domain in browser
- Look for green padlock 🔒
- Check certificate details

### Monitor DNS Propagation

- Use [whatsmydns.net](https://www.whatsmydns.net)
- Check from multiple locations
- Wait until all show correct IPs

## 🐛 Troubleshooting

### Domain Not Working

**Check DNS:**
```bash
# Check if DNS is resolving
nslookup amzdudes.io
dig amzdudes.io

# Check specific record
dig amzdudes.io A
```

**Common Issues:**
- DNS not propagated (wait 24-48 hours)
- Wrong DNS records (double-check values)
- Nameservers not updated (if using Cloudflare)

### SSL Certificate Issues

**Vercel:**
- Wait 24 hours for automatic SSL
- Check domain status in Vercel dashboard
- Ensure DNS is correctly configured

**Other Providers:**
- Use Let's Encrypt: `certbot --nginx -d amzdudes.io`
- Or use Cloudflare for automatic SSL

### Subdomain Not Working

**Check:**
- DNS record exists for subdomain
- Subdomain is configured in hosting provider
- SSL certificate for subdomain
- Application is running on that subdomain

## 📝 DNS Records Summary

### Complete DNS Setup Example

```
# Main Domain (Vercel)
Type: CNAME
Name: @
Value: cname.vercel-dns.com

# WWW (Vercel)
Type: CNAME
Name: www
Value: cname.vercel-dns.com

# Reimbursement Tool
Type: CNAME
Name: reimbursement
Value: reimbursement-hosting.example.com

# CRM Tool
Type: CNAME
Name: crm
Value: crm-hosting.example.com

# Backend API (Render)
Type: CNAME
Name: api
Value: amzdudes-backend.onrender.com

# Backend API (Hostinger VPS)
Type: A
Name: api
Value: [your-vps-ip]
```

## 🎯 Next Steps Summary

1. ✅ **Add domain to Vercel** → Get DNS records
2. ✅ **Update DNS in registrar** → Add CNAME/A records
3. ✅ **Wait for propagation** → 1-24 hours
4. ✅ **Verify SSL** → Check green padlock
5. ✅ **Configure subdomains** → Add DNS for each tool
6. ✅ **Test all domains** → Verify everything works
7. ✅ **Update frontend config** → Point to correct API URLs
8. ✅ **Monitor** → Check logs and performance

## 🔗 Useful Tools

- **DNS Checker:** [whatsmydns.net](https://www.whatsmydns.net)
- **SSL Checker:** [ssllabs.com/ssltest](https://www.ssllabs.com/ssltest/)
- **DNS Lookup:** [mxtoolbox.com](https://mxtoolbox.com/DNSLookup.aspx)
- **Ping Test:** [ping.eu](https://ping.eu/)

## 📞 Support

**Domain Registrar:**
- Check your registrar's DNS management guide
- Contact support if DNS records aren't saving

**Vercel:**
- [Vercel DNS Docs](https://vercel.com/docs/concepts/projects/domains)
- Vercel Dashboard → Help & Support

**Cloudflare:**
- [Cloudflare DNS Docs](https://developers.cloudflare.com/dns/)

