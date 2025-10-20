#!/bin/bash
# Auto-start market data API server with dependency management

# Function to check and install Python dependencies silently
install_dependencies() {
    if ! python3 -c "import yfinance" 2>/dev/null; then
        echo "📦 Installing Python dependencies..."
        pip3 install -r requirements.txt > /dev/null 2>&1
        if [ $? -eq 0 ]; then
            echo "✅ Dependencies installed"
        else
            echo "⚠️  Dependency installation had warnings (continuing...)"
        fi
    fi
}

# Function to handle cleanup on exit
cleanup() {
    echo "🛑 Shutting down API server..."
    pkill -f market_data_server.py
    exit 0
}

# Set up signal handlers
trap cleanup SIGINT SIGTERM

echo "🚀 Auto-Starting FX Calculator API Server"
echo "========================================="

# Check Python
if ! command -v python3 &> /dev/null; then
    echo "❌ Python 3 required. Please install Python 3."
    exit 1
fi

# Install dependencies if needed
install_dependencies

# Start the server
echo "🌟 API Server: http://localhost:5001"
echo "📊 Health Check: http://localhost:5001/api/health"
echo ""

cd src/app/fx-calc/api && python3 market_data_server.py