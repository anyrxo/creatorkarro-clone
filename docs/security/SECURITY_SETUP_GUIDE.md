# SECURITY SETUP GUIDE - Quick Reference
## Post-Audit Configuration Instructions

---

## STEP 1: REVOKE EXPOSED KEYS (DO THIS FIRST!)

### Revoke Gemini API Keys

1. Go to **Google AI Studio**: https://makersuite.google.com/app/apikey
2. Sign in with your Google account
3. Find these keys in your list:
   - `AIzaSyCq7wXLaqA5Yl2gPY6KdThRavlN_aGmznI`
   - `AIzaSyBgIXV2g4ViSXgtNTGqckeKzIJrrkmZ_9E`
4. Click the **Delete** or **Revoke** button for each
5. Confirm deletion

### Revoke MarketAux API Key

1. Go to **MarketAux Dashboard**: https://www.marketaux.com/account/api
2. Sign in to your account
3. Find this key: `YyMOg6d7FLII9LwKjwbyVNbmcNI1LrYJjoEjpcNS`
4. Click **Revoke** or **Delete**
5. Confirm deletion

---

## STEP 2: GENERATE NEW KEYS

### Generate New Gemini API Key

1. In Google AI Studio (https://makersuite.google.com/app/apikey)
2. Click **"Create API Key"**
3. Choose your Google Cloud project or create new
4. Copy the new key immediately
5. Save it somewhere secure (password manager)

### Generate New MarketAux API Key

1. In MarketAux Dashboard (https://www.marketaux.com/account/api)
2. Click **"Generate New API Key"**
3. Copy the new key immediately
4. Save it somewhere secure

---

## STEP 3: CREATE ENVIRONMENT FILES

### For Next.js (Local Development)

Open terminal/command prompt:

```bash
cd C:\Users\manna\Downloads\Website

# Create .env.local file
notepad .env.local
```

Add this content (replace with your actual keys):

```env
# REQUIRED - Gemini AI
GEMINI_API_KEY=AIzaSy_YOUR_NEW_GEMINI_KEY_HERE

# OPTIONAL - Market News
MARKETAUX_API_KEY=YOUR_NEW_MARKETAUX_KEY_HERE

# Add other keys as needed
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NODE_ENV=development
```

Save and close.

### For Python Scripts

```bash
# Create .env file (same directory)
notepad .env
```

Add this content:

```env
GEMINI_API_KEY=AIzaSy_YOUR_NEW_GEMINI_KEY_HERE
MARKETAUX_API_KEY=YOUR_NEW_MARKETAUX_KEY_HERE
```

Save and close.

---

## STEP 4: INSTALL DEPENDENCIES

### For Python (if not already installed)

```bash
pip install python-dotenv
```

### For Node.js (if not already installed)

```bash
npm install dotenv
```

---

## STEP 5: VERIFY SETUP

### Test Gemini Integration

```bash
# Test Next.js
npm run build

# Should see no errors about missing GEMINI_API_KEY
```

### Test Python Market Data API

```bash
cd api
python market-data.py

# Should start without "WARNING: MARKETAUX_API_KEY environment variable is not set"
```

### Test Blog Generation Script

```bash
node scripts/rewrite-all-blog-posts.js

# Should not see "ERROR: GEMINI_API_KEY environment variable is not set"
```

---

## STEP 6: PRODUCTION DEPLOYMENT (Vercel)

### Add Environment Variables to Vercel

1. Go to your Vercel dashboard
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add these variables:

```
GEMINI_API_KEY = [your_key_here]
MARKETAUX_API_KEY = [your_key_here]
```

5. Select environments: **Production**, **Preview**, **Development**
6. Click **Save**
7. Redeploy your application

---

## TROUBLESHOOTING

### Error: "GEMINI_API_KEY environment variable is not set"

**Solution:**
- Ensure `.env.local` exists in root directory
- Check the file has `GEMINI_API_KEY=your_key` (no spaces around =)
- Restart your development server: `npm run dev`

### Error: Python script can't find API key

**Solution:**
- Ensure `.env` file exists (not `.env.local`)
- Python scripts use `.env`, not `.env.local`
- Check you have `python-dotenv` installed: `pip install python-dotenv`

### Error: "Invalid API Key"

**Solution:**
- Double-check you copied the full key (no spaces)
- Ensure you're using the NEW key, not the old revoked one
- Verify key is active in the provider's dashboard

### Deployment fails on Vercel

**Solution:**
- Check environment variables are set in Vercel dashboard
- Ensure variables are enabled for the right environment
- Try manual redeploy after setting variables

---

## SECURITY CHECKLIST

- [ ] Old Gemini keys revoked
- [ ] Old MarketAux key revoked
- [ ] New Gemini key generated
- [ ] New MarketAux key generated
- [ ] `.env.local` created with new keys
- [ ] `.env` created for Python scripts
- [ ] Local testing successful
- [ ] Keys added to Vercel (if deploying)
- [ ] Old keys removed from password manager/notes
- [ ] This guide stored somewhere safe

---

## FILE LOCATIONS REFERENCE

### Environment Files (DO NOT COMMIT):
- `C:\Users\manna\Downloads\Website\.env.local` - Next.js environment
- `C:\Users\manna\Downloads\Website\.env` - Python scripts

### Template File (SAFE TO COMMIT):
- `C:\Users\manna\Downloads\Website\.env.example` - Template

### Modified Code Files:
- `src/lib/ai/gemini.ts` - Uses env var now
- `scripts/rewrite-all-blog-posts.js` - Uses env var now
- `api/market-data.py` - Uses env var now

---

## NEED HELP?

### Getting API Keys:

**Gemini AI:**
- Sign up: https://makersuite.google.com/
- Documentation: https://ai.google.dev/docs

**MarketAux:**
- Sign up: https://www.marketaux.com/
- Pricing: Free tier available

### Common Issues:

**Q: Can I use the same key for development and production?**
A: Yes, but it's better to use different keys for tracking usage.

**Q: Are these keys free?**
A: Gemini has a free tier. MarketAux has free tier with limits. Check their pricing.

**Q: What if I commit my .env file by accident?**
A: Immediately revoke those keys and generate new ones. The `.gitignore` should prevent this.

---

## QUICK COMMAND REFERENCE

```bash
# Copy environment template
cp .env.example .env.local
cp .env.example .env

# Edit environment files
notepad .env.local
notepad .env

# Install dependencies
npm install
pip install python-dotenv

# Test setup
npm run build
python api/market-data.py
node scripts/rewrite-all-blog-posts.js

# Start development
npm run dev
```

---

*Setup Guide - Keep this accessible during development*
