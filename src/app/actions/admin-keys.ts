'use server'

import { createClient } from '@supabase/supabase-js'
import { randomUUID } from 'crypto'

export async function generateLicenseKeys(count: number = 1, planId: string = 'all-access') {
    const supabaseAdmin = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    const keys = []
    for (let i = 0; i < count; i++) {
        // Generate a simple readable key like "ABCD-EFGH-IJKL"
        const key = generateRandomKey()
        keys.push({
            key,
            plan_id: planId,
            status: 'active'
        })
    }

    const { data, error } = await supabaseAdmin
        .from('license_keys')
        .insert(keys)
        .select()

    if (error) {
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

