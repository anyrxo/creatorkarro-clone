# Supabase Sync Error - Diagnostic Guide

## Possible Issues:

### 1. Row Level Security (RLS) - Most Likely
The `profiles` table might have RLS enabled, blocking the service role from inserting.

**Fix:**
1. Go to: https://supabase.com/dashboard/project/jxzqzbkcmybmpnmkukuu/editor
2. Click on the `profiles` table
3. Click the "RLS" or "Policies" tab
4. **Either**:
   - **Option A**: Disable RLS for this table (click "Disable RLS")
   - **Option B**: Add a policy that allows service role to insert:
     ```sql
     CREATE POLICY "Allow service role full access" ON profiles
     FOR ALL
     TO service_role
     USING (true)
     WITH CHECK (true);
     ```

### 2. Table Schema Mismatch
The table might not have the expected columns.

**Verify Schema:**
1. Go to: https://supabase.com/dashboard/project/jxzqzbkcmybmpnmkukuu/editor
2. Click on `profiles` table
3. Verify these columns exist:
   - `user_id` (text, primary key)
   - `email` (text)
   - `first_name` (text)
   - `last_name` (text)
   - `last_seen_at` (timestamp with time zone)

### 3. Service Role Key Issue
The service role key might be incorrect.

**Verify:**
1. Go to: https://supabase.com/dashboard/project/jxzqzbkcmybmpnmkukuu/settings/api
2. Under "Project API keys", find "service_role"
3. Click "Reveal" and copy the key
4. Compare with `SUPABASE_SERVICE_ROLE_KEY` in Vercel
5. If different, update Vercel with the correct key

## Quick Fix (Most Likely Solution):

**Disable RLS on the profiles table:**

1. Go to Supabase SQL Editor: https://supabase.com/dashboard/project/jxzqzbkcmybmpnmkukuu/sql/new
2. Run this SQL:
   ```sql
   ALTER TABLE profiles DISABLE ROW LEVEL SECURITY;
   ```
3. Click "Run"
4. Test the webhook again

**Or add a service role policy:**

```sql
CREATE POLICY "Service role can do anything" 
ON profiles 
FOR ALL 
TO service_role 
USING (true) 
WITH CHECK (true);
```

## After Fixing:

1. Go back to Clerk webhook page
2. Click "Send Example" again
3. Should see: ✅ 200 Success
4. Then test with real signup
