# Email Sequences Setup & Testing Guide

## ✅ Pre-Flight Checklist

### 1. Vercel Environment Variables
Make sure these are set in Vercel → Settings → Environment Variables:

- ✅ `RESEND_API_KEY` - Your Resend API key
- ✅ `CRON_SECRET` - Random secret (generate one: `openssl rand -hex 32`)
- ✅ `CLERK_WEBHOOK_SECRET` - From Clerk dashboard
- ✅ `NEXT_PUBLIC_SITE_URL` - https://iimagined.ai
- ✅ `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase URL
- ✅ `SUPABASE_SERVICE_ROLE_KEY` - Your Supabase service role key

### 2. Resend Email Verification
Go to https://resend.com/domains and verify:
- ✅ `access@notifications.iimagined.ai` is verified

### 3. Supabase Tables Check
Run this SQL in Supabase SQL Editor to verify tables exist:

```sql
-- Check if tables exist
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
AND table_name IN ('profiles', 'license_keys');

-- Check profiles structure
SELECT column_name, data_type 
FROM information_schema.columns 
WHERE table_name = 'profiles';

-- Check license_keys structure
SELECT column_name, data_type 
FROM information_schema.columns 
WHERE table_name = 'license_keys';
```

Expected output:
- `profiles` table with: `user_id`, `email`, `first_name`, `created_at`
- `license_keys` table with: `user_id`, `status`, `claimed_at`

---

## 🧪 Testing Guide

### Test 1: FREE User Email (Day 1)

**What to test:** New user signup triggers FREE Day 1 email

**Steps:**
1. Create a new account on https://iimagined.ai
2. Check your email inbox
3. Look for: "Welcome to IImagined - You're In. Now What?"

**Expected:**
- ✅ Email received within 1-2 minutes
- ✅ Subject: "Welcome to IImagined - You're In. Now What?"
- ✅ Shows 4 courses you're missing
- ✅ CTA links to pricing page

**Check Logs:**
```bash
# In Vercel dashboard
1. Go to Deployments → Latest
2. Click Functions → /api/webhooks/clerk
3. Look for: "Sent FREE user Day 1 conversion email to [email]"
```

---

### Test 2: PAID User Email (Day 1)

**What to test:** Redeeming a license key triggers PAID Day 1 email

**Steps:**
1. Log in to https://iimagined.ai
2. Go to /redeem (or wherever your redeem page is)
3. Enter a valid license key
4. Check your email inbox

**Expected:**
- ✅ Email received immediately
- ✅ Subject: "Welcome to IImagined - Your Empire Starts Today"
- ✅ Shows all 4 courses with links
- ✅ Quick start guide with 3 steps

**Check Logs:**
```bash
# In Vercel dashboard
1. Go to Deployments → Latest
2. Click Functions (look for redeem function)
3. Look for: "Sent PAID User Day 1 Onboarding Email"
```

---

### Test 3: Cron Job (Day 2 & 3 Emails)

**What to test:** Cron job detects user type and sends appropriate emails

**Option A: Wait 24 hours**
- Sign up or redeem a key
- Wait 24 hours
- Check email for Day 2
- Wait another 24 hours
- Check email for Day 3

**Option B: Manual Trigger (Faster)**

```bash
# Trigger the cron job manually
curl -X GET https://iimagined.ai/api/cron/onboarding \
  -H "Authorization: Bearer YOUR_CRON_SECRET"
```

**Expected Response:**
```json
{
  "success": true,
  "emailsSent": {
    "freeDay2": 0,
    "freeDay3": 0,
    "paidDay2": 0,
    "paidDay3": 0,
    "errors": 0
  },
  "totalUsers": 5
}
```

**To Test Day 2/3 Emails Without Waiting:**

Run this SQL in Supabase to backdate a user's signup:

```sql
-- Backdate a FREE user's signup by 24 hours (for Day 2 test)
UPDATE profiles 
SET created_at = NOW() - INTERVAL '24 hours'
WHERE email = 'your-test-email@example.com';

-- Backdate a FREE user's signup by 48 hours (for Day 3 test)
UPDATE profiles 
SET created_at = NOW() - INTERVAL '48 hours'
WHERE email = 'your-test-email@example.com';

-- Backdate a PAID user's key claim by 24 hours (for Day 2 test)
UPDATE license_keys 
SET claimed_at = NOW() - INTERVAL '24 hours'
WHERE user_id = 'user_xxx';

-- Backdate a PAID user's key claim by 48 hours (for Day 3 test)
UPDATE license_keys 
SET claimed_at = NOW() - INTERVAL '48 hours'
WHERE user_id = 'user_xxx';
```

Then manually trigger the cron:
```bash
curl -X GET https://iimagined.ai/api/cron/onboarding \
  -H "Authorization: Bearer YOUR_CRON_SECRET"
```

---

## 🔍 Verification Queries

### Check Recent Signups
```sql
SELECT 
  user_id,
  email,
  first_name,
  created_at,
  NOW() - created_at as time_since_signup
FROM profiles
WHERE created_at > NOW() - INTERVAL '3 days'
ORDER BY created_at DESC;
```

### Check Who Has License Keys (PAID Users)
```sql
SELECT 
  p.email,
  p.first_name,
  lk.status,
  lk.claimed_at,
  NOW() - lk.claimed_at as time_since_claim
FROM profiles p
JOIN license_keys lk ON p.user_id = lk.user_id
WHERE lk.status = 'claimed'
ORDER BY lk.claimed_at DESC;
```

### Check Who Should Get Day 2 Emails
```sql
-- FREE users (24h after signup, no key)
SELECT 
  p.email,
  p.created_at,
  EXTRACT(EPOCH FROM (NOW() - p.created_at)) / 3600 as hours_since_signup
FROM profiles p
LEFT JOIN license_keys lk ON p.user_id = lk.user_id AND lk.status = 'claimed'
WHERE lk.id IS NULL
  AND p.created_at > NOW() - INTERVAL '3 days'
  AND EXTRACT(EPOCH FROM (NOW() - p.created_at)) / 3600 BETWEEN 24 AND 25;

-- PAID users (24h after claim)
SELECT 
  p.email,
  lk.claimed_at,
  EXTRACT(EPOCH FROM (NOW() - lk.claimed_at)) / 3600 as hours_since_claim
FROM profiles p
JOIN license_keys lk ON p.user_id = lk.user_id
WHERE lk.status = 'claimed'
  AND lk.claimed_at > NOW() - INTERVAL '3 days'
  AND EXTRACT(EPOCH FROM (NOW() - lk.claimed_at)) / 3600 BETWEEN 24 AND 25;
```

---

## 🚨 Troubleshooting

### Emails Not Sending?

**1. Check Resend Dashboard**
- Go to https://resend.com/emails
- Filter by `from:access@notifications.iimagined.ai`
- Check delivery status

**2. Check Vercel Logs**
```bash
# Look for errors in function logs
vercel logs --follow
```

**3. Check Environment Variables**
```bash
# In Vercel dashboard
Settings → Environment Variables
# Make sure RESEND_API_KEY is set
```

### Cron Not Running?

**1. Check Vercel Cron Jobs**
- Go to Vercel Dashboard → Settings → Cron Jobs
- Should see: `/api/cron/onboarding` running every hour

**2. Verify vercel.json**
```json
{
  "crons": [
    {
      "path": "/api/cron/onboarding",
      "schedule": "0 * * * *"
    }
  ]
}
```

**3. Test Manually**
```bash
curl -X GET https://iimagined.ai/api/cron/onboarding \
  -H "Authorization: Bearer YOUR_CRON_SECRET"
```

### Wrong Email Sequence?

**Check User Type Detection:**
```sql
-- See if user has a claimed key
SELECT 
  p.email,
  CASE 
    WHEN lk.id IS NOT NULL THEN 'PAID'
    ELSE 'FREE'
  END as user_type
FROM profiles p
LEFT JOIN license_keys lk ON p.user_id = lk.user_id AND lk.status = 'claimed'
WHERE p.email = 'test@example.com';
```

---

## ✅ Final Checklist

- [ ] Environment variables set in Vercel
- [ ] Resend sender email verified
- [ ] Supabase tables exist (profiles, license_keys)
- [ ] Test FREE user signup → Day 1 email received
- [ ] Test PAID user redeem → Day 1 email received
- [ ] Test cron job manually → Returns success
- [ ] Backdate test user → Day 2 email received
- [ ] Check Resend dashboard → All emails delivered
- [ ] Check Vercel logs → No errors

---

## 📊 Monitoring

### Daily Checks
1. **Resend Dashboard** - Check delivery rates
2. **Vercel Cron Logs** - Check for errors
3. **Supabase** - Run verification queries

### Weekly Checks
1. Check conversion rate (FREE → PAID)
2. Review email open rates in Resend
3. Adjust email timing if needed

---

Ready to test! 🚀

Start with Test 1 (FREE user signup) and work your way through.
