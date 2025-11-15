# SEO & Internal Linking Implementation Guide

## Overview

This guide explains how to use the new SEO and internal linking components in blog posts.

## Components Available

### 1. SmartCTA - Intelligent Course Recommendations

Automatically recommends the correct course based on blog post topic.

**Variants:**
- `default` - Full-width CTA at bottom of post
- `inline` - Small inline CTA within content
- `sidebar` - Sticky sidebar CTA

**Usage:**

```tsx
import SmartCTA from '@/components/blog/SmartCTA'

// In your blog post component
export default function BlogPost() {
  const blogSlug = '500k-followers' // Get from params or props

  return (
    <div>
      {/* Your blog content */}

      {/* Add inline CTA mid-article */}
      <SmartCTA blogSlug={blogSlug} variant="inline" />

      {/* Add full CTA at bottom */}
      <SmartCTA blogSlug={blogSlug} />
    </div>
  )
}
```

**How it works:**
- Instagram posts → Instagram Ignited course ($399)
- AI Influencer posts → AI Influencers Academy ($399)
- Automation/n8n posts → AI Automations course ($399)
- Digital products posts → Digital Products Empire ($399)
- Business empire posts → All Access Bundle ($997)

### 2. RelatedPosts - Internal Link Building

Shows 3 related blog posts for better internal linking and user engagement.

**Usage:**

```tsx
import RelatedPosts from '@/components/blog/RelatedPosts'

export default function BlogPost() {
  const blogSlug = 'instagram-growth-2025'

  return (
    <div>
      {/* Your blog content */}

      {/* Add related posts at bottom */}
      <RelatedPosts currentSlug={blogSlug} limit={3} />
    </div>
  )
}
```

### 3. Breadcrumbs - SEO Navigation

Adds breadcrumb navigation with schema.org markup for better SEO.

**Usage:**

```tsx
import Breadcrumbs from '@/components/blog/Breadcrumbs'
import { getBreadcrumbs } from '@/lib/internal-links'

export default function BlogPost() {
  const blogSlug = 'instagram-growth-2025'
  const blogTitle = 'Instagram Growth Guide 2025'

  const breadcrumbs = getBreadcrumbs(blogSlug, blogTitle)

  return (
    <div>
      <Breadcrumbs breadcrumbs={breadcrumbs} />

      {/* Your blog content */}
    </div>
  )
}
```

## Complete Blog Post Template

Here's a complete example of a well-optimized blog post:

```tsx
import SmartCTA from '@/components/blog/SmartCTA'
import RelatedPosts from '@/components/blog/RelatedPosts'
import Breadcrumbs from '@/components/blog/Breadcrumbs'
import { getBreadcrumbs } from '@/lib/internal-links'
import FAQSchema from '@/components/FAQSchema'

export default function InstagramGrowthGuide() {
  const blogSlug = 'instagram-growth-2025'
  const blogTitle = 'Instagram Growth Guide 2025: Proven Strategies'

  const breadcrumbs = getBreadcrumbs(blogSlug, blogTitle)

  const faqs = [
    {
      question: "How do I grow Instagram in 2025?",
      answer: "Instagram growth in 2025 requires..."
    }
    // ... more FAQs
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* 1. Breadcrumbs at top */}
      <Breadcrumbs breadcrumbs={breadcrumbs} />

      {/* 2. Article header */}
      <h1 className="text-4xl font-bold mb-4">{blogTitle}</h1>

      {/* 3. Article content */}
      <article className="prose prose-invert max-w-none">
        <p>Your blog content here...</p>

        {/* 4. Inline CTA mid-article (optional) */}
        <SmartCTA blogSlug={blogSlug} variant="inline" />

        <p>More content...</p>
      </article>

      {/* 5. FAQ Section */}
      <section className="my-12">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <FAQSchema faqs={faqs} />
      </section>

      {/* 6. Main CTA */}
      <SmartCTA blogSlug={blogSlug} />

      {/* 7. Related Posts */}
      <RelatedPosts currentSlug={blogSlug} limit={3} />
    </div>
  )
}
```

## Course Mapping Logic

The `getRecommendedCourse()` function intelligently maps blog topics to courses:

| Blog Topic | Recommended Course | Price | Whop URL |
|------------|-------------------|-------|----------|
| Instagram, Reels, viral content | Instagram Ignited | $399 | `/instagram-ignited` |
| AI influencers, ComfyUI, LoRA | AI Influencers Academy | $399 | `/ai-influencers` |
| n8n, automation, workflows | AI Automations | $399 | `/ai-automations` |
| Digital products, courses | Digital Products Empire | $399 | `/digital-products` |
| Business empire, scaling | All Access Bundle | $997 | All courses combined |

## Internal Linking Categories

Blog posts are categorized for automatic related post suggestions:

- **instagram**: 18 posts about Instagram growth
- **aiInfluencer**: 15 posts about AI influencers
- **comfyui**: 9 posts about ComfyUI
- **automation**: 18 posts about n8n and automation
- **digitalProducts**: 14 posts about digital products
- **contentCreation**: 11 posts about content creation
- **monetization**: 4 posts about monetization

## SEO Benefits

✅ **Correct CTAs** - No more generic "all access" links
✅ **Better internal linking** - Automatic related post suggestions
✅ **Reduced bounce rate** - Users discover more content
✅ **Improved crawlability** - Clear site structure with breadcrumbs
✅ **Schema.org markup** - Rich snippets in search results
✅ **Contextual recommendations** - Right course for right audience

## Migration Strategy

To update existing blog posts:

1. **Priority 1: Completed posts (13 posts at 2000+ lines)**
   - Add SmartCTA at bottom
   - Add RelatedPosts before footer
   - Add Breadcrumbs at top

2. **Priority 2: High-traffic posts**
   - Check analytics for top performers
   - Implement full template above

3. **Priority 3: All remaining posts**
   - Batch update using find/replace
   - Or implement in blog post layout component

## Next Steps

1. Update BlogPostLayout component to automatically include these components
2. Create a script to bulk-update existing blog posts
3. Monitor analytics for improved metrics (time on page, bounce rate, conversions)

---

**Need help?** Check the component source code in:
- `src/components/blog/SmartCTA.tsx`
- `src/components/blog/RelatedPosts.tsx`
- `src/components/blog/Breadcrumbs.tsx`
- `src/config/courses.ts`
- `src/lib/internal-links.ts`
