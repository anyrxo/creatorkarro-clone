-- Check if user_quests are being created for your user

-- Step 1: Find your user_id from Clerk
-- Go to Clerk Dashboard > Users > Click your user > Copy the User ID

-- Step 2: Check if you have user_quests
SELECT * FROM user_quests 
WHERE user_id = 'YOUR_USER_ID_HERE'
ORDER BY last_updated DESC;

-- Step 3: If empty, manually create them for today (replace YOUR_USER_ID_HERE)
INSERT INTO user_quests (user_id, quest_id, progress, is_completed, last_updated)
SELECT 
  'YOUR_USER_ID_HERE',
  id,
  0,
  false,
  CURRENT_DATE
FROM daily_quests
WHERE is_active = true
ON CONFLICT (user_id, quest_id, last_updated) DO NOTHING;

-- Step 4: Verify
SELECT 
  uq.*,
  dq.title,
  dq.description,
  dq.target_count
FROM user_quests uq
JOIN daily_quests dq ON uq.quest_id = dq.id
WHERE uq.user_id = 'YOUR_USER_ID_HERE'
ORDER BY uq.last_updated DESC;
