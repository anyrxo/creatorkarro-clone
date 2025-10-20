# Complete Deployment Guide
## IImagined.ai Website - Production Deployment

**Last Updated:** October 20, 2025
**Status:** Ready for deployment with security improvements implemented

---

## 🎯 PRE-DEPLOYMENT CHECKLIST

### ✅ CRITICAL - Must Complete Before Deployment

- [ ] **Revoke Exposed API Keys** (URGENT)
- [ ] **Generate New API Keys**
- [ ] **Set Up Environment Files Locally**
- [ ] **Configure Vercel Environment Variables**
- [ ] **Deploy Python API** (if using FX Calculator)
- [ ] **Test Build Locally**
- [ ] **Review Security Changes**

---

## 🔐 PHASE 1: API KEY SECURITY (CRITICAL - Do This First!)

### Step 1: Revoke Old Exposed Keys

The following API keys were exposed in git history and **MUST** be revoked immediately:

#### Gemini API Keys (2 keys):
1. Key 1: `AIzaSyCq7wXLaqA5Yl2gPY6KdThRavlN_aGmznI`
2. Key 2: `AIzaSyBgIXV2g4ViSXgtNTGqckeKzIJrrkmZ_9E`

**How to revoke:**
1. Go to: https://makersuite.google.com/app/apikey
2. Find these keys in your API key list
3. Click "Delete" or "Revoke" for each
4. Confirm deletion

#### MarketAux API Key:
3. Key 3: `YyMOg6d7FLII9LwKjwbyVNbmcNI1LrYJjoEjpcNS`

**How to revoke:**
1. Go to: https://www.marketaux.com/account/api
2. Find this key in your dashboard
3. Click "Revoke" or "Delete"
4. Confirm revocation

⚠️ **DO NOT SKIP THIS STEP** - These keys are publicly visible in git history!

### Step 2: Generate New API Keys

#### For Gemini AI (Required):
1. Visit: https://makersuite.google.com/app/apikey
2. Click "Create API Key"
3. Copy the new key and save it securely (you won't see it again)
4. Label it: "IImagined.ai Production - Oct 2025"

#### For MarketAux (Optional - for news features):
1. Visit: https://www.marketaux.com/account/api
2. Generate new API key
3. Copy and save securely
4. Note: Free tier includes 100 requests/day

---

## 💻 PHASE 2: LOCAL ENVIRONMENT SETUP

### Step 1: Create Environment Files

#### For Next.js (.env.local):
```bash
# Navigate to project root
cd C:\Users\manna\Downloads\Website

# Copy template
cp .env.example .env.local

# Edit .env.local with your text editor
notepad .env.local
```

Add your NEW API keys:
```env
# REQUIRED
GEMINI_API_KEY=AIzaSy_YOUR_NEW_KEY_HERE

# OPTIONAL
MARKETAUX_API_KEY=your_new_marketaux_key_here
OPENAI_API_KEY=your_openai_key_if_needed

# CONFIGURATION
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NODE_ENV=production
```

#### For Python Scripts (.env):
```bash
# Create .env file for Python
cp .env.example .env

# Edit .env
notepad .env
```

Add same keys plus Python configuration:
```env
GEMINI_API_KEY=AIzaSy_YOUR_NEW_KEY_HERE
MARKETAUX_API_KEY=your_new_marketaux_key_here

# Python API Configuration
FLASK_ENV=production
PORT=5001
```

### Step 2: Verify Environment Files

```bash
# Verify .env.local exists and is NOT tracked by git
git status | findstr .env.local
# Should show nothing (ignored by .gitignore)

# Verify .env exists and is NOT tracked
git status | findstr ".env"
# Should show nothing (ignored by .gitignore)
```

✅ **IMPORTANT:** Never commit .env.local or .env files!

---

## 🐍 PHASE 3: PYTHON API DEPLOYMENT (If Using FX Calculator)

### Option A: Deploy to Railway (Recommended - Free Tier Available)

1. **Create Railway Account:**
   - Visit: https://railway.app
   - Sign up with GitHub

2. **Create New Project:**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Connect your GitHub account
   - Select your repository

3. **Configure Python Service:**
   - Railway auto-detects Python
   - Set start command: `python api/market-data.py`
   - Set environment variables:
     - `MARKETAUX_API_KEY`: your_key_here
     - `FLASK_ENV`: production
     - `PORT`: 5001

4. **Deploy:**
   - Railway automatically deploys
   - Copy your deployment URL: `https://your-app.railway.app`

5. **Update Frontend:**
   - Add to Vercel environment variables:
     - `NEXT_PUBLIC_API_URL`: https://your-app.railway.app

### Option B: Deploy to Heroku

1. **Install Heroku CLI:**
   ```bash
   # Download from: https://devcenter.heroku.com/articles/heroku-cli
   ```

2. **Login and Create App:**
   ```bash
   heroku login
   heroku create iimagined-api
   ```

3. **Set Environment Variables:**
   ```bash
   heroku config:set MARKETAUX_API_KEY=your_key_here
   heroku config:set FLASK_ENV=production
   heroku config:set PORT=5001
   ```

4. **Create Procfile:**
   ```bash
   echo "web: python api/market-data.py" > Procfile
   ```

5. **Deploy:**
   ```bash
   git push heroku master
   ```

6. **Get API URL:**
   ```bash
   heroku info
   # Copy the "Web URL" field
   ```

### Option C: Skip Python API (Disable FX Calculator)

If you don't need the FX calculator right now:
1. The site will work fine without it
2. FX Trading course page will still load
3. Only the live calculator won't function
4. You can deploy the API later

---

## 🚀 PHASE 4: VERCEL DEPLOYMENT

### Step 1: Install Dependencies

```bash
# Ensure you're in project root
cd C:\Users\manna\Downloads\Website

# Install all Node.js dependencies
npm install

# This may take 2-3 minutes
```

### Step 2: Test Build Locally

```bash
# Run a production build test
npm run build

# Expected output:
# ✓ Compiled successfully
# ✓ Collecting page data
# ✓ Generating static pages (550/550)
# ✓ Finalizing page optimization

# If build fails, check error messages
# Common issues:
# - Missing dependencies: run npm install
# - TypeScript errors: check specific files mentioned
# - Environment variable errors: verify .env.local
```

### Step 3: Connect to Vercel

1. **Visit Vercel Dashboard:**
   - Go to: https://vercel.com/dashboard
   - Sign in with GitHub

2. **Import Project:**
   - Click "Add New" → "Project"
   - Select your GitHub repository
   - Click "Import"

3. **Configure Build Settings:**
   - Framework Preset: **Next.js** (auto-detected)
   - Build Command: `npm run build` (default)
   - Output Directory: `out` (auto-detected)
   - Install Command: `npm install` (default)

### Step 4: Add Environment Variables

In Vercel dashboard, go to **Settings** → **Environment Variables**

Add the following:

| Variable Name | Value | Environment |
|---------------|-------|-------------|
| `GEMINI_API_KEY` | Your NEW Gemini key | Production, Preview, Development |
| `MARKETAUX_API_KEY` | Your MarketAux key (if using) | Production, Preview, Development |
| `NEXT_PUBLIC_API_URL` | Your Python API URL (if deployed) | Production, Preview, Development |
| `NEXT_PUBLIC_SITE_URL` | Your production domain | Production |
| `NODE_ENV` | `production` | Production |

### Step 5: Deploy

1. **First Deployment:**
   - Click "Deploy"
   - Vercel will build and deploy automatically
   - Build time: 5-10 minutes (large site with 550+ pages)

2. **Monitor Build:**
   - Watch the build logs for errors
   - If build fails, check the logs for specific errors

3. **Deployment Success:**
   - You'll get a URL: `https://your-app.vercel.app`
   - Test this URL thoroughly

### Step 6: Custom Domain (Optional)

1. **Add Domain in Vercel:**
   - Settings → Domains
   - Add your custom domain: `yourdomain.com`

2. **Configure DNS:**
   - Add CNAME record pointing to Vercel
   - Vercel provides specific DNS instructions

3. **SSL Certificate:**
   - Vercel automatically provisions SSL
   - Wait 10-30 minutes for certificate

---

## ✅ PHASE 5: POST-DEPLOYMENT TESTING

### Critical Tests:

1. **Homepage Loads:**
   - Visit: `https://your-app.vercel.app`
   - Check: All courses display correctly
   - Check: Navigation works
   - Check: No console errors

2. **Course Pages:**
   - Test each course page:
     - `/instagram-ignited/`
     - `/ai-influencers/`
     - `/digital-products/`
     - `/fx-trading/`
   - Verify pricing displays
   - Test CTAs work

3. **Blog Posts:**
   - Visit: `/blog/`
   - Click on 2-3 blog posts
   - Verify content loads
   - Check images display

4. **FX Calculator (if deployed):**
   - Visit: `/fx-calc/` (if exists)
   - Test real-time data fetches
   - Verify Python API connection

5. **Payment Flow:**
   - Test checkout process (don't complete payment)
   - Verify redirect to Whop or payment processor

6. **Mobile Responsive:**
   - Test on mobile device
   - Check navigation menu
   - Verify all pages display correctly

### Performance Tests:

```bash
# Run Lighthouse audit
# Open Chrome DevTools → Lighthouse
# Run audit on homepage

# Target scores:
# Performance: 80+
# Accessibility: 90+
# Best Practices: 90+
# SEO: 95+
```

---

## 🛡️ SECURITY IMPROVEMENTS IMPLEMENTED

### ✅ Completed Security Fixes:

1. **API Keys Migrated to Environment Variables**
   - Files: `src/lib/ai/gemini.ts`, `scripts/rewrite-all-blog-posts.js`, `api/market-data.py`
   - Status: ✅ Complete

2. **Flask Debug Mode Disabled**
   - File: `api/market-data.py`
   - Changed: `debug=True` → `debug=False` (controlled by ENV)
   - Status: ✅ Complete

3. **Rate Limiting Added**
   - Package: `flask-limiter@3.5.0`
   - Limits:
     - `/api/price`: 30 req/min
     - `/api/analysis`: 20 req/min
     - `/api/news`: 10 req/min
   - Status: ✅ Complete

4. **Input Validation Added**
   - Symbol validation against whitelist
   - Protection against injection attacks
   - Status: ✅ Complete

5. **Security Headers Configured**
   - File: `next.config.js`
   - Headers: HSTS, X-Frame-Options, X-Content-Type-Options, etc.
   - Status: ✅ Complete

6. **Robots.txt Conflict Resolved**
   - Removed: `public/robots.txt`
   - Using: Dynamic generation from `src/app/robots.ts`
   - Status: ✅ Complete

### ⚠️ Manual Actions Still Required:

1. **Revoke Old API Keys** - YOU MUST DO THIS
2. **Generate New Keys** - Required for production
3. **Set Vercel Environment Variables** - Required for deployment
4. **Deploy Python API** - If using FX calculator

---

## 🔧 TROUBLESHOOTING

### Build Fails on Vercel:

**Problem:** Build timeout or memory error
**Solution:**
```bash
# Vercel may need more memory
# Contact Vercel support or upgrade plan
```

**Problem:** TypeScript errors
**Solution:**
```bash
# Run locally first:
npx tsc --noEmit

# Fix any errors shown
# Redeploy to Vercel
```

### Environment Variables Not Working:

**Problem:** `GEMINI_API_KEY is not set` error
**Solution:**
1. Verify variables are set in Vercel dashboard
2. Ensure they're enabled for "Production" environment
3. Trigger new deployment to reload variables

### Python API Connection Fails:

**Problem:** 404 or connection refused
**Solution:**
1. Verify Python API is deployed and running
2. Check Railway/Heroku logs for errors
3. Verify `NEXT_PUBLIC_API_URL` is correct in Vercel
4. Check CORS configuration in `api/market-data.py`

### Slow Build Times:

**Problem:** Build takes 15+ minutes
**Solution:**
- This is normal for 550+ blog posts
- Vercel build timeout is 45 minutes
- Consider reducing blog post count if needed

---

## 📋 PRODUCTION CHECKLIST

Before marking as "production-ready":

- [ ] All old API keys revoked
- [ ] New API keys generated and stored securely
- [ ] `.env.local` created with production keys
- [ ] Vercel environment variables configured
- [ ] Python API deployed (if using FX calculator)
- [ ] Build tested locally (npm run build succeeds)
- [ ] Deployed to Vercel successfully
- [ ] Homepage loads without errors
- [ ] All 4 course pages tested
- [ ] Blog posts display correctly
- [ ] Payment flow tested
- [ ] Mobile responsive verified
- [ ] Lighthouse audit run (scores 80+)
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate active
- [ ] Error monitoring set up (optional)
- [ ] Analytics verified working

---

## 📊 DEPLOYMENT SUMMARY

### What Was Fixed:

| Issue | Status | Impact |
|-------|--------|--------|
| Exposed API keys in code | ✅ Fixed | Critical security vulnerability |
| Flask debug mode enabled | ✅ Fixed | Could expose stack traces |
| No rate limiting | ✅ Fixed | Prevented API abuse |
| No input validation | ✅ Fixed | Injection attack protection |
| Missing security headers | ✅ Fixed | Browser security |
| robots.txt conflict | ✅ Fixed | SEO clarity |

### What Still Needs Manual Action:

1. **Revoke old keys** - 5 minutes
2. **Generate new keys** - 5 minutes
3. **Configure Vercel environment** - 10 minutes
4. **Deploy Python API** (optional) - 30-60 minutes
5. **Test deployment** - 30 minutes

**Total Time Estimate:** 1.5 - 2 hours

---

## 🎉 SUCCESS METRICS

After deployment, your site will have:

✅ **Security:** Production-grade security implemented
✅ **Performance:** Fast static site deployment
✅ **Scalability:** Vercel CDN + edge caching
✅ **SEO:** 550+ indexed pages with proper metadata
✅ **Monitoring:** Vercel analytics built-in
✅ **Reliability:** 99.9% uptime SLA from Vercel

---

## 📞 SUPPORT & RESOURCES

### If You Get Stuck:

1. **Vercel Documentation:** https://vercel.com/docs
2. **Next.js Documentation:** https://nextjs.org/docs
3. **Railway Documentation:** https://docs.railway.app
4. **Security Audit Report:** See `SECURITY_AUDIT_REPORT.md`
5. **Quick Start Guide:** See `QUICK_START.md`

### Need Help?

- Check existing documentation in project root
- Review Vercel deployment logs
- Check Railway/Heroku logs for API issues

---

**You're ready to deploy! 🚀**

Start with Phase 1 (API Key Security) and work through each phase sequentially. The entire process should take 1.5-2 hours.

Good luck with your deployment!
