ALTER TABLE user_stats 
ADD COLUMN IF NOT EXISTS last_email_type TEXT;
