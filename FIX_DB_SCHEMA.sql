-- 1. Fix License Keys Table
ALTER TABLE license_keys ADD COLUMN IF NOT EXISTS redeemed_by_email TEXT;

-- 2. Fix Profiles Table (Add Admin Flag)
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS is_admin BOOLEAN DEFAULT FALSE;

-- 3. Create Email Logs Table (for spam prevention)
CREATE TABLE IF NOT EXISTS email_logs (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id TEXT NOT NULL,
    email_type TEXT NOT NULL,
    sent_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    metadata JSONB DEFAULT '{}'::jsonb
);

CREATE INDEX IF NOT EXISTS idx_email_logs_lookup ON email_logs(user_id, email_type);
ALTER TABLE email_logs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Service role can do everything" ON email_logs USING (true) WITH CHECK (true);

-- 4. Update claim_license_key RPC
CREATE OR REPLACE FUNCTION public.claim_license_key(
  p_key text, 
  p_user_id text,
  p_email text
)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_key_id uuid;
  v_expires_at timestamp with time zone;
BEGIN
  -- Check if key exists and is unclaimed
  SELECT id, expires_at INTO v_key_id, v_expires_at
  FROM public.license_keys
  WHERE key = p_key
    AND user_id IS NULL
    AND status = 'active'
  FOR UPDATE;

  -- Key doesn't exist or already claimed
  IF v_key_id IS NULL THEN
    RETURN false;
  END IF;

  -- Check if key has expired (Redemption window)
  IF v_expires_at IS NOT NULL AND v_expires_at < NOW() THEN
    UPDATE public.license_keys
    SET status = 'expired'
    WHERE id = v_key_id;
    RETURN false;
  END IF;

  -- Claim the key
  UPDATE public.license_keys
  SET 
    user_id = p_user_id,
    claimed_at = NOW(),
    status = 'claimed',
    redeemed_by_email = p_email
  WHERE id = v_key_id;

  -- Also update the user profile to mark as paid/admin if needed (optional)
  -- For now, we rely on license_keys check for paid status

  RETURN true;
END;
$$;

-- 5. Grant permissions (just in case)
GRANT ALL ON public.license_keys TO service_role;
GRANT ALL ON public.profiles TO service_role;
GRANT ALL ON public.email_logs TO service_role;
