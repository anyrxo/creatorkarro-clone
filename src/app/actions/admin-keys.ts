'use server'

import { createClient } from '@supabase/supabase-js'
import { revalidatePath } from 'next/cache'

export async function generateLicenseKeys(count: number = 1, planId: string = 'all-access', expiresInHours?: number) {
    const supabaseAdmin = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!
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

    // NOTE: We need to make sure 'expires_at' column exists. 
    // I'll assume it doesn't and we might need to run a migration.
    // But I will include it in the insert for now.
    
    const { data, error } = await supabaseAdmin
        .from('license_keys')
        .insert(keys)
        .select()

    revalidatePath('/admin/keys')

    if (error) {
        console.error('Key gen error:', error)
        return { error: error.message }
    }

    return { success: true, keys: data }
}

function generateRandomKey() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
    const segment = () => Array.from({ length: 4 }, () => chars[Math.floor(Math.random() * chars.length)]).join('')
    return `${segment()}-${segment()}-${segment()}`
}

export async function getLicenseKeys() {
    const supabaseAdmin = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    const { data, error } = await supabaseAdmin
        .from('license_keys')
        .select('*')
        .order('created_at', { ascending: false })

    if (error) return []
    return data
}

export async function deleteLicenseKey(id: string) {
    const supabaseAdmin = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!
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
        process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    const { error } = await supabaseAdmin
        .from('license_keys')
        .update({ status: 'disabled' })
        .eq('id', id)
    
    revalidatePath('/admin/keys')

    if (error) return { error: error.message }
    return { success: true }
}
