-- Quick Data Check - See if tables have data

-- Check 1: Profiles (users)
SELECT COUNT(*) as profile_count FROM profiles;
SELECT user_id, email, first_name FROM profiles LIMIT 5;

-- Check 2: User Stats (gamification)
SELECT COUNT(*) as stats_count FROM user_stats;
SELECT user_id, total_xp, current_level, current_streak FROM user_stats LIMIT 5;

-- Check 3: Daily Quests (should have 3)
SELECT COUNT(*) as quest_count FROM daily_quests WHERE is_active = true;
SELECT id, title, quest_type, target_count FROM daily_quests WHERE is_active = true;

-- Check 4: User Quests (your personal quest progress)
SELECT COUNT(*) as user_quest_count FROM user_quests;
SELECT 
  uq.user_id,
  uq.progress,
  uq.is_completed,
  uq.last_updated,
  dq.title,
  dq.quest_type
FROM user_quests uq
JOIN daily_quests dq ON uq.quest_id = dq.id
LIMIT 10;

-- Check 5: License Keys (to see students)
SELECT COUNT(*) as license_count FROM license_keys;
SELECT key, status, user_id, redeemed_by_email FROM license_keys LIMIT 5;

-- Check 6: User Progress (completed lessons)
SELECT COUNT(*) as progress_count FROM user_progress;
SELECT user_id, lesson_id, completed_at FROM user_progress LIMIT 5;
