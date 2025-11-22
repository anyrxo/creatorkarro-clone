-- Fix Foreign Key Relationship for getStudents
-- This enables joining profiles with license_keys

-- 1. Ensure profiles.user_id is unique (required for FK)
ALTER TABLE profiles
ADD CONSTRAINT profiles_user_id_key UNIQUE (user_id);
-- (It might already be unique, this will just ensure it or fail if duplicate)

-- 2. Add Foreign Key from license_keys to profiles
-- We first drop any existing constraint to be safe (if named differently)
-- ALTER TABLE license_keys DROP CONSTRAINT IF EXISTS fk_license_keys_profiles;

ALTER TABLE license_keys
ADD CONSTRAINT fk_license_keys_profiles
FOREIGN KEY (user_id)
REFERENCES profiles (user_id)
ON DELETE SET NULL;

-- 3. Verify
SELECT
    tc.constraint_name, 
    tc.table_name, 
    kcu.column_name, 
    ccu.table_name AS foreign_table_name,
    ccu.column_name AS foreign_column_name 
FROM 
    information_schema.table_constraints AS tc 
    JOIN information_schema.key_column_usage AS kcu
      ON tc.constraint_name = kcu.constraint_name
      AND tc.table_schema = kcu.table_schema
    JOIN information_schema.constraint_column_usage AS ccu
      ON ccu.constraint_name = tc.constraint_name
      AND ccu.table_schema = tc.table_schema
WHERE tc.constraint_type = 'FOREIGN KEY' AND tc.table_name = 'license_keys';
