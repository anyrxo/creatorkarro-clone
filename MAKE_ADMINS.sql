-- Make specific users admins
-- Replace emails with the actual emails you want to make admins

UPDATE profiles
SET is_admin = true
WHERE email IN ('mannan0010@gmail.com', 'irenxmedia@gmail.com');

-- Verify
SELECT email, is_admin, user_id 
FROM profiles 
WHERE email IN ('mannan0010@gmail.com', 'irenxmedia@gmail.com');

-- Check if they are still pending (in license_keys but no profile)
SELECT email, redeemed_by_email, user_id, key
FROM license_keys
WHERE email IN ('mannan0010@gmail.com', 'irenxmedia@gmail.com')
   OR redeemed_by_email IN ('mannan0010@gmail.com', 'irenxmedia@gmail.com');
