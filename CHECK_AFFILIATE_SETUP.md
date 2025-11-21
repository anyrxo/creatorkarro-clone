# Affiliate System - Check & Fix

## Step 1: Check if Tables Exist

Run this in Supabase SQL Editor:

```sql
-- Check if affiliate tables exist
SELECT 
  table_name,
  (SELECT COUNT(*) FROM information_schema.columns WHERE table_name = t.table_name) as columns
FROM information_schema.tables t
WHERE table_schema = 'public' 
  AND table_name IN ('affiliate_profiles', 'referrals')
ORDER BY table_name;
```

**Expected Result:**
- `affiliate_profiles` - 5 columns
- `referrals` - 6 columns

---

## Step 2: If Tables DON'T Exist

Run the existing `AFFILIATE_SETUP.sql`:

```sql
-- 1. Create Affiliate Profiles Table
CREATE TABLE IF NOT EXISTS public.affiliate_profiles (
    user_id text PRIMARY KEY,
    code text UNIQUE NOT NULL,
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
    paypal_email text,
    total_earnings numeric DEFAULT 0
);

-- 2. Create Referrals Table
CREATE TABLE IF NOT EXISTS public.referrals (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
    referrer_id text NOT NULL,
    referred_user_id text,
    status text DEFAULT 'sale',
    amount numeric DEFAULT 39.60
);

-- 3. Enable RLS
ALTER TABLE public.affiliate_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.referrals ENABLE ROW LEVEL SECURITY;

-- 4. Create Index
CREATE INDEX IF NOT EXISTS idx_affiliate_code ON public.affiliate_profiles(code);
CREATE INDEX IF NOT EXISTS idx_referrals_referrer ON public.referrals(referrer_id);

-- 5. Policies
DROP POLICY IF EXISTS "Public read access" ON public.affiliate_profiles;
CREATE POLICY "Public read access" ON public.affiliate_profiles FOR SELECT USING (true);

DROP POLICY IF EXISTS "Service role full access" ON public.affiliate_profiles;
CREATE POLICY "Service role full access" ON public.affiliate_profiles
FOR ALL TO service_role USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Service role full access" ON public.referrals;
CREATE POLICY "Service role full access" ON public.referrals
FOR ALL TO service_role USING (true) WITH CHECK (true);
```

---

## Step 3: If Tables DO Exist - Check Policies

```sql
-- Check RLS policies
SELECT 
  schemaname,
  tablename,
  policyname,
  permissive,
  roles,
  cmd
FROM pg_policies
WHERE tablename IN ('affiliate_profiles', 'referrals')
ORDER BY tablename, policyname;
```

**You should see:**
- `Public read access` on `affiliate_profiles`
- `Service role full access` on both tables

---

## Step 4: If Policies Missing - Add Them

```sql
-- Add missing policies
DROP POLICY IF EXISTS "Service role full access" ON public.affiliate_profiles;
CREATE POLICY "Service role full access" ON public.affiliate_profiles
FOR ALL TO service_role USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Service role full access" ON public.referrals;
CREATE POLICY "Service role full access" ON public.referrals
FOR ALL TO service_role USING (true) WITH CHECK (true);
```

---

## Step 5: Test Insert

```sql
-- Test if you can insert (replace with your actual user_id)
INSERT INTO affiliate_profiles (user_id, code)
VALUES ('test_user_123', 'testcode')
ON CONFLICT (user_id) DO NOTHING
RETURNING *;

-- Check it worked
SELECT * FROM affiliate_profiles WHERE user_id = 'test_user_123';

-- Clean up
DELETE FROM affiliate_profiles WHERE user_id = 'test_user_123';
```

---

## Step 6: Check Your Actual Data

```sql
-- See if you already have an affiliate profile
SELECT user_id, code, paypal_email, created_at
FROM affiliate_profiles
ORDER BY created_at DESC
LIMIT 10;

-- See your referrals
SELECT referrer_id, referred_user_id, status, amount, created_at
FROM referrals
ORDER BY created_at DESC
LIMIT 10;
```

---

## Quick Diagnosis:

### If Step 1 shows NO tables:
→ Run Step 2 (create tables)

### If Step 1 shows tables but Step 3 shows NO policies:
→ Run Step 4 (add policies)

### If Step 5 fails with permission error:
→ Check `SUPABASE_SERVICE_ROLE_KEY` is set in Vercel

### If everything works in SQL but not in the app:
→ Hard refresh the page (Ctrl+Shift+R)
→ Check browser console for errors (F12)

---

## Most Likely Issue:

The tables exist but the **Service Role policy is missing**, so the server action can't insert.

**Quick Fix:**
```sql
CREATE POLICY "Service role full access" ON public.affiliate_profiles
FOR ALL TO service_role USING (true) WITH CHECK (true);
```

---

**Run Step 1 first and let me know what you see!** 📊
