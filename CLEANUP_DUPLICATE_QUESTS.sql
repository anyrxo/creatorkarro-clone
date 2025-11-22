-- Clean up duplicate daily quests and keep only the latest ones

-- Option 1: Delete all old quests and keep only the newest 3
DELETE FROM daily_quests 
WHERE created_at < '2025-11-22 11:25:00';

-- Verify we have clean data now
SELECT * FROM daily_quests ORDER BY created_at DESC;

-- If you want to completely reset and have exactly 3 quests:
-- (Uncomment the lines below if you want a fresh start)

/*
-- Delete all existing quests
DELETE FROM daily_quests;

-- Insert clean set of quests
INSERT INTO daily_quests (id, title, description, quest_type, target_count, xp_reward, is_active)
VALUES
  (gen_random_uuid(), 'Daily Learner', 'Complete 1 lesson today', 'lesson_complete', 1, 50, true),
  (gen_random_uuid(), 'Learning Streak', 'Complete 3 lessons in one day', 'lesson_complete', 3, 75, true),
  (gen_random_uuid(), 'Module Master', 'Finish an entire module', 'module_complete', 1, 200, true);
*/
