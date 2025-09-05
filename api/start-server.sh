#!/bin/bash
echo "🚀 Starting FX Calculator Market Data API Server..."

# Check if Python is available
if ! command -v python3 &> /dev/null; then
    echo "❌ Python 3 is required but not installed"
    exit 1
fi

# Install dependencies if needed
echo "📦 Installing Python dependencies..."
pip3 install -r requirements.txt

# Start the server
echo "🔗 Starting server on http://localhost:8000"
python3 market-data.py