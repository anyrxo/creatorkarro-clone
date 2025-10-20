#!/usr/bin/env node

const fs = require('fs');
const glob = require('glob');

console.log('🚀 Adding use client directive to all blog files that need it...');

// Get all blog page files
const blogFiles = glob.sync('src/app/blog/*/page.tsx');

console.log(`Found ${blogFiles.length} blog files to check`);

blogFiles.forEach(filePath => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file already has 'use client'
    if (!content.includes("'use client'")) {
      // Add 'use client' at the top
      content = `'use client'\n\n${content}`;
      
      fs.writeFileSync(filePath, content);
      console.log(`  ✅ Added 'use client' to: ${filePath.split('/').pop()}`);
    } else {
      console.log(`  ⏩ Already has 'use client': ${filePath.split('/').pop()}`);
    }
    
  } catch (error) {
    console.error(`  ❌ Error processing ${filePath}:`, error.message);
  }
});

// Also fix the alpha-evolve-ai-business-empire string issue
console.log('\nFixing alpha-evolve-ai-business-empire string escaping...');
const alphaFilePath = 'src/app/blog/alpha-evolve-ai-business-empire/page.tsx';
try {
  let content = fs.readFileSync(alphaFilePath, 'utf8');
  content = content.replace(
    /description: 'How Google's Alpha Evolve reveals/g,
    "description: 'How Google\\'s Alpha Evolve reveals"
  );
  fs.writeFileSync(alphaFilePath, content);
  console.log('  ✅ Fixed alpha-evolve string escaping');
} catch (error) {
  console.log('  ⚠️  Warning:', error.message);
}

console.log('\n🎉 Use client directives added!');