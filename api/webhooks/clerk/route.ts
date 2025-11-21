import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { WebhookEvent } from '@clerk/nextjs/server'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET

  if (!WEBHOOK_SECRET) {
    throw new Error('CLERK_WEBHOOK_SECRET is not set')
  }

  const headerPayload = headers()
  const svix_id = headerPayload.get('svix-id')
  const svix_timestamp = headerPayload.get('svix-timestamp')
  const svix_signature = headerPayload.get('svix-signature')

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error occurred -- no svix headers', { status: 400 })
  }

  const payload = await req.json()
  const body = JSON.stringify(payload)
  const wh = new Webhook(WEBHOOK_SECRET)

  let evt: WebhookEvent

  try {
    evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    }) as WebhookEvent
  } catch (err) {
    console.error('Error verifying webhook:', err)
    return new Response('Error occurred', { status: 400 })
  }

  const eventType = evt.type

  if (eventType === 'user.created' || eventType === 'user.updated') {
    const { id, email_addresses, first_name, last_name, image_url } = evt.data

    const supabase = createClient(supabaseUrl, supabaseServiceKey, {
      auth: { autoRefreshToken: false, persistSession: false }
    })

    const { error } = await supabase.from('users').upsert({
      clerk_id: id,
      email: email_addresses[0]?.email_address,
      first_name,
      last_name,
      avatar_url: image_url,
      updated_at: new Date().toISOString(),
    })

    if (error) {
      console.error('Error upserting user:', error)
      return new Response('Error occurred', { status: 500 })
    }
  }

  if (eventType === 'user.deleted') {
    const { id } = evt.data
    const supabase = createClient(supabaseUrl, supabaseServiceKey, {
      auth: { autoRefreshToken: false, persistSession: false }
    })

    const { error } = await supabase.from('users').delete().eq('clerk_id', id)

    if (error) {
      console.error('Error deleting user:', error)
      return new Response('Error occurred', { status: 500 })
    }
  }

  return new Response('', { status: 200 })
}
