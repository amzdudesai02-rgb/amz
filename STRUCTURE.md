# Project Structure

## Overview

The project has been reorganized into separate `frontend` and `backend` folders for better organization and deployment.

## Directory Structure

```
AMZDUDES/
├── frontend/              # Next.js 14 Frontend Application
│   ├── app/
│   │   ├── api/          # Next.js API Routes
│   │   │   ├── tools/
│   │   │   │   └── route.ts
│   │   │   └── stats/
│   │   │       └── route.ts
│   │   ├── layout.tsx    # Root layout component
│   │   ├── page.tsx      # Main dashboard page
│   │   └── globals.css   # Global styles
│   ├── components/
│   │   └── ToolCard.tsx  # Tool card component
│   ├── lib/
│   │   ├── tools.ts      # Tools configuration
│   │   └── api.ts        # API client utilities
│   ├── public/           # Static assets
│   ├── package.json      # Node.js dependencies
│   ├── tsconfig.json     # TypeScript configuration
│   ├── tailwind.config.ts # Tailwind CSS configuration
│   ├── next.config.js    # Next.js configuration
│   ├── postcss.config.js # PostCSS configuration
│   └── .eslintrc.json    # ESLint configuration
│
├── backend/              # Python FastAPI Backend
│   ├── api/
│   │   ├── __init__.py
│   │   └── tools.py      # FastAPI application
│   ├── requirements.txt  # Python dependencies
│   ├── runtime.txt      # Python runtime version
│   ├── Procfile         # Deployment configuration
│   └── README.md        # Backend documentation
│
├── vercel.json          # Vercel deployment configuration
├── README.md            # Main project documentation
├── BACKEND_README.md    # Backend API documentation
├── DEPLOYMENT_GUIDE.md  # Deployment guide
└── PROJECT_SUMMARY.md   # Project summary
```

## Frontend Structure

The frontend is a Next.js 14 application with:
- **App Router**: Using the new `app/` directory structure
- **API Routes**: Next.js API routes in `app/api/`
- **Components**: Reusable React components
- **Lib**: Utility functions and configurations
- **Public**: Static assets (images, fonts, etc.)

## Backend Structure

The backend is a Python FastAPI application with:
- **API Module**: FastAPI application in `api/` directory
- **Dependencies**: Listed in `requirements.txt`
- **Deployment**: Configuration files for various platforms

## Development Workflow

### Frontend Development
```bash
cd frontend
npm install
npm run dev
```

### Backend Development
```bash
cd backend
pip install -r requirements.txt
uvicorn api.tools:app --reload --port 8000
```

## Deployment

### Vercel (Frontend)
- Vercel automatically detects Next.js in the `frontend/` folder
- Update `vercel.json` to point to `frontend/package.json`

### Backend Deployment
- Can be deployed separately to:
  - Railway
  - Render
  - Heroku
  - AWS Lambda
  - Google Cloud Run

## Benefits of This Structure

1. **Separation of Concerns**: Frontend and backend are clearly separated
2. **Independent Deployment**: Each can be deployed separately
3. **Better Organization**: Easier to navigate and maintain
4. **Team Collaboration**: Frontend and backend teams can work independently
5. **Scalability**: Easy to add more services or microservices

