import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Create a comprehensive mock client that won't crash when methods are called
const createMockClient = () => {
    const mockQueryBuilder = {
        select: function () { return this },
        insert: function () { return this },
        update: function () { return this },
        upsert: function () { return this },
        delete: function () { return this },
        eq: function () { return this },
        neq: function () { return this },
        gt: function () { return this },
        lt: function () { return this },
        gte: function () { return this },
        lte: function () { return this },
        like: function () { return this },
        in: function () { return this },
        is: function () { return this },
        order: function () { return this },
        limit: function () { return this },
        single: function () {
            return Promise.resolve({ data: null, error: { message: 'Supabase not configured', code: 'MOCK_CLIENT' } })
        },
        then: function (resolve: any) {
            resolve({ data: null, error: { message: 'Supabase not configured', code: 'MOCK_CLIENT' } })
            return this
        }
    }

    return {
        from: () => mockQueryBuilder,
        channel: () => ({
            on: function () { return this },
            subscribe: () => ({
                unsubscribe: () => { },
                on: function () { return this }
            })
        }),
        removeChannel: () => { },
        auth: {
            getUser: () => Promise.resolve({ data: { user: null }, error: null }),
            getSession: () => Promise.resolve({ data: { session: null }, error: null }),
            onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => { } } } })
        }
    }
}

if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('⚠️ Supabase environment variables not found. Using mock client. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local')
}

export const supabase = (supabaseUrl && supabaseAnonKey)
    ? createClient(supabaseUrl, supabaseAnonKey)
    : createMockClient() as any
