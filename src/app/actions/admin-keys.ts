'use server'

import { createClient } from '@supabase/supabase-js'
import { revalidatePath } from 'next/cache'

export async function generateLicenseKeys(count: number = 1, planId: string = 'all-access', expiresInHours?: number) {
    try {
        const supabaseAdmin = createClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.SUPABASE_SERVICE_ROLE_KEY!,
            {
                auth: {
                    persistSession: false
                }
            }
        )

        // Calculate expires_at if duration provided
        let expiresAt = null
        if (expiresInHours) {
            const date = new Date()
            date.setHours(date.getHours() + expiresInHours)
            expiresAt = date.toISOString()
        }

        const keys = []
        for (let i = 0; i < count; i++) {
            // Generate a simple readable key like "ABCD-EFGH-IJKL"
            const key = generateRandomKey()
            keys.push({
                key,
                plan_id: planId,
                status: 'active',
                expires_at: expiresAt // Add expiration column in Supabase if not exists (we might need SQL migration for this)
            })
        }
        
        const { data, error } = await supabaseAdmin
            .from('license_keys')
            .insert(keys)
            .select()

        if (error) {
            console.error('Key gen error:', error)
            return { error: error.message }
        }

        revalidatePath('/admin/keys')
        return { success: true, keys: data }
    } catch (err) {
        console.error('UNEXPECTED Key Gen Error:', err)
        return { error: 'Connection failed. Check server logs.' }
    }
}

function generateRandomKey() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
    const segment = () => Array.from({ length: 4 }, () => chars[Math.floor(Math.random() * chars.length)]).join('')
    return `${segment()}-${segment()}-${segment()}`
}

export async function getLicenseKeys() {
    try {
        const supabaseAdmin = createClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.SUPABASE_SERVICE_ROLE_KEY!,
            {
                auth: {
                    persistSession: false
                }
            }
        )

        const { data, error } = await supabaseAdmin
            .from('license_keys')
            .select('*')
            .order('created_at', { ascending: false })

        if (error) return []
        return data
    } catch (err) {
        console.error('Get Keys Error:', err)
        return []
    }
}

export async function deleteLicenseKey(id: string) {
    const supabaseAdmin = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!,
        {
            auth: {
                persistSession: false
            }
        }
    )

    const { error } = await supabaseAdmin
        .from('license_keys')
        .delete()
        .eq('id', id)
    
    revalidatePath('/admin/keys')

    if (error) return { error: error.message }
    return { success: true }
}

export async function disableLicenseKey(id: string) {
    const supabaseAdmin = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!,
        {
            auth: {
                persistSession: false
            }
        }
    )

    const { error } = await supabaseAdmin
        .from('license_keys')
        .update({ status: 'disabled' })
        .eq('id', id)
    
    revalidatePath('/admin/keys')

    if (error) return { error: error.message }
    return { success: true }
}
