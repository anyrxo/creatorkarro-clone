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
    // Note: We are using the standard client here. 
    // For the RPC call to work, we might need to ensure the public user can call it, 
    // OR we use the Service Role key here on the server side for max security.
    // Let's use Service Role key for the redemption action to be safe and robust.
    
    const supabaseAdmin = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY! 
    )

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
        return { success: true }
    } else {
        return { error: 'Invalid or already claimed license key.' }
    }
}

