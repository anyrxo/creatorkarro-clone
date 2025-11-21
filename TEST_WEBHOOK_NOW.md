# ✅ Webhook Setup Complete - Testing Instructions

## What You Just Did:
1. ✅ Created webhook endpoint in Clerk: `https://iimagined.ai/api/webhooks/clerk`
2. ✅ Subscribed to events: `user.created`, `user.updated`, `user.deleted`
3. ✅ Updated Vercel with new signing secret: `whsec_kYLTmWlf04qaAFlPbCxEzquNl+QHW9Ga`
4. ✅ Triggered redeploy

## Next Steps:

### Step 1: Wait for Deployment (2-3 minutes)
Check deployment status at: https://vercel.com/iimagined/iimagined.ai

Wait until you see:
- ✅ Status: "Ready" (green checkmark)
- ✅ Build completed successfully

### Step 2: Test the Integration

Once deployment is ready:

1. **Open your site**: https://iimagined.ai/sign-up

2. **Create a test user**:
   - Use a real email you can access
   - Complete the signup process
   - You should get redirected to the dashboard

3. **Check Supabase** (within 5-10 seconds):
   - Go to: https://supabase.com/dashboard/project/jxzqzbkcmybmpnmkukuu/editor
   - Click on the `profiles` table
   - **You should see your new user!**
   - It should have:
     - `user_id` (from Clerk)
     - `email`
     - `first_name`
     - `last_name`
     - `last_seen_at` (timestamp)

### Step 3: Verify Webhook Logs (Optional)

To confirm the webhook is working:
1. Go to: https://dashboard.clerk.com/apps/app_35j03CJwQOE8Dy60CTThBjvSFih/instances/ins_35j03CJwQOE8Dy60CTThBjvSFih/webhooks
2. Click on your webhook endpoint
3. Look for "Recent Deliveries" or "Logs"
4. You should see a successful `user.created` event with status 200

## What Should Happen:

```
User Signs Up
     ↓
Clerk Creates User
     ↓
Clerk Sends Webhook → https://iimagined.ai/api/webhooks/clerk
     ↓
Your Webhook Handler:
  - Verifies signature ✓
  - Creates user in Supabase ✓
  - Sends welcome email ✓ (if RESEND_API_KEY is set)
     ↓
User Appears in Supabase profiles table ✓
```

## Troubleshooting:

### If user doesn't appear in Supabase:

1. **Check webhook logs in Clerk**:
   - Are events being sent?
   - What's the response status? (should be 200)
   - Any error messages?

2. **Check Vercel logs**:
   - Go to: https://vercel.com/iimagined/iimagined.ai
   - Click on the latest deployment
   - Click "Functions" tab
   - Look for `/api/webhooks/clerk` logs
   - Check for any errors

3. **Verify the signing secret**:
   - Make sure `CLERK_WEBHOOK_SECRET` in Vercel matches the one from Clerk
   - Should be: `whsec_kYLTmWlf04qaAFlPbCxEzquNl+QHW9Ga`

## Expected Result:

✅ New users appear in Supabase `profiles` table immediately after signup  
✅ No license key needed - webhook handles it automatically  
✅ Welcome email sent (if RESEND_API_KEY is configured)

---

**Once deployment finishes, go ahead and test! Create a user and check Supabase.** 🚀
