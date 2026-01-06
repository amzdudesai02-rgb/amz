# Hostinger Backend Deployment Guide

Complete guide to deploy your Python FastAPI backend to Hostinger.

## 🚀 Deployment Methods

Hostinger offers different hosting options. Choose based on your plan:

### Option 1: VPS Hosting (Recommended for Python Apps)
- Full control over server
- Can install Python, pip, and dependencies
- Best for production applications

### Option 2: Shared Hosting with Python Support
- Limited Python support
- May need to use Hostinger's Python selector
- Check if your plan supports Python

## 📋 Prerequisites

1. **Hostinger Account:**
   - VPS plan (recommended) OR
   - Shared hosting with Python support

2. **Access Methods:**
   - SSH access (VPS) OR
   - File Manager + Control Panel (Shared)

3. **Python Version:**
   - Python 3.11+ required
   - Check with: `python3 --version`

## 🔧 Method 1: VPS Deployment (Recommended)

### Step 1: Connect via SSH

```bash
# Connect to your Hostinger VPS
ssh username@your-server-ip
```

### Step 2: Install Python and Dependencies

```bash
# Update system
sudo apt update
sudo apt upgrade -y

# Install Python 3.11 and pip
sudo apt install python3.11 python3.11-venv python3-pip -y

# Install system dependencies
sudo apt install build-essential -y
```

### Step 3: Upload Your Code

**Option A: Using Git (Recommended)**
```bash
# Install git
sudo apt install git -y

# Clone your repository
cd /var/www  # or your preferred directory
git clone https://github.com/amzdudesai02-rgb/amz.git
cd amz/backend
```

**Option B: Using SCP/SFTP**
```bash
# From your local machine
scp -r backend/ username@your-server-ip:/var/www/amzdudes-backend/
```

### Step 4: Set Up Virtual Environment

```bash
cd /var/www/amzdudes-backend  # or your path

# Create virtual environment
python3.11 -m venv venv

# Activate virtual environment
source venv/bin/activate

# Upgrade pip
pip install --upgrade pip

# Install dependencies
pip install -r requirements.txt
```

### Step 5: Configure Process Manager (PM2)

```bash
# Install Node.js and PM2
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
sudo npm install -g pm2

# Create PM2 ecosystem file
cat > ecosystem.config.js << 'EOF'
module.exports = {
  apps: [{
    name: 'amzdudes-backend',
    script: 'venv/bin/uvicorn',
    args: 'api.tools:app --host 0.0.0.0 --port 8000',
    cwd: '/var/www/amzdudes-backend',
    interpreter: 'none',
    exec_mode: 'fork',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production'
    }
  }]
}
EOF

# Start application
pm2 start ecosystem.config.js

# Save PM2 configuration
pm2 save

# Setup PM2 to start on boot
pm2 startup
# Follow the command it outputs
```

### Step 6: Configure Nginx (Reverse Proxy)

```bash
# Install Nginx
sudo apt install nginx -y

# Create Nginx configuration
sudo nano /etc/nginx/sites-available/amzdudes-backend
```

Add this configuration:

```nginx
server {
    listen 80;
    server_name api.amzdudes.io;  # Your domain

    location / {
        proxy_pass http://127.0.0.1:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

```bash
# Enable site
sudo ln -s /etc/nginx/sites-available/amzdudes-backend /etc/nginx/sites-enabled/

# Test configuration
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx
```

### Step 7: Configure Firewall

```bash
# Allow HTTP and HTTPS
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw allow 22/tcp  # SSH
sudo ufw enable
```

### Step 8: Set Up SSL (Let's Encrypt)

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx -y

# Get SSL certificate
sudo certbot --nginx -d api.amzdudes.io

# Auto-renewal is set up automatically
```

## 🔧 Method 2: Shared Hosting Deployment

### Step 1: Access File Manager

1. Login to Hostinger Control Panel (hPanel)
2. Go to **File Manager**

### Step 2: Upload Files

1. Navigate to `public_html` or your domain folder
2. Create folder: `backend` or `api`
3. Upload all files from `backend/` folder:
   - `api/` folder
   - `requirements.txt`
   - `runtime.txt`
   - `Procfile`

### Step 3: Use Python Selector

1. In hPanel, find **Python Selector** or **Python App**
2. Create new Python application:
   - **App name:** `amzdudes-backend`
   - **Python version:** `3.11`
   - **App directory:** `backend` (or your folder)
   - **Startup file:** `api/tools.py`
   - **Entry point:** `app`

### Step 4: Install Dependencies

**Option A: Via Python Selector**
- Use the "Install Packages" feature
- Install: `fastapi`, `uvicorn`, `pydantic`, etc.

**Option B: Via SSH Terminal**
```bash
cd ~/public_html/backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

### Step 5: Configure Startup

Create `passenger_wsgi.py` (if using Passenger):

```python
import sys
import os

# Add your app directory to path
sys.path.insert(0, os.path.dirname(__file__))

# Import your app
from api.tools import app

# Passenger expects 'application'
application = app
```

## 🌐 Domain Configuration

### DNS Settings

1. **Go to Domain DNS Settings:**
   - In Hostinger hPanel → **Domains** → **DNS Zone Editor**

2. **Add A Record (for VPS):**
   - **Type:** A
   - **Name:** `api` (or `@` for root)
   - **Value:** Your VPS IP address
   - **TTL:** 3600

3. **Or CNAME (for shared hosting):**
   - **Type:** CNAME
   - **Name:** `api`
   - **Value:** Your hosting domain
   - **TTL:** 3600

## ✅ Testing Your Deployment

### Test Locally on Server

```bash
# Activate virtual environment
source venv/bin/activate

# Run server
uvicorn api.tools:app --host 0.0.0.0 --port 8000

# Test endpoints
curl http://localhost:8000/api/health
curl http://localhost:8000/api/tools
```

### Test from Browser

- **Health Check:** `http://api.amzdudes.io/api/health`
- **API Docs:** `http://api.amzdudes.io/docs`
- **Tools Endpoint:** `http://api.amzdudes.io/api/tools`

## 🔄 Updating Your Application

### Via Git (VPS)

```bash
cd /var/www/amzdudes-backend
git pull origin main
source venv/bin/activate
pip install -r requirements.txt
pm2 restart amzdudes-backend
```

### Via File Manager (Shared)

1. Upload new files via File Manager
2. Restart application in Python Selector

## 🐛 Troubleshooting

### Application Won't Start

**Check logs:**
```bash
# PM2 logs
pm2 logs amzdudes-backend

# Nginx logs
sudo tail -f /var/log/nginx/error.log

# Application logs
tail -f /var/www/amzdudes-backend/logs/app.log
```

### Port Already in Use

```bash
# Find process using port 8000
sudo lsof -i :8000

# Kill process
sudo kill -9 <PID>
```

### Permission Issues

```bash
# Fix permissions
sudo chown -R www-data:www-data /var/www/amzdudes-backend
sudo chmod -R 755 /var/www/amzdudes-backend
```

### Python Not Found

```bash
# Check Python version
which python3
python3 --version

# Create symlink if needed
sudo ln -s /usr/bin/python3.11 /usr/bin/python3
```

## 📊 Monitoring

### PM2 Monitoring

```bash
# View status
pm2 status

# View logs
pm2 logs amzdudes-backend

# Monitor resources
pm2 monit

# Restart app
pm2 restart amzdudes-backend
```

### System Monitoring

```bash
# Check system resources
htop

# Check disk space
df -h

# Check memory
free -h
```

## 🔒 Security Best Practices

1. **Firewall:**
   ```bash
   sudo ufw enable
   sudo ufw status
   ```

2. **SSH Key Authentication:**
   - Disable password authentication
   - Use SSH keys only

3. **Keep Updated:**
   ```bash
   sudo apt update && sudo apt upgrade -y
   ```

4. **Environment Variables:**
   - Don't commit secrets
   - Use environment variables for sensitive data

## 📝 Files Created

- `backend/hostinger_deploy.sh` - Deployment script
- `backend/.htaccess` - Apache configuration (if needed)
- `backend/ecosystem.config.js` - PM2 configuration (create on server)

## 🔗 Useful Commands Reference

```bash
# Start application
pm2 start ecosystem.config.js

# Stop application
pm2 stop amzdudes-backend

# Restart application
pm2 restart amzdudes-backend

# View logs
pm2 logs amzdudes-backend

# Check status
pm2 status

# Nginx restart
sudo systemctl restart nginx

# Check Nginx status
sudo systemctl status nginx
```

## 🎯 Next Steps

1. Choose deployment method (VPS recommended)
2. Follow steps for your chosen method
3. Test all endpoints
4. Configure domain DNS
5. Set up SSL certificate
6. Monitor logs and performance

## 📞 Hostinger Support

If you encounter issues:
- **Support:** [Hostinger Support](https://www.hostinger.com/contact)
- **Documentation:** [Hostinger Docs](https://support.hostinger.com/)
- **VPS Guide:** [Hostinger VPS Guide](https://www.hostinger.com/tutorials/vps)

