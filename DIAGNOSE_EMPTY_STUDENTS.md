# Diagnostics for Empty Students Issue

## Quick Check

Run this in your Supabase SQL Editor to see if you have any data:

```sql
-- Check profiles table
SELECT COUNT(*) as profile_count FROM profiles;

-- Check license_keys table  
SELECT COUNT(*) as license_count FROM license_keys;

-- Check if RLS is blocking
SELECT * FROM profiles LIMIT 5;
```

## Most Likely Causes

1. **No users have signed up yet**
   - Go to Clerk Dashboard and check if there are any users
   - If yes, check if the webhook is configured
   
2. **Clerk webhook not syncing**
   - Check if `WEBHOOK_SECRET` is set in Vercel env vars
   - Check Vercel logs for webhook errors
   
3. **RLS Policies blocking admin**
   - The Service Role Key should bypass RLS
   - But double-check with the SQL above

## Temporary Fix

If you need to see users NOW, you can:
1. Sign up a test account
2. Or manually insert a profile:

```sql
INSERT INTO profiles (user_id, email, first_name, last_name) 
VALUES ('test-123', 'test@example.com', 'Test', 'User');
```
