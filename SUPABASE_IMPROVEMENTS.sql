-- ============================================
-- CRITICAL - RUN THIS FIRST
-- These columns are missing from affiliate_profiles
-- Your code will error without them
-- ============================================

ALTER TABLE affiliate_profiles ADD COLUMN IF NOT EXISTS email TEXT;
ALTER TABLE affiliate_profiles ADD COLUMN IF NOT EXISTS total_earnings NUMERIC(10, 2) DEFAULT 0.00;
ALTER TABLE affiliate_profiles ADD COLUMN IF NOT EXISTS payout_email TEXT;

-- Populate email from profiles for existing affiliates
UPDATE affiliate_profiles 
SET email = profiles.email 
FROM profiles 
WHERE affiliate_profiles.user_id = profiles.user_id 
  AND affiliate_profiles.email IS NULL;

-- ============================================
-- RECOMMENDED - Run for better performance
-- ============================================

-- Speed up license key lookups (used in cron job every hour)
CREATE INDEX IF NOT EXISTS idx_license_keys_user_id ON license_keys(user_id);
CREATE INDEX IF NOT EXISTS idx_license_keys_status ON license_keys(status);
CREATE INDEX IF NOT EXISTS idx_license_keys_claimed_at ON license_keys(claimed_at);

-- Speed up profile lookups
CREATE INDEX IF NOT EXISTS idx_profiles_created_at ON profiles(created_at);
CREATE INDEX IF NOT EXISTS idx_profiles_last_seen_at ON profiles(last_seen_at);

-- Speed up affiliate lookups
CREATE INDEX IF NOT EXISTS idx_affiliate_profiles_code ON affiliate_profiles(code);
CREATE INDEX IF NOT EXISTS idx_referrals_referrer_id ON referrals(referrer_id);

-- ============================================
-- OPTIONAL - Nice to have
-- ============================================

-- Ensure status values are valid
ALTER TABLE license_keys DROP CONSTRAINT IF EXISTS license_keys_status_check;
ALTER TABLE license_keys ADD CONSTRAINT license_keys_status_check 
  CHECK (status IN ('active', 'claimed', 'disabled'));

ALTER TABLE referrals DROP CONSTRAINT IF EXISTS referrals_status_check;
ALTER TABLE referrals ADD CONSTRAINT referrals_status_check 
  CHECK (status IN ('pending', 'completed', 'paid'));

-- Set default values
ALTER TABLE license_keys ALTER COLUMN status SET DEFAULT 'active';
ALTER TABLE referrals ALTER COLUMN status SET DEFAULT 'pending';
ALTER TABLE referrals ALTER COLUMN amount SET DEFAULT 0.00;
