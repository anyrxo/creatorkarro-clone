# URGENT: Create Clerk Webhook Endpoint

## Task for Comet Browser AI

The webhook endpoint is **NOT created** in Clerk. This is why users aren't syncing to Supabase.

### Step-by-Step Instructions:

1. **Go to**: https://dashboard.clerk.com/apps/app_35j03CJwQOE8Dy60CTThBjvSFih/instances/ins_35j03CJwQOE8Dy60CTThBjvSFih/webhooks

2. **Find and click** the "Add Endpoint" button
   - It might be at the top right
   - Or below the "Webhooks" title
   - You may need to scroll the main content area slightly

3. **Fill in the form**:
   - **Endpoint URL**: `https://iimagined.ai/api/webhooks/clerk`
   - **Description** (optional): "User sync to Supabase"
   - **Subscribe to events**: Click "Subscribe to events" or similar
   - **Select these events**:
     - ✓ `user.created`
     - ✓ `user.updated`
     - ✓ `user.deleted`

4. **Click "Create"** or "Add Endpoint"

5. **After creation**:
   - You'll see the endpoint listed
   - Click on it to view details
   - Find the "Signing Secret" (starts with `whsec_`)
   - **Copy the signing secret**
   - Take a screenshot showing:
     - The endpoint URL
     - The subscribed events
     - The signing secret (revealed)

6. **Verify**:
   - The endpoint should now appear in the webhooks list
   - Status should be "Active" or similar

### What to Report Back:

1. Screenshot of the created webhook endpoint
2. The signing secret value (starts with `whsec_`)
3. Confirmation that events `user.created`, `user.updated`, `user.deleted` are subscribed

### Important Notes:

- The endpoint URL MUST be: `https://iimagined.ai/api/webhooks/clerk` (no "www")
- Make sure all 3 events are selected
- The signing secret should match what's in Vercel (`CLERK_WEBHOOK_SECRET`)

### After Creating:

Once the webhook is created, test it by:
1. Go to https://iimagined.ai/sign-up
2. Create a new test user
3. Check Supabase profiles table - user should appear within seconds
