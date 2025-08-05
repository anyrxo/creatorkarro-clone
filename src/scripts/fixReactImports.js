// Add React imports to blog posts that are missing them
const fs = require('fs')
const path = require('path')

const problematicFiles = [
  'ai-automation-beginners-guide/page.tsx',
  'content-creation-with-ai/page.tsx',
  'digital-products-step-by-step/page.tsx', 
  'instagram-algorithm-2025/page.tsx',
  'passive-income-strategies/page.tsx',
  'social-media-growth-hacks/page.tsx'
]

function addReactImport(filePath) {
  console.log(`🔧 Adding React import to ${filePath}...`)
  
  let content = fs.readFileSync(filePath, 'utf8')
  
  // Check if React import already exists
  if (content.includes("import React from 'react'")) {
    console.log(`✅ React import already exists in ${filePath}`)
    return
  }
  
  // Add React import at the top
  content = content.replace(
    "import { Metadata } from 'next'",
    "import React from 'react'\nimport { Metadata } from 'next'"
  )
  
  fs.writeFileSync(filePath, content)
  console.log(`✅ Added React import to ${filePath}`)
}

function fixAllReactImports() {
  console.log('🚀 ADDING REACT IMPORTS TO BLOG POSTS')
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
  
  const blogDir = path.join(process.cwd(), 'src/app/blog')
  
  for (const file of problematicFiles) {
    const filePath = path.join(blogDir, file)
    if (fs.existsSync(filePath)) {
      addReactImport(filePath)
    } else {
      console.log(`⚠️ File not found: ${filePath}`)
    }
  }
  
  console.log(`\n🎉 REACT IMPORT FIXES COMPLETE!`)
  console.log(`✅ Added React imports to all blog posts`)
  console.log(`🚀 All blog posts should now compile successfully!`)
}

if (require.main === module) {
  fixAllReactImports()
}

module.exports = { fixAllReactImports }