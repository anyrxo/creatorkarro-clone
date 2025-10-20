# Quick Start - After Security Updates

## 🚨 IMPORTANT - READ THIS FIRST

API keys have been removed from the code for security. You need to set them up locally.

---

## Setup in 3 Minutes

### Step 1: Revoke Old Keys (If You're the Owner)

Go to these sites and revoke the exposed keys:
- https://makersuite.google.com/app/apikey (Gemini)
- https://www.marketaux.com/account/api (MarketAux)

### Step 2: Get New API Keys

Generate fresh keys from:
- **Gemini AI:** https://makersuite.google.com/ (REQUIRED)
- **MarketAux:** https://www.marketaux.com/ (OPTIONAL)

### Step 3: Create Environment Files

```bash
# In project root directory
cd C:\Users\manna\Downloads\Website

# Copy template
copy .env.example .env.local
copy .env.example .env
```

### Step 4: Add Your Keys

Edit `.env.local` (for Next.js):
```env
GEMINI_API_KEY=AIzaSy_YOUR_NEW_KEY_HERE
MARKETAUX_API_KEY=YOUR_NEW_KEY_HERE
```

Edit `.env` (for Python scripts):
```env
GEMINI_API_KEY=AIzaSy_YOUR_NEW_KEY_HERE
MARKETAUX_API_KEY=YOUR_NEW_KEY_HERE
```

### Step 5: Install Dependencies

```bash
# Node.js dependencies (already done if you ran npm install)
npm install

# Python dependencies
pip install -r requirements.txt
```

### Step 6: Start Development

```bash
npm run dev
```

---

## That's It!

Your environment is now secure and ready to use.

---

## Common Errors

### Error: "GEMINI_API_KEY environment variable is not set"

**Fix:** You forgot to create `.env.local` file. Go back to Step 3.

### Error: "Invalid API Key"

**Fix:** You might be using an old revoked key. Generate a new one (Step 2).

### Python script warnings

**Fix:** Create `.env` file (not just `.env.local`). Python uses different file.

---

## Need More Help?

Read these in order:
1. `SECURITY_SETUP_GUIDE.md` - Detailed setup instructions
2. `SECURITY_CHANGES.md` - What changed and why
3. `SECURITY_AUDIT_REPORT.md` - Full security report

---

## For Production Deployment

Add environment variables to your hosting platform:

**Vercel:**
1. Dashboard → Settings → Environment Variables
2. Add `GEMINI_API_KEY`
3. Add `MARKETAUX_API_KEY`
4. Save and redeploy

---

*Time to complete: 3-5 minutes*
*Required only once per developer/deployment*
