-- Add expires_at column to license_keys table
ALTER TABLE public.license_keys 
ADD COLUMN IF NOT EXISTS expires_at timestamp with time zone;

-- Update the claim_license_key function to check expiry
CREATE OR REPLACE FUNCTION public.claim_license_key(p_key text, p_user_id text, p_email text)
 RETURNS boolean
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
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
  for update;

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

  -- Insert empty progress record if not exists
  insert into public.user_progress (user_id, lesson_id, completed_at)
  values (p_user_id, 'init', now())
  on conflict (user_id, lesson_id) do nothing;

  return true;
end;
$function$;

