# Admin Key Generation - Quick Test Guide

## ✅ The Code is Fixed!

The admin key generation system is ready to use. Here's how to test it:

---

## 🧪 Test Steps:

### 1. **Access Admin Panel**
```
https://iimagined.ai/admin/keys
```

### 2. **Generate a Key**
- Click "Generate Key" button
- Key should appear in the table immediately
- Status should show "active" (green)

### 3. **Generate Temporary Key**
- Enter hours in "Expires in (hrs)" field (e.g., `24`)
- Click "Generate Key"
- Check "Expires" column shows future date/time

### 4. **Test Key Actions**
- **Copy**: Click copy icon → Key copied to clipboard
- **Disable**: Click ban icon → Status changes to "disabled"
- **Delete**: Click trash icon → Key removed from table

---

## 🔧 If It's Not Working:

### Check Browser Console (F12)
Look for errors when clicking "Generate Key"

### Check Vercel Logs
1. Go to Vercel → Deployments → Latest
2. Click "Functions"
3. Look for errors in `admin-keys` function

### Common Issues & Fixes:

**Issue: "Configuration Error: Invalid Supabase URL"**
- Fix: Check `NEXT_PUBLIC_SUPABASE_URL` in Vercel env vars
- Should be: `https://jxzqzbkcmybmpnmkukuu.supabase.co`

**Issue: "Missing Service Role Key"**
- Fix: Check `SUPABASE_SERVICE_ROLE_KEY` in Vercel env vars
- Get it from: Supabase → Settings → API → service_role key

**Issue: "Database Error: permission denied"**
- Fix: Run this SQL in Supabase to ensure service role has access:

```sql
-- Grant service role full access to license_keys
DROP POLICY IF EXISTS "Service Role Full Access" ON public.license_keys;
CREATE POLICY "Service Role Full Access" 
ON public.license_keys
FOR ALL 
TO service_role
USING (true)
WITH CHECK (true);
```

---

## 🎯 Quick Supabase Check

Run this in Supabase SQL Editor to verify the table is ready:

```sql
-- Check table exists and structure
SELECT 
  column_name, 
  data_type, 
  is_nullable
FROM information_schema.columns 
WHERE table_name = 'license_keys'
ORDER BY ordinal_position;

-- Check existing keys
SELECT 
  key,
  status,
  user_id,
  created_at,
  expires_at
FROM license_keys
ORDER BY created_at DESC
LIMIT 10;

-- Test insert (will fail if permissions are wrong)
INSERT INTO license_keys (key, plan_id, status)
VALUES ('TEST-KEY-1234', 'all-access', 'active')
RETURNING *;

-- Clean up test
DELETE FROM license_keys WHERE key = 'TEST-KEY-1234';
```

If all queries work → Admin should work!

---

## 📊 Expected Behavior:

### Normal Key:
```
Key: ABCD-EFGH-JKLM
Status: active (green)
User ID: - (empty until claimed)
Created: 2025-11-21
Expires: Never
```

### Temporary Key (24 hours):
```
Key: PQRS-TUVW-XYZ2
Status: active (green)
User ID: - (empty until claimed)
Created: 2025-11-21
Expires: 2025-11-22 21:00:00
```

### Claimed Key:
```
Key: MNOP-QRST-UVWX
Status: claimed (blue)
User ID: user_2abc...
Created: 2025-11-20
Expires: Never
```

---

## 🚀 Ready to Use!

The system should work now that Supabase/Clerk sync is fixed. Just:
1. Go to `/admin/keys`
2. Click "Generate Key"
3. Copy and share with students!

---

## 💡 Pro Tips:

**Bulk Generation:**
- The code supports generating multiple keys at once
- Currently UI only generates 1 at a time
- Can modify `count` parameter in code if needed

**Temporary Keys for Trials:**
- Set expiry to 24-168 hours (1-7 days)
- Perfect for trial access or limited offers
- Keys auto-expire, no manual cleanup needed

**Key Format:**
- 12 characters total (3 segments of 4)
- Uses: A-Z (no I, O) and 2-9 (no 0, 1)
- Reduces confusion (no look-alike characters)

---

Need help? Check the Vercel logs or Supabase SQL editor for specific errors!
