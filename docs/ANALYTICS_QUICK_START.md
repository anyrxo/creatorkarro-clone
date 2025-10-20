# Analytics Quick Start Guide

> Get analytics tracking up and running in 10 minutes

## Prerequisites

- ✅ Checkout system deployed (Phase 1)
- ✅ Courses configured (5 courses live)
- ✅ Google Analytics 4 account
- ✅ Access to `.env.local`

---

## 5-Minute Setup

### Step 1: Get Your GA4 Measurement ID (2 minutes)

1. Go to [Google Analytics](https://analytics.google.com/)
2. Admin → Data Streams → Your Web Stream
3. Copy Measurement ID (starts with `G-`)

### Step 2: Add to Environment (1 minute)

Open `.env.local` and add:

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Replace `G-XXXXXXXXXX` with your actual ID.

### Step 3: Update Layout (1 minute)

Open `src/app/layout.tsx` and update line 209:

```typescript
src={`https://www.googletagmanager.com/gtag/js?id=G-YOUR-ID-HERE`}
```

And line 219:

```typescript
gtag('config', 'G-YOUR-ID-HERE');
```

### Step 4: Rebuild & Test (1 minute)

```bash
npm run build
npm run dev
```

Open http://localhost:3000 and check browser console for:
```
Analytics initialized successfully
Page view tracked: /
```

---

## Verify It's Working

### Check 1: Browser Console

1. Open site in browser
2. Press F12 (Dev Tools)
3. Go to Console tab
4. Look for analytics messages:
   ```
   Analytics initialized successfully
   Page view tracked: /ai-influencers
   Event tracked: cta_click
   ```

### Check 2: GA4 Realtime

1. Go to GA4 → Reports → Realtime
2. You should see yourself as an active user
3. Events should appear in real-time

### Check 3: GA4 DebugView

1. Go to GA4 → Admin → DebugView
2. Open your site with `?debug_mode=true`
3. Events should appear with full details

---

## What's Being Tracked

### Automatic Events

✅ **Page Views** - Every page load
✅ **Scroll Depth** - 25%, 50%, 75%, 100%
✅ **Time on Page** - Every 30 seconds
✅ **Rage Clicks** - User frustration indicators

### Manual Events

✅ **Product Views** - Course page visits
✅ **CTA Clicks** - All call-to-action buttons
✅ **Navigation Clicks** - Header, footer, mobile menu
✅ **Social Clicks** - Social media icons
✅ **Checkout Events** - Full funnel tracking
✅ **Purchases** - Via Whop webhook

---

## Key Pages with Tracking

| Page | Events Tracked |
|------|----------------|
| `/ai-influencers` | page_view, view_item, scroll_depth, cta_click (3 CTAs) |
| `/checkout` | page_view, begin_checkout, checkout_progress, cta_click |
| All pages | navigation_click, social_click, time_on_page |

---

## Quick Wins

### Day 1: Monitor Traffic

- Check Realtime report hourly
- Verify events are firing
- Test all CTA buttons

### Week 1: Identify Patterns

- Review top pages
- Check conversion funnel
- Identify drop-off points

### Month 1: Optimize

- A/B test top CTAs
- Improve high-exit pages
- Fix rage click areas

---

## Essential Reports

### 1. Realtime (Daily Check)
`GA4 → Reports → Realtime`

See current users and events happening now.

### 2. Traffic Sources (Weekly Check)
`GA4 → Reports → Acquisition → Overview`

Understand where visitors come from.

### 3. Conversion Funnel (Weekly Check)
`GA4 → Explore → Create Funnel`

Build funnel:
1. page_view (Course Page)
2. cta_click
3. begin_checkout
4. purchase

### 4. Revenue (Daily Check)
`GA4 → Reports → Monetization → Ecommerce purchases`

Track sales and revenue.

---

## Troubleshooting

### Events Not Showing?

**Check:**
1. ✅ Measurement ID in `.env.local`
2. ✅ Layout updated with GA ID
3. ✅ App rebuilt: `npm run build`
4. ✅ Ad blockers disabled
5. ✅ Incognito mode test

**Solution:** Wait 24-48 hours for standard reports. Use Realtime/DebugView for immediate verification.

### Purchases Not Tracking?

**Check:**
1. ✅ Whop webhook configured
2. ✅ Webhook secret in `.env.local`
3. ✅ Webhook handler deployed
4. ✅ Test purchase completed

**Solution:** Check webhook server logs for errors.

---

## Advanced Setup (Optional)

### Microsoft Clarity (Heatmaps)

1. Create project at [clarity.microsoft.com](https://clarity.microsoft.com/)
2. Get Project ID
3. Add to `.env.local`:
   ```bash
   NEXT_PUBLIC_CLARITY_ID=your-clarity-id
   ```
4. Add script to `layout.tsx`:
   ```html
   <Script id="clarity-script">
     {`(function(c,l,a,r,i,t,y){
       c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
       t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
       y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
     })(window, document, "clarity", "script", "YOUR_PROJECT_ID");`}
   </Script>
   ```

### Whop Webhook Handler

1. Deploy `api/webhooks/whop.py`
2. Configure in Whop Dashboard:
   - URL: `https://yourdomain.com/api/webhooks/whop`
   - Events: `payment.succeeded`, `subscription.created`
3. Copy webhook secret to `.env.local`

---

## Resources

- **Full Documentation:** `docs/ANALYTICS_IMPLEMENTATION_REPORT.md`
- **Setup Script:** `scripts/setup-analytics.sh`
- **Analytics Lib:** `src/lib/analytics.ts`
- **GA4 Integration:** `src/lib/gtag.ts`

---

## Support

**Issues? Check these:**

1. Browser console for errors
2. GA4 DebugView for real-time events
3. Network tab for API calls
4. Server logs for webhook errors

**Still stuck?**

1. Review troubleshooting guide in main docs
2. Test in Incognito mode
3. Try different browser
4. Check if tracking is blocked

---

## Success Metrics

After setup, you should see:

**Week 1:**
- ✅ Daily page views tracked
- ✅ All major events firing
- ✅ Funnel data populating

**Month 1:**
- ✅ Conversion rate baseline established
- ✅ Top traffic sources identified
- ✅ First optimization implemented

**Month 3:**
- ✅ 15-25% conversion improvement
- ✅ Data-driven content strategy
- ✅ Revenue attribution working

---

**Last Updated:** 2025-10-20
**Version:** 1.0
