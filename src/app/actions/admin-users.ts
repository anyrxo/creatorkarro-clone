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

    // 1. Fetch All Profiles (Users)
    // We fetch profiles as the source of truth for users.
    console.log('[Admin] Fetching profiles...')
    const { data: profiles, error } = await supabaseAdmin
        .from('profiles')
        .select('*, license_keys(id, key, status, plan_id)')
        .order('created_at', { ascending: false })

    if (error) {
        console.error('getStudents error:', error)
        return []
    }
    console.log('[Admin] Profiles found:', profiles?.length || 0)

    // 2. Fetch Affiliate Profiles
    const { data: affiliateProfiles } = await supabaseAdmin
        .from('affiliate_profiles')
        .select('user_id, code')

    const affiliateMap = new Map(affiliateProfiles?.map(p => [p.user_id, p.code]) || [])

    // 3. Fetch Unclaimed Invites (Keys with email but no user_id)
    // These are "Pending Students" who haven't signed up yet.
    const { data: invites } = await supabaseAdmin
        .from('license_keys')
        .select('*')
        .is('user_id', null)
    // Fetch all unclaimed keys, we'll filter in code

    // Combine Profiles and Invites
    const students = profiles.map((p: any) => {
        const license = p.license_keys?.[0] // Assume 1 key per user for now
        return {
            id: license?.id || `user-${p.user_id}`, // Fallback ID
            user_id: p.user_id,
            email: p.email,
            first_name: p.first_name,
            last_name: p.last_name,
            key: license?.key || 'No Key',
            status: license?.status || 'free', // 'free' if no key
            plan_type: license?.plan_id || 'Free Tier',
            created_at: p.created_at,
            is_admin: p.is_admin || false,
            affiliate_code: affiliateMap.get(p.user_id) || null
        }
    })

    // Add Invites to the list
    if (invites) {
        invites.forEach((invite: any) => {
            // Check if it's an invite (has email)
            const inviteEmail = invite.redeemed_by_email || invite.email

            if (inviteEmail) {
                students.push({
                    id: invite.id,
                    user_id: null,
                    email: inviteEmail,
                    first_name: 'Pending',
                    last_name: 'Invite',
                    key: invite.key,
                    status: 'invited',
                    plan_type: invite.plan_id,
                    created_at: invite.created_at,
                    is_admin: false,
                    affiliate_code: null
                })
            }
        })
    }

    // Sort by date (newest first)
    return students.sort((a: any, b: any) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    )
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

export async function grantAccessToUser(email: string, userId: string | null, expiresInHours?: number) {
    const supabaseAdmin = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!,
        { auth: { persistSession: false } }
    )

    // 2. Generate Key
    const { success, keys, error } = await generateLicenseKeys(1, 'all-access', expiresInHours)
    if (!success || !keys || keys.length === 0) {
        return { error: 'Failed to generate key: ' + error }
    }

    const keyData = keys[0]

    // 3. Link to User (if userId exists) OR Email
    const updates: any = {
        redeemed_by_email: email,
        status: 'active'
    }

    if (userId) {
        updates.user_id = userId
        updates.claimed_at = new Date().toISOString()
    }

    const { error: updateError } = await supabaseAdmin
        .from('license_keys')
        .update(updates)
        .eq('id', keyData.id)

    if (updateError) {
        return { error: 'Failed to link key: ' + updateError.message }
    }

    // 4. Send Email
    const emailResult = await sendLicenseEmail(email, keyData.key)

    revalidatePath('/admin/users')

    if (!emailResult.success) {
        return {
            success: true,
            key: keyData.key,
            message: 'Key generated and linked, but email failed. Copy key manually.'
        }
    }

    return { success: true, key: keyData.key }
}
