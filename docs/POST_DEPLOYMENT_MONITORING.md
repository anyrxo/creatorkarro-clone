# Python Deployment - Post-Deployment Monitoring Checklist

## Overview

This document provides comprehensive monitoring procedures for the Python dependency update deployment (Flask 3.1.2, Pandas 2.2.3, NumPy 2.2.1).

**Purpose:** Ensure the deployment is stable, secure, and performing as expected.

**Monitoring Periods:**
- **Immediate** (0-1 hour): Critical functionality
- **Short-term** (1-24 hours): Stability and performance
- **Medium-term** (1-7 days): Long-term stability
- **Long-term** (7-30 days): Baseline establishment

---

## Immediate Monitoring (First Hour)

Execute these checks within 1 hour of deployment.

### 1. API Health Check
**Priority:** CRITICAL
**Frequency:** Every 5 minutes for first hour

```bash
# Health endpoint
curl -s http://localhost:5001/health | python -m json.tool

# Expected response:
{
  "status": "healthy",
  "timestamp": "2025-10-20T...",
  "cache_size": 0
}

# Status code should be 200
curl -s -o /dev/null -w "%{http_code}" http://localhost:5001/health
# Expected: 200
```

**Success Criteria:**
- [ ] Status: "healthy"
- [ ] Response time <100ms
- [ ] HTTP 200 status code
- [ ] Valid JSON response

**If Failed:** Execute immediate rollback (see ROLLBACK_PLAN.md)

---

### 2. Critical Endpoint Testing
**Priority:** CRITICAL
**Frequency:** Once immediately, then every 15 minutes

```bash
# Test all critical endpoints
cd C:\Users\manna\Downloads\Website

# Run full test suite
bash scripts/test-api-endpoints.sh

# Expected: All 12 tests pass
```

**Critical Endpoints to Monitor:**

#### Price Endpoint (EURUSD)
```bash
curl -s http://localhost:5001/api/price/EURUSD
```
**Expected:**
- [ ] HTTP 200
- [ ] Valid JSON with 'price', 'change', 'change_pct'
- [ ] Price value is numeric
- [ ] Response time <2s

#### Technical Analysis Endpoint
```bash
curl -s http://localhost:5001/api/analysis/EURUSD
```
**Expected:**
- [ ] HTTP 200
- [ ] Contains 'indicators' object
- [ ] RSI, MACD, Bollinger Bands present
- [ ] All values are numeric (not NaN)
- [ ] Response time <3s

#### Chart Data Endpoint
```bash
curl -s "http://localhost:5001/api/chart/EURUSD?period=1d&interval=5m"
```
**Expected:**
- [ ] HTTP 200
- [ ] Array of OHLCV data
- [ ] At least 50 data points
- [ ] Response time <2s

---

### 3. Error Log Monitoring
**Priority:** CRITICAL
**Frequency:** Continuous for first hour

```bash
# Start API with logging
cd C:\Users\manna\Downloads\Website\api
python market-data.py 2>&1 | tee deployment-monitor.log

# In another terminal, watch for errors
tail -f deployment-monitor.log | grep -i error
```

**Watch For:**
- [ ] No DeprecationWarning messages
- [ ] No FutureWarning messages
- [ ] No ImportError exceptions
- [ ] No TypeError exceptions
- [ ] No AttributeError exceptions

**Red Flags:**
- `DeprecationWarning: DataFrame.append` (shouldn't appear - we use concat)
- `TypeError: Cannot cast array` (NumPy 2.x type strictness)
- `ImportError: cannot import name 'json'` (Flask 3.x change)
- `AttributeError: 'NoneType'` (pandas operations on missing data)

---

### 4. Response Time Baseline
**Priority:** HIGH
**Frequency:** Every 10 minutes

```bash
# Measure response times
for i in {1..10}; do
  echo "Request $i:"
  time curl -s http://localhost:5001/api/price/EURUSD > /dev/null
  sleep 2
done

# Expected:
# First request (uncached): <2s
# Cached requests: <500ms
```

**Performance Targets:**
- [ ] Health check: <100ms
- [ ] Price endpoint (cached): <500ms
- [ ] Price endpoint (fresh): <2s
- [ ] Analysis endpoint: <3s
- [ ] Chart data: <2s

**If degraded by >50%:** Investigate and consider rollback

---

### 5. Memory Usage Monitoring
**Priority:** HIGH
**Frequency:** Every 5 minutes

```bash
# Linux/Mac
ps aux | grep market-data.py

# Windows (PowerShell)
Get-Process python | Where-Object {$_.Path -like "*market-data*"}

# Expected: Memory stays stable, no growth
```

**Baseline Memory Usage:**
- Initial: ~150-200 MB
- After 1 hour: <300 MB
- Growth rate: <10 MB/hour

**Red Flags:**
- Memory >500 MB
- Continuous growth (>50 MB/hour)
- Sudden spikes

**Action:** If memory leak detected, rollback immediately

---

### 6. CORS Verification
**Priority:** MEDIUM
**Frequency:** Once in first hour

```bash
# Test CORS headers
curl -H "Origin: http://localhost:3000" \
     -H "Access-Control-Request-Method: GET" \
     -H "Access-Control-Request-Headers: Content-Type" \
     -X OPTIONS \
     -I http://localhost:5001/api/price/EURUSD

# Expected headers:
# Access-Control-Allow-Origin: http://localhost:3000
# Access-Control-Allow-Methods: GET, POST, OPTIONS
# Access-Control-Max-Age: 3600
```

**Success Criteria:**
- [ ] Access-Control-Allow-Origin present
- [ ] CORS headers correct
- [ ] Frontend can make requests
- [ ] No CORS errors in browser console

---

### 7. Rate Limiting Check
**Priority:** MEDIUM
**Frequency:** Once in first hour

```bash
# Test rate limiting (30 requests/minute for price endpoint)
for i in {1..35}; do
  http_code=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:5001/api/price/EURUSD)
  echo "Request $i: $http_code"
  sleep 1
done

# Expected: First 30 return 200, then 429 (Too Many Requests)
```

**Success Criteria:**
- [ ] Rate limiting functional
- [ ] Returns HTTP 429 when limit exceeded
- [ ] Limits reset after time window
- [ ] Error message clear

---

## Short-term Monitoring (1-24 Hours)

### 8. Stability Monitoring
**Priority:** HIGH
**Frequency:** Every hour

**Checklist:**
- [ ] API still running (no crashes)
- [ ] No memory leaks (check memory usage)
- [ ] No error rate increase
- [ ] Response times stable
- [ ] All endpoints functional

```bash
# Quick stability check
curl http://localhost:5001/health && \
curl http://localhost:5001/api/price/EURUSD && \
curl http://localhost:5001/api/analysis/EURUSD && \
echo "All endpoints OK"
```

---

### 9. Technical Indicator Accuracy
**Priority:** HIGH
**Frequency:** Every 4 hours

```bash
# Get technical analysis
curl -s http://localhost:5001/api/analysis/EURUSD | python -m json.tool

# Verify indicators:
# - RSI: Should be between 0-100
# - MACD: Should have line, signal, histogram
# - Bollinger Bands: upper > middle > lower
# - SMA_20, SMA_50: Should be numeric
```

**Manual Verification:**
Compare with known reliable sources:
- TradingView (https://www.tradingview.com/)
- Yahoo Finance (https://finance.yahoo.com/)

**Success Criteria:**
- [ ] RSI value reasonable (0-100)
- [ ] MACD values present and numeric
- [ ] Bollinger Bands in correct order
- [ ] Moving averages close to market consensus

**Red Flags:**
- RSI outside 0-100 range
- NaN or null values in indicators
- Bollinger Bands inverted (lower > upper)
- Large discrepancies with trusted sources (>5%)

---

### 10. Data Fetching Reliability
**Priority:** HIGH
**Frequency:** Every 2 hours

```bash
# Test multiple currency pairs
for symbol in EURUSD GBPUSD USDJPY BTCUSD ETHUSD XAUUSD; do
  echo "Testing $symbol:"
  curl -s http://localhost:5001/api/price/$symbol | python -c "import sys, json; data=json.load(sys.stdin); print(f'  ✓ {data[\"symbol\"]}: {data[\"price\"]}')"
done

# All should return valid data
```

**Success Criteria:**
- [ ] All major pairs return data
- [ ] No "No data found" errors
- [ ] Prices update regularly
- [ ] yfinance fetching stable

---

### 11. Cache Performance
**Priority:** MEDIUM
**Frequency:** Every 2 hours

```bash
# Check cache size
curl -s http://localhost:5001/health | grep cache_size

# Test cache behavior
# First request (uncached)
time curl -s http://localhost:5001/api/price/EURUSD > /dev/null

# Second request (should be cached, <60s later)
time curl -s http://localhost:5001/api/price/EURUSD > /dev/null

# Second should be significantly faster
```

**Expected Behavior:**
- Cache size grows with unique requests
- Cached responses <100ms
- Cache respects 60-second TTL
- No cache-related errors

---

### 12. Deprecation Warnings Audit
**Priority:** MEDIUM
**Frequency:** Every 6 hours

```bash
# Check logs for warnings
grep -i "deprecation\|future" deployment-monitor.log

# Expected: No warnings related to our code
# Acceptable: Warnings from dependencies (not our code)
```

**Common Warnings to Ignore:**
- Warnings from third-party libraries (yfinance, etc.)
- Python standard library deprecations (if not affecting functionality)

**Warnings to Investigate:**
- Pandas 2.x warnings about our code
- NumPy 2.x warnings about our operations
- Flask 3.x warnings about our endpoints

---

## Medium-term Monitoring (1-7 Days)

### 13. Production Usage Patterns
**Priority:** HIGH
**Frequency:** Daily

**Metrics to Track:**
- Total requests per day
- Average response time
- Error rate (%)
- Most requested endpoints
- Most requested currency pairs

```bash
# Analyze logs
cat deployment-monitor.log | grep "GET /api" | wc -l
# Total requests

cat deployment-monitor.log | grep "500\|error" | wc -l
# Errors

# Calculate error rate
# Error rate = (Errors / Total Requests) * 100
# Target: <1%
```

**Success Criteria:**
- [ ] Error rate <1%
- [ ] No increase in errors vs pre-deployment
- [ ] Response times stable
- [ ] Usage patterns normal

---

### 14. Frontend Integration Monitoring
**Priority:** HIGH
**Frequency:** Daily

**Test with actual frontend:**
- [ ] Charts load correctly
- [ ] Price updates display
- [ ] Technical indicators render
- [ ] No console errors
- [ ] WebSocket connections stable (if used)

**Browser Console Checks:**
```javascript
// Open browser developer console (F12)
// Look for:
// - No CORS errors
// - No 500 errors
// - No JavaScript errors
// - Successful API calls
```

---

### 15. Security Vulnerability Monitoring
**Priority:** HIGH
**Frequency:** Every 3 days

```bash
cd C:\Users\manna\Downloads\Website\api
source venv/Scripts/activate

# Run security audit
pip-audit

# Expected: No known vulnerabilities
```

**Action Items:**
- [ ] Zero vulnerabilities in dependencies
- [ ] No new CVEs reported
- [ ] All packages up-to-date with security patches

**If Vulnerabilities Found:**
- Assess severity (Critical/High/Medium/Low)
- Check if patch available
- Test patch in staging
- Deploy patch if critical

---

### 16. Memory Leak Detection
**Priority:** MEDIUM
**Frequency:** Every 2 days

```bash
# Track memory over time
while true; do
  date >> memory-tracking.log
  ps aux | grep market-data.py >> memory-tracking.log
  sleep 3600  # Every hour
done

# After 3-7 days, analyze trend
# Memory should be stable, not growing
```

**Expected:**
- Memory stable around 200-300 MB
- No continuous growth
- Occasional spikes during heavy use (acceptable)

**Red Flag:**
- Memory growing >50 MB/day
- Never returns to baseline
- Eventually causes crash

---

### 17. Endpoint Usage Analytics
**Priority:** LOW
**Frequency:** Weekly

```bash
# Analyze which endpoints are used most
cat deployment-monitor.log | grep "GET /api" | \
  cut -d' ' -f7 | sort | uniq -c | sort -rn

# Example output:
# 1523 /api/price/EURUSD
#  847 /api/price/BTCUSD
#  634 /api/analysis/EURUSD
#  421 /api/chart/EURUSD
```

**Use For:**
- Performance optimization priorities
- Cache strategy refinement
- Understanding user behavior
- Identifying unused features

---

## Long-term Monitoring (7-30 Days)

### 18. Performance Baseline Establishment
**Priority:** MEDIUM
**Frequency:** After 1 week

**Establish new baseline metrics:**
```bash
# Create performance baseline report
cat > performance-baseline.txt <<EOF
Python Deployment Performance Baseline
Date: $(date)
Period: 7 days post-deployment

Metrics:
- Average response time (price): X ms
- Average response time (analysis): X ms
- Average response time (chart): X ms
- Memory usage average: X MB
- Memory usage peak: X MB
- CPU usage average: X %
- Error rate: X %
- Uptime: X %
- Cache hit rate: X %

Flask: 3.1.2
Pandas: 2.2.3
NumPy: 2.2.1
EOF
```

---

### 19. Comparative Analysis
**Priority:** MEDIUM
**Frequency:** After 2 weeks

Compare with pre-deployment baseline:

| Metric | Pre-Deployment | Post-Deployment | Change |
|--------|----------------|-----------------|--------|
| Response Time | X ms | Y ms | +/- Z% |
| Memory Usage | X MB | Y MB | +/- Z% |
| Error Rate | X % | Y % | +/- Z% |
| Uptime | X % | Y % | +/- Z% |

**Expected Improvements:**
- Response time: Same or better (NumPy 2.x, Pandas 2.x optimizations)
- Memory usage: Same or better (Pandas 2.x CoW)
- Error rate: Same or lower (better error handling)
- Uptime: 99.9%+

---

### 20. User Feedback Collection
**Priority:** LOW
**Frequency:** After 1 month

**Gather feedback on:**
- Data accuracy
- Performance perception
- Any issues encountered
- Feature requests

---

## Monitoring Automation

### Automated Health Check Script

Create `scripts/monitor-deployment.sh`:

```bash
#!/bin/bash
# Automated monitoring script

LOG_FILE="monitoring-$(date +%Y%m%d).log"

while true; do
  TIMESTAMP=$(date +"%Y-%m-%d %H:%M:%S")

  # Health check
  HEALTH=$(curl -s http://localhost:5001/health)
  echo "$TIMESTAMP - Health: $HEALTH" >> $LOG_FILE

  # Response time check
  RESPONSE_TIME=$( { time curl -s http://localhost:5001/api/price/EURUSD > /dev/null; } 2>&1 | grep real )
  echo "$TIMESTAMP - Response Time: $RESPONSE_TIME" >> $LOG_FILE

  # Memory check
  MEMORY=$(ps aux | grep market-data.py | grep -v grep | awk '{print $6}')
  echo "$TIMESTAMP - Memory: $MEMORY KB" >> $LOG_FILE

  # Error check
  ERROR_COUNT=$(tail -100 deployment-monitor.log | grep -i error | wc -l)
  echo "$TIMESTAMP - Recent Errors: $ERROR_COUNT" >> $LOG_FILE

  # Alert if issues
  if [ $ERROR_COUNT -gt 5 ]; then
    echo "$TIMESTAMP - ALERT: High error count!" >> $LOG_FILE
    # Send alert (email, Slack, etc.)
  fi

  sleep 300  # Check every 5 minutes
done
```

---

## Alert Thresholds

### Critical Alerts (Immediate Action)
- API down (health check fails)
- Error rate >10%
- Memory >1 GB
- Response time >10s
- All endpoints returning 500

### Warning Alerts (Investigate Within 1 Hour)
- Error rate >5%
- Memory >500 MB
- Response time >5s
- Single endpoint failing
- Memory growth >100 MB/hour

### Info Alerts (Review Daily)
- Deprecation warnings
- Performance degradation <25%
- Cache efficiency changes
- Unusual traffic patterns

---

## Monitoring Tools Recommendations

### Application Performance Monitoring (APM)
- New Relic
- Datadog
- Prometheus + Grafana

### Log Aggregation
- ELK Stack (Elasticsearch, Logstash, Kibana)
- Splunk
- CloudWatch (AWS)

### Uptime Monitoring
- UptimeRobot
- Pingdom
- StatusCake

### Error Tracking
- Sentry
- Rollbar
- Bugsnag

---

## Sign-off Criteria

Deployment is fully validated when:

- ✅ 7 days of stable operation
- ✅ No critical errors
- ✅ Performance within baseline
- ✅ No memory leaks detected
- ✅ All endpoints functional
- ✅ Frontend integration stable
- ✅ Security audit clean
- ✅ User feedback positive
- ✅ Comparative analysis favorable

**Final sign-off:** After 30 days of successful operation, deployment is considered complete.

---

**Monitoring Plan Version:** 1.0
**Created:** 2025-10-20
**Owner:** Security Agent

---

*This monitoring plan should be executed diligently for the first 30 days. After validation, transition to standard production monitoring procedures.*
