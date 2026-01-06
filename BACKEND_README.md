# Backend Documentation

## Overview

The AMZDudes platform includes a Python FastAPI backend that can be deployed independently or used with Next.js API routes.

## Architecture

### Option 1: Next.js API Routes (Recommended for Vercel)
- **Location**: `app/api/`
- **Files**: 
  - `app/api/tools/route.ts` - Tools API endpoint
  - `app/api/stats/route.ts` - Statistics API endpoint
- **Advantages**: 
  - Integrated with Next.js
  - Automatic deployment with frontend
  - No additional configuration needed

### Option 2: Python FastAPI Backend (Standalone)
- **Location**: `api/tools.py`
- **Framework**: FastAPI
- **Advantages**:
  - Can be deployed separately
  - More Python-specific features
  - Better for complex Python logic

## API Endpoints

### Get All Tools
```
GET /api/tools
GET /api/tools?status=active
GET /api/tools?status=coming-soon
```

**Response:**
```json
{
  "tools": [...],
  "total": 4,
  "active": 2,
  "coming_soon": 2
}
```

### Get Tool by ID
```
GET /api/tools/{tool_id}
```

**Response:**
```json
{
  "id": "reimbursement",
  "name": "Reimbursement Automation",
  ...
}
```

### Get Statistics
```
GET /api/stats
```

**Response:**
```json
{
  "total_tools": 4,
  "active_tools": 2,
  "coming_soon_tools": 2
}
```

## Running Python Backend Locally

1. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

2. **Run with Uvicorn:**
   ```bash
   uvicorn api.tools:app --reload --port 8000
   ```

3. **Access API:**
   - API Docs: http://localhost:8000/docs
   - API: http://localhost:8000/api/tools

## Deployment Options

### Vercel (Next.js API Routes)
The Next.js API routes are automatically deployed with the frontend. No additional configuration needed.

### Standalone Python Backend
Deploy the Python backend separately:

1. **Railway:**
   - Connect GitHub repository
   - Set Python as runtime
   - Deploy `api/tools.py`

2. **Render:**
   - Create new Web Service
   - Set build command: `pip install -r requirements.txt`
   - Set start command: `uvicorn api.tools:app --host 0.0.0.0 --port $PORT`

3. **Heroku:**
   - Create `Procfile`: `web: uvicorn api.tools:app --host 0.0.0.0 --port $PORT`
   - Deploy using Heroku CLI

## Environment Variables

Currently, no environment variables are required. Future additions might include:
- `DATABASE_URL` - For database connections
- `API_KEY` - For authentication
- `CORS_ORIGINS` - For CORS configuration

## Adding New Endpoints

### Next.js API Route
Create a new file in `app/api/`:
```typescript
// app/api/new-endpoint/route.ts
import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ message: 'Hello' })
}
```

### Python FastAPI
Add to `api/tools.py`:
```python
@app.get("/api/new-endpoint")
async def new_endpoint():
    return {"message": "Hello"}
```

## Database Integration (Future)

To add database support:
1. Install database driver (e.g., `psycopg2` for PostgreSQL)
2. Add database models
3. Update endpoints to use database queries
4. Add migrations (e.g., Alembic)

