'use server'

import { supabase } from '@/lib/supabase'
import { auth, currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { createClient } from '@supabase/supabase-js'

// We need a service role client to execute the secure function if RLS blocks us, 
// BUT the function is `security definer` so it runs with owner privileges. 
// However, we need a way to CALL it. 
// Standard supabase client uses anon key. 
// We should use the authenticated user's client or a service role client.
// Since the user doesn't have the key yet, they can't "see" it to update it via standard RLS update.
// So we MUST use a Service Role client or the Postgres Function approach.
// The Postgres function `claim_license_key` is `security definer`, so it bypasses RLS.
// But we need to call it.

export async function redeemLicenseKey(formData: FormData) {
    const key = formData.get('key') as string
    const user = await currentUser()

    if (!user) {
        return { error: 'You must be logged in to redeem a code.' }
    }

    if (!key) {
        return { error: 'Please enter a license key.' }
    }

    // Initialize Supabase Client
    const supabaseAdmin = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY! 
    )

    // 1. Claim the Key
    const { data, error } = await supabaseAdmin.rpc('claim_license_key', {
        p_key: key,
        p_user_id: user.id,
        p_email: user.emailAddresses[0]?.emailAddress || null
    })

    if (error) {
        console.error('Redemption error:', error)
        return { error: 'System error during redemption. Please contact support.' }
    }

    if (data === true) {
        // 2. Credit the Affiliate (if applicable)
        // We get the referrer ID from the cookie (client-side) passed via the form or we can try to read cookies here
        // Reading cookies in Server Action:
        const { cookies } = await import('next/headers')
        const cookieStore = await cookies()
        const referrerId = cookieStore.get('iimagined_ref')?.value

        if (referrerId && referrerId !== user.id) {
            // Check if they are referring themselves (anti-fraud)
            try {
                // Insert referral record
                await supabaseAdmin.from('referrals').insert({
                    referrer_id: referrerId,
                    referred_user_id: user.id,
                    status: 'sale',
                    amount: 39.60 // 40% of $99
                })
                console.log(`Affiliate credited: ${referrerId} for user ${user.id}`)
            } catch (affiliateError) {
                console.error('Affiliate credit failed:', affiliateError)
                // Don't block the user's access just because affiliate failed
            }
        }

        return { success: true }
    } else {
        return { error: 'Invalid or already claimed license key.' }
    }
}

