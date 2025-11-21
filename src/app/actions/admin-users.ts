'use server'

import { createClient } from '@supabase/supabase-js'
import { generateLicenseKeys } from './admin-keys'

import { revalidatePath } from 'next/cache'

export async function getStudents() {
    const supabaseAdmin = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!,
        {
            auth: {
                persistSession: false
            }
        }
    )

    // Get all keys that are claimed OR have an email associated (invited)
    // Note: We are trusting that 'email' column exists. If it was added recently, make sure the migration ran.
    const { data, error } = await supabaseAdmin
        .from('license_keys')
        .select('*')
        // .or('status.eq.claimed,email.not.is.null') // This syntax can be tricky if nulls are handled differently
        .order('created_at', { ascending: false })

    if (error) {
        console.error('getStudents error:', error)
        return []
    }

    // Filter in memory to be safe if the OR query is flaky
    // We want to show anyone who has claimed a key OR has an email attached (invite)
    const filteredData = data.filter(k => k.status === 'claimed' || k.email)
    
    return filteredData
}

import { sendLicenseEmail } from '@/lib/email'
import dns from 'node:dns'

// FORCE IPv4: Fixes "fetch failed" on Vercel/Node 18+ when connecting to Supabase
try {
    if (dns.setDefaultResultOrder) {
        dns.setDefaultResultOrder('ipv4first')
    }
} catch (e) {
    // Ignore
}

export async function inviteStudent(email: string) {
    const supabaseAdmin = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!,
        {
            auth: {
                persistSession: false
            }
        }
    )

    // 1. Generate a key
    const { success, keys, error } = await generateLicenseKeys(1, 'all-access')
    
    if (!success || !keys || keys.length === 0) {
        return { error: 'Failed to generate key: ' + error }
    }

    const keyData = keys[0]

    // 2. Update the key with the email
    const { error: updateError } = await supabaseAdmin
        .from('license_keys')
        .update({ email: email })
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
        {
            auth: {
                persistSession: false
            }
        }
    )

    const { error } = await supabaseAdmin
        .from('license_keys')
        .update({ status: 'disabled' }) // Use 'disabled' to match our schema enum if used, or just 'revoked'
        .eq('id', keyId)

    revalidatePath('/admin/users')

    if (error) return { error: error.message }
    return { success: true }
}

export async function deleteUser(keyId: string) {
    const supabaseAdmin = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!,
        {
            auth: {
                persistSession: false
            }
        }
    )

    // 1. Get the user_id associated with the key before deleting
    const { data: keyData } = await supabaseAdmin
        .from('license_keys')
        .select('user_id')
        .eq('id', keyId)
        .single()

    // 2. Delete the license key
    const { error: deleteKeyError } = await supabaseAdmin
        .from('license_keys')
        .delete()
        .eq('id', keyId)

    if (deleteKeyError) {
        return { error: 'Failed to delete license key: ' + deleteKeyError.message }
    }

    // 3. If there's a linked user profile, delete that too (Optional, but requested)
    if (keyData?.user_id) {
        const { error: deleteProfileError } = await supabaseAdmin
            .from('profiles')
            .delete()
            .eq('user_id', keyData.user_id)
        
        if (deleteProfileError) {
            console.error('Failed to delete profile:', deleteProfileError)
            // We don't return error here, as the key is already deleted, which was the main goal
        }
    }

    revalidatePath('/admin/users')
    return { success: true }
}

export async function deleteUser(keyId: string) {
    const supabaseAdmin = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!,
        {
            auth: {
                persistSession: false
            }
        }
    )

    // 1. Get the user_id associated with the key before deleting
    const { data: keyData } = await supabaseAdmin
        .from('license_keys')
        .select('user_id')
        .eq('id', keyId)
        .single()

    // 2. Delete the license key
    const { error: deleteKeyError } = await supabaseAdmin
        .from('license_keys')
        .delete()
        .eq('id', keyId)

    if (deleteKeyError) {
        return { error: 'Failed to delete license key: ' + deleteKeyError.message }
    }

    // 3. If there's a linked user profile, delete that too (Optional, but requested)
    if (keyData?.user_id) {
        const { error: deleteProfileError } = await supabaseAdmin
            .from('profiles')
            .delete()
            .eq('user_id', keyData.user_id)
        
        if (deleteProfileError) {
            console.error('Failed to delete profile:', deleteProfileError)
            // We don't return error here, as the key is already deleted, which was the main goal
        }
    }

    revalidatePath('/admin/users')
    return { success: true }
}
