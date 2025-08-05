// Fix JSX and navigation errors in blog posts
const fs = require('fs')
const path = require('path')

const problematicFiles = [
  'content-creation-with-ai/page.tsx',
  'digital-products-step-by-step/page.tsx', 
  'instagram-algorithm-2025/page.tsx',
  'passive-income-strategies/page.tsx',
  'social-media-growth-hacks/page.tsx'
]

function fixBlogPost(filePath) {
  console.log(`🔧 Fixing ${filePath}...`)
  
  let content = fs.readFileSync(filePath, 'utf8')
  
  // Fix JSX comment error
  content = content.replace(
    /\/\* Content would go here \*\//g,
    '{/* Content would go here */}'
  )
  
  // Add Link import if not present
  if (!content.includes("import Link from 'next/link'")) {
    content = content.replace(
      "import { Metadata } from 'next'",
      "import { Metadata } from 'next'\nimport Link from 'next/link'"
    )
  }
  
  // Fix navigation links - convert <a href to <Link href
  content = content.replace(
    /<a\s+href="([^"]+)"/g,
    '<Link href="$1"'
  )
  
  // Fix closing tags </a> to </Link>
  content = content.replace(
    /<\/a>/g,
    '</Link>'
  )
  
  fs.writeFileSync(filePath, content)
  console.log(`✅ Fixed ${filePath}`)
}

function fixAllBlogPosts() {
  console.log('🚀 FIXING BLOG POST ERRORS')
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
  
  const blogDir = path.join(process.cwd(), 'src/app/blog')
  
  for (const file of problematicFiles) {
    const filePath = path.join(blogDir, file)
    if (fs.existsSync(filePath)) {
      fixBlogPost(filePath)
    } else {
      console.log(`⚠️ File not found: ${filePath}`)
    }
  }
  
  console.log(`\n🎉 BLOG POST FIXES COMPLETE!`)
  console.log(`✅ Fixed JSX comment errors`)
  console.log(`✅ Fixed navigation link errors`)
  console.log(`🚀 All blog posts should now compile successfully!`)
}

if (require.main === module) {
  fixAllBlogPosts()
}

module.exports = { fixAllBlogPosts }