# URGENT FIX: Webhook 308 Redirect Error

## Problem Found:
Your webhook is failing with **HTTP 308 (Permanent Redirect)**

```
Failed: https://iimagined.ai/api/webhooks/clerk
Response: 308 (Permanent Redirect)
```

This means the URL is redirecting, and Clerk webhooks cannot follow redirects.

## Solution:

### Option 1: Update Webhook URL to use WWW (Recommended)

1. Go to: https://dashboard.clerk.com/apps/app_35j03CJwQOE8Dy60CTThBjvSFih/instances/ins_35j03CJwQOE8Dy60CTThBjvSFih/webhooks
2. Click on your webhook endpoint
3. Click "Edit" or "Settings"
4. Change the URL from:
   - ❌ `https://iimagined.ai/api/webhooks/clerk`
   - ✅ `https://www.iimagined.ai/api/webhooks/clerk` (add www)
5. Save

### Option 2: Remove WWW Redirect (Alternative)

If you want to keep the URL without www, you need to update your Vercel configuration to not redirect non-www to www for API routes.

## Test After Fixing:

1. After updating the webhook URL, click "Send Example" in Clerk
2. You should see:
   - ✅ Status: 200 (Success)
   - ✅ Response: Empty (which is correct)

3. Then test with a real signup:
   - Go to https://iimagined.ai/sign-up (or www.iimagined.ai/sign-up)
   - Create a test user
   - Check Supabase - user should appear!

## Why This Happened:

Your domain is configured to redirect:
- `iimagined.ai` → `www.iimagined.ai`

This is common for SEO, but webhooks need a direct URL that doesn't redirect.

## Quick Fix Instructions for Comet:

```
1. Go to Clerk webhook settings
2. Edit the endpoint URL
3. Change to: https://www.iimagined.ai/api/webhooks/clerk
4. Save
5. Test by clicking "Send Example" button
6. Should see 200 response
```
