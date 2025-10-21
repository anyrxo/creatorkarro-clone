# Related Posts Integration Guide

## Overview
This document shows how to integrate the new RelatedPosts component into blog post pages to improve internal linking.

## Components Created

1. **RelatedPosts Component** (`src/components/blog/RelatedPosts.tsx`)
   - Displays 6 dynamically selected related posts
   - Uses category and tag matching algorithm
   - Responsive grid layout

2. **CategoryLinks Component** (`src/components/blog/CategoryLinks.tsx`)
   - Shows 4 posts from the same category
   - Provides additional internal linking

3. **Blog Metadata System** (`src/lib/blog-metadata.ts`)
   - Categorizes all 154 blog posts into 10 categories
   - Generates relevant tags automatically
   - Provides related post matching algorithm

## Integration Example

### Add to existing blog post template:

```tsx
import RelatedPosts from '@/components/blog/RelatedPosts'
import CategoryLinks from '@/components/blog/CategoryLinks'
import { getAllBlogPosts } from '@/lib/blog-metadata'

export default function BlogPost() {
  const slug = 'instagram-growth-2025' // Your post slug

  // Get current post metadata
  const allPosts = getAllBlogPosts()
  const currentPost = allPosts.find(post => post.slug === slug)

  return (
    <article>
      {/* Your existing blog content */}

      {/* Add Category Links in sidebar or after intro */}
      {currentPost && (
        <CategoryLinks currentCategory={currentPost.category} />
      )}

      {/* Add Related Posts at the end of the article */}
      <RelatedPosts currentSlug={slug} limit={6} />
    </article>
  )
}
```

## Categories

The system automatically categorizes posts into:

1. **AI Automation** (46 posts)
2. **AI Models & Tools** (46 posts) - Claude, GPT, Gemini, DeepSeek, Llama
3. **N8N Workflows** (17 posts)
4. **Instagram Marketing** (15 posts)
5. **Digital Products** (13 posts)
6. **Content Creation** (8 posts)
7. **Social Media Growth** (6 posts)
8. **Business Automation** (2 posts)
9. **Marketing Automation** (1 post)
10. **YouTube Growth**

## Matching Algorithm

The `getRelatedPosts()` function scores posts based on:
- Same category: +10 points
- Each matching tag: +5 points
- Returns top 6 highest scoring posts

## SEO Benefits

### Before Integration:
- 308 total internal links (2 per page, hardcoded)
- 1.3% internal linking coverage
- 13% sitemap coverage (20/155 posts)

### After Integration:
- 1,540 total internal links (10 per page, dynamic)
- 6.5% internal linking coverage
- 100% sitemap coverage (154/154 posts)

### Improvements:
- ✅ 400% increase in internal links
- ✅ 5.2% increase in linking coverage
- ✅ 670% increase in sitemap coverage

## Next Steps

1. **Integrate into blog template**: Add RelatedPosts to your blog post layout
2. **Test on a few posts**: Verify the related posts make sense
3. **Deploy**: Roll out to all blog posts
4. **Monitor**: Track internal linking metrics in Google Search Console

## Example Output

For a post about "Instagram Growth 2025":

**Related Posts** (automatically selected):
1. Instagram Monetization Guide
2. Instagram Reels Strategy
3. Social Media Automation
4. TikTok Growth Hacks
5. Content Creation with AI
6. Viral Carousel Guide

**Category Links** (Instagram Marketing):
1. Instagram Mistakes Lessons
2. 500K Followers Journey
3. Instagram Ignited Success Stories
4. Instagram Automation Tips

## API Reference

### getAllBlogPosts()
Returns array of all blog posts with metadata.

### getRelatedPosts(slug, limit)
- `slug`: Current post slug
- `limit`: Number of related posts to return (default: 6)
- Returns: Array of BlogPost objects

### getPostsByCategory(category)
Returns all posts in a specific category.

### getPostsByTag(tag)
Returns all posts with a specific tag.

### getCategoriesWithCounts()
Returns category statistics for analytics.
