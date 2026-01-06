#!/bin/bash
# Hostinger Deployment Script for Python FastAPI Backend

echo "🚀 Starting Hostinger Deployment..."

# Navigate to backend directory
cd "$(dirname "$0")" || exit

# Create virtual environment if it doesn't exist
if [ ! -d "venv" ]; then
    echo "📦 Creating virtual environment..."
    python3 -m venv venv
fi

# Activate virtual environment
echo "🔌 Activating virtual environment..."
source venv/bin/activate

# Upgrade pip
echo "⬆️ Upgrading pip..."
pip install --upgrade pip

# Install dependencies
echo "📥 Installing dependencies..."
pip install -r requirements.txt

# Create startup script
echo "📝 Creating startup script..."
cat > start.sh << 'EOF'
#!/bin/bash
cd "$(dirname "$0")"
source venv/bin/activate
uvicorn api.tools:app --host 0.0.0.0 --port $PORT
EOF

chmod +x start.sh

echo "✅ Deployment setup complete!"
echo "📋 Next steps:"
echo "   1. Upload all files to Hostinger"
echo "   2. Set execute permissions: chmod +x start.sh"
echo "   3. Configure your hosting panel to run: ./start.sh"
echo "   4. Or use: python3 -m uvicorn api.tools:app --host 0.0.0.0 --port 8000"

