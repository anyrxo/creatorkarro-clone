-- Enable Realtime for specific tables
alter publication supabase_realtime add table user_stats;
-- We will add others after creating them

-- 1. Achievements System
CREATE TABLE IF NOT EXISTS achievements (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  icon TEXT NOT NULL, -- Emoji or Lucide icon name
  xp_reward INTEGER NOT NULL DEFAULT 100,
  category TEXT NOT NULL, -- 'learning', 'social', 'streak', 'creation'
  condition_type TEXT NOT NULL, -- 'lessons_count', 'streak_days', 'xp_total'
  condition_value INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS user_achievements (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id TEXT NOT NULL REFERENCES user_stats(user_id) ON DELETE CASCADE,
  achievement_id UUID NOT NULL REFERENCES achievements(id) ON DELETE CASCADE,
  unlocked_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, achievement_id)
);

-- 2. Daily Quests System
CREATE TABLE IF NOT EXISTS daily_quests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  xp_reward INTEGER NOT NULL DEFAULT 50,
  target_count INTEGER NOT NULL DEFAULT 1,
  quest_type TEXT NOT NULL, -- 'complete_lesson', 'login', 'share_content'
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS user_quests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id TEXT NOT NULL REFERENCES user_stats(user_id) ON DELETE CASCADE,
  quest_id UUID NOT NULL REFERENCES daily_quests(id) ON DELETE CASCADE,
  progress INTEGER DEFAULT 0,
  is_completed BOOLEAN DEFAULT false,
  last_updated DATE DEFAULT CURRENT_DATE,
  UNIQUE(user_id, quest_id, last_updated)
);

-- 3. XP History for Graphs
CREATE TABLE IF NOT EXISTS xp_history (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id TEXT NOT NULL REFERENCES user_stats(user_id) ON DELETE CASCADE,
  amount INTEGER NOT NULL,
  reason TEXT NOT NULL, -- 'lesson_complete', 'daily_quest', 'achievement'
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. RLS Policies
ALTER TABLE achievements ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_achievements ENABLE ROW LEVEL SECURITY;
ALTER TABLE daily_quests ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_quests ENABLE ROW LEVEL SECURITY;
ALTER TABLE xp_history ENABLE ROW LEVEL SECURITY;

-- Achievements: Everyone can read, only admins can insert (handled via dashboard or seed)
CREATE POLICY "Everyone can view achievements" ON achievements FOR SELECT USING (true);

-- User Achievements: Users view their own
CREATE POLICY "Users view own achievements" ON user_achievements FOR SELECT USING (user_id = auth.uid()::text);
CREATE POLICY "System insert user achievements" ON user_achievements FOR INSERT WITH CHECK (user_id = auth.uid()::text);

-- Daily Quests: Everyone can read active quests
CREATE POLICY "Everyone can view active quests" ON daily_quests FOR SELECT USING (is_active = true);

-- User Quests: Users view and update their own
CREATE POLICY "Users view own quests" ON user_quests FOR SELECT USING (user_id = auth.uid()::text);
CREATE POLICY "Users update own quests" ON user_quests FOR UPDATE USING (user_id = auth.uid()::text);
CREATE POLICY "Users insert own quests" ON user_quests FOR INSERT WITH CHECK (user_id = auth.uid()::text);

-- XP History: Users view their own
CREATE POLICY "Users view own xp history" ON xp_history FOR SELECT USING (user_id = auth.uid()::text);
CREATE POLICY "System insert xp history" ON xp_history FOR INSERT WITH CHECK (user_id = auth.uid()::text);

-- 5. Seed Initial Data (Achievements & Quests)
INSERT INTO achievements (title, description, icon, xp_reward, category, condition_type, condition_value) VALUES
('First Steps', 'Complete your first lesson', '🌱', 100, 'learning', 'lessons_count', 1),
('On Fire', 'Reach a 3-day streak', '🔥', 300, 'streak', 'streak_days', 3),
('Dedicated Learner', 'Complete 10 lessons', '📚', 500, 'learning', 'lessons_count', 10),
('Week Warrior', 'Reach a 7-day streak', '⚡', 1000, 'streak', 'streak_days', 7),
('Knowledge Seeker', 'Earn 1000 XP', '🧠', 200, 'learning', 'xp_total', 1000)
ON CONFLICT DO NOTHING;

INSERT INTO daily_quests (title, description, xp_reward, target_count, quest_type) VALUES
('Daily Learner', 'Complete 1 lesson today', 50, 1, 'complete_lesson'),
('Consistency King', 'Log in to the platform', 10, 1, 'login')
ON CONFLICT DO NOTHING;

-- 6. Enable Realtime for new tables
alter publication supabase_realtime add table user_achievements;
alter publication supabase_realtime add table user_quests;
