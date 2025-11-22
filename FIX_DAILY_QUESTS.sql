-- Fix: Ensure daily quests exist and are active
-- Run this in your Supabase SQL Editor

-- First, check if daily_quests table exists and has data
SELECT * FROM daily_quests;

-- If empty, insert default daily quests
INSERT INTO daily_quests (id, title, description, quest_type, target_value, xp_reward, is_active)
VALUES
  ('quest-1', 'First Steps', 'Complete your first lesson today', 'lesson_complete', 1, 25, true),
  ('quest-2', 'Learning Streak', 'Complete 3 lessons in one day', 'lesson_complete', 3, 75, true),
  ('quest-3', 'Module Master', 'Finish an entire module', 'module_complete', 1, 200, true)
ON CONFLICT (id) DO UPDATE
SET is_active = true;

-- Check RLS policies on user_quests
SELECT * FROM user_quests LIMIT 5;

-- If you get an RLS error, run this:
ALTER TABLE user_quests ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "user_quests_select" ON user_quests;
CREATE POLICY "user_quests_select" ON user_quests
  FOR SELECT USING (auth.uid()::text = user_id);

DROP POLICY IF EXISTS "user_quests_insert" ON user_quests;
CREATE POLICY "user_quests_insert" ON user_quests
  FOR INSERT WITH CHECK (auth.uid()::text = user_id);

DROP POLICY IF EXISTS "user_quests_update" ON user_quests;
CREATE POLICY "user_quests_update" ON user_quests
  FOR UPDATE USING (auth.uid()::text = user_id);
