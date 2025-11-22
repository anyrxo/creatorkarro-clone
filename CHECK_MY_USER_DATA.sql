-- Check 1: Do you have a profile?
SELECT * FROM profiles WHERE user_id = 'user_35jAWYTlIhdRApOd3NkVTtDyNfD';

-- Check 2: Do you have user_stats?
SELECT * FROM user_stats WHERE user_id = 'user_35jAWYTlIhdRApOd3NkVTtDyNfD';

-- Check 3: Do you have user_quests for today?
SELECT 
  uq.*,
  dq.title,
  dq.quest_type,
  dq.target_count
FROM user_quests uq
JOIN daily_quests dq ON uq.quest_id = dq.id
WHERE uq.user_id = 'user_35jAWYTlIhdRApOd3NkVTtDyNfD'
  AND uq.last_updated = CURRENT_DATE;
