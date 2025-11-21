# Instructions for Comet Browser AI

## Task: Fix Vercel Environment Variables Configuration

### Step 1: Check Current Deployment Status
1. Go to: https://vercel.com/iimagined/iimagined.ai
2. Look at the latest deployment
3. If it's failing, click on it and check the error logs
4. Take a screenshot of the error

### Step 2: Verify Environment Variables
1. Go to: https://vercel.com/iimagined/iimagined.ai/settings/environment-variables
2. Verify these variables exist for **ALL ENVIRONMENTS** (Production, Preview, Development):

**Required Variables:**
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
CLERK_SECRET_KEY
CLERK_WEBHOOK_SECRET
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY
```

**Optional Variables:**
```
RESEND_API_KEY
GEMINI_API_KEY
CRON_SECRET
```

### Step 3: Check for Missing Variables
If any of the REQUIRED variables are missing or not set for all environments:

1. Click "Edit" on the variable
2. Make sure it's checked for:
   - ✓ Production
   - ✓ Preview  
   - ✓ Development
3. Click "Save"

### Step 4: Get the Correct Values

**For Clerk Variables:**
1. Go to: https://dashboard.clerk.com/apps/app_35j03CJwQOE8Dy60CTThBjvSFih/instances/ins_35j03CJwQOE8Dy60CTThBjvSFih/api-keys
2. Copy:
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` = The "Publishable key"
   - `CLERK_SECRET_KEY` = Click "Reveal" on "Secret key" and copy it

**For Clerk Webhook Secret:**
1. Go to: https://dashboard.clerk.com/apps/app_35j03CJwQOE8Dy60CTThBjvSFih/instances/ins_35j03CJwQOE8Dy60CTThBjvSFih/webhooks
2. Click on the webhook endpoint (should be `https://iimagined.ai/api/webhooks/clerk`)
3. Copy the "Signing Secret" (starts with `whsec_`)
4. This goes in `CLERK_WEBHOOK_SECRET`

**For Supabase Variables:**
1. Go to: https://supabase.com/dashboard/project/jxzqzbkcmybmpnmkukuu/settings/api
2. Copy:
   - `NEXT_PUBLIC_SUPABASE_URL` = Project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = Project API keys > anon public
   - `SUPABASE_SERVICE_ROLE_KEY` = Project API keys > service_role (click "Reveal" first)

### Step 5: Update Any Missing/Incorrect Variables
1. In Vercel, for each variable that's missing or incorrect:
2. Click "Add New" or "Edit"
3. Enter the variable name and value
4. Check ALL THREE environments (Production, Preview, Development)
5. Click "Save"

### Step 6: Trigger Redeploy
1. Go to: https://vercel.com/iimagined/iimagined.ai/deployments
2. Find the latest deployment
3. Click the "..." menu on the right
4. Click "Redeploy"
5. Wait for it to complete

### Step 7: Verify Success
1. Once deployed, check the deployment logs
2. It should show "Build succeeded"
3. Take a screenshot of the successful deployment

## What to Report Back

Please provide:
1. Screenshot of current deployment status
2. List of any missing environment variables
3. Screenshot after fixing variables (if any were missing)
4. Screenshot of successful deployment

## Common Issues to Check

### Issue 1: Variables Not Set for All Environments
- **Fix**: Edit each variable and check all 3 environment boxes

### Issue 2: Wrong Supabase Project
- **Fix**: Make sure you're using the `iimagined-learning` project (ID: jxzqzbkcmybmpnmkukuu)

### Issue 3: Clerk Keys Don't Match
- **Fix**: Copy fresh keys from Clerk dashboard

### Issue 4: Webhook Secret Missing
- **Fix**: Get the signing secret from the webhook page in Clerk

## Expected Result

After fixing, the deployment should:
- ✅ Build successfully
- ✅ Show no TypeScript errors
- ✅ Have all environment variables set
- ✅ Be live at https://iimagined.ai

Then test by:
1. Sign up a new user at https://iimagined.ai/sign-up
2. Check Supabase profiles table - user should appear within seconds
