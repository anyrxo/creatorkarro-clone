-- Check Profiles and License Keys
SELECT 'Profiles Count' as check_name, COUNT(*) as count FROM profiles;
SELECT 'License Keys Count' as check_name, COUNT(*) as count FROM license_keys;

-- Check first 5 profiles
SELECT * FROM profiles LIMIT 5;

-- Check first 5 license keys
SELECT * FROM license_keys LIMIT 5;
