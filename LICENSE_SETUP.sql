-- Create license_keys table
create table if not exists public.license_keys (
    id uuid default uuid_generate_v4() primary key,
    key text not null unique,
    user_id text, -- Linked to Clerk User ID
    status text default 'active', -- active, claimed, revoked
    plan_id text default 'all-access',
    claimed_at timestamp with time zone,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table public.license_keys enable row level security;

-- Policy: Users can view their own license
create policy "Users can view their own license"
on public.license_keys for select
using (auth.uid()::text = user_id);

-- Create indexes for performance
create index if not exists license_keys_user_id_idx on public.license_keys(user_id);
create index if not exists license_keys_key_idx on public.license_keys(key);

-- Function to securely claim a license key
-- This prevents race conditions and ensures only one user can claim a key
create or replace function claim_license_key(p_key text, p_user_id text)
returns boolean
language plpgsql
security definer
as $$
declare
  v_key_id uuid;
begin
  -- Check if key exists and is unclaimed (user_id is null)
  select id into v_key_id
  from public.license_keys
  where key = p_key
    and user_id is null
    and status = 'active'
  for update; -- Lock the row

  if v_key_id is null then
    return false; -- Key invalid or already taken
  end if;

  -- Update the key
  update public.license_keys
  set 
    user_id = p_user_id,
    claimed_at = now(),
    status = 'claimed'
  where id = v_key_id;

  return true;
end;
$$;

