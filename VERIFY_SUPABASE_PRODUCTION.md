# ✅ Supabase Production Verification Checklist

## 🎯 Goal
Ensure Supabase is **fully configured** in production so the REAL client is used (not mock).

---

## 1️⃣ **Verify Environment Variables in Vercel**

### Check if these are set:
Go to: **Vercel Dashboard** → **Your Project** → **Settings** → **Environment Variables**

Required variables:
- ✅ `NEXT_PUBLIC_SUPABASE_URL`
- ✅ `NEXT_PUBLIC_SUPABASE_ANON_KEY`

**Values should look like:**
```
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### ⚠️ If Missing:
1. Go to your Supabase project dashboard
2. Click **Settings** → **API**
3. Copy:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon/public key** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Add them to Vercel
5. Redeploy

---

## 2️⃣ **Verify Supabase Tables Exist**

Run this in **Supabase SQL Editor**:

```sql
-- Check if all required tables exist
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
  AND table_name IN (
    'user_stats',
    'user_progress', 
    'user_achievements',
    'achievements',
    'daily_quests',
    'user_quests',
    'xp_history'
  )
ORDER BY table_name;
```

**Expected Result:** All 7 tables should be listed

### ⚠️ If Tables Missing:
Run the gamification setup SQL:
```sql
-- Located in: GAMIFICATION_SETUP.sql or ENHANCED_GAMIFICATION.sql
```

---

## 3️⃣ **Verify RLS Policies**

```sql
-- Check if RLS policies exist
SELECT schemaname, tablename, policyname 
FROM pg_policies 
WHERE tablename IN ('user_stats', 'user_progress', 'user_achievements')
ORDER BY tablename;
```

**Expected:** At least 2-3 policies per table (SELECT, INSERT, UPDATE)

### ⚠️ If Policies Missing:
Your users won't be able to access their own data! Run:
```sql
-- Enable RLS
ALTER TABLE user_stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_achievements ENABLE ROW LEVEL SECURITY;

-- Create policies (see GAMIFICATION_SETUP.sql for full policies)
```

---

## 4️⃣ **Test Real Supabase Connection**

### Option A: Check Vercel Logs
After deploy, check logs for:
- ✅ **Good:** No "Using mock client" warnings
- ❌ **Bad:** "Supabase environment variables not found"

### Option B: Test Live
1. Visit: `https://www.iimagined.ai/learning`
2. Open browser console (F12)
3. Check for:
   - ✅ **Good:** Data loads, no errors
   - ❌ **Bad:** "Supabase not configured" errors

---

## 5️⃣ **Verify Clerk Webhook is Syncing Users**

```sql
-- Check if users are being created in user_stats
SELECT user_id, total_xp, current_level, created_at 
FROM user_stats 
ORDER BY created_at DESC 
LIMIT 5;
```

**Expected:** Should see recent users

### ⚠️ If Empty:
- Clerk webhook might not be working
- Check: `src/app/api/webhooks/clerk/route.ts`
- Verify webhook is configured in Clerk dashboard

---

## 6️⃣ **Test XP & Progress Tracking**

### Manual Test:
1. Log in to site
2. Complete a lesson
3. Run this SQL:

```sql
-- Check if lesson was recorded
SELECT * FROM user_progress 
WHERE user_id = 'user_xxxxx'  -- Your Clerk user ID
ORDER BY completed_at DESC 
LIMIT 5;

-- Check if XP was awarded
SELECT * FROM xp_history 
WHERE user_id = 'user_xxxxx'
ORDER BY created_at DESC 
LIMIT 5;
```

**Expected:** 
- Lesson shows in `user_progress`
- XP entry shows in `xp_history`
- `user_stats.total_xp` increased

---

## 7️⃣ **Check for Database Indexes**

Indexes speed up queries:

```sql
-- Verify indexes exist
SELECT tablename, indexname 
FROM pg_indexes 
WHERE schemaname = 'public' 
  AND tablename IN ('user_progress', 'user_stats', 'xp_history')
ORDER BY tablename;
```

**Expected:** At least 1-2 indexes per table

### ⚠️ If Missing:
```sql
-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_user_progress_user_id ON user_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_user_progress_course ON user_progress(course_id, lesson_id);
CREATE INDEX IF NOT EXISTS idx_xp_history_user_id ON xp_history(user_id);
CREATE INDEX IF NOT EXISTS idx_user_stats_user_id ON user_stats(user_id);
```

---

## 🐛 **Common Issues & Fixes**

### Issue: "Mock client" warning in logs
**Fix:** Add env vars to Vercel, redeploy

### Issue: Data not saving
**Fix:** Check RLS policies, verify Clerk user ID matches

### Issue: Slow queries
**Fix:** Add database indexes

### Issue: Webhook not firing
**Fix:** Check Clerk webhook URL, verify endpoint is working

---

## ✅ **Quick Verification Script**

Run this to check everything at once:

```sql
-- 1. Check tables
SELECT 'Tables' as check_type, COUNT(*) as count 
FROM information_schema.tables 
WHERE table_schema = 'public' 
  AND table_name IN ('user_stats', 'user_progress', 'user_achievements');

-- 2. Check users
SELECT 'Users' as check_type, COUNT(*) as count 
FROM user_stats;

-- 3. Check progress entries
SELECT 'Progress Entries' as check_type, COUNT(*) as count 
FROM user_progress;

-- 4. Check RLS
SELECT 'RLS Policies' as check_type, COUNT(*) as count 
FROM pg_policies 
WHERE tablename IN ('user_stats', 'user_progress');
```

**Expected Output:**
- Tables: 3
- Users: > 0
- Progress Entries: > 0
- RLS Policies: > 5

---

## 🎯 **Action Items for You**

**Please verify:**

1. ✅ Are Supabase env vars set in Vercel?
2. ✅ Do all 7 tables exist in Supabase?
3. ✅ Are RLS policies enabled?
4. ✅ Can you see data in `user_stats` table?

**Run these SQL queries and paste results:**

```sql
-- Quick health check
SELECT 
  (SELECT COUNT(*) FROM user_stats) as total_users,
  (SELECT COUNT(*) FROM user_progress) as total_progress,
  (SELECT COUNT(*) FROM user_achievements) as total_achievements,
  (SELECT COUNT(*) FROM xp_history) as total_xp_events;
```

Let me know what you find! 🔍
