-- Verify Everything
-- 1. Check Profiles
SELECT 'Profiles' as check, COUNT(*) as count FROM profiles;

-- 2. Check License Keys
SELECT 'License Keys' as check, COUNT(*) as count FROM license_keys;

-- 3. Check Linked Keys
SELECT 'Linked Keys' as check, COUNT(*) as count FROM license_keys WHERE user_id IS NOT NULL;

-- 4. Check Admins
SELECT 'Admins' as check, email FROM profiles WHERE is_admin = true;

-- 5. Check Foreign Key
SELECT 'Foreign Key' as check, constraint_name 
FROM information_schema.table_constraints 
WHERE table_name = 'license_keys' AND constraint_type = 'FOREIGN KEY';
