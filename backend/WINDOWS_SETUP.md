# Windows Setup Guide

## Common Issue: `uvicorn` command not found

If you see this error:
```
uvicorn : The term 'uvicorn' is not recognized as the name of a cmdlet...
```

## Solution

Use `python -m uvicorn` instead of just `uvicorn`:

```powershell
# Instead of:
uvicorn api.tools:app --reload --port 8000

# Use:
python -m uvicorn api.tools:app --reload --port 8000
```

## Complete Setup Steps for Windows

1. **Navigate to backend directory:**
   ```powershell
   cd backend
   ```

2. **Install dependencies:**
   ```powershell
   pip install -r requirements.txt
   ```

3. **Run the server:**
   ```powershell
   python -m uvicorn api.tools:app --reload --port 8000
   ```

4. **Access the API:**
   - API: http://localhost:8000
   - Interactive Docs: http://localhost:8000/docs
   - Health Check: http://localhost:8000/api/health

## Alternative Commands

If `python` doesn't work, try:
- `py -m uvicorn api.tools:app --reload --port 8000`
- `python3 -m uvicorn api.tools:app --reload --port 8000`

## Why This Happens

On Windows, when you install Python packages with `pip`, the executables are placed in the `Scripts` folder. If this folder is not in your PATH, Windows won't recognize commands like `uvicorn`. Using `python -m` tells Python to run the module directly, which always works.

