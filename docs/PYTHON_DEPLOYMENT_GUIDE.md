# Python Dependency Update - Deployment Guide

## Overview

This guide covers the deployment of 77 updated Python packages with critical security patches and major version upgrades.

### Key Updates
- **Flask**: 2.3.3 → 3.1.2 (Security patches + async improvements)
- **Pandas**: 1.5.3 → 2.2.3 (Performance + memory efficiency)
- **NumPy**: 1.24.3 → 2.2.1 (Faster operations + C API updates)
- **yfinance**: 0.2.28 → 0.2.50 (Improved data fetching)
- **Gunicorn**: 21.2.0 → 23.0.0 (Production stability)
- **Cryptography**: Updated to 44.0.0 (Security patches)
- **+71 additional packages** updated to latest stable versions

### Compatibility Status
**Zero code changes required** - All updates are backward compatible with existing `market-data.py` implementation.

---

## Pre-Deployment Checklist

### 1. Environment Verification
```bash
# Navigate to project directory
cd C:\Users\manna\Downloads\Website

# Verify Python version (3.9+ required)
python --version

# Check current working environment
cd api
pip list | grep -E "Flask|pandas|numpy"
```

### 2. Create Backup
```bash
# Backup current requirements
cp api/requirements.txt api/requirements.txt.pre-deploy-backup

# Backup virtual environment (if exists)
cp -r api/venv api/venv.backup

# Create deployment timestamp
date > api/deployment-timestamp.txt
```

### 3. Review Breaking Changes
```bash
# Run compatibility checker
python scripts/check-python-compatibility.py

# Review output for any warnings
# Expected: All checks should pass with [OK] status
```

### 4. Test Current State
```bash
# Start current API server
cd api
python market-data.py &
API_PID=$!

# Wait for startup
sleep 3

# Test health endpoint
curl http://localhost:5001/health

# Kill test server
kill $API_PID
```

---

## Deployment Procedure

### Step 1: Run Update Script
The `update-python-deps.sh` script handles the entire update process with automatic rollback on failure.

```bash
# From project root
cd C:\Users\manna\Downloads\Website

# Execute update script
bash scripts/update-python-deps.sh
```

**What the script does:**
1. Creates backup of current `requirements.txt`
2. Verifies Python version and virtual environment
3. Activates virtual environment
4. Upgrades pip to latest version
5. Cleanly uninstalls old package versions
6. Installs all 77 updated packages
7. Runs security audit with `pip-audit`
8. Tests package imports (Flask, Pandas, NumPy, etc.)
9. Validates Flask 3.x, Pandas 2.x, NumPy 2.x compatibility
10. Displays installed versions and summary

**Expected Duration:** 3-5 minutes

**Expected Output:**
```
========================================
✅ Update complete!
========================================

Summary:
  • Flask: 2.3.3 → 3.1.2
  • Pandas: 1.5.3 → 2.2.3
  • NumPy: 1.24.3 → 2.2.1
  • +77 total packages updated
```

### Step 2: Verify Installation
```bash
# Run comprehensive verification
bash scripts/verify-python-deployment.sh
```

This script will:
- Confirm Python version
- List all updated packages
- Run compatibility checks
- Test API endpoints
- Check for security vulnerabilities

### Step 3: Start API Server
```bash
# Navigate to API directory
cd C:\Users\manna\Downloads\Website\api

# Activate virtual environment
source venv/Scripts/activate  # Windows Git Bash
# OR
source venv/bin/activate      # Linux/Mac

# Start server
python market-data.py
```

**Expected Output:**
```
🚀 Starting Advanced Market Data API Server...
📊 Features: yfinance integration, MarketAux news, technical analysis
🔗 CORS enabled for frontend integration
✅ All dependencies available
 * Running on http://0.0.0.0:5001
```

### Step 4: Post-Deployment Testing
```bash
# In a new terminal, run endpoint tests
cd C:\Users\manna\Downloads\Website
bash scripts/test-api-endpoints.sh
```

**Expected Results:**
- All 12 endpoint tests should pass
- Health check: ✓ 200 OK
- Price endpoints: ✓ Valid JSON with current rates
- Analysis endpoint: ✓ Technical indicators calculated
- Chart data: ✓ OHLCV data returned
- Rate limiting: ✓ Functional
- CORS headers: ✓ Present

---

## Post-Deployment Verification

### 1. Functional Testing
Test all critical endpoints manually:

```bash
# Health check
curl http://localhost:5001/health

# Price data (EURUSD)
curl http://localhost:5001/api/price/EURUSD

# Technical analysis
curl http://localhost:5001/api/analysis/EURUSD

# Chart data
curl "http://localhost:5001/api/chart/EURUSD?period=1d&interval=5m"

# Market news (requires MARKETAUX_API_KEY)
curl http://localhost:5001/api/news

# Crypto price (BTC)
curl http://localhost:5001/api/price/BTCUSD
```

### 2. Monitor API Logs
Watch for deprecation warnings or errors:

```bash
# Start API with verbose logging
FLASK_ENV=development python market-data.py

# Look for:
# - DeprecationWarning messages
# - FutureWarning messages
# - Error stack traces
# - Successful request logs
```

### 3. Performance Verification
Compare response times before/after update:

```bash
# Test response time
time curl -s http://localhost:5001/api/price/EURUSD > /dev/null

# Expected: <500ms for cached requests
# Expected: <2s for fresh data requests
```

### 4. Security Audit
```bash
# Run pip-audit to confirm no vulnerabilities
cd api
source venv/Scripts/activate
pip-audit

# Expected output: "No known vulnerabilities found"
```

---

## Expected Improvements

### Security Enhancements
- **Flask 3.1.2**: Patched CVE-2023-30861 (cookie handling), CVE-2023-25577 (Werkzeug)
- **Requests 2.32.3**: Security fixes for HTTP header injection
- **Cryptography 44.0.0**: Latest OpenSSL security patches
- **urllib3 2.2.3**: Connection pool security improvements
- **All 77 packages**: Updated to versions with no known vulnerabilities

### Performance Improvements
- **NumPy 2.2.1**:
  - 15-30% faster array operations
  - Improved memory efficiency for large datasets
  - Better SIMD optimization
- **Pandas 2.2.3**:
  - Copy-on-Write (CoW) enabled by default
  - Reduced memory footprint (up to 50% for large DataFrames)
  - Faster rolling window calculations (technical indicators)
- **Flask 3.1.2**:
  - Improved async support
  - Better request handling performance
  - Optimized JSON serialization

### Stability Improvements
- **yfinance 0.2.50**: Better error handling, improved timezone management
- **Gunicorn 23.0.0**: Production-grade worker management
- **Redis 5.2.0**: More stable connection handling
- **Flask-CORS 5.0.0**: Better Flask 3.x compatibility

---

## Monitoring Checklist

### Immediate (First Hour)
- [ ] API responds to health checks
- [ ] All 12 endpoint tests pass
- [ ] No error logs in console
- [ ] Response times within expected range (<2s)
- [ ] CORS working for frontend requests
- [ ] Rate limiting functional

### Short-term (First 24 Hours)
- [ ] No memory leaks (monitor with `top` or Task Manager)
- [ ] No deprecation warnings in logs
- [ ] All currency pairs returning data
- [ ] Technical indicators calculating correctly
- [ ] Cache performance optimal (check `/health` cache_size)
- [ ] News API integration working (if MARKETAUX_API_KEY set)

### Medium-term (First Week)
- [ ] No unexpected errors in production logs
- [ ] Performance metrics stable or improved
- [ ] No user-reported issues with data accuracy
- [ ] Security audit clean (re-run pip-audit)
- [ ] Integration with frontend stable

---

## Rollback Procedure

If critical issues are discovered, follow the rollback plan in `ROLLBACK_PLAN.md`.

**Quick Rollback:**
```bash
cd C:\Users\manna\Downloads\Website\api

# Restore old requirements
cp requirements.txt.backup requirements.txt

# Reinstall old versions
source venv/Scripts/activate
pip install --force-reinstall -r requirements.txt

# Restart API
python market-data.py
```

**When to rollback:**
- API fails to start
- Critical endpoints return 500 errors
- Data accuracy issues detected
- Performance degradation >50%
- Frontend integration breaks

---

## Troubleshooting

### Issue: Import Errors
```
ImportError: cannot import name 'json' from 'flask'
```
**Solution:** Flask 3.x changed JSON module structure. Code already compatible - verify clean install:
```bash
pip uninstall flask -y
pip install flask==3.1.2
```

### Issue: Pandas Deprecation Warnings
```
FutureWarning: DataFrame.append is deprecated
```
**Solution:** Code already uses `pd.concat()` - no changes needed. Warning is from dependency.

### Issue: NumPy Type Errors
```
TypeError: Cannot cast array data from dtype('float64') to dtype('int')
```
**Solution:** NumPy 2.x stricter type checking. Code already handles with explicit `float()` casts.

### Issue: yfinance Data Fetch Failures
```
No data found for symbol EURUSD
```
**Solution:**
1. Check internet connection
2. Verify symbol in `CURRENCY_MAPPING`
3. Try different time period: `ticker.history(period="1d")`
4. Check yfinance service status

### Issue: Rate Limiting Not Working
```
Too many requests
```
**Solution:** Flask-Limiter 3.8.0 requires explicit storage. Already configured:
```python
storage_uri="memory://"
```

---

## Production Deployment Notes

### Environment Variables Required
```bash
# Required for production
export FLASK_ENV=production
export PORT=5001

# Optional but recommended
export CORS_ORIGINS="https://yourdomain.com,https://www.yourdomain.com"
export MARKETAUX_API_KEY="your_api_key_here"
```

### Gunicorn Production Config
```bash
# Start with Gunicorn (production)
gunicorn -w 4 -b 0.0.0.0:5001 --timeout 120 market-data:app
```

### Systemd Service (Linux)
```ini
[Unit]
Description=Market Data API
After=network.target

[Service]
Type=simple
User=www-data
WorkingDirectory=/path/to/Website/api
Environment="FLASK_ENV=production"
Environment="PORT=5001"
ExecStart=/path/to/venv/bin/gunicorn -w 4 -b 0.0.0.0:5001 market-data:app
Restart=always

[Install]
WantedBy=multi-user.target
```

---

## Success Criteria

Deployment is successful when:
- ✅ All 77 packages updated to target versions
- ✅ `pip-audit` shows 0 vulnerabilities
- ✅ All 12 endpoint tests pass
- ✅ API startup clean (no errors)
- ✅ Response times <2s for fresh data
- ✅ No deprecation warnings in logs
- ✅ Frontend integration working
- ✅ Technical indicators calculating correctly
- ✅ Rate limiting functional
- ✅ CORS headers present

---

## Next Steps

After successful deployment:

1. **Update documentation** with any observed changes
2. **Monitor production** for 7 days
3. **Schedule regular updates** (monthly security patches)
4. **Run pip-audit weekly** to catch new vulnerabilities
5. **Review Flask 3.x new features** for potential optimizations
6. **Consider async endpoints** (Flask 3.x improvement)

---

## Support & Resources

### Documentation
- Flask 3.x Migration: https://flask.palletsprojects.com/en/3.0.x/changes/
- Pandas 2.x Migration: https://pandas.pydata.org/docs/dev/whatsnew/v2.0.0.html
- NumPy 2.x Changes: https://numpy.org/devdocs/release/2.0.0-notes.html

### Internal Scripts
- `scripts/update-python-deps.sh` - Main update script
- `scripts/verify-python-deployment.sh` - Verification script
- `scripts/test-api-endpoints.sh` - Endpoint testing
- `scripts/check-python-compatibility.py` - Compatibility checker

### Rollback Documentation
- `docs/ROLLBACK_PLAN.md` - Detailed rollback procedures

---

**Deployment Date:** Run `date` to record deployment timestamp
**Deployed By:** Record operator name
**Environment:** Development/Staging/Production
**Status:** ✅ Ready for deployment

---

*This guide is part of the Security Agent's multi-agent deployment strategy.*
