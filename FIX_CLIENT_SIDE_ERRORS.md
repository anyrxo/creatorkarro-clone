# 🐛 Client-Side Exception Error - Fix Plan

## Issue Description
**Error:** "Application error: a client-side exception has occurred"
**Occurs:** Sometimes on phone and web (refresh fixes it)
**Type:** Client-side exception (likely React hydration or data loading)

---

## 🔍 Root Causes (Most Likely)

### 1. **Supabase Mock Client** ⚠️
We created a mock Supabase client when env vars are missing:
```typescript
// src/lib/supabase.ts
if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('Missing Supabase environment variables')
    export const supabase = { /* mock object */ }
}
```

**Problem:** Components try to call real Supabase methods on mock object → crashes

**Fix:** Add proper error boundaries and null checks

---

### 2. **Race Conditions in Context**
Components render before data is loaded:
- `GamificationContext` - `stats` might be `null`
- `CourseContext` - `completedLessons` loads async
- Components try to access properties before data exists

**Fix:** Add loading states and null guards

---

### 3. **Missing Null Checks**
Components assume data exists:
```tsx
// ❌ Bad
<div>{stats.total_xp}</div>

// ✅ Good
<div>{stats?.total_xp ?? 0}</div>
```

---

## 🔧 Immediate Fixes

### Fix 1: Update Supabase Client to Handle Missing Env Vars Properly

**File:** `src/lib/supabase.ts`

```typescript
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Create a proper mock client with all methods
const createMockClient = () => ({
  from: () => ({
    select: () => Promise.resolve({ data: null, error: null }),
    insert: () => Promise.resolve({ data: null, error: null }),
    update: () => Promise.resolve({ data: null, error: null }),
    upsert: () => Promise.resolve({ data: null, error: null }),
    delete: () => Promise.resolve({ data: null, error: null }),
    eq: function() { return this },
    single: () => Promise.resolve({ data: null, error: null }),
  }),
  channel: () => ({
    on: function() { return this },
    subscribe: () => ({ unsubscribe: () => {} })
  }),
  removeChannel: () => {},
  auth: {
    getUser: () => Promise.resolve({ data: { user: null }, error: null })
  }
})

export const supabase = (supabaseUrl && supabaseAnonKey)
  ? createClient(supabaseUrl, supabaseAnonKey)
  : createMockClient() as any
```

---

### Fix 2: Add Error Boundary to Root Layout

**File:** `src/app/layout.tsx`

Add a global error boundary to catch client-side errors:

```tsx
'use client'
import { useEffect } from 'react'

export function ErrorBoundary({ error, reset }: { error: Error, reset: () => void }) {
  useEffect(() => {
    console.error('Root error:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
        <button
          onClick={reset}
          className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          Try again
        </button>
      </div>
    </div>
  )
}
```

---

### Fix 3: Add Null Guards in GamificationContext

**File:** `src/context/GamificationContext.tsx`

Ensure components handle null states:

```tsx
// In any component using stats
const { stats, isLoading } = useGamification()

if (isLoading) {
  return <LoadingSpinner />
}

if (!stats) {
  return <div>No stats available</div>
}

// Now safe to use stats.total_xp
```

---

### Fix 4: Add Null Guards in Dashboard Components

**Common pattern to add everywhere:**

```tsx
// Before accessing data
{stats && (
  <div>XP: {stats.total_xp}</div>
)}

// Or with optional chaining
<div>XP: {stats?.total_xp ?? 0}</div>

// For arrays
{achievements?.map(achievement => (
  <div key={achievement.id}>{achievement.title}</div>
)) ?? <div>No achievements yet</div>}
```

---

## 🎯 Files That Need Null Guards

### High Priority:
1. `src/app/learning/page.tsx` - Dashboard (accesses stats)
2. `src/components/gamification/StatsCard.tsx` - Stats display
3. `src/components/learning/CourseCard.tsx` - Course progress
4. `src/app/learning/[courseId]/[moduleId]/[lessonId]/page.tsx` - Lesson page

### Medium Priority:
5. `src/components/gamification/LevelProgressBar.tsx`
6. `src/components/gamification/StreakFlame.tsx`
7. Any component that uses `useCourse()` or `useGamification()`

---

## 🚀 Quick Fix Implementation Order

1. **Fix Supabase mock client** (prevents most crashes)
2. **Add error boundary** (catches remaining errors gracefully)
3. **Add null guards to Dashboard** (most visited page)
4. **Add loading states** (better UX)

---

## 🧪 Testing After Fixes

1. Test with Supabase env vars **present**
2. Test with Supabase env vars **missing** (should show graceful degradation)
3. Test on mobile (slow connection)
4. Test rapid navigation (race conditions)
5. Test fresh user (no cached data)

---

## 📊 Error Monitoring

Add Sentry or similar for production error tracking:

```bash
npm install @sentry/nextjs
```

This will catch and report all client-side errors automatically.

---

## ✅ Quick Check Commands

```bash
# Check for components without null guards
grep -r "stats\." src/components | grep -v "stats\?"

# Check for array maps without null checks
grep -r "\.map(" src/components | grep -v "?."

# Find all useGamification() calls
grep -r "useGamification()" src
```

---

**Priority:** HIGH  
**Impact:** User experience (causes page crashes)  
**Difficulty:** MEDIUM  
**Time to Fix:** 30-60 minutes

Want me to implement these fixes now?
