-- Create a profiles table to sync Clerk users to Supabase
-- Run this in Supabase SQL Editor

create table if not exists public.profiles (
    user_id text primary key, -- Clerk ID
    email text,
    first_name text,
    last_name text,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    last_seen_at timestamp with time zone default timezone('utc'::text, now())
);

-- RLS
alter table public.profiles enable row level security;

-- Allow users to view their own profile
create policy "Users can view own profile" on public.profiles
    for select using (auth.uid()::text = user_id);

-- Allow users to update their own profile
create policy "Users can update own profile" on public.profiles
    for update using (auth.uid()::text = user_id);

-- Allow service role (admin) full access
create policy "Service role full access" on public.profiles
    as permissive for all
    to service_role
    using (true)
    with check (true);

-- Grant access to postgres/anon/service_role (just to be safe for our sync script)
grant all on public.profiles to service_role;

