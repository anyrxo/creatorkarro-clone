#!/usr/bin/env node

const fs = require('fs');
const glob = require('glob');

console.log('🚀 Applying hybrid fix - use client with simplified approach...');

// Get all blog page files
const blogFiles = glob.sync('src/app/blog/*/page.tsx');

console.log(`Found ${blogFiles.length} blog files to fix`);

blogFiles.forEach(filePath => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Add 'use client' directive at the top if not present
    if (!content.includes("'use client'")) {
      content = `'use client'\n\n${content}`;
    }
    
    // Remove metadata exports completely to avoid the conflict
    // Find the metadata export section and remove it
    const metadataRegex = /\/\/ SEO Metadata[\s\S]*?export const metadata = \{[\s\S]*?\};?\s*$/m;
    content = content.replace(metadataRegex, '');
    
    // Clean up any remaining metadata exports
    content = content.replace(/export const metadata = \{[\s\S]*?\};?\s*$/m, '');
    
    fs.writeFileSync(filePath, content);
    console.log(`  ✅ Applied hybrid fix: ${filePath.split('/').pop()}`);
    
  } catch (error) {
    console.error(`  ❌ Error processing ${filePath}:`, error.message);
  }
});

console.log('\n🎉 Hybrid fix applied - all files are now client components without metadata!');