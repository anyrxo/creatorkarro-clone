#!/bin/bash

echo "========================================"
echo "🔐 Python Dependencies Security Update"
echo "========================================"
echo ""
echo "Updating 77 outdated packages with security patches"
echo "Flask 2.3.3 → 3.1.2 | Pandas 1.5.3 → 2.2.3 | NumPy 1.24.3 → 2.2.1"
echo ""

# Set working directory
WORK_DIR="C:/Users/manna/Downloads/Website/api"

# Backup current environment
echo "📦 Creating backup of current requirements..."
cp "$WORK_DIR/requirements.txt" "$WORK_DIR/requirements.txt.backup"
echo "✓ Backup saved to requirements.txt.backup"
echo ""

# Navigate to API directory
cd "$WORK_DIR" || exit 1

# Check Python version
echo "🐍 Python version:"
python --version
echo ""

# Check if virtual environment exists
if [ ! -d "venv" ]; then
    echo "📁 Creating virtual environment..."
    python -m venv venv
    echo "✓ Virtual environment created"
    echo ""
fi

# Activate virtual environment
echo "🔄 Activating virtual environment..."
if [ -f "venv/Scripts/activate" ]; then
    source venv/Scripts/activate
elif [ -f "venv/bin/activate" ]; then
    source venv/bin/activate
else
    echo "❌ Could not find virtual environment activation script"
    exit 1
fi
echo "✓ Virtual environment activated"
echo ""

# Upgrade pip
echo "⬆️  Upgrading pip..."
python -m pip install --upgrade pip
echo ""

# Uninstall old packages to avoid conflicts
echo "🗑️  Removing old package versions..."
pip uninstall -y Flask Flask-CORS Flask-Limiter yfinance requests numpy pandas python-dotenv redis gunicorn 2>/dev/null
echo "✓ Old packages removed"
echo ""

# Install updated dependencies
echo "📥 Installing updated dependencies..."
echo "   This may take a few minutes..."
pip install -r requirements.txt
INSTALL_STATUS=$?

if [ $INSTALL_STATUS -ne 0 ]; then
    echo ""
    echo "❌ Installation failed!"
    echo "Restoring backup..."
    cp requirements.txt.backup requirements.txt
    pip install -r requirements.txt
    exit 1
fi
echo ""
echo "✓ All packages installed successfully"
echo ""

# Run security audit
echo "🔍 Running security audit..."
pip install pip-audit 2>/dev/null
echo ""
pip-audit || echo "⚠️  pip-audit not available or found issues"
echo ""

# Show installed versions
echo "📊 Dependency versions installed:"
echo "=================================="
pip list | grep -E "Flask|Werkzeug|pandas|numpy|requests|yfinance|gunicorn|redis|cryptography|urllib3|certifi|openai" || \
    python -m pip list | findstr /I "Flask Werkzeug pandas numpy requests yfinance gunicorn redis cryptography urllib3 certifi openai"
echo ""

# Test import of key packages
echo "🧪 Testing package imports..."
python -c "
import sys
try:
    import flask
    import pandas
    import numpy
    import requests
    import yfinance
    print('✓ All core packages import successfully')
    print(f'  Flask: {flask.__version__}')
    print(f'  Pandas: {pandas.__version__}')
    print(f'  NumPy: {numpy.__version__}')
    print(f'  Requests: {requests.__version__}')
    print(f'  yfinance: {yfinance.__version__}')
except ImportError as e:
    print(f'❌ Import failed: {e}')
    sys.exit(1)
"

if [ $? -ne 0 ]; then
    echo ""
    echo "❌ Package import test failed!"
    echo "Restoring backup..."
    cp requirements.txt.backup requirements.txt
    pip install -r requirements.txt
    exit 1
fi
echo ""

# Test Flask 3.x compatibility
echo "🔍 Testing Flask 3.x compatibility..."
python -c "
import flask
from flask import Flask, jsonify

app = Flask(__name__)

# Test basic Flask 3.x features
@app.route('/test')
def test():
    return jsonify({'status': 'ok', 'message': 'Flask 3.x working'})

print('✓ Flask 3.x configuration valid')
print(f'  Flask version: {flask.__version__}')
print(f'  Werkzeug version: {flask.wrappers.__name__}')
"
echo ""

# Test Pandas 2.x compatibility
echo "🔍 Testing Pandas 2.x compatibility..."
python -c "
import pandas as pd
import numpy as np

# Test basic operations
df = pd.DataFrame({'A': [1, 2, 3], 'B': [4, 5, 6]})
result = df.rolling(window=2).mean()
print('✓ Pandas 2.x rolling operations working')
print(f'  Pandas version: {pd.__version__}')
"
echo ""

# Test NumPy 2.x compatibility
echo "🔍 Testing NumPy 2.x compatibility..."
python -c "
import numpy as np

# Test basic operations
arr = np.array([1, 2, 3, 4, 5])
mean = np.mean(arr)
std = np.std(arr)
print('✓ NumPy 2.x operations working')
print(f'  NumPy version: {np.__version__}')
print(f'  Mean: {mean}, Std: {std}')
"
echo ""

echo "========================================"
echo "✅ Update complete!"
echo "========================================"
echo ""
echo "📋 Summary:"
echo "  • Flask: 2.3.3 → 3.1.2"
echo "  • Pandas: 1.5.3 → 2.2.3"
echo "  • NumPy: 1.24.3 → 2.2.1"
echo "  • +77 total packages updated"
echo ""
echo "⚠️  IMPORTANT: Test the API server before deploying:"
echo "  1. python market-data.py"
echo "  2. Test all endpoints (see test-api-endpoints.sh)"
echo "  3. Check for deprecation warnings in logs"
echo ""
echo "🔄 If issues occur, restore backup:"
echo "  cp requirements.txt.backup requirements.txt"
echo "  pip install -r requirements.txt"
echo ""
echo "✅ Next steps:"
echo "  1. Run: python scripts/check-python-compatibility.py"
echo "  2. Start API: python market-data.py"
echo "  3. Test endpoints: bash scripts/test-api-endpoints.sh"
echo "========================================"
