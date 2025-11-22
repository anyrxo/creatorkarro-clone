-- 1. Create email_logs table to prevent duplicate sending
CREATE TABLE IF NOT EXISTS email_logs (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id TEXT NOT NULL,
    email_type TEXT NOT NULL,
    sent_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    metadata JSONB DEFAULT '{}'::jsonb
);

-- 2. Create index for fast lookups
CREATE INDEX IF NOT EXISTS idx_email_logs_lookup ON email_logs(user_id, email_type);

-- 3. Add RLS (Admin only)
ALTER TABLE email_logs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role can do everything" ON email_logs
    USING (true)
    WITH CHECK (true);
