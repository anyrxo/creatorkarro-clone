-- ==========================================
-- PERPLEXITY UPGRADE SCRIPT
-- Enhances RLS to work with Clerk IDs specifically
-- ==========================================

-- 1. Create the Helper Function (Extracts Clerk ID from JWT)
CREATE OR REPLACE FUNCTION requesting_user_id()
RETURNS TEXT AS $$
SELECT NULLIF(
  current_setting('request.jwt.claims', true)::json->>'sub',
  ''
)::text;
$$ LANGUAGE SQL STABLE;

-- 2. Update Policies for PROFILES
DROP POLICY IF EXISTS "Users can view own profile" ON public.profiles;
CREATE POLICY "Users can view own profile" ON public.profiles
  FOR SELECT USING (user_id = requesting_user_id());

DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;
CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE USING (user_id = requesting_user_id());

-- 3. Update Policies for LICENSE KEYS
DROP POLICY IF EXISTS "Users can view their own license" ON public.license_keys;
CREATE POLICY "Users can view their own license" ON public.license_keys
  FOR SELECT USING (user_id = requesting_user_id());

-- 4. Update Policies for AFFILIATE PROFILES
DROP POLICY IF EXISTS "Users can view own affiliate profile" ON public.affiliate_profiles;
CREATE POLICY "Users can view own affiliate profile" ON public.affiliate_profiles
  FOR SELECT USING (user_id = requesting_user_id());

DROP POLICY IF EXISTS "Users can update own affiliate profile" ON public.affiliate_profiles;
CREATE POLICY "Users can update own affiliate profile" ON public.affiliate_profiles
  FOR UPDATE USING (user_id = requesting_user_id());

-- 5. Update Policies for USER PROGRESS
DROP POLICY IF EXISTS "Users can view own progress" ON public.user_progress;
CREATE POLICY "Users can view own progress" ON public.user_progress
  FOR SELECT USING (user_id = requesting_user_id());

DROP POLICY IF EXISTS "Users can insert own progress" ON public.user_progress;
CREATE POLICY "Users can insert own progress" ON public.user_progress
  FOR INSERT WITH CHECK (user_id = requesting_user_id());

DROP POLICY IF EXISTS "Users can update own progress" ON public.user_progress;
CREATE POLICY "Users can update own progress" ON public.user_progress
  FOR UPDATE USING (user_id = requesting_user_id());

-- 6. Grant access to the function
GRANT EXECUTE ON FUNCTION requesting_user_id() TO authenticated;
GRANT EXECUTE ON FUNCTION requesting_user_id() TO service_role;

SELECT 'Perplexity Upgrade Complete' as status;

