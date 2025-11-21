# Premium Onboarding Email Setup

## ✅ What's Configured

### Email Sequence:
1. **Day 1 (Immediate)** - Sent when user redeems license key
   - Subject: "Welcome to IImagined - Your AI Transformation Starts Now"
   - Focus: Commitment & Focus
   - CTAs: First Module, Dashboard, Calendly

2. **Day 2 (24 hours later)** - Sent via cron job
   - Subject: "Stop Collecting Information - Start Implementing"
   - Focus: Implementation Over Information
   - CTAs: First Module, Calendly

3. **Day 3 (48 hours later)** - Sent via cron job
   - Subject: "Being Busy ≠ Getting Results"
   - Focus: Results Over Activity
   - CTAs: Dashboard, Calendly

---

## 🚀 Setup Instructions

### 1. Vercel Cron Job Setup

Add this to your `vercel.json`:

```json
{
  "crons": [
    {
      "path": "/api/cron/onboarding",
      "schedule": "0 * * * *"
    }
  ]
}
```

This runs every hour to check for users who need Day 2 or Day 3 emails.

### 2. Environment Variables

Make sure these are set in Vercel:

- ✅ `RESEND_API_KEY` - Your Resend API key
- ✅ `CRON_SECRET` - Random secret for cron authentication
- ✅ `NEXT_PUBLIC_SITE_URL` - https://iimagined.ai
- ✅ `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase URL
- ✅ `SUPABASE_SERVICE_ROLE_KEY` - Your Supabase service role key

### 3. Update First Module URL

In `src/app/actions/redeem.ts`, update line 51:

```typescript
const firstModuleUrl = `${siteUrl}/learning/YOUR-FIRST-MODULE-SLUG`
```

Replace `YOUR-FIRST-MODULE-SLUG` with your actual first module/course slug.

---

## 📧 Email Sender

All emails are sent from:
```
IImagined Access <access@notifications.iimagined.ai>
```

Make sure this is verified in your Resend dashboard.

---

## 🧪 Testing

### Test Day 1 Email (Immediate):
1. Redeem a license key
2. Check your email inbox
3. Should receive "Welcome to IImagined" email immediately

### Test Day 2 & 3 Emails (Cron):
1. Manually trigger the cron job:
   ```bash
   curl -X GET https://iimagined.ai/api/cron/onboarding \
     -H "Authorization: Bearer YOUR_CRON_SECRET"
   ```

2. Or wait for Vercel to run it automatically (every hour)

---

## 📊 Monitoring

### Check Cron Logs:
1. Go to Vercel Dashboard
2. Click on your project
3. Go to "Deployments" → Latest deployment
4. Click "Functions" → `/api/cron/onboarding`
5. View logs to see which emails were sent

### Check Resend Logs:
1. Go to https://resend.com/emails
2. Filter by `from:access@notifications.iimagined.ai`
3. See delivery status for each email

---

## 🎯 Customization

### Update Email Content:
Edit `src/lib/premium-onboarding-emails.ts`

### Change Email Timing:
Edit `src/app/api/cron/onboarding/route.ts`:
- Line 59: Change `hoursSinceRedemption >= 24` for Day 2 timing
- Line 74: Change `hoursSinceRedemption >= 48` for Day 3 timing

### Add More Days:
1. Add new email template to `premium-onboarding-emails.ts`
2. Add new condition in `onboarding/route.ts`
3. Update this README

---

## ✅ Checklist

- [ ] Vercel cron job configured
- [ ] Environment variables set
- [ ] First module URL updated
- [ ] Resend sender verified
- [ ] Day 1 email tested (redeem a key)
- [ ] Cron job tested (manual trigger)
- [ ] Monitoring set up (Vercel + Resend dashboards)

---

## 🚨 Troubleshooting

### Emails not sending?
1. Check Resend API key is correct
2. Verify sender email in Resend dashboard
3. Check Vercel function logs for errors

### Cron not running?
1. Verify `vercel.json` is committed to git
2. Check Vercel dashboard → Settings → Cron Jobs
3. Ensure `CRON_SECRET` is set

### Wrong timing?
1. Check user's `redeemed_at` timestamp in Supabase
2. Verify cron job is running every hour
3. Check hour calculations in `onboarding/route.ts`

---

## 📝 Notes

- Emails are sent once per user per day (based on redemption time)
- Cron runs every hour but only sends if user is in the right time window
- Day 1 is immediate (sent in `redeem.ts`)
- Days 2-3 are automated (sent via cron)
- All emails use the same sender: `access@notifications.iimagined.ai`

---

Ready to deploy! 🚀
