# DEBUG: Access Issue - Key Claimed But No Access

## Run These Queries in Supabase SQL Editor:

### 1. Check Your Profile
```sql
SELECT user_id, email, first_name, created_at
FROM profiles
WHERE email = 'YOUR_EMAIL_HERE';
```
**Copy the `user_id` from the result!**

---

### 2. Check Your License Key
```sql
SELECT 
  key,
  user_id,
  status,
  claimed_at,
  redeemed_by_email
FROM license_keys
WHERE redeemed_by_email = 'YOUR_EMAIL_HERE'
   OR user_id = 'YOUR_USER_ID_FROM_STEP_1';
```

---

### 3. Check for Mismatch
```sql
-- This shows if there's a user_id mismatch
SELECT 
  p.user_id as profile_user_id,
  p.email as profile_email,
  lk.user_id as license_user_id,
  lk.key,
  lk.status,
  CASE 
    WHEN p.user_id = lk.user_id THEN '✅ MATCH'
    ELSE '❌ MISMATCH'
  END as match_status
FROM profiles p
LEFT JOIN license_keys lk ON lk.redeemed_by_email = p.email
WHERE p.email = 'YOUR_EMAIL_HERE';
```

---

## Quick Fix Options:

### Option A: Force Update the Key
If there's a mismatch, run this:

```sql
-- Get your correct user_id first
SELECT user_id FROM profiles WHERE email = 'YOUR_EMAIL_HERE';

-- Update the key with correct user_id
UPDATE license_keys
SET 
  user_id = 'YOUR_CORRECT_USER_ID',
  status = 'claimed',
  claimed_at = NOW()
WHERE redeemed_by_email = 'YOUR_EMAIL_HERE';

-- Verify
SELECT user_id, status, claimed_at 
FROM license_keys 
WHERE redeemed_by_email = 'YOUR_EMAIL_HERE';
```

---

### Option B: Clear Cache and Refresh
Sometimes Next.js caches the layout. Try:

1. **Hard refresh**: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
2. **Clear cookies**: Clear site data for iimagined.ai
3. **Log out and log back in**
4. Go to `/learning` again

---

### Option C: Check RPC Function
The redeem uses `claim_license_key` RPC. Verify it exists:

```sql
-- Check if RPC function exists
SELECT routine_name, routine_definition
FROM information_schema.routines
WHERE routine_name = 'claim_license_key';
```

If it doesn't exist or looks wrong, run this to recreate it:

```sql
CREATE OR REPLACE FUNCTION claim_license_key(
  p_key text, 
  p_user_id text,
  p_email text
)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_key_id uuid;
BEGIN
  -- Check if key exists and is unclaimed
  SELECT id INTO v_key_id
  FROM public.license_keys
  WHERE key = p_key
    AND user_id IS NULL
    AND status = 'active'
  FOR UPDATE;

  IF v_key_id IS NULL THEN
    RETURN false;
  END IF;

  -- Update the key
  UPDATE public.license_keys
  SET 
    user_id = p_user_id,
    claimed_at = NOW(),
    status = 'claimed',
    redeemed_by_email = p_email
  WHERE id = v_key_id;

  RETURN true;
END;
$$;
```

---

## Most Likely Issue:

The `user_id` in `license_keys` doesn't match your `user_id` in `profiles`.

**Quick Fix:**
1. Run Query #1 to get your user_id
2. Run Option A to force update the key
3. Hard refresh the page (Ctrl+Shift+R)

---

**Let me know what Query #3 shows and I'll help fix it!**
