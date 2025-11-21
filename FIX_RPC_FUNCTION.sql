-- FIX: Update claim_license_key RPC to accept email parameter
-- Run this in Supabase SQL Editor

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

  -- Check if key has expired
  IF v_expires_at IS NOT NULL AND v_expires_at < NOW() THEN
    -- Mark as expired
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

  RETURN true;
END;
$$;

-- Verify it was created
SELECT 
  routine_name,
  routine_type,
  data_type
FROM information_schema.routines
WHERE routine_name = 'claim_license_key';
