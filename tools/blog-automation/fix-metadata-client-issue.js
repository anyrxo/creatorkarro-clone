#!/usr/bin/env node

const fs = require('fs');
const glob = require('glob');

console.log('🔧 Fixing client component metadata export issue...');

// Get all blog files that were just updated
const blogFiles = [
  'src/app/blog/digital-products-ideas-2025/page.tsx',
  'src/app/blog/digital-products-that-sell/page.tsx', 
  'src/app/blog/instagram-growth-2025/page.tsx',
  'src/app/blog/passive-income-blueprint/page.tsx',
  'src/app/blog/cursor-ai-coding/page.tsx',
  'src/app/blog/windsurf-ai-coding/page.tsx',
  'src/app/blog/composer-agent-code-llm-full-stack/page.tsx'
];

let fixedFiles = 0;

blogFiles.forEach(filePath => {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`  ⏭️  File doesn't exist: ${filePath}`);
      return;
    }
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove 'use client' directive since we're exporting metadata
    if (content.includes("'use client'")) {
      content = content.replace("'use client'\n\n", '');
      
      fs.writeFileSync(filePath, content);
      fixedFiles++;
      
      const slug = filePath.split('/')[3];
      console.log(`  ✅ Removed 'use client' from ${slug}`);
    } else {
      console.log(`  ⏭️  No 'use client' found in ${filePath.split('/')[3]}`);
    }
    
  } catch (error) {
    console.error(`  ❌ Error processing ${filePath}: ${error.message}`);
  }
});

console.log(`\n🎉 Fixed ${fixedFiles} files by removing 'use client' directive!`);
console.log('✅ All blog pages are now server components with proper SEO metadata exports');