# Python Dependency Update - Rollback Plan

## Overview

This document provides comprehensive rollback procedures in case the Python dependency update (Flask 3.x, Pandas 2.x, NumPy 2.x) causes issues in production.

---

## When to Rollback

Execute rollback procedures if you encounter:

### Critical Issues (Immediate Rollback)
- API server fails to start
- All endpoints return 500 errors
- Import errors preventing application launch
- Data corruption or calculation errors
- Security vulnerabilities introduced
- Complete loss of functionality

### Major Issues (Rollback Recommended)
- Multiple endpoints failing (>25%)
- Performance degradation >50%
- Memory leaks detected
- Frontend integration completely broken
- Rate limiting not working
- CORS failures blocking all requests

### Minor Issues (Rollback Optional)
- Single endpoint failures
- Performance degradation <25%
- Deprecation warnings (non-critical)
- Minor calculation discrepancies
- Occasional timeout errors

**Decision Rule:** If in doubt, rollback. Stability > Features.

---

## Pre-Rollback Checklist

Before rolling back, gather diagnostic information:

### 1. Capture Current State
```bash
# Save error logs
cd C:\Users\manna\Downloads\Website\api
python market-data.py > deployment-errors.log 2>&1 &
sleep 5
cat deployment-errors.log

# Save package versions
pip list > deployed-packages.txt

# Save API response examples
curl http://localhost:5001/health > health-response.txt 2>&1
curl http://localhost:5001/api/price/EURUSD > price-response.txt 2>&1
```

### 2. Document the Issue
Create incident report:
```bash
cat > incident-report.txt <<EOF
Deployment Rollback Incident Report
Date: $(date)
Time: $(date +%H:%M:%S)

Issue Description:
[Describe what went wrong]

Affected Endpoints:
[List failing endpoints]

Error Messages:
[Paste relevant errors]

Impact:
[User impact, downtime, etc.]

Decision: ROLLBACK
EOF
```

### 3. Notify Stakeholders
- Alert team of rollback decision
- Estimate downtime window (typically 5-10 minutes)
- Document expected restoration time

---

## Rollback Procedures

### Method 1: Automated Rollback (Recommended)

The `update-python-deps.sh` script creates automatic backups. Use these for quick rollback.

```bash
cd C:\Users\manna\Downloads\Website\api

# Stop running API server
# Find process
ps aux | grep market-data.py
# Kill process (replace PID)
kill <PID>

# Restore backup requirements
cp requirements.txt.backup requirements.txt

# Activate virtual environment
source venv/Scripts/activate  # Windows Git Bash
# OR
source venv/bin/activate      # Linux/Mac

# Force reinstall old versions
pip install --force-reinstall -r requirements.txt

# Verify rollback
pip list | grep -E "Flask|pandas|numpy"

# Expected output:
# Flask==2.3.3
# pandas==1.5.3
# numpy==1.24.3

# Restart API
python market-data.py
```

**Expected Duration:** 3-5 minutes

### Method 2: Manual Rollback (If Backup Missing)

If `requirements.txt.backup` is missing, manually specify old versions:

```bash
cd C:\Users\manna\Downloads\Website\api

# Create old requirements file
cat > requirements.old.txt <<EOF
# Core Framework - Flask 2.x (stable)
Flask==2.3.3
Flask-CORS==4.0.0
Flask-Limiter==3.5.0
Werkzeug==2.3.7

# API & Data
yfinance==0.2.28
requests==2.31.0
openai==1.3.0

# Data Processing - Old stable versions
numpy==1.24.3
pandas==1.5.3

# Infrastructure
python-dotenv==1.0.0
redis==4.6.0
gunicorn==21.2.0

# Security & Utilities
cryptography==41.0.4
certifi==2023.7.22
urllib3==2.0.4
EOF

# Install old versions
pip install -r requirements.old.txt

# Verify
pip list | grep Flask
# Should show Flask==2.3.3
```

### Method 3: Virtual Environment Restore

If virtual environment backup exists:

```bash
cd C:\Users\manna\Downloads\Website\api

# Remove current venv
rm -rf venv

# Restore backup venv
cp -r venv.backup venv

# Activate
source venv/Scripts/activate

# Verify
python -c "import flask; print(flask.__version__)"
# Should show 2.3.3

# Restart API
python market-data.py
```

### Method 4: Clean Reinstall

If all else fails, clean slate reinstall:

```bash
cd C:\Users\manna\Downloads\Website\api

# Remove virtual environment
rm -rf venv

# Create fresh venv
python -m venv venv
source venv/Scripts/activate

# Upgrade pip
pip install --upgrade pip

# Install old stable versions
pip install Flask==2.3.3 \
            Flask-CORS==4.0.0 \
            Flask-Limiter==3.5.0 \
            pandas==1.5.3 \
            numpy==1.24.3 \
            yfinance==0.2.28 \
            requests==2.31.0 \
            gunicorn==21.2.0 \
            python-dotenv==1.0.0 \
            redis==4.6.0

# Test import
python -c "import flask, pandas, numpy; print('OK')"

# Start API
python market-data.py
```

---

## Post-Rollback Verification

### 1. Version Verification
```bash
# Confirm old versions restored
pip list | grep -E "Flask|pandas|numpy|yfinance|gunicorn"

# Expected output:
Flask         2.3.3
pandas        1.5.3
numpy         1.24.3
yfinance      0.2.28
gunicorn      21.2.0
```

### 2. API Functionality Test
```bash
# Health check
curl http://localhost:5001/health
# Expected: {"status":"healthy",...}

# Price endpoint
curl http://localhost:5001/api/price/EURUSD
# Expected: Valid JSON with price data

# Analysis endpoint
curl http://localhost:5001/api/analysis/EURUSD
# Expected: Technical indicators data
```

### 3. Run Test Suite
```bash
cd C:\Users\manna\Downloads\Website
bash scripts/test-api-endpoints.sh

# Expected: All tests pass
```

### 4. Monitor Logs
```bash
# Check for errors
python market-data.py

# Should show:
# ✅ All dependencies available
# * Running on http://0.0.0.0:5001
# No error messages
```

---

## Known Issues & Solutions

### Issue 1: Pip Install Fails During Rollback
```
ERROR: Cannot uninstall 'numpy'. It is a distutils installed project...
```

**Solution:**
```bash
# Force uninstall
pip uninstall -y numpy pandas flask

# Reinstall clean
pip install --no-cache-dir -r requirements.txt.backup
```

### Issue 2: Virtual Environment Corrupted
```
ImportError: No module named 'flask'
```

**Solution:**
```bash
# Recreate virtual environment
rm -rf venv
python -m venv venv
source venv/Scripts/activate
pip install -r requirements.txt.backup
```

### Issue 3: Conflicting Dependencies
```
ERROR: pip's dependency resolver does not currently take into account...
```

**Solution:**
```bash
# Install dependencies one by one
pip install Flask==2.3.3
pip install pandas==1.5.3
pip install numpy==1.24.3
pip install -r requirements.txt.backup --no-deps
```

### Issue 4: API Won't Start After Rollback
```
Address already in use
```

**Solution:**
```bash
# Kill existing process
lsof -i :5001
kill -9 <PID>

# Or use different port
PORT=5002 python market-data.py
```

### Issue 5: Import Errors Persist
```
ImportError: cannot import name 'json' from 'flask'
```

**Solution:**
```bash
# Clear Python cache
find . -type d -name __pycache__ -exec rm -r {} +
find . -type f -name '*.pyc' -delete

# Reinstall Flask
pip uninstall flask -y
pip install Flask==2.3.3
```

---

## Rollback Validation Checklist

After rollback, verify:

### Critical Checks
- [ ] Flask version == 2.3.3
- [ ] Pandas version == 1.5.3
- [ ] NumPy version == 1.24.3
- [ ] API server starts without errors
- [ ] `/health` endpoint returns 200
- [ ] `/api/price/EURUSD` returns valid data

### Functional Checks
- [ ] All currency pairs return data
- [ ] Technical indicators calculate correctly
- [ ] Rate limiting functional
- [ ] CORS headers present
- [ ] Chart data endpoint works
- [ ] News endpoint works (if API key set)

### Performance Checks
- [ ] Response time <2s for fresh data
- [ ] No memory leaks (stable memory usage)
- [ ] CPU usage normal (<50% under load)
- [ ] Cache working (check `/health` cache_size)

### Integration Checks
- [ ] Frontend can connect to API
- [ ] No CORS errors in browser console
- [ ] Price updates display correctly
- [ ] Charts render properly

---

## Backup Procedures (Prevention)

To ensure successful rollback in future:

### 1. Always Create Backups Before Update
```bash
# Backup requirements
cp api/requirements.txt api/requirements.txt.$(date +%Y%m%d)

# Backup virtual environment
cp -r api/venv api/venv.$(date +%Y%m%d)

# Backup deployment logs
cp api/deployment.log api/deployment.$(date +%Y%m%d).log
```

### 2. Version Control
```bash
# Commit before update
git add api/requirements.txt
git commit -m "Pre-update: Flask 2.3.3, Pandas 1.5.3, NumPy 1.24.3"

# Tag the stable version
git tag -a stable-pre-python-update -m "Stable before Python update"
git push origin stable-pre-python-update
```

### 3. Document Known-Good State
```bash
# Save working package list
pip list > known-good-packages-$(date +%Y%m%d).txt

# Save API test results
bash scripts/test-api-endpoints.sh > test-results-baseline.txt
```

---

## Emergency Contacts

If rollback fails or you need assistance:

### Internal Resources
- **Deployment Guide**: `docs/PYTHON_DEPLOYMENT_GUIDE.md`
- **Test Scripts**: `scripts/test-api-endpoints.sh`
- **Compatibility Checker**: `scripts/check-python-compatibility.py`

### External Resources
- **Flask Documentation**: https://flask.palletsprojects.com/en/2.3.x/
- **Pandas 1.5.x Docs**: https://pandas.pydata.org/pandas-docs/version/1.5/
- **NumPy 1.24 Docs**: https://numpy.org/doc/1.24/

### Support Channels
- GitHub Issues (if applicable)
- Python Community Forums
- Stack Overflow (tag: flask, pandas, numpy)

---

## Post-Incident Actions

After successful rollback:

### 1. Root Cause Analysis
Document why the update failed:
- Which component caused the issue?
- Was it a code compatibility problem?
- Was it a configuration issue?
- Was it an external dependency problem?

### 2. Update Rollback Plan
Add any new issues encountered to this document.

### 3. Plan Re-Deployment
If the update is still necessary:
- Address the root cause
- Test in staging environment first
- Plan gradual rollout (canary deployment)
- Have 24/7 monitoring during re-deployment

### 4. Communicate Lessons Learned
Share with team:
- What went wrong
- How it was fixed
- How to prevent in future
- Updated deployment procedures

---

## Rollback Decision Matrix

| Issue Severity | Affected % | Response Time | Action |
|---------------|------------|---------------|---------|
| Critical | >75% | Immediate | ROLLBACK |
| High | 50-75% | <15 min | ROLLBACK |
| Medium | 25-50% | <30 min | Investigate, likely rollback |
| Low | <25% | <1 hour | Investigate, fix if possible |
| Minor | Individual features | <4 hours | Fix forward |

---

## Rollback Timeline

**Typical rollback duration: 5-10 minutes**

### Minute 0-2: Decision & Preparation
- Confirm rollback decision
- Notify team
- Gather diagnostic info
- Stop API server

### Minute 2-5: Execute Rollback
- Restore requirements.txt.backup
- Reinstall old packages
- Verify versions

### Minute 5-8: Verification
- Start API server
- Test critical endpoints
- Verify functionality

### Minute 8-10: Monitoring
- Monitor logs for errors
- Test frontend integration
- Confirm stable operation

---

## Success Criteria

Rollback is successful when:

- ✅ Flask 2.3.3 installed and verified
- ✅ Pandas 1.5.3 installed and verified
- ✅ NumPy 1.24.3 installed and verified
- ✅ API server starts without errors
- ✅ All endpoint tests pass
- ✅ Frontend integration working
- ✅ No error logs
- ✅ Performance within baseline
- ✅ System stable for 1 hour

---

## Prevention for Future Updates

### Staging Environment
- Always test updates in staging first
- Staging should mirror production exactly
- Run full test suite in staging
- Monitor staging for 24 hours before production

### Gradual Rollout
- Update one server at a time (if load balanced)
- Monitor each update for 15 minutes
- Keep old version running during rollout
- Have instant rollback ready

### Automated Testing
- Expand test coverage before updates
- Add integration tests
- Add performance benchmarks
- Add automated rollback triggers

### Monitoring
- Set up alerts for errors
- Monitor response times
- Track memory usage
- Watch for deprecation warnings

---

**Rollback Plan Version:** 1.0
**Last Updated:** 2025-10-20
**Maintained By:** Security Agent

---

*This rollback plan is part of the Python dependency update deployment strategy. Always keep this document up-to-date with lessons learned from actual rollback events.*
