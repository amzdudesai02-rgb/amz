# Backend - AMZDudes Platform

Python FastAPI backend for the AMZDudes automation platform.

## Structure

```
backend/
├── api/
│   ├── __init__.py
│   └── tools.py          # FastAPI application
├── requirements.txt      # Python dependencies
├── runtime.txt          # Python version
└── Procfile             # Deployment configuration
```

## Setup

1. **Install dependencies:**
   ```bash
   cd backend
   pip install -r requirements.txt
   ```

2. **Run the server:**
   
   **Option 1: Using python -m (Recommended for Windows):**
   ```bash
   python -m uvicorn api.tools:app --reload --port 8000
   ```
   
   **Option 2: Direct uvicorn command (if in PATH):**
   ```bash
   uvicorn api.tools:app --reload --port 8000
   ```
   
   **Option 3: Using py launcher:**
   ```bash
   py -m uvicorn api.tools:app --reload --port 8000
   ```

3. **Access API:**
   - API: http://localhost:8000
   - Docs: http://localhost:8000/docs
   - Health: http://localhost:8000/api/health

## API Endpoints

- `GET /` - API information
- `GET /api/health` - Health check
- `GET /api/tools` - Get all tools
- `GET /api/tools?status=active` - Get tools by status
- `GET /api/tools/{tool_id}` - Get specific tool
- `GET /api/stats` - Get platform statistics

## Deployment

See main `README.md` for deployment instructions.

