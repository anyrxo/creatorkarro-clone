# Instructions for Comet: Check Service Role Policy Details

## Task: Verify the "Service role full access" policy is correctly configured

### Steps:

1. **You're already on the right page**: Supabase Policies for `profiles` table

2. **Click on** "Service role full access" policy to view its details

3. **Take a screenshot** showing:
   - The policy definition
   - The USING clause
   - The WITH CHECK clause
   - What operations it allows (INSERT, SELECT, UPDATE, DELETE)

4. **Verify** it shows:
   - Command: ALL (or includes INSERT)
   - Applied to: service_role
   - USING: `true` or `(true)`
   - WITH CHECK: `true` or `(true)`

### If the Policy Looks Wrong:

If it doesn't have INSERT or the clauses aren't set to `true`, we need to fix it.

**Option 1: Delete and recreate**
1. Delete the existing "Service role full access" policy
2. Click "Create policy"
3. Choose "Create a custom policy"
4. Set:
   - Name: Service role full access
   - Command: ALL
   - Target roles: service_role
   - USING expression: `true`
   - WITH CHECK expression: `true`
5. Save

**Option 2: Use SQL Editor**
1. Go to: SQL Editor
2. Run this:
```sql
DROP POLICY IF EXISTS "Service role full access" ON profiles;

CREATE POLICY "Service role full access" 
ON profiles 
FOR ALL 
TO service_role 
USING (true) 
WITH CHECK (true);
```

### Report Back:

Please provide a screenshot of the policy details so we can see exactly what's configured.
