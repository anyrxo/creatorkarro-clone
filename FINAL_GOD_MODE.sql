-- ==========================================
-- FINAL GOD MODE SETUP SCRIPT
-- Run this entire script in Supabase SQL Editor
-- It is idempotent (safe to run multiple times)
-- ==========================================

-- 1. Enable necessary extensions
create extension if not exists "uuid-ossp";

-- ==========================================
-- TABLE: profiles (Synced from Clerk)
-- ==========================================
create table if not exists public.profiles (
    user_id text primary key, -- Clerk User ID
    email text,
    first_name text,
    last_name text,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    last_seen_at timestamp with time zone default timezone('utc'::text, now())
);

alter table public.profiles enable row level security;

drop policy if exists "Users can view own profile" on public.profiles;
create policy "Users can view own profile" on public.profiles
    for select using (auth.uid()::text = user_id);

drop policy if exists "Users can update own profile" on public.profiles;
create policy "Users can update own profile" on public.profiles
    for update using (auth.uid()::text = user_id);

drop policy if exists "Service role full access" on public.profiles;
create policy "Service role full access" on public.profiles
    as permissive for all
    to service_role
    using (true)
    with check (true);

grant all on public.profiles to service_role;


-- ==========================================
-- TABLE: license_keys
-- ==========================================
create table if not exists public.license_keys (
    id uuid default gen_random_uuid() primary key,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    key text unique not null,
    status text default 'active'::text, -- 'active', 'claimed', 'disabled'
    plan_id text default 'all-access'::text,
    user_id text, -- Clerk User ID
    email text,
    claimed_at timestamp with time zone,
    expires_at timestamp with time zone
);

-- Add columns if they don't exist (for updates)
do $$ 
begin 
    if not exists (select 1 from information_schema.columns where table_name = 'license_keys' and column_name = 'expires_at') then
        alter table public.license_keys add column expires_at timestamp with time zone;
    end if;
    if not exists (select 1 from information_schema.columns where table_name = 'license_keys' and column_name = 'email') then
        alter table public.license_keys add column email text;
    end if;
end $$;

alter table public.license_keys enable row level security;

-- RLS: Service Role has full access
drop policy if exists "Service Role Full Access" on public.license_keys;
create policy "Service Role Full Access" on public.license_keys
    as permissive for all
    to service_role
    using (true)
    with check (true);

-- ==========================================
-- TABLE: user_progress
-- ==========================================
create table if not exists public.user_progress (
    user_id text not null,
    lesson_id text not null,
    completed_at timestamp with time zone default timezone('utc'::text, now()) not null,
    primary key (user_id, lesson_id)
);

alter table public.user_progress enable row level security;

drop policy if exists "Users can view own progress" on public.user_progress;
create policy "Users can view own progress" on public.user_progress
    for select using (auth.uid()::text = user_id);

drop policy if exists "Users can insert own progress" on public.user_progress;
create policy "Users can insert own progress" on public.user_progress
    for insert with check (auth.uid()::text = user_id);

drop policy if exists "Users can update own progress" on public.user_progress;
create policy "Users can update own progress" on public.user_progress
    for update using (auth.uid()::text = user_id);

-- ==========================================
-- TABLE: affiliate_profiles
-- ==========================================
create table if not exists public.affiliate_profiles (
    user_id text primary key, -- Clerk User ID
    code text unique not null,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    paypal_email text,
    total_earnings numeric default 0
);

alter table public.affiliate_profiles enable row level security;

drop policy if exists "Public read access for codes" on public.affiliate_profiles;
create policy "Public read access for codes" on public.affiliate_profiles
    for select using (true);

drop policy if exists "Users can update own profile" on public.affiliate_profiles;
create policy "Users can update own profile" on public.affiliate_profiles
    for update using (auth.uid()::text = user_id);

drop policy if exists "Users can insert own profile" on public.affiliate_profiles;
create policy "Users can insert own profile" on public.affiliate_profiles
    for insert with check (auth.uid()::text = user_id);

-- ==========================================
-- TABLE: referrals
-- ==========================================
create table if not exists public.referrals (
    id uuid default gen_random_uuid() primary key,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    referrer_id text not null,
    referred_user_id text,
    status text default 'sale',
    amount numeric default 39.60
);

alter table public.referrals enable row level security;

drop policy if exists "Referrers can view own sales" on public.referrals;
create policy "Referrers can view own sales" on public.referrals
    for select using (auth.uid()::text = referrer_id);

-- ==========================================
-- FUNCTIONS
-- ==========================================

-- Function to claim a license key safely
create or replace function public.claim_license_key(p_key text, p_user_id text, p_email text)
 returns boolean
 language plpgsql
 security definer -- Runs with admin privileges
as $function$
declare
  v_key_id uuid;
  v_expires_at timestamp with time zone;
begin
  -- Check if key exists, is unclaimed, active, and NOT expired
  select id, expires_at into v_key_id, v_expires_at
  from public.license_keys
  where key = p_key
    and user_id is null
    and status = 'active'
  for update; -- Lock the row

  if v_key_id is null then
    return false;
  end if;

  -- Check expiration if set
  if v_expires_at is not null and v_expires_at < now() then
     return false;
  end if;

  -- Update the key
  update public.license_keys
  set user_id = p_user_id,
      email = p_email,
      claimed_at = now(),
      status = 'claimed'
  where id = v_key_id;

  -- Initialize user progress
  insert into public.user_progress (user_id, lesson_id, completed_at)
  values (p_user_id, 'init', now())
  on conflict (user_id, lesson_id) do nothing;

  return true;
end;
$function$;

-- ==========================================
-- INDEXES (For Speed)
-- ==========================================
create index if not exists idx_license_keys_key on public.license_keys(key);
create index if not exists idx_license_keys_user on public.license_keys(user_id);
create index if not exists idx_affiliate_code on public.affiliate_profiles(code);
create index if not exists idx_referrals_referrer on public.referrals(referrer_id);

-- ==========================================
-- CONFIRMATION
-- ==========================================
select 'GOD MODE SETUP COMPLETE' as status, count(*) as tables_count 
from information_schema.tables 
where table_schema = 'public';

