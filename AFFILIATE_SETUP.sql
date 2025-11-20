-- 1. Create Affiliate Profiles Table
CREATE TABLE IF NOT EXISTS public.affiliate_profiles (
    user_id text PRIMARY KEY, -- Matches Clerk User ID
    code text UNIQUE NOT NULL,
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
    paypal_email text,
    total_earnings numeric DEFAULT 0
);

-- 2. Create Referrals Table
CREATE TABLE IF NOT EXISTS public.referrals (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
    referrer_id text NOT NULL, -- The affiliate's user_id
    referred_user_id text, -- The new student's user_id
    status text DEFAULT 'sale', -- 'sale', 'paid', 'refunded'
    amount numeric DEFAULT 39.60
);

-- 3. Enable RLS (Good practice, though we use Service Role mostly)
ALTER TABLE public.affiliate_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.referrals ENABLE ROW LEVEL SECURITY;

-- 4. Create Index for faster lookups
CREATE INDEX IF NOT EXISTS idx_affiliate_code ON public.affiliate_profiles(code);
CREATE INDEX IF NOT EXISTS idx_referrals_referrer ON public.referrals(referrer_id);

-- 5. Policy: Allow anyone to read profiles (needed for middleware checks)
DROP POLICY IF EXISTS "Public read access" ON public.affiliate_profiles;
CREATE POLICY "Public read access" ON public.affiliate_profiles FOR SELECT USING (true);

