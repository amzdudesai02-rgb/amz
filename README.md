# AMZDudes Automation Platform

[![Frontend CI](https://github.com/amzdudesai02-rgb/amz/workflows/Frontend%20CI%2FCD/badge.svg)](https://github.com/amzdudesai02-rgb/amz/actions)
[![Backend CI](https://github.com/amzdudesai02-rgb/amz/workflows/Backend%20CI%2FCD/badge.svg)](https://github.com/amzdudesai02-rgb/amz/actions)
[![Full CI](https://github.com/amzdudesai02-rgb/amz/workflows/Full%20CI%2FCD%20Pipeline/badge.svg)](https://github.com/amzdudesai02-rgb/amz/actions)

A professional automation platform landing page showcasing multiple automation tools with a modern, scalable design. Built with Next.js 14 (Frontend) and Python FastAPI (Backend).

## 🚀 Features

- 🎨 Modern, professional dashboard UI/UX
- 📱 Fully responsive design
- 🚀 Built with Next.js 14 and TypeScript
- 🐍 Python FastAPI backend
- 🎯 Easy tool management through configuration
- 🔗 Seamless navigation to tool subdomains
- ⚡ Fast and optimized performance
- 🌈 Beautiful animations and transitions

## 📋 Prerequisites

- Node.js 18+ installed
- Python 3.11+ installed (for backend)
- npm or yarn package manager
- pip (Python package manager)

## 🛠️ Installation

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Backend Setup (Optional - for standalone Python backend)

1. Navigate to backend directory:
```bash
cd backend
pip install -r requirements.txt
```

2. Run the FastAPI server:
```bash
python -m uvicorn api.tools:app --reload --port 8000
```

**Note for Windows:** If `uvicorn` command is not recognized, use `python -m uvicorn` instead.

3. Access API documentation at [http://localhost:8000/docs](http://localhost:8000/docs)

## 📁 Project Structure

```
├── frontend/                   # Next.js Frontend
│   ├── app/
│   │   ├── api/               # Next.js API routes
│   │   │   ├── tools/route.ts # Tools API endpoint
│   │   │   └── stats/route.ts # Stats API endpoint
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Main dashboard
│   │   └── globals.css        # Global styles
│   ├── components/
│   │   └── ToolCard.tsx       # Tool card component
│   ├── lib/
│   │   ├── tools.ts           # Tools configuration
│   │   └── api.ts             # API utilities
│   ├── public/                # Static assets
│   └── package.json           # Node.js dependencies
│
├── backend/                    # Python FastAPI Backend
│   ├── api/
│   │   ├── __init__.py
│   │   └── tools.py          # FastAPI application
│   ├── requirements.txt       # Python dependencies
│   ├── runtime.txt            # Python version
│   └── Procfile               # Deployment config
│
└── vercel.json                # Vercel configuration
```

## ➕ Adding New Tools

To add a new automation tool, edit `frontend/lib/tools.ts` and add a new tool object:

```typescript
{
  id: 'tool-id',
  name: 'Tool Name',
  description: 'Tool description',
  subdomain: 'tool.amzdudes.io',
  status: 'active' | 'coming-soon',
  features: ['Feature 1', 'Feature 2', 'Feature 3'],
  icon: 'IconName', // From lucide-react
  color: 'bg-color-500', // Tailwind color class
}
```

The same configuration should also be updated in the Python backend in `backend/api/tools.py` if using the standalone backend.

## 🚀 Deployment

### Vercel (Recommended)

The platform is optimized for Vercel deployment:

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js
   - Configure domain: `amzdudes.io`
   - Deploy!

### Frontend Only (Vercel)
- Next.js API routes are automatically deployed
- No additional configuration needed

### Backend Only (Separate Deployment)
See `BACKEND_README.md` for Python backend deployment options:
- Railway
- Render
- Heroku
- AWS Lambda
- Google Cloud Run

## 🌐 Domain Configuration

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

## 🔧 Environment Variables

Currently, no environment variables are required. If you need to add any:

1. Create `.env.local` for local development:
   ```
   NEXT_PUBLIC_API_URL=http://localhost:8000
   ```

2. Add variables in Vercel Dashboard > Settings > Environment Variables

## 📊 API Endpoints

### Next.js API Routes (Deployed with Frontend)
- `GET /api/tools` - Get all tools
- `GET /api/tools?status=active` - Get active tools
- `GET /api/stats` - Get platform statistics

### Python FastAPI (Standalone)
- `GET /api/tools` - Get all tools
- `GET /api/tools/{tool_id}` - Get specific tool
- `GET /api/stats` - Get statistics
- `GET /docs` - Interactive API documentation

## 🎨 Customization

### Colors
Edit `frontend/tailwind.config.ts` to customize the color scheme.

### Styling
Modify `frontend/app/globals.css` for global styles or update component styles in individual files.

### Backend Logic
Modify `backend/api/tools.py` or `frontend/app/api/` routes to add custom business logic.

## 📚 Documentation

- [Backend Documentation](./BACKEND_README.md) - Python FastAPI backend details
- [Deployment Guide](./DEPLOYMENT.md) - Detailed deployment instructions
- [CI/CD Setup Guide](./CI_CD_SETUP.md) - GitHub Actions CI/CD configuration
- [Vercel Deployment Guide](./VERCEL_DEPLOYMENT_GUIDE.md) - Step-by-step Vercel deployment instructions
- [Render Backend Deployment](./RENDER_DEPLOYMENT_GUIDE.md) - Deploy backend to Render
- [CI/CD Pipeline](./CI_CD_README.md) - Continuous Integration/Deployment setup
- [Project Structure](./STRUCTURE.md) - Detailed project organization

## 🛡️ License

Private - All rights reserved

## 🤝 Support

For issues or questions, please contact the development team.
