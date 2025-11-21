-- GAMIFICATION SYSTEM SETUP - Run in Supabase SQL Editor

-- 1. Create user_stats table
CREATE TABLE IF NOT EXISTS user_stats (
  user_id TEXT PRIMARY KEY,
  total_xp INTEGER DEFAULT 0,
  current_level INTEGER DEFAULT 1,
  current_streak INTEGER DEFAULT 0,
  longest_streak INTEGER DEFAULT 0,
  last_activity_date DATE,
  total_lessons_completed INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Add completed_date to user_progress for streak tracking
ALTER TABLE user_progress ADD COLUMN IF NOT EXISTS completed_date DATE DEFAULT CURRENT_DATE;

-- 3. Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_user_stats_xp ON user_stats(total_xp DESC);
CREATE INDEX IF NOT EXISTS idx_user_progress_date ON user_progress(user_id, completed_date);

-- 4. Enable RLS
ALTER TABLE user_stats ENABLE ROW LEVEL SECURITY;

-- 5. RLS Policies
DROP POLICY IF EXISTS "Users can view own stats" ON user_stats;
CREATE POLICY "Users can view own stats" ON user_stats 
  FOR SELECT USING (user_id = CAST(auth.uid() AS text));

DROP POLICY IF EXISTS "Users can update own stats" ON user_stats;
CREATE POLICY "Users can update own stats" ON user_stats 
  FOR UPDATE USING (user_id = CAST(auth.uid() AS text));

DROP POLICY IF EXISTS "Users can insert own stats" ON user_stats;
CREATE POLICY "Users can insert own stats" ON user_stats 
  FOR INSERT WITH CHECK (user_id = CAST(auth.uid() AS text));

-- 6. Migrate existing users (retroactive XP and levels)
INSERT INTO user_stats (user_id, total_lessons_completed, last_activity_date)
SELECT 
  p.user_id,
  COUNT(DISTINCT up.lesson_id),
  MAX(up.completed_at::DATE)
FROM profiles p
LEFT JOIN user_progress up ON p.user_id = up.user_id
GROUP BY p.user_id
ON CONFLICT (user_id) DO NOTHING;

-- 7. Award retroactive XP (50 XP per lesson)
UPDATE user_stats us
SET total_xp = (
  SELECT COUNT(*) * 50 
  FROM user_progress 
  WHERE user_id = us.user_id
)
WHERE EXISTS (
  SELECT 1 FROM user_progress WHERE user_id = us.user_id
);

-- 8. Calculate levels based on XP
UPDATE user_stats
SET current_level = FLOOR(SQRT(total_xp / 75)) + 1
WHERE total_xp > 0;

SELECT 'Gamification setup complete!' as status;
