-- 1. Ensure last_seen_at exists in profiles
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'profiles' AND column_name = 'last_seen_at') THEN
        ALTER TABLE profiles ADD COLUMN last_seen_at TIMESTAMP WITH TIME ZONE DEFAULT NOW();
    END IF;
END $$;

-- 2. Ensure license_keys table exists and has necessary columns
CREATE TABLE IF NOT EXISTS license_keys (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  key_code TEXT NOT NULL UNIQUE,
  status TEXT NOT NULL DEFAULT 'active',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  claimed_at TIMESTAMP WITH TIME ZONE,
  user_id TEXT, -- Clerk User ID
  redeemed_by_email TEXT,
  email TEXT, -- Added for invites
  expires_at TIMESTAMP WITH TIME ZONE
);

-- Add email column if it doesn't exist (for existing tables)
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'license_keys' AND column_name = 'email') THEN
        ALTER TABLE license_keys ADD COLUMN email TEXT;
    END IF;
END $$;

-- 3. Ensure affiliate tables exist
CREATE TABLE IF NOT EXISTS affiliate_profiles (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id TEXT NOT NULL UNIQUE, -- Clerk User ID
  email TEXT NOT NULL,
  referral_code TEXT NOT NULL UNIQUE,
  total_earnings DECIMAL(10, 2) DEFAULT 0.00,
  payout_email TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS referrals (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  referrer_id UUID REFERENCES affiliate_profiles(id),
  referred_user_id TEXT, -- Clerk User ID of the new user
  status TEXT DEFAULT 'pending', -- 'pending', 'completed', 'paid'
  commission_amount DECIMAL(10, 2) DEFAULT 0.00,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE license_keys ENABLE ROW LEVEL SECURITY;
ALTER TABLE affiliate_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE referrals ENABLE ROW LEVEL SECURITY;

-- 5. Create policies with explicit casting
-- We cast auth.uid() to text to match the text columns in our tables.

-- Profiles
DROP POLICY IF EXISTS "Users can view own profile" ON profiles;
CREATE POLICY "Users can view own profile" ON profiles FOR SELECT USING (user_id = CAST(auth.uid() AS text));

-- License Keys
DROP POLICY IF EXISTS "Users can view own keys" ON license_keys;
CREATE POLICY "Users can view own keys" ON license_keys FOR SELECT USING (user_id = CAST(auth.uid() AS text));

-- Affiliate
DROP POLICY IF EXISTS "Users can view own affiliate profile" ON affiliate_profiles;
CREATE POLICY "Users can view own affiliate profile" ON affiliate_profiles FOR SELECT USING (user_id = CAST(auth.uid() AS text));

-- Referrals
DROP POLICY IF EXISTS "Users can view own referrals" ON referrals;
CREATE POLICY "Users can view own referrals" ON referrals FOR SELECT USING (
  referrer_id IN (
    SELECT id FROM affiliate_profiles WHERE user_id = CAST(auth.uid() AS text)
  )
);
