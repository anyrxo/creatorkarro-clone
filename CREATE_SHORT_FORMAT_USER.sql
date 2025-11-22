-- SOLUTION: Create user_stats with the SHORT format ID
-- This way Clerk's ID will match the database

-- Step 1: Create user_stats for SHORT format ID
INSERT INTO user_stats (user_id, total_xp, current_level, current_streak, longest_streak, last_activity_date, total_lessons_completed)
VALUES (
  '35jAWYTlIhdRApOd3NkVTtDyNfD', -- SHORT format (what Clerk uses)
  50,  -- Copy from your existing stats
  1,
  0,
  0,
  '2025-11-21',
  1
)
ON CONFLICT (user_id) DO NOTHING;

-- Step 2: Now create quests for the SHORT format
INSERT INTO user_quests (user_id, quest_id, progress, is_completed, last_updated)
SELECT 
  '35jAWYTlIhdRApOd3NkVTtDyNfD',
  id,
  0,
  false,
  CURRENT_DATE
FROM daily_quests
WHERE is_active = true
ON CONFLICT (user_id, quest_id, last_updated) DO NOTHING;

-- Step 3: Verify it worked
SELECT 
  uq.user_id,
  uq.progress,
  dq.title,
  dq.quest_type
FROM user_quests uq
JOIN daily_quests dq ON uq.quest_id = dq.id
WHERE uq.user_id = '35jAWYTlIhdRApOd3NkVTtDyNfD'
  AND uq.last_updated = CURRENT_DATE;
