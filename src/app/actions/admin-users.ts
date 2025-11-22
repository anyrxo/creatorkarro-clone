'use server'

import { createClient } from '@supabase/supabase-js'
import { generateLicenseKeys } from './admin-keys'
import { revalidatePath } from 'next/cache'
import { sendLicenseEmail } from '@/lib/email'
import dns from 'node:dns'

// FORCE IPv4
try {
    if (dns.setDefaultResultOrder) {
        dns.setDefaultResultOrder('ipv4first')
    }
} catch (e) {
    // Ignore
}

export async function getStudents() {
    const supabaseAdmin = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!,
        { auth: { persistSession: false } }
    )

    // 1. Fetch License Keys with Profiles
    const { data: keys, error } = await supabaseAdmin
        .from('license_keys')
        .select('*, profiles:user_id(is_admin)')
        .order('created_at', { ascending: false })

    if (error) {
        console.error('getStudents error:', error)
        return []
    }

    // 2. Fetch Affiliate Profiles (Manual Join)
    // We fetch all affiliate profiles to map them to users. 
    // This is efficient enough for < 1000 users. For larger scale, we'd use a view or RPC.
    const { data: affiliateProfiles } = await supabaseAdmin
        .from('affiliate_profiles')
        .select('user_id, code')

    const affiliateMap = new Map(affiliateProfiles?.map(p => [p.user_id, p.code]) || [])

    // Filter: Show claimed keys OR keys with an email attached (invites)
    const filteredData = keys.filter((k: any) =>
        k.status === 'claimed' || k.redeemed_by_email || k.email
    )

    // Map to a cleaner format
    return filteredData.map((k: any) => ({
        ...k,
        email: k.redeemed_by_email || k.email, // Normalize email
        is_admin: k.profiles?.is_admin || false,
        affiliate_code: k.user_id ? affiliateMap.get(k.user_id) : null
    }))
}

// ... (inviteStudent, revokeAccess, deleteUser remain unchanged) ...

export async function inviteStudent(email: string) {
    const supabaseAdmin = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!,
        { auth: { persistSession: false } }
    )

    // 1. Generate a key
    const { success, keys, error } = await generateLicenseKeys(1, 'all-access')

    if (!success || !keys || keys.length === 0) {
        return { error: 'Failed to generate key: ' + error }
    }

    const keyData = keys[0]

    // 2. Update the key with the email (using redeemed_by_email for consistency)
    const { error: updateError } = await supabaseAdmin
        .from('license_keys')
        .update({ redeemed_by_email: email })
        .eq('id', keyData.id)

    if (updateError) {
        console.error('Could not save email to key', updateError)
        return { error: 'Generated key but failed to save email. Check database schema.' }
    }

    // 3. Send Email via Resend
    const emailResult = await sendLicenseEmail(email, keyData.key)

    revalidatePath('/admin/users')

    if (!emailResult.success) {
        console.error('Failed to send email:', emailResult.error)
        return {
            success: true,
            key: keyData.key,
            message: 'Key generated and saved, but email failed to send. Please copy key manually.'
        }
    }

    return { success: true, key: keyData.key }
}

export async function revokeAccess(keyId: string) {
    const supabaseAdmin = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!,
        { auth: { persistSession: false } }
    )

    const { error } = await supabaseAdmin
        .from('license_keys')
        .update({ status: 'disabled' })
        .eq('id', keyId)

    revalidatePath('/admin/users')

    if (error) return { error: error.message }
    return { success: true }
}

export async function deleteUser(keyId: string) {
    const supabaseAdmin = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!,
        { auth: { persistSession: false } }
    )

    const { data: keyData } = await supabaseAdmin
        .from('license_keys')
        .select('user_id')
        .eq('id', keyId)
        .single()

    const { error: deleteKeyError } = await supabaseAdmin
        .from('license_keys')
        .delete()
        .eq('id', keyId)

    if (deleteKeyError) {
        return { error: 'Failed to delete license key: ' + deleteKeyError.message }
    }

    if (keyData?.user_id) {
        await supabaseAdmin
            .from('profiles')
            .delete()
            .eq('user_id', keyData.user_id)

        // Also delete affiliate profile
        await supabaseAdmin
            .from('affiliate_profiles')
            .delete()
            .eq('user_id', keyData.user_id)
    }

    revalidatePath('/admin/users')
    return { success: true }
}

export async function toggleAdmin(userId: string, currentStatus: boolean) {
    const supabaseAdmin = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!,
        { auth: { persistSession: false } }
    )

    const { error } = await supabaseAdmin
        .from('profiles')
        .update({ is_admin: !currentStatus })
        .eq('user_id', userId)

    revalidatePath('/admin/users')

    if (error) return { error: error.message }
    return { success: true }
}

export async function updateAffiliateCode(userId: string, newCode: string) {
    const supabaseAdmin = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!,
        { auth: { persistSession: false } }
    )

    // Validate code format
    const cleanCode = newCode.toLowerCase().trim()
    if (!/^[a-z0-9-_]{3,30}$/.test(cleanCode)) {
        return { error: 'Code must be 3-30 chars, alphanumeric.' }
    }

    // Check if code exists (and not by this user)
    const { data: existing } = await supabaseAdmin
        .from('affiliate_profiles')
        .select('user_id')
        .eq('code', cleanCode)
        .neq('user_id', userId)
        .single()

    if (existing) {
        return { error: 'Code already taken.' }
    }

    // Upsert the affiliate profile
    const { error } = await supabaseAdmin
        .from('affiliate_profiles')
        .upsert({
            user_id: userId,
            code: cleanCode
        }, { onConflict: 'user_id' })

    revalidatePath('/admin/users')

    if (error) return { error: error.message }
    return { success: true }
}
