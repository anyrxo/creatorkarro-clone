-- Fix: Insert daily quests with correct column names
-- The column is "target_count" not "target" or "target_value"

-- First, check what's already there
SELECT * FROM daily_quests;

-- Insert default daily quests (using gen_random_uuid() for id)
INSERT INTO daily_quests (id, title, description, quest_type, target_count, xp_reward, is_active)
VALUES
  (gen_random_uuid(), 'First Steps', 'Complete your first lesson today', 'lesson_complete', 1, 25, true),
  (gen_random_uuid(), 'Learning Streak', 'Complete 3 lessons in one day', 'lesson_complete', 3, 75, true),
  (gen_random_uuid(), 'Module Master', 'Finish an entire module', 'module_complete', 1, 200, true);

-- Verify they were inserted
SELECT * FROM daily_quests;

-- Fix RLS policies (allow everyone to read active quests)
ALTER TABLE daily_quests ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "daily_quests_select" ON daily_quests;
CREATE POLICY "daily_quests_select" ON daily_quests
  FOR SELECT USING (is_active = true);

-- Fix user_quests RLS policies
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
