'use server'

import { createClient } from '@supabase/supabase-js'
import { currentUser } from '@clerk/nextjs/server'
import { revalidatePath } from 'next/cache'

export async function claimAffiliateCode(code: string) {
    const user = await currentUser()
    if (!user) return { error: 'Not logged in' }

    // 1. Validate Code Format (Alphanumeric, 3-20 chars)
    const cleanCode = code.toLowerCase().trim()
    if (!/^[a-z0-9]{3,20}$/.test(cleanCode)) {
        return { error: 'Code must be 3-20 characters, letters and numbers only.' }
    }

    // 2. Restricted Codes
    const restricted = ['admin', 'login', 'signup', 'affiliate', 'learning', 'api', 'dashboard', 'story', 'blog', 'pricing', 'contact']
    if (restricted.includes(cleanCode)) {
        return { error: 'This code is reserved.' }
    }

    const supabaseAdmin = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    // 3. Check if user already has a code
    const { data: existing } = await supabaseAdmin
        .from('affiliate_profiles')
        .select('code')
        .eq('user_id', user.id)
        .single()

    if (existing) {
        return { error: 'You already claimed a code: ' + existing.code }
    }

    // 4. Attempt to insert
    const { error } = await supabaseAdmin
        .from('affiliate_profiles')
        .insert({
            user_id: user.id,
            code: cleanCode
        })

    if (error) {
        if (error.code === '23505') { // Unique violation
            return { error: 'This code is already taken.' }
        }
        return { error: error.message }
    }

    revalidatePath('/affiliate')
    return { success: true, code: cleanCode }
}

export async function getAffiliateCode() {
    const user = await currentUser()
    if (!user) return null

    const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )

    const { data } = await supabase
        .from('affiliate_profiles')
        .select('code')
        .eq('user_id', user.id)
        .single()

    return data?.code
}

export async function getAffiliateStats() {
    const user = await currentUser()
    if (!user) return { referrals: 0, earnings: 0 }

    const supabaseAdmin = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    // Fetch referrals where this user is the referrer
    const { data, error } = await supabaseAdmin
        .from('referrals')
        .select('amount')
        .eq('referrer_id', user.id)

    if (error || !data) {
        return { referrals: 0, earnings: 0 }
    }

    const referrals = data.length
    const earnings = data.reduce((sum, row) => sum + (Number(row.amount) || 0), 0)

    return { referrals, earnings }
}

export async function updatePayoutEmail(email: string) {
    const user = await currentUser()
    if (!user) return { error: 'Not logged in' }

    const supabaseAdmin = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    const { error } = await supabaseAdmin
        .from('affiliate_profiles')
        .update({ paypal_email: email })
        .eq('user_id', user.id)

    if (error) {
        return { error: 'Failed to save email' }
    }

    revalidatePath('/affiliate')
    return { success: true }
}

export async function getPayoutEmail() {
    const user = await currentUser()
    if (!user) return null

    const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )

    const { data } = await supabase
        .from('affiliate_profiles')
        .select('paypal_email')
        .eq('user_id', user.id)
        .single()

    return data?.paypal_email
}
