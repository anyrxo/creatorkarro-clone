-- Link existing users to their license keys
-- This fixes users who signed up but didn't get linked to their invite

-- Update license_keys with user_id from profiles where emails match
UPDATE license_keys lk
SET 
  user_id = p.user_id,
  status = 'active',
  claimed_at = NOW()
FROM profiles p
WHERE 
  lk.user_id IS NULL 
  AND (lk.email = p.email OR lk.redeemed_by_email = p.email);

-- Verify the fix
SELECT 
  lk.email, 
  lk.user_id, 
  lk.status, 
  p.first_name 
FROM license_keys lk
JOIN profiles p ON lk.user_id = p.user_id
WHERE lk.email IN ('manixsiren@gmail.com', 'mannan0010@gmail.com');
