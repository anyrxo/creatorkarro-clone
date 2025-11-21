# Quick Fix: Give Yourself Access

You generated a key but didn't redeem it yet. Here are 2 ways to fix this:

---

## Option 1: Redeem the Key (Recommended)

1. Go to https://iimagined.ai/redeem
2. Enter the key you just generated
3. Click "Redeem"
4. You'll get access + the PAID Day 1 email!

---

## Option 2: Assign Key Directly in Supabase (Faster)

Run this SQL in Supabase SQL Editor:

```sql
-- Get your Clerk user ID first
SELECT user_id, email FROM profiles WHERE email = 'your-email@example.com';

-- Copy the user_id from above, then run:
UPDATE license_keys
SET 
  user_id = 'user_YOUR_CLERK_ID_HERE',
  status = 'claimed',
  claimed_at = NOW()
WHERE key = 'YOUR-KEY-HERE'
AND user_id IS NULL;

-- Verify it worked:
SELECT key, user_id, status, claimed_at
FROM license_keys
WHERE user_id = 'user_YOUR_CLERK_ID_HERE';
```

**Replace:**
- `your-email@example.com` with your actual email
- `user_YOUR_CLERK_ID_HERE` with your Clerk user ID (from first query)
- `YOUR-KEY-HERE` with the key you generated

---

## Option 3: Generate Key Already Assigned to You

Run this SQL to create a key that's already claimed by you:

```sql
-- Get your user ID
SELECT user_id FROM profiles WHERE email = 'your-email@example.com';

-- Generate key already assigned to you
INSERT INTO license_keys (key, plan_id, status, user_id, claimed_at)
VALUES (
  'ADMIN-ACCESS-' || SUBSTRING(MD5(RANDOM()::TEXT) FROM 1 FOR 8),
  'all-access',
  'claimed',
  'user_YOUR_CLERK_ID_HERE',  -- Replace with your user_id from above
  NOW()
)
RETURNING *;
```

---

## Why This Happened:

The `/learning` page checks for:
```typescript
.eq('user_id', user.id)
.eq('status', 'claimed')
```

When you **generate** a key:
- `user_id` = `NULL` (not assigned yet)
- `status` = `'active'`

When you **redeem** a key:
- `user_id` = your Clerk ID
- `status` = `'claimed'`

So you need to either redeem it or manually assign it in Supabase!

---

**Quickest Fix:** Just go to `/redeem` and enter the key! 🚀
