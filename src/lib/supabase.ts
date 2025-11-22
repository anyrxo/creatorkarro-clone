import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('Missing Supabase environment variables. Check .env.local')
}

// Create a mock client if env vars are missing to prevent build crashes
export const supabase = (supabaseUrl && supabaseAnonKey)
    ? createClient(supabaseUrl, supabaseAnonKey)
    : {
        from: () => ({
            select: () => ({
                eq: () => ({
                    single: () => Promise.resolve({ data: null, error: null }),
                    maybeSingle: () => Promise.resolve({ data: null, error: null }),
                }),
                order: () => ({
                    limit: () => Promise.resolve({ data: [], error: null })
                })
            }),
            insert: () => ({
                select: () => ({
                    single: () => Promise.resolve({ data: null, error: null })
                })
            }),
            update: () => ({
                eq: () => Promise.resolve({ data: null, error: null })
            })
        }),
        auth: {
            getUser: () => Promise.resolve({ data: { user: null }, error: null }),
            getSession: () => Promise.resolve({ data: { session: null }, error: null }),
            onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => { } } } })
        }
    } as any
