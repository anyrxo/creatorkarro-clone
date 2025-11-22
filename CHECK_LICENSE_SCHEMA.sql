-- Check license_keys table structure
SELECT 
    column_name, 
    data_type, 
    is_nullable
FROM information_schema.columns
WHERE table_name = 'license_keys';

-- Check if claim_license_key function exists and its arguments
SELECT 
    routine_name,
    routine_definition
FROM information_schema.routines
WHERE routine_name = 'claim_license_key';
