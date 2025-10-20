# Python Deployment - Quick Reference Card

## Overview
**Update:** Flask 3.1.2, Pandas 2.2.3, NumPy 2.2.1 + 74 other packages
**Duration:** 5 minutes deployment + 1 hour monitoring
**Risk:** Low (zero code changes needed)

---

## Quick Commands

### Deploy
```bash
cd C:\Users\manna\Downloads\Website
bash scripts/update-python-deps.sh
```

### Verify
```bash
bash scripts/verify-python-deployment.sh
```

### Test
```bash
bash scripts/test-api-endpoints.sh
```

### Rollback
```bash
cd C:\Users\manna\Downloads\Website\api
cp requirements.txt.backup requirements.txt
pip install --force-reinstall -r requirements.txt
python market-data.py
```

---

## Expected Versions

| Package | Version |
|---------|---------|
| Flask | 3.1.2 |
| Pandas | 2.2.3 |
| NumPy | 2.2.1 |
| yfinance | 0.2.50 |
| Gunicorn | 23.0.0 |

Verify: `pip list | grep -E "Flask|pandas|numpy"`

---

## Critical Checks

### Health Check
```bash
curl http://localhost:5001/health
# Expected: {"status":"healthy",...}
```

### Quick Test
```bash
curl http://localhost:5001/api/price/EURUSD
# Expected: Valid JSON with price data
```

### Version Check
```bash
python -c "import flask, pandas, numpy; print(f'Flask: {flask.__version__}, Pandas: {pandas.__version__}, NumPy: {numpy.__version__}')"
# Expected: Flask: 3.1.2, Pandas: 2.2.3, NumPy: 2.2.1
```

---

## When to Rollback

**Immediately rollback if:**
- ❌ API won't start
- ❌ All endpoints return 500
- ❌ Import errors
- ❌ Data accuracy issues
- ❌ Performance >50% worse

**Investigate (maybe rollback) if:**
- ⚠️ Some endpoints failing
- ⚠️ Performance 25-50% worse
- ⚠️ Frontend integration issues
- ⚠️ Rate limiting broken

**Monitor (don't rollback) if:**
- ℹ️ Deprecation warnings (non-critical)
- ℹ️ Single endpoint slow
- ℹ️ Minor performance change

---

## First Hour Monitoring

**Every 5 minutes:**
```bash
# Health check
curl http://localhost:5001/health

# Memory check
ps aux | grep market-data.py
```

**Every 15 minutes:**
```bash
# Full endpoint test
bash scripts/test-api-endpoints.sh
```

**Watch logs:**
```bash
tail -f deployment-monitor.log | grep -i error
```

---

## Success Criteria

✅ All packages installed (77 total)
✅ pip-audit shows 0 vulnerabilities
✅ API starts without errors
✅ All 12 endpoint tests pass
✅ Response times <2s
✅ No error logs
✅ CORS working
✅ Rate limiting working

---

## Troubleshooting

### API won't start
```bash
# Check logs
python market-data.py

# Common fix: recreate venv
rm -rf venv
python -m venv venv
source venv/Scripts/activate
pip install -r requirements.txt
```

### Import errors
```bash
# Clear cache
find . -name __pycache__ -exec rm -r {} +

# Reinstall problem package
pip uninstall flask -y
pip install Flask==3.1.2
```

### "No data found" errors
```bash
# Test yfinance directly
python -c "import yfinance as yf; print(yf.Ticker('EURUSD=X').history(period='1d'))"

# Usually resolves itself (API rate limiting)
```

---

## Documentation

- **Full Guide:** `docs/PYTHON_DEPLOYMENT_GUIDE.md`
- **Rollback:** `docs/ROLLBACK_PLAN.md`
- **Monitoring:** `docs/POST_DEPLOYMENT_MONITORING.md`
- **Summary:** `docs/DEPLOYMENT_SUMMARY.md`

---

## Emergency Contacts

**Scripts Location:** `C:\Users\manna\Downloads\Website\scripts\`
**Docs Location:** `C:\Users\manna\Downloads\Website\docs\`
**API Location:** `C:\Users\manna\Downloads\Website\api\`

---

## Performance Targets

| Metric | Target |
|--------|--------|
| Health check | <100ms |
| Price endpoint (cached) | <500ms |
| Price endpoint (fresh) | <2s |
| Analysis endpoint | <3s |
| Chart data | <2s |
| Memory usage | <300 MB |
| Error rate | <1% |
| Uptime | >99.9% |

---

## Security

**Before deployment:**
```bash
pip-audit  # Should show vulnerabilities
```

**After deployment:**
```bash
pip-audit  # Should show: "No known vulnerabilities found"
```

**Expected:** 15+ vulnerabilities patched

---

## Key Files

### Backup Files (auto-created)
- `api/requirements.txt.backup` - Old package versions
- `api/venv.backup` - Old virtual environment (if created)

### Log Files
- `deployment-monitor.log` - API runtime logs
- `deployed-packages.txt` - Package list snapshot
- `monitoring-*.log` - Automated monitoring logs

### Config Files
- `api/requirements.txt` - Updated package list
- `api/.env` - Environment variables (CORS, API keys)

---

## Timeline

**T+0 min:** Start deployment
**T+5 min:** Deployment complete, verify
**T+10 min:** Testing complete
**T+60 min:** Initial monitoring complete
**T+24 hrs:** Short-term monitoring complete
**T+7 days:** Medium-term monitoring complete
**T+30 days:** Final sign-off

---

## One-Liner Checks

```bash
# Full deployment in one command (with monitoring)
cd C:\Users\manna\Downloads\Website && \
bash scripts/update-python-deps.sh && \
bash scripts/verify-python-deployment.sh && \
bash scripts/test-api-endpoints.sh

# Quick health check
curl -s http://localhost:5001/health | python -m json.tool

# Package versions
pip list | grep -E "Flask|pandas|numpy|yfinance|gunicorn"

# Memory usage
ps aux | grep market-data.py | awk '{print $6/1024 " MB"}'

# Error count (last 100 lines)
tail -100 deployment-monitor.log | grep -i error | wc -l
```

---

## Pre-Flight Checklist

Before deployment:
- [ ] Read PYTHON_DEPLOYMENT_GUIDE.md
- [ ] Test current API state
- [ ] Create backups (auto-done by script)
- [ ] Notify team
- [ ] Clear calendar for 1 hour monitoring

---

## Post-Flight Checklist

After deployment:
- [ ] All tests pass
- [ ] No errors in logs
- [ ] Response times good
- [ ] Memory usage normal
- [ ] Frontend working
- [ ] Document deployment time

---

**Print this card and keep it handy during deployment!**

---

*Last Updated: 2025-10-20 | Version: 1.0*
