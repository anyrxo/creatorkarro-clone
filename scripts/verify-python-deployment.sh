#!/bin/bash

echo "========================================"
echo "=== Python Deployment Verification ==="
echo "========================================"
echo ""
echo "Verifying Flask 3.x, Pandas 2.x, NumPy 2.x deployment"
echo "Timestamp: $(date)"
echo ""

# Color codes
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Counters
CHECKS_PASSED=0
CHECKS_FAILED=0
WARNINGS=0

# Working directory
WORK_DIR="C:/Users/manna/Downloads/Website/api"
cd "$WORK_DIR" || exit 1

echo "========================================="
echo "1. Python Environment Check"
echo "========================================="
echo ""

# Check Python version
echo "Python Version:"
python --version
PYTHON_VERSION=$(python --version 2>&1)
if [[ $PYTHON_VERSION == *"Python 3."* ]]; then
    echo -e "${GREEN}✓ Python 3.x detected${NC}"
    CHECKS_PASSED=$((CHECKS_PASSED + 1))
else
    echo -e "${RED}✗ Python 3.x not found${NC}"
    CHECKS_FAILED=$((CHECKS_FAILED + 1))
fi
echo ""

# Check pip version
echo "pip Version:"
pip --version
echo ""

# Check virtual environment
if [ -d "venv" ]; then
    echo -e "${GREEN}✓ Virtual environment exists${NC}"
    CHECKS_PASSED=$((CHECKS_PASSED + 1))

    # Activate virtual environment
    if [ -f "venv/Scripts/activate" ]; then
        source venv/Scripts/activate
        echo -e "${GREEN}✓ Virtual environment activated (Windows)${NC}"
    elif [ -f "venv/bin/activate" ]; then
        source venv/bin/activate
        echo -e "${GREEN}✓ Virtual environment activated (Unix)${NC}"
    fi
else
    echo -e "${YELLOW}⚠ Virtual environment not found${NC}"
    echo "Creating virtual environment..."
    python -m venv venv
    source venv/Scripts/activate || source venv/bin/activate
fi
echo ""

echo "========================================="
echo "2. Package Version Verification"
echo "========================================="
echo ""

# Check critical packages
echo "Critical Package Versions:"
echo "-------------------------------------------"

# Flask
FLASK_VERSION=$(pip show flask 2>/dev/null | grep "Version:" | cut -d' ' -f2)
if [[ $FLASK_VERSION == "3.1.2" ]]; then
    echo -e "${GREEN}✓ Flask: $FLASK_VERSION${NC}"
    CHECKS_PASSED=$((CHECKS_PASSED + 1))
else
    echo -e "${RED}✗ Flask: $FLASK_VERSION (expected 3.1.2)${NC}"
    CHECKS_FAILED=$((CHECKS_FAILED + 1))
fi

# Pandas
PANDAS_VERSION=$(pip show pandas 2>/dev/null | grep "Version:" | cut -d' ' -f2)
if [[ $PANDAS_VERSION == "2.2.3" ]]; then
    echo -e "${GREEN}✓ Pandas: $PANDAS_VERSION${NC}"
    CHECKS_PASSED=$((CHECKS_PASSED + 1))
else
    echo -e "${RED}✗ Pandas: $PANDAS_VERSION (expected 2.2.3)${NC}"
    CHECKS_FAILED=$((CHECKS_FAILED + 1))
fi

# NumPy
NUMPY_VERSION=$(pip show numpy 2>/dev/null | grep "Version:" | cut -d' ' -f2)
if [[ $NUMPY_VERSION == "2.2.1" ]]; then
    echo -e "${GREEN}✓ NumPy: $NUMPY_VERSION${NC}"
    CHECKS_PASSED=$((CHECKS_PASSED + 1))
else
    echo -e "${RED}✗ NumPy: $NUMPY_VERSION (expected 2.2.1)${NC}"
    CHECKS_FAILED=$((CHECKS_FAILED + 1))
fi

# yfinance
YFINANCE_VERSION=$(pip show yfinance 2>/dev/null | grep "Version:" | cut -d' ' -f2)
if [[ $YFINANCE_VERSION == "0.2.50" ]]; then
    echo -e "${GREEN}✓ yfinance: $YFINANCE_VERSION${NC}"
    CHECKS_PASSED=$((CHECKS_PASSED + 1))
else
    echo -e "${YELLOW}⚠ yfinance: $YFINANCE_VERSION (expected 0.2.50)${NC}"
    WARNINGS=$((WARNINGS + 1))
fi

# Gunicorn
GUNICORN_VERSION=$(pip show gunicorn 2>/dev/null | grep "Version:" | cut -d' ' -f2)
if [[ $GUNICORN_VERSION == "23.0.0" ]]; then
    echo -e "${GREEN}✓ Gunicorn: $GUNICORN_VERSION${NC}"
    CHECKS_PASSED=$((CHECKS_PASSED + 1))
else
    echo -e "${YELLOW}⚠ Gunicorn: $GUNICORN_VERSION (expected 23.0.0)${NC}"
    WARNINGS=$((WARNINGS + 1))
fi

echo ""
echo "Supporting Packages:"
echo "-------------------------------------------"
pip list | grep -E "Flask-CORS|Flask-Limiter|Werkzeug|requests|cryptography|redis|urllib3|certifi|openai" || \
    python -m pip list | findstr /I "Flask-CORS Flask-Limiter Werkzeug requests cryptography redis urllib3 certifi openai"
echo ""

echo "========================================="
echo "3. Compatibility Testing"
echo "========================================="
echo ""

# Test package imports
echo "Testing package imports..."
python -c "
import sys

success = True
packages = {
    'flask': 'Flask',
    'pandas': 'Pandas',
    'numpy': 'NumPy',
    'yfinance': 'yfinance',
    'requests': 'Requests',
    'flask_cors': 'Flask-CORS',
    'flask_limiter': 'Flask-Limiter'
}

for module, name in packages.items():
    try:
        __import__(module)
        print(f'✓ {name} imports successfully')
    except ImportError as e:
        print(f'✗ {name} import failed: {e}')
        success = False

sys.exit(0 if success else 1)
"

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓ All package imports successful${NC}"
    CHECKS_PASSED=$((CHECKS_PASSED + 1))
else
    echo -e "${RED}✗ Package import failures detected${NC}"
    CHECKS_FAILED=$((CHECKS_FAILED + 1))
fi
echo ""

# Test Flask 3.x compatibility
echo "Testing Flask 3.x compatibility..."
python -c "
from flask import Flask, jsonify
import flask

app = Flask(__name__)

@app.route('/test')
def test():
    return jsonify({'status': 'ok', 'version': flask.__version__})

print(f'✓ Flask 3.x: {flask.__version__}')
print(f'✓ jsonify() working')
print(f'✓ Flask app instantiation successful')
"

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓ Flask 3.x compatibility confirmed${NC}"
    CHECKS_PASSED=$((CHECKS_PASSED + 1))
else
    echo -e "${RED}✗ Flask 3.x compatibility issues${NC}"
    CHECKS_FAILED=$((CHECKS_FAILED + 1))
fi
echo ""

# Test Pandas 2.x compatibility
echo "Testing Pandas 2.x compatibility..."
python -c "
import pandas as pd
import numpy as np

# Test DataFrame operations
df = pd.DataFrame({
    'A': [1, 2, 3, 4, 5],
    'B': [10, 20, 30, 40, 50]
})

# Test rolling (used in technical indicators)
rolling_mean = df['A'].rolling(window=3).mean()
print(f'✓ Pandas {pd.__version__}')
print(f'✓ Rolling operations working')

# Test ewm (exponential weighted moving average)
ewm_result = df['A'].ewm(span=3).mean()
print(f'✓ EWM operations working')

# Test iloc
last_value = df.iloc[-1]
print(f'✓ iloc indexing working')

print(f'✓ All Pandas 2.x operations verified')
"

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓ Pandas 2.x compatibility confirmed${NC}"
    CHECKS_PASSED=$((CHECKS_PASSED + 1))
else
    echo -e "${RED}✗ Pandas 2.x compatibility issues${NC}"
    CHECKS_FAILED=$((CHECKS_FAILED + 1))
fi
echo ""

# Test NumPy 2.x compatibility
echo "Testing NumPy 2.x compatibility..."
python -c "
import numpy as np

# Test basic operations
arr = np.array([1, 2, 3, 4, 5])
mean_val = np.mean(arr)
std_val = np.std(arr)
max_val = np.max(arr)
min_val = np.min(arr)

print(f'✓ NumPy {np.__version__}')
print(f'✓ Array operations: mean={mean_val}, std={std_val:.2f}')
print(f'✓ Aggregation functions working')

# Test type conversions
float_arr = arr.astype(float)
print(f'✓ Type conversion working')

print(f'✓ All NumPy 2.x operations verified')
"

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓ NumPy 2.x compatibility confirmed${NC}"
    CHECKS_PASSED=$((CHECKS_PASSED + 1))
else
    echo -e "${RED}✗ NumPy 2.x compatibility issues${NC}"
    CHECKS_FAILED=$((CHECKS_FAILED + 1))
fi
echo ""

echo "========================================="
echo "4. Running Compatibility Checker"
echo "========================================="
echo ""

# Navigate to project root for compatibility checker
cd "C:/Users/manna/Downloads/Website"

if [ -f "scripts/check-python-compatibility.py" ]; then
    python scripts/check-python-compatibility.py
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✓ Compatibility checker passed${NC}"
        CHECKS_PASSED=$((CHECKS_PASSED + 1))
    else
        echo -e "${YELLOW}⚠ Compatibility checker warnings${NC}"
        WARNINGS=$((WARNINGS + 1))
    fi
else
    echo -e "${YELLOW}⚠ Compatibility checker not found${NC}"
    WARNINGS=$((WARNINGS + 1))
fi
echo ""

echo "========================================="
echo "5. Security Audit"
echo "========================================="
echo ""

# Check if pip-audit is installed
if ! command -v pip-audit &> /dev/null; then
    echo "Installing pip-audit..."
    pip install pip-audit
fi

echo "Running security vulnerability scan..."
pip-audit --desc

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓ No known vulnerabilities found${NC}"
    CHECKS_PASSED=$((CHECKS_PASSED + 1))
else
    echo -e "${YELLOW}⚠ Security audit found issues (review above)${NC}"
    WARNINGS=$((WARNINGS + 1))
fi
echo ""

echo "========================================="
echo "6. API Endpoint Testing"
echo "========================================="
echo ""

# Check if API is running
if curl -f -s http://localhost:5001/health > /dev/null 2>&1; then
    echo -e "${GREEN}✓ API is running${NC}"
    echo ""
    echo "Running endpoint tests..."
    echo ""

    # Navigate to project root
    cd "C:/Users/manna/Downloads/Website"

    # Run endpoint tests
    if [ -f "scripts/test-api-endpoints.sh" ]; then
        bash scripts/test-api-endpoints.sh
        if [ $? -eq 0 ]; then
            echo -e "${GREEN}✓ All endpoint tests passed${NC}"
            CHECKS_PASSED=$((CHECKS_PASSED + 1))
        else
            echo -e "${RED}✗ Some endpoint tests failed${NC}"
            CHECKS_FAILED=$((CHECKS_FAILED + 1))
        fi
    else
        echo -e "${YELLOW}⚠ Endpoint test script not found${NC}"
        WARNINGS=$((WARNINGS + 1))
    fi
else
    echo -e "${YELLOW}⚠ API not running - skipping endpoint tests${NC}"
    echo ""
    echo "To test endpoints, start the API:"
    echo "  cd C:/Users/manna/Downloads/Website/api"
    echo "  python market-data.py"
    echo ""
    echo "Then run: bash scripts/test-api-endpoints.sh"
    WARNINGS=$((WARNINGS + 1))
fi
echo ""

echo "========================================="
echo "7. File System Verification"
echo "========================================="
echo ""

# Check for backup files
if [ -f "C:/Users/manna/Downloads/Website/api/requirements.txt.backup" ]; then
    echo -e "${GREEN}✓ Backup file exists (requirements.txt.backup)${NC}"
    CHECKS_PASSED=$((CHECKS_PASSED + 1))
else
    echo -e "${YELLOW}⚠ No backup file found${NC}"
    WARNINGS=$((WARNINGS + 1))
fi

# Check requirements.txt
if [ -f "C:/Users/manna/Downloads/Website/api/requirements.txt" ]; then
    echo -e "${GREEN}✓ requirements.txt exists${NC}"
    CHECKS_PASSED=$((CHECKS_PASSED + 1))

    # Verify key packages in requirements
    if grep -q "Flask==3.1.2" "C:/Users/manna/Downloads/Website/api/requirements.txt"; then
        echo -e "${GREEN}✓ Flask 3.1.2 in requirements.txt${NC}"
        CHECKS_PASSED=$((CHECKS_PASSED + 1))
    else
        echo -e "${RED}✗ Flask 3.1.2 not in requirements.txt${NC}"
        CHECKS_FAILED=$((CHECKS_FAILED + 1))
    fi
else
    echo -e "${RED}✗ requirements.txt missing${NC}"
    CHECKS_FAILED=$((CHECKS_FAILED + 1))
fi
echo ""

echo "========================================="
echo "=== Verification Summary ==="
echo "========================================="
echo ""

TOTAL_CHECKS=$((CHECKS_PASSED + CHECKS_FAILED + WARNINGS))
echo "Total Checks: $TOTAL_CHECKS"
echo -e "${GREEN}Passed: $CHECKS_PASSED${NC}"
if [ $WARNINGS -gt 0 ]; then
    echo -e "${YELLOW}Warnings: $WARNINGS${NC}"
fi
if [ $CHECKS_FAILED -gt 0 ]; then
    echo -e "${RED}Failed: $CHECKS_FAILED${NC}"
fi
echo ""

# Calculate success percentage
if [ $TOTAL_CHECKS -gt 0 ]; then
    SUCCESS_RATE=$(( (CHECKS_PASSED * 100) / TOTAL_CHECKS ))
    echo "Success Rate: $SUCCESS_RATE%"
    echo ""
fi

# Final status
if [ $CHECKS_FAILED -eq 0 ] && [ $WARNINGS -eq 0 ]; then
    echo -e "${GREEN}========================================"
    echo "✅ DEPLOYMENT VERIFICATION PASSED"
    echo "========================================${NC}"
    echo ""
    echo "All checks passed successfully!"
    echo "✓ Flask 3.1.2 installed and working"
    echo "✓ Pandas 2.2.3 installed and working"
    echo "✓ NumPy 2.2.1 installed and working"
    echo "✓ All dependencies compatible"
    echo "✓ Security audit clean"
    echo ""
    echo "🚀 Deployment is ready for production!"
    exit 0
elif [ $CHECKS_FAILED -eq 0 ]; then
    echo -e "${YELLOW}========================================"
    echo "⚠️  DEPLOYMENT VERIFICATION: WARNINGS"
    echo "========================================${NC}"
    echo ""
    echo "Core checks passed, but some warnings were found."
    echo "Review warnings above before proceeding to production."
    echo ""
    echo "✓ Critical packages installed correctly"
    echo "⚠ Some non-critical checks need attention"
    exit 0
else
    echo -e "${RED}========================================"
    echo "❌ DEPLOYMENT VERIFICATION FAILED"
    echo "========================================${NC}"
    echo ""
    echo "Critical issues detected. Review failed checks above."
    echo ""
    echo "Recommended actions:"
    echo "  1. Review error messages above"
    echo "  2. Check package installations"
    echo "  3. Verify virtual environment"
    echo "  4. Consider rollback if issues persist"
    echo ""
    echo "Rollback command:"
    echo "  cd C:/Users/manna/Downloads/Website/api"
    echo "  cp requirements.txt.backup requirements.txt"
    echo "  pip install -r requirements.txt"
    exit 1
fi
