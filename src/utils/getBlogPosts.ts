import fs from 'fs'
import path from 'path'

export interface BlogPost {
  title: string
  category: string
  categoryColor: string
  excerpt: string
  description: string
  readTime: string
  date: string
  slug: string
  keywords: string[]
}

export interface NewsArticle {
  title: string
  category: string
  categoryColor: string
  excerpt: string
  description: string
  readTime: string
  date: string
  slug: string
  keywords: string[]
}

// Helper function to extract metadata from layout.tsx files
function extractMetadataFromLayout(layoutPath: string): Partial<BlogPost> {
  try {
    const content = fs.readFileSync(layoutPath, 'utf8')
    
    // Extract title
    const titleMatch = content.match(/title:\s*['"`]([^'"`]+)['"`]/)
    const title = titleMatch ? titleMatch[1].replace(/\s*\|\s*IImagined\.ai$/, '') : ''
    
    // Extract description
    const descMatch = content.match(/description:\s*['"`]([^'"`]+)['"`]/)
    const description = descMatch ? descMatch[1] : ''
    
    // Extract keywords
    const keywordsMatch = content.match(/keywords:\s*\[([\s\S]*?)\]/)
    let keywords: string[] = []
    if (keywordsMatch) {
      const keywordsStr = keywordsMatch[1]
      keywords = keywordsStr.split(',').map(k => k.trim().replace(/['"`]/g, ''))
    }
    
    return {
      title,
      description,
      keywords
    }
  } catch (error) {
    console.warn(`Could not read layout for ${layoutPath}:`, error)
    return {}
  }
}

// Helper function to determine category and color based on slug
function getCategoryInfo(slug: string): { category: string; categoryColor: string } {
  // AI and Tech categories
  if (slug.includes('ai-') || slug.includes('gpt') || slug.includes('claude') || slug.includes('gemini') || slug.includes('deepseek') || slug.includes('llama')) {
    return { category: 'AI TOOLS', categoryColor: 'blue' }
  }
  
  // Automation categories
  if (slug.includes('automation') || slug.includes('bot') || slug.includes('workflow') || slug.includes('zapier') || slug.includes('n8n')) {
    return { category: 'AUTOMATION', categoryColor: 'purple' }
  }
  
  // Marketing categories
  if (slug.includes('marketing') || slug.includes('instagram') || slug.includes('tiktok') || slug.includes('pinterest') || slug.includes('telegram') || slug.includes('social-media')) {
    return { category: 'MARKETING', categoryColor: 'pink' }
  }
  
  // Business categories
  if (slug.includes('business') || slug.includes('revenue') || slug.includes('saas') || slug.includes('monetization') || slug.includes('shopify') || slug.includes('dropshipping')) {
    return { category: 'BUSINESS', categoryColor: 'green' }
  }
  
  // Development categories
  if (slug.includes('coding') || slug.includes('development') || slug.includes('devops') || slug.includes('windsurf') || slug.includes('cursor') || slug.includes('code')) {
    return { category: 'DEVELOPMENT', categoryColor: 'cyan' }
  }
  
  // Default
  return { category: 'GUIDE', categoryColor: 'gray' }
}

// Helper function to estimate read time
function estimateReadTime(title: string, description: string): string {
  // Estimate based on title and description length
  const words = (title + ' ' + description).split(' ').length
  const readTime = Math.max(8, Math.ceil(words / 10)) // Minimum 8 minutes, roughly 10 words per minute reading estimate
  return `${readTime} min`
}

// Helper function to format date
function formatDate(slug: string): string {
  // Use current date for new posts, or try to infer from content
  return new Date().toISOString().split('T')[0]
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const blogDir = path.join(process.cwd(), 'src/app/blog')
  
  try {
    const entries = fs.readdirSync(blogDir, { withFileTypes: true })
    const blogPosts: BlogPost[] = []
    
    for (const entry of entries) {
      if (entry.isDirectory() && entry.name !== 'page.tsx') {
        const slug = entry.name
        const postDir = path.join(blogDir, slug)
        const layoutPath = path.join(postDir, 'layout.tsx')
        const pagePath = path.join(postDir, 'page.tsx')
        
        // Skip if no page.tsx exists
        if (!fs.existsSync(pagePath)) continue
        
        // Extract metadata from layout.tsx
        const metadata = extractMetadataFromLayout(layoutPath)
        
        // Generate category info
        const categoryInfo = getCategoryInfo(slug)
        
        // Create blog post object
        const blogPost: BlogPost = {
          title: metadata.title || slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
          category: categoryInfo.category,
          categoryColor: categoryInfo.categoryColor,
          excerpt: metadata.description || `Discover comprehensive insights about ${slug.replace(/-/g, ' ')}.`,
          description: metadata.description || `Complete guide to ${slug.replace(/-/g, ' ')} with expert strategies and proven techniques.`,
          readTime: estimateReadTime(metadata.title || '', metadata.description || ''),
          date: formatDate(slug),
          slug: slug,
          keywords: metadata.keywords || [slug.replace(/-/g, ' ')]
        }
        
        blogPosts.push(blogPost)
      }
    }
    
    // Sort by date (newest first)
    return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    
  } catch (error) {
    console.error('Error reading blog posts:', error)
    return []
  }
}

export async function getAllNewsArticles(): Promise<NewsArticle[]> {
  // For now, return static news articles, but this could be made dynamic too
  return [
    {
      title: "Telegram Bot Monetization: The Ultimate Guide to Automated Revenue Generation",
      category: "MARKETING",
      categoryColor: "red",
      excerpt: "Discover how successful creators earn $5K-50K monthly with Telegram bot monetization. Complete guide covering payment processing, subscriber psychology, and proven revenue strategies.",
      description: "Comprehensive guide to Telegram bot monetization with real case studies, advanced tools, and step-by-step implementation strategies.",
      readTime: "18 min",
      date: "2025-08-02",
      slug: "telegram-bot-monetization",
      keywords: ["telegram bot monetization", "content creator income", "automation revenue", "subscription business", "digital marketing"]
    }
    // Add more news articles as needed
  ]
}