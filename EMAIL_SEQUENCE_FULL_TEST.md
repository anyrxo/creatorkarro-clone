# 7-Day Email Sequence & Gamification Test Guide

This guide will help you verify the new 7-day email sequences for both Free and Paid users, as well as the new "Nudge" email for inactive users.

## 1. Pre-flight Checks

Ensure your environment variables are set correctly in Vercel or `.env.local`:
- `RESEND_API_KEY`: Your Resend API key.
- `CRON_SECRET`: Your custom cron secret.
- `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase URL.
- `SUPABASE_SERVICE_ROLE_KEY`: Your Supabase Service Role Key.

## 2. Testing the Cron Job Logic

We have updated `src/app/api/cron/onboarding/route.ts` to handle:
- **Free Users:** Days 2, 3, 4, 5, 6, 7.
- **Paid Users:** Days 2, 3, 4, 5, 6, 7 + Nudge (if inactive > 3 days).

### How to Test Manually

Since we can't easily wait 7 days, we can simulate different states by modifying the `created_at`, `claimed_at`, and `last_seen_at` timestamps in Supabase.

#### Step 1: Create a Test User
1. Go to your site and sign up with a test email (e.g., `test+day4@yourdomain.com`).
2. Go to Supabase -> Table Editor -> `profiles`.
3. Find your user.

#### Step 2: Test Free User Sequence (Day 4-7)
To test Day 4 (The Unfair Advantage):
1. Update `created_at` to be exactly **3 days ago** (72 hours).
   - Example: If now is `2023-10-25 10:00:00`, set `created_at` to `2023-10-22 09:30:00` (just inside the 72-73h window).
2. Trigger the Cron Job manually via curl or browser (if you temporarily disable auth).
   ```bash
   curl -X GET https://your-site.com/api/cron/onboarding \
     -H "Authorization: Bearer YOUR_CRON_SECRET"
   ```
3. Check your email. You should receive "The Unfair Advantage You're Ignoring".

Repeat for:
- **Day 5 (Sleep Money):** Set `created_at` to 4 days ago (96h).
- **Day 6 (Objections):** Set `created_at` to 5 days ago (120h).
- **Day 7 (Final):** Set `created_at` to 6 days ago (144h).

#### Step 3: Test Paid User Sequence (Gamification)
1. Redeem a license key for your test user.
2. Go to Supabase -> Table Editor -> `license_keys`.
3. Find the key and update `claimed_at`.

To test Day 4 (XP Boost):
1. Set `claimed_at` to **3 days ago** (72h).
2. **IMPORTANT:** Ensure `last_seen_at` in `profiles` is RECENT (e.g., today). If it's old, you might trigger the Nudge email instead!
3. Trigger Cron.
4. Check email for "XP Boost Available".

Repeat for:
- **Day 5 (Inner Circle):** Set `claimed_at` to 4 days ago (96h).
- **Day 6 (Blueprint):** Set `claimed_at` to 5 days ago (120h).
- **Day 7 (Streak):** Set `claimed_at` to 6 days ago (144h).

#### Step 4: Test Nudge Email (Inactivity)
1. Ensure user is PAID (has claimed key).
2. Set `claimed_at` to **3 days ago** (72h).
3. Set `last_seen_at` in `profiles` to **3 days ago** (72h).
4. Trigger Cron.
5. Check email for "We Miss You".

## 3. Troubleshooting

- **No Email Sent?**
  - Check the Cron Logs in Vercel.
  - Verify the time window. The cron job checks for `hours >= X && hours < X + 1`. Your timestamp must be precise.
  - Check `emailsSent` in the JSON response.

- **Wrong Email?**
  - Verify `isPaidUser` logic. Does the user have a `claimed` key in `license_keys`?
  - Verify `last_seen_at`. Did you accidentally trigger the Nudge?

## 4. Verification Checklist

- [ ] Free Day 4 Received
- [ ] Free Day 5 Received
- [ ] Free Day 6 Received
- [ ] Free Day 7 Received
- [ ] Paid Day 4 (XP) Received
- [ ] Paid Day 5 (Community) Received
- [ ] Paid Day 6 (Blueprint) Received
- [ ] Paid Day 7 (Streak) Received
- [ ] Nudge Email Received (when inactive)
