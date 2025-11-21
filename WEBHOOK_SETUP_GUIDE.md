# Clerk Webhook Setup Guide

The reason your new signups are not showing in Supabase is that the **Clerk Webhook is missing**. This webhook is responsible for notifying your application when a user signs up, so it can create the user in Supabase.

## 1. Configure Clerk Webhook

1.  Go to the [Clerk Dashboard > Webhooks](https://dashboard.clerk.com/apps/app_35j03CJwQOE8Dy60CTThBjvSFih/instances/ins_35j03CJwQOE8Dy60CTThBjvSFih/webhooks).
2.  Click **"Add Endpoint"**.
3.  **Endpoint URL**: `https://iimagined.ai/api/webhooks/clerk`
4.  **Subscribe to events**: Select the following events:
    *   `user.created`
    *   `user.updated`
    *   `user.deleted`
5.  Click **"Create"**.

## 2. Update Vercel Environment Variable

1.  After creating the endpoint, you will see a **"Signing Secret"** on the right side (starts with `whsec_`).
2.  Click the **Copy** icon to copy it.
3.  Go to your [Vercel Environment Variables](https://vercel.com/iimagined/iimagined.ai/settings/environment-variables).
4.  Find `CLERK_WEBHOOK_SECRET`.
5.  Edit it and paste the new secret you just copied.
6.  **Save** the change.
7.  **Redeploy** your application (or at least the API routes) for the new variable to take effect. (Usually, Vercel requires a redeploy for env var changes to propagate to running functions).

## 3. Verify

1.  Create a new user in Clerk (or sign up on your site).
2.  Check the **Supabase Table Editor** > `profiles` table. The new user should appear.
