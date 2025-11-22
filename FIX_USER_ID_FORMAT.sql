-- Check for user ID format mismatches (FIXED)

-- Step 1: See what user_ids exist in different tables
SELECT 'profiles' as table_name, user_id FROM profiles
UNION ALL
SELECT 'user_stats' as table_name, user_id FROM user_stats
UNION ALL
SELECT 'user_quests' as table_name, user_id FROM user_quests
UNION ALL
SELECT 'license_keys' as table_name, user_id FROM license_keys WHERE user_id IS NOT NULL;

-- Step 2: Create quests for ID WITHOUT 'user_' prefix
INSERT INTO user_quests (user_id, quest_id, progress, is_completed, last_updated)
SELECT 
  '35jAWYTlIhdRApOd3NkVTtDyNfD', -- WITHOUT user_ prefix
  id,
  0,
  false,
  CURRENT_DATE
FROM daily_quests
WHERE is_active = true
ON CONFLICT (user_id, quest_id, last_updated) DO NOTHING;

-- Step 3: Verify which format has quests
SELECT 
  'WITH user_ prefix' as format,
  COUNT(*) as quest_count
FROM user_quests 
WHERE user_id = 'user_35jAWYTlIhdRApOd3NkVTtDyNfD'
  AND last_updated = CURRENT_DATE
UNION ALL
SELECT 
  'WITHOUT user_ prefix' as format,
  COUNT(*) as quest_count
FROM user_quests 
WHERE user_id = '35jAWYTlIhdRApOd3NkVTtDyNfD'
  AND last_updated = CURRENT_DATE;
