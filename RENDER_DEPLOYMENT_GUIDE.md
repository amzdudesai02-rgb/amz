# Render Backend Deployment Guide

Complete guide to deploy your Python FastAPI backend to Render.

## 🚀 Quick Deploy to Render

### Method 1: Render Dashboard (Recommended)

1. **Go to Render:**
   - Visit [render.com](https://render.com)
   - Sign up/Login (GitHub login recommended)

2. **Create New Web Service:**
   - Click **"New +"** → **"Web Service"**
   - Click **"Connect GitHub"** (if not connected)
   - Select repository: `amzdudesai02-rgb/amz`

3. **Configure Service:**
   - **Name:** `amzdudes-backend` (or your choice)
   - **Environment:** `Python 3`
   - **Region:** Choose closest to your users
   - **Branch:** `main`
   - **Root Directory:** `backend` ⚠️ **IMPORTANT**
   - **Build Command:** `pip install -r requirements.txt`
   - **Start Command:** `uvicorn api.tools:app --host 0.0.0.0 --port $PORT`

4. **Environment Variables (Optional):**
   - Currently none required
   - Add if needed later

5. **Plan:**
   - Select **Free** plan (or paid if needed)

6. **Deploy:**
   - Click **"Create Web Service"**
   - Wait 5-10 minutes for first deployment

### Method 2: Using render.yaml (Auto-configuration)

1. **The `render.yaml` file is already created** in `backend/` folder

2. **In Render Dashboard:**
   - Click **"New +"** → **"Blueprint"**
   - Connect your GitHub repository
   - Render will auto-detect `render.yaml`
   - Click **"Apply"**

## ⚙️ Configuration Details

### Required Settings

**Root Directory:** `backend`
- This tells Render where your Python code is

**Build Command:** `pip install -r requirements.txt`
- Installs all Python dependencies

**Start Command:** `uvicorn api.tools:app --host 0.0.0.0 --port $PORT`
- Starts the FastAPI server
- `$PORT` is automatically provided by Render

**Python Version:** `3.11` (set in runtime.txt)

### Health Check

The backend includes a health check endpoint:
- **Path:** `/api/health`
- Render will use this to monitor your service

## 🌐 After Deployment

### Your Backend URL

After deployment, Render will provide:
- **URL:** `https://amzdudes-backend.onrender.com` (or your custom name)
- **API Docs:** `https://amzdudes-backend.onrender.com/docs`
- **Health Check:** `https://amzdudes-backend.onrender.com/api/health`

### Test Your API

```bash
# Health check
curl https://amzdudes-backend.onrender.com/api/health

# Get all tools
curl https://amzdudes-backend.onrender.com/api/tools

# Get stats
curl https://amzdudes-backend.onrender.com/api/stats
```

## 🔄 Automatic Deployments

Render automatically deploys when you:
- Push to `main` branch (if auto-deploy is enabled)
- Manually trigger deployment from dashboard

### Enable Auto-Deploy

1. Go to **Settings** → **Auto-Deploy**
2. Enable **"Auto-Deploy"**
3. Select branch: `main`

## 🔧 Custom Domain (Optional)

### Add Custom Domain

1. Go to **Settings** → **Custom Domains**
2. Add domain: `api.amzdudes.io` (or your choice)
3. Update DNS records as instructed:
   - Add CNAME: `api.amzdudes.io` → `amzdudes-backend.onrender.com`

## 📊 Monitoring

### View Logs

- **Dashboard:** Click on your service → **Logs** tab
- **Real-time:** See live logs during deployment
- **Historical:** View past logs

### Metrics

- **Dashboard:** See CPU, Memory, Request metrics
- **Free tier:** Basic metrics available

## 🐛 Troubleshooting

### Build Fails

**Error: Module not found**
- Check `requirements.txt` has all dependencies
- Verify Python version matches (3.11)

**Error: Port already in use**
- Make sure start command uses `$PORT` variable
- Don't hardcode port numbers

### Service Won't Start

**Check logs:**
- Go to **Logs** tab in Render dashboard
- Look for Python errors
- Verify start command is correct

**Common issues:**
- Missing dependencies in `requirements.txt`
- Wrong Python version
- Incorrect start command

### Health Check Fails

**Verify health endpoint:**
- Test locally: `http://localhost:8000/api/health`
- Check Render logs for errors
- Ensure `/api/health` route exists in `api/tools.py`

## 💰 Free Tier Limits

- **750 hours/month** (enough for 24/7 on one service)
- **100GB bandwidth/month**
- **512MB RAM**
- **0.5 CPU**

**Note:** Free tier services spin down after 15 minutes of inactivity. First request after spin-down takes ~30 seconds.

## 🔗 Connect Frontend to Backend

After backend is deployed, update frontend:

1. **Set environment variable in Vercel:**
   - `NEXT_PUBLIC_API_URL=https://amzdudes-backend.onrender.com`

2. **Or update `frontend/lib/api.ts`:**
   ```typescript
   const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://amzdudes-backend.onrender.com'
   ```

## ✅ Post-Deployment Checklist

- [ ] Backend deployed successfully
- [ ] Health check endpoint working (`/api/health`)
- [ ] API endpoints working (`/api/tools`, `/api/stats`)
- [ ] API documentation accessible (`/docs`)
- [ ] Auto-deploy enabled (optional)
- [ ] Custom domain configured (optional)
- [ ] Frontend connected to backend (if needed)

## 📝 Files Created

- `backend/render.yaml` - Render configuration file
- `backend/Procfile` - Process file (already existed)
- `backend/runtime.txt` - Python version (already existed)

## 🔗 Useful Links

- [Render Dashboard](https://dashboard.render.com)
- [Render Documentation](https://render.com/docs)
- [Python on Render](https://render.com/docs/deploy-python)
- [Free Tier Info](https://render.com/docs/free)

## 🎯 Next Steps

1. Deploy backend to Render using the steps above
2. Test all API endpoints
3. Connect frontend to backend (update API URL)
4. Set up custom domain (optional)
5. Monitor logs and metrics

