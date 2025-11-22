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

    // If admin, grant paid access
    if (isAdmin) {
        return (
            <ClientLearningLayout accessLevel="paid">
                {children}
            </ClientLearningLayout>
        )
    }

    // Check for license key
    const supabaseAdmin = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    const { data: license } = await supabaseAdmin
        .from('license_keys')
        .select('id, status')
        .eq('user_id', user.id)
        .in('status', ['claimed', 'active'])
        .single()

    // Determine access level based on license
    const accessLevel = license ? 'paid' : 'free'

    return (
        <ClientLearningLayout accessLevel={accessLevel}>
            {children}
        </ClientLearningLayout>
    )
}
