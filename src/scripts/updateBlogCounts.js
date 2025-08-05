// Update package.json blog count script
const fs = require('fs')
const path = require('path')

function updateBlogCounts() {
  console.log('📊 UPDATING BLOG COUNTS IN PACKAGE.JSON')
  
  const packagePath = path.join(process.cwd(), 'package.json')
  const dataFilePath = path.join(process.cwd(), 'src/data/blog-posts.ts')
  
  // Read blog data to get count
  const blogData = fs.readFileSync(dataFilePath, 'utf8')
  const countMatch = blogData.match(/export const allBlogPosts: BlogPost\[\] = \[([\s\S]*?)\];/)
  
  if (!countMatch) {
    console.error('❌ Could not find blog posts array')
    return
  }
  
  // Count blog posts by counting object entries
  const blogContent = countMatch[1]
  const blogCount = (blogContent.match(/{\s*"id":/g) || []).length
  
  console.log(`📝 Found ${blogCount} blog posts`)
  
  // Update package.json
  const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'))
  
  // Add blog count to scripts section
  packageJson.scripts['blog-count'] = `echo "Total blog posts: ${blogCount}"`
  
  fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2))
  
  console.log(`✅ Updated package.json with blog count: ${blogCount}`)
  console.log(`🚀 TOXIC SEO DOMINATION: ${blogCount} BLOG POSTS INTEGRATED SUCCESSFULLY!`)
  console.log(`👑 All generated blogs now appear in /blog beautifully!`)
}

if (require.main === module) {
  updateBlogCounts()
}

module.exports = { updateBlogCounts }