-- Step 1: Check what columns exist in daily_quests
SELECT column_name, data_type 
FROM information_schema.columns 
WHERE table_name = 'daily_quests'
ORDER BY ordinal_position;
