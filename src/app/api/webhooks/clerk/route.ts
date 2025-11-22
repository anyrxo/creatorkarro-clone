import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { WebhookEvent } from '@clerk/nextjs/server'
import { createClient } from '@supabase/supabase-js'
import dns from 'node:dns'
import { Resend } from 'resend'
import { EmailTemplates } from '@/lib/email-templates'

// FORCE IPv4: Fixes "fetch failed" on Vercel/Node 18+ when connecting to Supabase
try {
  if (dns.setDefaultResultOrder) {
    dns.setDefaultResultOrder('ipv4first')
  }
} catch (e) {
  // Ignore
}

const resendApiKey = process.env.RESEND_API_KEY
const resend = resendApiKey ? new Resend(resendApiKey) : null

export async function POST(req: Request) {
  // You can find this in the Clerk Dashboard -> Webhooks -> choose the webhook
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET

  if (!WEBHOOK_SECRET) {
    console.error('Missing CLERK_WEBHOOK_SECRET')
    return new Response('Please add CLERK_WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local', {
      status: 500,
    })
  }

  // Get the headers
  const headerPayload = await headers()
  const svix_id = headerPayload.get('svix-id')
  const svix_timestamp = headerPayload.get('svix-timestamp')
  const svix_signature = headerPayload.get('svix-signature')

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error occured -- no svix headers', {
      status: 400,
    })
  }

  // Get the body
  const payload = await req.json()
  const body = JSON.stringify(payload)

  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET)

  let evt: WebhookEvent

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    }) as WebhookEvent
  } catch (err) {
    console.error('Error verifying webhook:', err)
    return new Response('Error occured', {
      status: 400,
    })
  }

  const eventType = evt.type

  console.log(`Webhook received: ${eventType}`)

  // Sync to Supabase using Service Role (Admin)
  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
        detectSessionInUrl: false
      }
    }
  )

  if (eventType === 'user.created' || eventType === 'user.updated') {
    const { id, email_addresses, first_name, last_name } = evt.data
    const email = email_addresses[0]?.email_address

    if (!email) {
      return new Response('No email found', { status: 200 }) // Return 200 to stop retry
    }

    // ... existing profile upsert ...
    const { error } = await supabaseAdmin
      .from('profiles')
      .upsert({
        user_id: id,
        email: email,
        first_name: first_name || '',
        last_name: last_name || '',
        last_seen_at: new Date().toISOString()
      }, { onConflict: 'user_id' })

    if (error) {
      console.error('Supabase sync error:', error)
      return new Response('Error syncing to Supabase', { status: 500 })
    }

    console.log(`Successfully synced user ${id} to Supabase`)

    // LINK LICENSE KEYS: Check if there's a pending invite for this email
    // We check both 'email' and 'redeemed_by_email' columns just to be safe
    const { data: pendingKeys } = await supabaseAdmin
      .from('license_keys')
      .select('id, plan_type')
      .is('user_id', null)
      .or(`email.eq.${email},redeemed_by_email.eq.${email}`)

    if (pendingKeys && pendingKeys.length > 0) {
      console.log(`Found ${pendingKeys.length} pending keys for ${email}. Linking...`)

      const { error: linkError } = await supabaseAdmin
        .from('license_keys')
        .update({
          user_id: id,
          status: 'active',
          claimed_at: new Date().toISOString()
        })
        .in('id', pendingKeys.map(k => k.id))

      if (linkError) {
        console.error('Error linking license keys:', linkError)
      } else {
        console.log(`Successfully linked keys to user ${id}`)
      }
    }

    // Send Welcome Email for New Users (Free Tier) on user.created
    // Only send if they didn't just claim a paid key (to avoid double emails)
    if (eventType === 'user.created' && (!pendingKeys || pendingKeys.length === 0)) {
      try {
        if (resend) {
          await resend.emails.send({
            from: 'IImagined Access <access@notifications.iimagined.ai>',
            to: [email],
            subject: 'Welcome to IImagined',
            html: EmailTemplates.welcomeFree(first_name || 'Creator', 'https://iimagined.ai/dashboard'),
          })
          console.log(`Sent free welcome email to ${email}`)
        } else {
          console.warn('RESEND_API_KEY missing, skipping welcome email')
        }
      } catch (emailErr) {
        console.error('Error sending welcome email:', emailErr)
        // Don't fail the webhook for email error
      }
    }

  } else if (eventType === 'user.deleted') {
    const { id } = evt.data

    if (id) {
      const { error } = await supabaseAdmin
        .from('profiles')
        .delete()
        .eq('user_id', id)

      if (error) {
        console.error('Supabase delete error:', error)
        return new Response('Error deleting from Supabase', { status: 500 })
      }
      console.log(`Successfully deleted user ${id} from Supabase`)
    }
  }

  return new Response('', { status: 200 })
}
