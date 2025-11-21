# Environment Variables Audit Report

## 🚨 Action Required
| Variable | Status | Action |
| :--- | :--- | :--- |
| **`CLERK_WEBHOOK_SECRET`** | **Incorrect / Missing** | **MUST UPDATE**. This is why signups aren't syncing. Get the new secret from Clerk Dashboard > Webhooks. |

## ✅ Verified & Correct
These variables are present in Vercel and used in your code. **Do not touch them.**

*   `NEXT_PUBLIC_SUPABASE_URL`
*   `NEXT_PUBLIC_SUPABASE_ANON_KEY`
*   `SUPABASE_SERVICE_ROLE_KEY`
*   `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
*   `CLERK_SECRET_KEY`
*   `NEXT_PUBLIC_CLERK_SIGN_IN_URL`
*   `NEXT_PUBLIC_CLERK_SIGN_UP_URL`
*   `NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL`
*   `NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL`
*   `GEMINI_API_KEY`
*   `RESEND_API_KEY`
*   `CRON_SECRET`

## 🗑️ Clutter (Safe to Remove)
These variables are present in Vercel but **NOT used in your code**. They were likely added by Vercel Integrations (Postgres, KV, Blob) that you are not using (since you use Supabase). You can safely delete them to clean up the list.

*   `POSTGRES_DATABASE`
*   `POSTGRES_HOST`
*   `POSTGRES_PASSWORD`
*   `POSTGRES_PRISMA_URL`
*   `POSTGRES_URL`
*   `POSTGRES_URL_NON_POOLING`
*   `POSTGRES_USER`
*   `KV_REST_API_READ_ONLY_TOKEN`
*   `KV_REST_API_TOKEN`
*   `KV_REST_API_URL`
*   `KV_URL`
*   `BLOB_READ_WRITE_TOKEN`

## ℹ️ Notes
*   **`NEXT_PUBLIC_SITE_URL`**: Not set in Vercel, but your code falls back to `https://iimagined.ai`, so this is fine.
*   **`ADMIN_EMAIL`**: Not used. Admin emails are currently hardcoded in `src/app/actions/admin-auth.ts`.
