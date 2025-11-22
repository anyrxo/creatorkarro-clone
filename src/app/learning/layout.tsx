import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { createClient } from '@supabase/supabase-js'
import ClientLearningLayout from '@/components/learning/ClientLearningLayout'
import { checkAdminAccess } from '@/app/actions/admin-auth'

export default async function LearningLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const user = await currentUser()

    if (!user) {
        redirect('/sign-in')
    }

    // Check if user is admin
    const { authorized: isAdmin } = await checkAdminAccess()

    // If admin, allow access immediately
    if (isAdmin) {
        return (
            <ClientLearningLayout>
                {children}
            </ClientLearningLayout>
        )
    }

    // Check for license key
    // Use Service Role key to bypass RLS and securely check existence
    const supabaseAdmin = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    const { data: license } = await supabaseAdmin
        .from('license_keys')
        .select('id, status')
        .eq('user_id', user.id)
        .eq('status', 'claimed')
        .single()

    // If no active license found, redirect to redeem page
    if (!license) {
        redirect('/redeem')
    }

    return (
        <ClientLearningLayout>
            {children}
        </ClientLearningLayout>
    )
}
