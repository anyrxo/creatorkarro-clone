import fs from 'fs'
import path from 'path'

export interface BlogPost {
  slug: string
  title: string
  description: string
  category: string
  tags: string[]
  date: string
  readTime?: string
}

// Blog post categories for better organization and internal linking
export const BLOG_CATEGORIES = {
  AI_AUTOMATION: 'AI Automation',
  SOCIAL_MEDIA: 'Social Media Growth',
  DIGITAL_PRODUCTS: 'Digital Products',
  INSTAGRAM: 'Instagram Marketing',
  CONTENT_CREATION: 'Content Creation',
  N8N_WORKFLOWS: 'N8N Workflows',
  AI_MODELS: 'AI Models & Tools',
  BUSINESS_AUTOMATION: 'Business Automation',
  MARKETING: 'Marketing Automation',
  YOUTUBE: 'YouTube Growth'
} as const

// Get all blog posts with their metadata
export function getAllBlogPosts(): BlogPost[] {
  const blogDir = path.join(process.cwd(), 'src', 'app', 'blog')

  if (!fs.existsSync(blogDir)) {
    return []
  }

  const entries = fs.readdirSync(blogDir, { withFileTypes: true })
  const blogPosts: BlogPost[] = []

  for (const entry of entries) {
    if (!entry.isDirectory()) continue

    const slug = entry.name
    const pagePath = path.join(blogDir, slug, 'page.tsx')

    if (!fs.existsSync(pagePath)) continue

    // Categorize based on slug patterns
    const category = categorizeBlogPost(slug)
    const tags = generateTags(slug)

    blogPosts.push({
      slug,
      title: slugToTitle(slug),
      description: `Comprehensive guide on ${slugToTitle(slug).toLowerCase()}`,
      category,
      tags,
      date: new Date().toISOString(),
      readTime: '5 min read'
    })
  }

  return blogPosts
}

// Categorize blog post based on slug
function categorizeBlogPost(slug: string): string {
  if (slug.includes('instagram') || slug.includes('ig-')) {
    return BLOG_CATEGORIES.INSTAGRAM
  }
  if (slug.includes('n8n') || slug.includes('workflow') || slug.includes('automation-workflow')) {
    return BLOG_CATEGORIES.N8N_WORKFLOWS
  }
  if (slug.includes('claude') || slug.includes('gpt') || slug.includes('gemini') ||
      slug.includes('deepseek') || slug.includes('llama') || slug.includes('ai-')) {
    return BLOG_CATEGORIES.AI_MODELS
  }
  if (slug.includes('digital-product') || slug.includes('passive-income') || slug.includes('template')) {
    return BLOG_CATEGORIES.DIGITAL_PRODUCTS
  }
  if (slug.includes('youtube') || slug.includes('tiktok') || slug.includes('twitter') ||
      slug.includes('linkedin') || slug.includes('social-media')) {
    return BLOG_CATEGORIES.SOCIAL_MEDIA
  }
  if (slug.includes('content-creation') || slug.includes('comfyui') || slug.includes('ai-image')) {
    return BLOG_CATEGORIES.CONTENT_CREATION
  }
  if (slug.includes('automation') || slug.includes('chatgpt-automation')) {
    return BLOG_CATEGORIES.AI_AUTOMATION
  }
  if (slug.includes('business') || slug.includes('hr-automation') || slug.includes('sales')) {
    return BLOG_CATEGORIES.BUSINESS_AUTOMATION
  }
  if (slug.includes('marketing') || slug.includes('email') || slug.includes('ads')) {
    return BLOG_CATEGORIES.MARKETING
  }

  return BLOG_CATEGORIES.AI_AUTOMATION
}

// Generate tags based on slug
function generateTags(slug: string): string[] {
  const tags: string[] = []

  const tagMap: Record<string, string[]> = {
    'instagram': ['Instagram', 'Social Media', 'Growth'],
    'n8n': ['N8N', 'Automation', 'Workflows'],
    'claude': ['Claude AI', 'AI Models', 'Automation'],
    'gpt': ['ChatGPT', 'AI Models', 'Automation'],
    'gemini': ['Gemini AI', 'Google AI', 'AI Models'],
    'deepseek': ['DeepSeek', 'AI Models', 'Open Source'],
    'llama': ['Llama AI', 'Meta AI', 'Open Source'],
    'youtube': ['YouTube', 'Video Marketing', 'Content'],
    'tiktok': ['TikTok', 'Short Form', 'Viral'],
    'automation': ['Automation', 'AI Tools', 'Productivity'],
    'digital-product': ['Digital Products', 'Passive Income', 'Monetization'],
    'comfyui': ['ComfyUI', 'AI Images', 'Workflows'],
    'ai-influencer': ['AI Influencers', 'Virtual Creators', 'AI'],
    'content': ['Content Creation', 'Marketing', 'Strategy']
  }

  for (const [keyword, keywordTags] of Object.entries(tagMap)) {
    if (slug.includes(keyword)) {
      tags.push(...keywordTags)
    }
  }

  // Remove duplicates
  return [...new Set(tags)]
}

// Convert slug to readable title
function slugToTitle(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

// Get related posts based on category and tags
export function getRelatedPosts(currentSlug: string, limit = 6): BlogPost[] {
  const allPosts = getAllBlogPosts()
  const currentPost = allPosts.find(post => post.slug === currentSlug)

  if (!currentPost) return []

  // Score each post based on similarity
  const scoredPosts = allPosts
    .filter(post => post.slug !== currentSlug)
    .map(post => {
      let score = 0

      // Same category = +10 points
      if (post.category === currentPost.category) {
        score += 10
      }

      // Each matching tag = +5 points
      const matchingTags = post.tags.filter(tag => currentPost.tags.includes(tag))
      score += matchingTags.length * 5

      return { post, score }
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)

  return scoredPosts.map(item => item.post)
}

// Get posts by category
export function getPostsByCategory(category: string): BlogPost[] {
  const allPosts = getAllBlogPosts()
  return allPosts.filter(post => post.category === category)
}

// Get posts by tag
export function getPostsByTag(tag: string): BlogPost[] {
  const allPosts = getAllBlogPosts()
  return allPosts.filter(post => post.tags.includes(tag))
}

// Get all categories with post counts
export function getCategoriesWithCounts(): Array<{ category: string; count: number }> {
  const allPosts = getAllBlogPosts()
  const categoryCounts: Record<string, number> = {}

  for (const post of allPosts) {
    categoryCounts[post.category] = (categoryCounts[post.category] || 0) + 1
  }

  return Object.entries(categoryCounts)
    .map(([category, count]) => ({ category, count }))
    .sort((a, b) => b.count - a.count)
}
