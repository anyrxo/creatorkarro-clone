'use server'

import { createClient } from '@supabase/supabase-js'
import { currentUser } from '@clerk/nextjs/server'

export async function syncUserToSupabase() {
    try {
        const user = await currentUser()
        if (!user) return { success: false }

        const supabaseAdmin = createClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.SUPABASE_SERVICE_ROLE_KEY!,
            {
                auth: {
                    persistSession: false
                }
            }
        )

        const email = user.emailAddresses[0]?.emailAddress
        
        // Upsert into profiles table
        const { error } = await supabaseAdmin
            .from('profiles')
            .upsert({
                user_id: user.id,
                email: email,
                first_name: user.firstName,
                last_name: user.lastName,
                last_seen_at: new Date().toISOString()
            }, { onConflict: 'user_id' })

        if (error) {
            console.error('Sync User Error:', error)
            return { success: false, error: error.message }
        }

        return { success: true }
    } catch (error) {
        console.error('Sync User Exception:', error)
        return { success: false }
    }
}

export async function checkSupabaseConnection() {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!url) return { success: false, error: 'Missing NEXT_PUBLIC_SUPABASE_URL' }
    if (!key) return { success: false, error: 'Missing SUPABASE_SERVICE_ROLE_KEY' }

    try {
        // Perform a raw fetch to test connectivity without the library overhead first
        const response = await fetch(`${url}/rest/v1/license_keys?select=count`, {
            headers: {
                'apikey': key,
                'Authorization': `Bearer ${key}`
            },
            cache: 'no-store'
        })

        if (!response.ok) {
            const text = await response.text()
            return { success: false, error: `HTTP ${response.status}: ${text}` }
        }

        return { success: true, message: 'Connection Successful' }
    } catch (error: any) {
        return { success: false, error: `Fetch Failed: ${error.message}` }
    }
}

