'use server'

import { createClient } from '@supabase/supabase-js'
import { generateLicenseKeys } from './admin-keys'

export async function getStudents() {
    const supabaseAdmin = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    // Get all keys that are claimed OR have an email associated (invited)
    const { data, error } = await supabaseAdmin
        .from('license_keys')
        .select('*')
        .or('status.eq.claimed,email.not.is.null')
        .order('created_at', { ascending: false })

    if (error) return []
    return data
}

import { sendLicenseEmail } from '@/lib/email'

export async function inviteStudent(email: string) {
    const supabaseAdmin = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    // 1. Generate a key
    const { success, keys, error } = await generateLicenseKeys(1, 'all-access')
    
    if (!success || !keys || keys.length === 0) {
        return { error: 'Failed to generate key' }
    }

    const keyData = keys[0]

    // 2. Update the key with the email
    const { error: updateError } = await supabaseAdmin
        .from('license_keys')
        .update({ email: email })
        .eq('id', keyData.id)

    if (updateError) {
        // If email column doesn't exist, this will fail. 
        console.warn('Could not save email to key (column might be missing)', updateError)
    }

    // 3. Send Email via Resend
    const emailResult = await sendLicenseEmail(email, keyData.key)

    if (!emailResult.success) {
        console.error('Failed to send email:', emailResult.error)
        // Return success true because the key IS generated, but warn about email
        return { 
            success: true, 
            key: keyData.key, 
            message: 'Key generated but email failed to send. Please copy key manually.' 
        }
    }
    
    return { success: true, key: keyData.key }
}

export async function revokeAccess(keyId: string) {
    const supabaseAdmin = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    const { error } = await supabaseAdmin
        .from('license_keys')
        .update({ status: 'revoked' })
        .eq('id', keyId)

    if (error) return { error: error.message }
    return { success: true }
}

