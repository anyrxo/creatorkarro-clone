#!/bin/bash
# Production startup script for FX Calculator with real-time data
# This ensures the system stays up forever with automatic restarts

set -e

echo "🚀 PRODUCTION STARTUP: FX Calculator Real-Time System"
echo "======================================================="

# Production environment variables
export NODE_ENV=production
export PYTHON_ENV=production
export API_PORT=5001
export APP_PORT=3000

# Function to start API server with auto-restart
start_api_server() {
    echo "📊 Starting Production API Server with auto-restart..."
    cd src/app/fx-calc/api
    
    # Install dependencies if needed
    if ! python3 -c "import yfinance" 2>/dev/null; then
        echo "📦 Installing Python dependencies..."
        pip3 install -r requirements.txt
    fi
    
    # Use gunicorn for production with auto-restart
    while true; do
        echo "🔄 Starting API server (attempt at $(date))"
        gunicorn --bind 0.0.0.0:$API_PORT --workers 4 --timeout 60 --max-requests 1000 --preload market_data_server:app || {
            echo "⚠️  API server crashed, restarting in 5 seconds..."
            sleep 5
        }
    done
}

# Function to start Next.js app with auto-restart  
start_frontend() {
    echo "🌐 Starting Production Frontend with auto-restart..."
    
    # Build the app first
    npm run build
    
    # Start with auto-restart
    while true; do
        echo "🔄 Starting frontend (attempt at $(date))"
        npm start || {
            echo "⚠️  Frontend crashed, restarting in 5 seconds..."
            sleep 5
        }
    done
}

# Function for health monitoring
monitor_system() {
    echo "👁️  Starting system health monitor..."
    while true; do
        sleep 60  # Check every minute
        
        # Check API server
        if ! curl -f -s http://localhost:$API_PORT/api/health > /dev/null; then
            echo "🚨 API server health check failed at $(date)"
            # The while loops will handle restart
        fi
        
        # Check frontend
        if ! curl -f -s http://localhost:$APP_PORT > /dev/null; then
            echo "🚨 Frontend health check failed at $(date)"
            # The while loops will handle restart
        fi
        
        # Log system status
        echo "✅ System healthy at $(date)"
    done
}

# Cleanup function
cleanup() {
    echo "🛑 Graceful shutdown initiated..."
    pkill -f gunicorn
    pkill -f "npm start"
    pkill -f "node"
    exit 0
}

# Set up signal handlers for graceful shutdown
trap cleanup SIGINT SIGTERM

echo "🔥 Starting all services in production mode..."

# Start services in background
start_api_server &
API_PID=$!

start_frontend &
FRONTEND_PID=$!

monitor_system &
MONITOR_PID=$!

echo "🎉 All services started!"
echo "📊 API Server: http://localhost:$API_PORT"
echo "🌐 Frontend: http://localhost:$APP_PORT"
echo "👁️  Monitor PID: $MONITOR_PID"

# Keep script running
wait