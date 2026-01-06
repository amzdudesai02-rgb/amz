# Render Deployment - Quick Reference

## Deployment Settings for Render Dashboard

When creating a new Web Service in Render, use these settings:

### Basic Settings
- **Name:** `amzdudes-backend`
- **Environment:** `Python 3`
- **Region:** Choose closest region
- **Branch:** `main`
- **Root Directory:** `backend` ⚠️ **CRITICAL**

### Build & Start
- **Build Command:** `pip install -r requirements.txt`
- **Start Command:** `uvicorn api.tools:app --host 0.0.0.0 --port $PORT`

### Advanced Settings
- **Health Check Path:** `/api/health`
- **Plan:** Free (or upgrade if needed)

### Environment Variables
- Currently none required
- Add `PYTHON_VERSION=3.11.0` if needed (usually auto-detected)

## Quick Deploy Steps

1. Go to [render.com](https://render.com) and login
2. Click **"New +"** → **"Web Service"**
3. Connect GitHub repository: `amzdudesai02-rgb/amz`
4. Fill in the settings above
5. Click **"Create Web Service"**
6. Wait 5-10 minutes for deployment

## After Deployment

Your backend will be available at:
- **API:** `https://amzdudes-backend.onrender.com`
- **Docs:** `https://amzdudes-backend.onrender.com/docs`
- **Health:** `https://amzdudes-backend.onrender.com/api/health`

## Test Deployment

```bash
# Health check
curl https://amzdudes-backend.onrender.com/api/health

# Get tools
curl https://amzdudes-backend.onrender.com/api/tools

# Get stats
curl https://amzdudes-backend.onrender.com/api/stats
```

## Troubleshooting

- **Build fails:** Check `requirements.txt` is correct
- **Service won't start:** Check logs in Render dashboard
- **Health check fails:** Verify `/api/health` endpoint exists

See `RENDER_DEPLOYMENT_GUIDE.md` for detailed instructions.

