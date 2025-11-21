'use server'

import { createClient } from '@supabase/supabase-js'
import { currentUser } from '@clerk/nextjs/server'
import { revalidatePath } from 'next/cache'

export async function claimAffiliateCode(code: string) {
    const start = Date.now()
    console.log('[Affiliate] Start Claim')

    try {
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
        console.log('[Affiliate] Inserting code')
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
            console.error('[Affiliate] Insert Error:', error)
            return { error: 'Failed to claim code. Please try again.' }
        }

        revalidatePath('/affiliate')
        console.log(`[Affiliate] Success. Duration: ${Date.now() - start}ms`)
        return { success: true, code: cleanCode }
    } catch (error) {
        console.error('[Affiliate] Claim Exception:', error)
        return { error: 'An unexpected error occurred.' }
    }
}

export async function getAffiliateCode() {
    try {
        const user = await currentUser()
        if (!user) return null

        const supabase = createClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
        )

        const { data, error } = await supabase
            .from('affiliate_profiles')
            .select('code')
            .eq('user_id', user.id)
            .single()

        if (data?.code) {
            return data.code
        }

        // AUTO-GENERATE LOGIC
        // If no code exists, let's create a default one: user-xxxx
        if (error && error.code === 'PGRST116') { // Not found
            const supabaseAdmin = createClient(
                process.env.NEXT_PUBLIC_SUPABASE_URL!,
                process.env.SUPABASE_SERVICE_ROLE_KEY!
            )

            // Generate random suffix
            const suffix = Math.random().toString(36).substring(2, 7) // 5 chars
            const defaultCode = `user-${suffix}`

            // Try to insert. If collision (rare), we just fail silently and return null, 
            // user can try refreshing or claiming manually.
            const { error: insertError } = await supabaseAdmin
                .from('affiliate_profiles')
                .insert({
                    user_id: user.id,
                    code: defaultCode
                })

            if (!insertError) {
                return defaultCode
            }
        }

        return null
    } catch (error) {
        console.error('Get Affiliate Code Exception:', error)
        return null
    }
}

export async function getAffiliateStats() {
    try {
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

        if (error) {
            console.error('Fetch Affiliate Stats Error:', error)
            return { referrals: 0, earnings: 0 }
        }

        if (!data) {
            return { referrals: 0, earnings: 0 }
        }

        const referrals = data.length
        const earnings = data.reduce((sum, row) => sum + (Number(row.amount) || 0), 0)

        return { referrals, earnings }
    } catch (error) {
        console.error('Get Affiliate Stats Exception:', error)
        return { referrals: 0, earnings: 0 }
    }
}

export async function updatePayoutEmail(email: string) {
    try {
        const user = await currentUser()
        if (!user) return { error: 'Not logged in' }

        const supabaseAdmin = createClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.SUPABASE_SERVICE_ROLE_KEY!
        )

        const { error } = await supabaseAdmin
            .from('affiliate_profiles')
            .update({ payout_email: email })
            .eq('user_id', user.id)

        if (error) {
            console.error('Update Payout Email Error:', error)
            return { error: 'Failed to save email' }
        }

        revalidatePath('/affiliate')
        return { success: true }
    } catch (error) {
        console.error('Update Payout Email Exception:', error)
        return { error: 'System error updating email' }
    }
}

export async function getPayoutEmail() {
    try {
        const user = await currentUser()
        if (!user) return null

        const supabase = createClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.SUPABASE_SERVICE_ROLE_KEY!
        )

        const { data, error } = await supabase
            .from('affiliate_profiles')
            .select('payout_email')
            .eq('user_id', user.id)
            .single()

        if (error) {
            if (error.code !== 'PGRST116') {
                console.error('Get Payout Email Error:', error)
            }
            return null
        }

        return data?.payout_email
    } catch (error) {
        console.error('Get Payout Email Exception:', error)
        return null
    }
}
