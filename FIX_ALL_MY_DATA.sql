-- COMPLETE FIX for user_35jAWYTlIhdRApOd3NkVTtDyNfD
-- This will fix: Empty Students, Missing Quests, and other issues

-- Step 1: Create/Update your profile (fixes Students list)
INSERT INTO profiles (user_id, email, first_name, last_name, created_at)
VALUES (
  'user_35jAWYTlIhdRApOd3NkVTtDyNfD',
  'your-email@example.com', -- REPLACE WITH YOUR ACTUAL EMAIL
  'Your First Name',         -- REPLACE
  'Your Last Name',          -- REPLACE
  NOW()
)
ON CONFLICT (user_id) DO UPDATE
SET email = EXCLUDED.email;

-- Step 2: Create today's daily quests for you
INSERT INTO user_quests (user_id, quest_id, progress, is_completed, last_updated)
SELECT 
  'user_35jAWYTlIhdRApOd3NkVTtDyNfD',
  id,
  0,
  false,
  CURRENT_DATE
FROM daily_quests
WHERE is_active = true
ON CONFLICT (user_id, quest_id, last_updated) DO NOTHING;

-- Step 3: Verify everything is set up
SELECT 'Profile Check:' as check_type;
SELECT * FROM profiles WHERE user_id = 'user_35jAWYTlIhdRApOd3NkVTtDyNfD';

SELECT 'User Stats Check:' as check_type;
SELECT * FROM user_stats WHERE user_id = 'user_35jAWYTlIhdRApOd3NkVTtDyNfD';

SELECT 'Daily Quests Check:' as check_type;
SELECT 
  uq.progress,
  uq.is_completed,
  dq.title,
  dq.quest_type,
  dq.target_count
FROM user_quests uq
JOIN daily_quests dq ON uq.quest_id = dq.id
WHERE uq.user_id = 'user_35jAWYTlIhdRApOd3NkVTtDyNfD'
  AND uq.last_updated = CURRENT_DATE;
