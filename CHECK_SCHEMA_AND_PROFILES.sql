-- Check license_keys columns
SELECT column_name 
FROM information_schema.columns 
WHERE table_name = 'license_keys';

-- Check if we have profiles
SELECT COUNT(*) FROM profiles;
