# Blog Schema Implementation - Quick Start Guide

## For Future Implementations

This guide shows how to quickly add BlogPosting schema to any blog post using the centralized helper library.

---

## Step 1: Import the Helper

At the top of your blog post file:

```typescript
import { generateBlogPostSchema } from '@/lib/blog-schema'
```

---

## Step 2: Generate Schema in Component

Inside your component function (before the return statement):

```typescript
export default function YourBlogPost() {
  const schema = generateBlogPostSchema({
    title: metadata.title,
    description: metadata.description,
    slug: "your-post-slug",  // ← Change this to match your blog post slug
    publishedTime: metadata.openGraph.publishedTime,
    modifiedTime: metadata.openGraph.modifiedTime,
    category: metadata.category,
    keywords: metadata.keywords,
    image: metadata.openGraph.images[0].url
  })

  return (
    // ... your JSX
  )
}
```

---

## Step 3: Add Schema Script Tag

Inside your main container (first child element):

```typescript
return (
  <div className="min-h-screen bg-dark">
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />

    {/* Rest of your content */}
  </div>
)
```

---

## Complete Example

```typescript
import React from 'react'
import Link from 'next/link'
import { generateBlogPostSchema } from '@/lib/blog-schema'

// Your existing metadata
export const metadata = {
  title: "Your Post Title",
  description: "Your post description",
  // ... rest of metadata
}

export default function YourBlogPost() {
  // Generate schema
  const schema = generateBlogPostSchema({
    title: metadata.title,
    description: metadata.description,
    slug: "your-post-slug",
    publishedTime: metadata.openGraph.publishedTime,
    modifiedTime: metadata.openGraph.modifiedTime,
    category: metadata.category,
    keywords: metadata.keywords,
    image: metadata.openGraph.images[0].url
  })

  return (
    <div className="min-h-screen bg-dark">
      {/* Add schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Your existing content */}
      <section className="section-spacing overflow-hidden">
        {/* ... */}
      </section>
    </div>
  )
}
```

---

## Validation Checklist

After adding schema, verify:

- [ ] Import statement added at top of file
- [ ] Schema generated before return statement
- [ ] Slug matches the actual blog post URL slug
- [ ] Script tag added as first child in main container
- [ ] No syntax errors in console
- [ ] Metadata object has all required fields

---

## Testing Your Implementation

1. **Build Test:**
   ```bash
   npm run build
   ```
   Should complete without errors related to your post

2. **Google Rich Results Test:**
   - Visit: https://search.google.com/test/rich-results
   - Enter your blog post URL
   - Should show "BlogPosting" detected

3. **Schema Validator:**
   - Visit: https://validator.schema.org/
   - Paste your blog post URL
   - Should validate without errors

---

## Common Issues

### Issue: "Cannot find module '@/lib/blog-schema'"
**Solution:** Make sure the import path is correct: `@/lib/blog-schema`

### Issue: "metadata.keywords is not iterable"
**Solution:** Ensure keywords is an array in metadata:
```typescript
keywords: ["keyword1", "keyword2", "keyword3"]
```

### Issue: "Cannot read property 'url' of undefined"
**Solution:** Check that metadata.openGraph.images[0].url exists:
```typescript
images: [{
  url: "https://iimagined.ai/images/your-post-og.jpg",
  width: 1200,
  height: 630
}]
```

---

## Pro Tips

1. **Consistent Slugs:** The slug parameter should exactly match your blog post's folder name
2. **Valid Dates:** Use ISO 8601 format for dates (e.g., "2025-01-15T10:00:00.000Z")
3. **Keywords Array:** Always pass keywords as an array, even if there's only one
4. **Image URLs:** Use full absolute URLs, not relative paths
5. **Author Names:** Use the author from metadata or let it default to "Anyro"

---

## Bulk Implementation Script (For Multiple Posts)

If you need to update many posts at once, use this pattern:

```bash
# Find all blog posts without schema
grep -L "generateBlogPostSchema" src/app/blog/*/page.tsx

# Then update each one following the steps above
```

---

## Need Help?

- Check existing implementations in updated posts (e.g., `ai-automation-guide/page.tsx`)
- Review the full helper library at `src/lib/blog-schema.ts`
- See the comprehensive report at `docs/BLOG_SCHEMA_IMPLEMENTATION_REPORT.md`

---

*Quick Start Guide - Version 1.0 - 2025-10-20*
