#!/bin/bash

echo "========================================"
echo "Python Dependencies Complete Check Suite"
echo "========================================"
echo ""
echo "This script runs all dependency update checks:"
echo "  1. Compatibility check"
echo "  2. Update dependencies"
echo "  3. Test all API endpoints"
echo ""

# Set working directory
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
ROOT_DIR="$( cd "$SCRIPT_DIR/.." && pwd )"

echo "Working directory: $ROOT_DIR"
echo ""

# Step 1: Compatibility Check
echo "========================================"
echo "STEP 1: Compatibility Check"
echo "========================================"
echo ""
python "$SCRIPT_DIR/check-python-compatibility.py"
echo ""
read -p "Continue with update? (y/n): " -n 1 -r
echo ""
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Update cancelled by user."
    exit 0
fi
echo ""

# Step 2: Update Dependencies
echo "========================================"
echo "STEP 2: Update Dependencies"
echo "========================================"
echo ""
bash "$SCRIPT_DIR/update-python-deps.sh"
UPDATE_STATUS=$?

if [ $UPDATE_STATUS -ne 0 ]; then
    echo ""
    echo "❌ Update failed! Check logs above."
    echo "Dependencies have been rolled back automatically."
    exit 1
fi
echo ""

# Step 3: Ask to start API server
echo "========================================"
echo "STEP 3: API Server Testing"
echo "========================================"
echo ""
echo "The API server must be running to test endpoints."
echo ""
read -p "Do you have the API server running? (y/n): " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo ""
    echo "Please start the API server in another terminal:"
    echo "  cd $ROOT_DIR/api"
    echo "  python market-data.py"
    echo ""
    read -p "Press Enter when API server is running..."
fi
echo ""

# Step 4: Test API Endpoints
echo "========================================"
echo "STEP 4: Test All API Endpoints"
echo "========================================"
echo ""
bash "$SCRIPT_DIR/test-api-endpoints.sh"
TEST_STATUS=$?

echo ""
echo "========================================"
echo "Summary"
echo "========================================"
echo ""

if [ $TEST_STATUS -eq 0 ]; then
    echo "✅ All checks passed successfully!"
    echo ""
    echo "Next steps:"
    echo "  1. Review the deployment checklist:"
    echo "     $ROOT_DIR/docs/PYTHON_UPDATE_CHECKLIST.md"
    echo ""
    echo "  2. Review the security report:"
    echo "     $ROOT_DIR/docs/security/DEPENDENCY_UPDATE_REPORT.md"
    echo ""
    echo "  3. Deploy to staging for 24-48 hour burn-in"
    echo ""
    echo "  4. Deploy to production during low-traffic window"
    echo ""
    exit 0
else
    echo "❌ Some tests failed!"
    echo ""
    echo "Troubleshooting:"
    echo "  1. Check API server logs for errors"
    echo "  2. Verify all dependencies installed correctly"
    echo "  3. Review compatibility check results"
    echo "  4. Consider rolling back if issues persist"
    echo ""
    echo "Rollback command:"
    echo "  cd $ROOT_DIR/api"
    echo "  cp requirements.txt.backup requirements.txt"
    echo "  pip install -r requirements.txt --force-reinstall"
    echo ""
    exit 1
fi
