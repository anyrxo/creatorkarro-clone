// 🚀 UPDATE BLOG DATA STRUCTURE - INTEGRATE ALL GENERATED POSTS
// Automatically scan and register all generated blog posts in the data structure

const fs = require('fs')
const path = require('path')

// Helper function to extract metadata from a blog page file
function extractBlogMetadata(filePath, slug) {
  try {
    const content = fs.readFileSync(filePath, 'utf8')
    
    // Extract title from the component export or metadata
    const titleMatch = content.match(/title:\s*["']([^"']+)["']/) || 
                      content.match(/className="[^"]*">([^<]+)<\/h1>/)
    const title = titleMatch ? titleMatch[1].replace(' | IImagined.ai', '') : slug.replace(/-/g, ' ')
    
    // Extract description from metadata
    const descMatch = content.match(/description:\s*["']([^"']+)["']/)
    const description = descMatch ? descMatch[1] : `Expert guide covering ${slug.replace(/-/g, ' ')}. Learn advanced strategies and proven techniques from IImagined.ai's professional team.`
    
    // Extract category from metadata or infer from content
    const categoryMatch = content.match(/category:\s*["']([^"']+)["']/)
    let category = 'AI & Machine Learning' // default
    
    if (categoryMatch) {
      category = categoryMatch[1]
    } else {
      // Infer category from slug/title
      const slugLower = slug.toLowerCase()
      if (slugLower.includes('instagram')) category = 'Instagram Marketing'
      else if (slugLower.includes('digital') || slugLower.includes('product')) category = 'Digital Products'
      else if (slugLower.includes('n8n') || slugLower.includes('automation') || slugLower.includes('workflow')) category = 'Automation'
      else if (slugLower.includes('ai') || slugLower.includes('chatgpt') || slugLower.includes('claude') || slugLower.includes('gemini')) category = 'AI & Machine Learning'
      else if (slugLower.includes('comfyui') || slugLower.includes('image')) category = 'AI Tools'
      else if (slugLower.includes('youtube') || slugLower.includes('tiktok') || slugLower.includes('social')) category = 'Social Media'
      else if (slugLower.includes('business') || slugLower.includes('monetiz') || slugLower.includes('income')) category = 'Business Strategy'
    }
    
    // Extract keywords/tags from metadata or infer
    const keywordsMatch = content.match(/keywords:\s*(\[[^\]]+\])/)
    let tags = []
    if (keywordsMatch) {
      try {
        const keywordsArray = JSON.parse(keywordsMatch[1])
        tags = keywordsArray.slice(0, 3) // Take first 3 keywords as tags
      } catch (e) {
        tags = slug.split('-').slice(0, 3)
      }
    } else {
      tags = slug.split('-').slice(0, 3)
    }
    
    // Generate date - extract from file if exists, otherwise use creation time
    const dateMatch = content.match(/dateTime="([^"]+)"/) || content.match(/datePublished":\s*"([^"]+)"/)
    let date = '2025-08-05' // default
    if (dateMatch) {
      date = dateMatch[1].split('T')[0]
    } else {
      try {
        const stats = fs.statSync(filePath)
        date = stats.birthtime.toISOString().split('T')[0]
      } catch (e) {
        // Use random recent date for variety
        const randomDays = Math.floor(Math.random() * 30)
        const dateObj = new Date()
        dateObj.setDate(dateObj.getDate() - randomDays)
        date = dateObj.toISOString().split('T')[0]
      }
    }
    
    // Calculate read time based on content length
    const contentLength = content.length
    const readTime = Math.max(3, Math.min(15, Math.ceil(contentLength / 1000)))
    
    // Determine if featured (random selection of ~10% of posts)
    const featured = Math.random() < 0.1
    
    return {
      title: title.charAt(0).toUpperCase() + title.slice(1),
      slug,
      description: description.length > 160 ? description.substring(0, 157) + '...' : description,
      category,
      date,
      readTime,
      featured,
      tags
    }
  } catch (error) {
    console.error(`Error extracting metadata from ${filePath}:`, error.message)
    
    // Return fallback metadata
    return {
      title: slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
      slug,
      description: `Expert guide covering ${slug.replace(/-/g, ' ')}. Learn advanced strategies and proven techniques from IImagined.ai's professional team.`,
      category: 'AI & Machine Learning',
      date: '2025-08-05',
      readTime: 5,
      featured: false,
      tags: slug.split('-').slice(0, 3)
    }
  }
}

async function updateBlogDataStructure() {
  console.log('🚀 UPDATING BLOG DATA STRUCTURE')
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
  
  const blogDir = path.join(process.cwd(), 'src/app/blog')
  const dataFilePath = path.join(process.cwd(), 'src/data/blog-posts.ts')
  
  // Get all blog directories (excluding [slug] dynamic route)
  const blogEntries = fs.readdirSync(blogDir)
    .filter(entry => {
      const entryPath = path.join(blogDir, entry)
      return fs.statSync(entryPath).isDirectory() && 
             entry !== '[slug]' && 
             fs.existsSync(path.join(entryPath, 'page.tsx'))
    })
    .sort()
  
  console.log(`📊 Found ${blogEntries.length} generated blog posts`)
  
  // Extract metadata from each blog post
  const blogPosts = []
  let idCounter = 1
  
  for (const slug of blogEntries) {
    const filePath = path.join(blogDir, slug, 'page.tsx')
    const metadata = extractBlogMetadata(filePath, slug)
    
    blogPosts.push({
      id: idCounter++,
      ...metadata
    })
    
    console.log(`  ✅ Processed: ${metadata.title}`)
  }
  
  // Extract categories and featured posts
  const categories = [...new Set(blogPosts.map(post => post.category))].sort()
  const featuredPosts = blogPosts.filter(post => post.featured)
  const allTags = [...new Set(blogPosts.flatMap(post => post.tags))].sort()
  
  console.log(`📂 Categories found: ${categories.length}`)
  console.log(`⭐ Featured posts: ${featuredPosts.length}`)
  console.log(`🏷️ Unique tags: ${allTags.length}`)
  
  // Generate the new blog-posts.ts file
  const newContent = `// Auto-generated blog posts data
// Generated on: ${new Date().toISOString()}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  description: string;
  category: string;
  date: string;
  readTime: number;
  featured: boolean;
  tags: string[];
}

export const allBlogPosts: BlogPost[] = ${JSON.stringify(blogPosts, null, 2)};

export const categories = ${JSON.stringify(categories, null, 2)};

export const featuredPosts = allBlogPosts.filter(post => post.featured);

export const allTags = ${JSON.stringify(allTags, null, 2)};

export default allBlogPosts;
`

  // Write the updated file
  fs.writeFileSync(dataFilePath, newContent)
  
  console.log(`\n🎉 BLOG DATA STRUCTURE UPDATED SUCCESSFULLY!`)
  console.log(`📝 Generated data for ${blogPosts.length} blog posts`)
  console.log(`📂 ${categories.length} categories: ${categories.join(', ')}`)
  console.log(`⭐ ${featuredPosts.length} featured posts randomly selected`)
  console.log(`🏷️ ${allTags.length} unique tags generated`)
  console.log(`💾 Updated file: ${dataFilePath}`)
  console.log(`\n🚀 All generated blogs will now appear in /blog beautifully!`)
  console.log(`👑 TOXIC SEO DOMINATION STRATEGY: COMPLETE BLOG INTEGRATION ACHIEVED`)
}

// Execute if run directly
if (require.main === module) {
  updateBlogDataStructure().catch(console.error)
}

module.exports = { updateBlogDataStructure }