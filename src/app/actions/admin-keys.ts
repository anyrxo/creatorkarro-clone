'use server'

import { createClient } from '@supabase/supabase-js'
import { revalidatePath } from 'next/cache'

// FORCE IPv4: This fixes "fetch failed" errors on some networks/Node versions (Node 17+)
// where localhost or DNS resolves to IPv6 but the server is IPv4.
import dns from 'node:dns'
try {
    if (dns.setDefaultResultOrder) {
        dns.setDefaultResultOrder('ipv4first')
    }
} catch (e) {
    // Ignore environment where this might not be supported
}

export async function generateLicenseKeys(count: number = 1, planId: string = 'all-access', expiresInHours?: number) {
    const sbUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const sbKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    console.log('[AdminKeys] Starting Generation...')

    // 1. Validate Config
    if (!sbUrl || !sbUrl.startsWith('http')) {
        console.error('[AdminKeys] Invalid/Missing URL:', sbUrl)
        return { error: 'Configuration Error: Invalid Supabase URL. Check .env.local' }
    }
    if (!sbKey) {
        console.error('[AdminKeys] Missing Key')
        return { error: 'Configuration Error: Missing Service Role Key. Check .env.local' }
    }

    try {
        // 2. Create Client with explicit options
        const supabaseAdmin = createClient(
            sbUrl,
            sbKey,
            {
                auth: {
                    persistSession: false, // Critical for server actions
                    autoRefreshToken: false,
                    detectSessionInUrl: false
                },
                global: {
                    headers: { 'x-my-custom-header': 'creatorkarro-admin' } // Debug marker
                }
            }
        )

        // Calculate expires_at
        let expiresAt = null
        if (expiresInHours) {
            const date = new Date()
            date.setHours(date.getHours() + expiresInHours)
            expiresAt = date.toISOString()
        }

        const keys = []
        for (let i = 0; i < count; i++) {
            keys.push({
                key: generateRandomKey(),
                plan_id: planId,
                status: 'active',
                expires_at: expiresAt
            })
        }
        
        console.log(`[AdminKeys] Attempting to insert ${count} keys...`)
        
        const { data, error } = await supabaseAdmin
            .from('license_keys')
            .insert(keys)
            .select()

        if (error) {
            console.error('[AdminKeys] Supabase Error:', error)
            return { error: `Database Error: ${error.message}` }
        }

        console.log('[AdminKeys] Success!')
        revalidatePath('/admin/keys')
        return { success: true, keys: data }

    } catch (err: any) {
        console.error('[AdminKeys] UNEXPECTED EXCEPTION:', err)
        // Check for common fetch errors
        if (err.cause) console.error('[AdminKeys] Cause:', err.cause)
        
        const msg = err instanceof Error ? err.message : 'Unknown error'
        return { error: `Connection Failed: ${msg}. Check server logs.` }
    }
}

function generateRandomKey() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
    const segment = () => Array.from({ length: 4 }, () => chars[Math.floor(Math.random() * chars.length)]).join('')
    return `${segment()}-${segment()}-${segment()}`
}

export async function getLicenseKeys() {
    try {
        const sbUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
        const sbKey = process.env.SUPABASE_SERVICE_ROLE_KEY
        
        if (!sbUrl || !sbKey) return []

        const supabaseAdmin = createClient(sbUrl, sbKey, { auth: { persistSession: false } })

        const { data, error } = await supabaseAdmin
            .from('license_keys')
            .select('*')
            .order('created_at', { ascending: false })

        if (error) {
            console.error('[GetKeys] Error:', error)
            return []
        }
        return data
    } catch (err) {
        console.error('[GetKeys] Exception:', err)
        return []
    }
}

export async function deleteLicenseKey(id: string) {
    const supabaseAdmin = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!,
        { auth: { persistSession: false } }
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
        { auth: { persistSession: false } }
    )

    const { error } = await supabaseAdmin
        .from('license_keys')
        .update({ status: 'disabled' })
        .eq('id', id)
    
    revalidatePath('/admin/keys')

    if (error) return { error: error.message }
    return { success: true }
}
