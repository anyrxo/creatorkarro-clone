#!/usr/bin/env node

const fs = require('fs');
const glob = require('glob');

console.log('🔧 Fixing "use client" directive positioning issues...');

// Get all blog files
const blogFiles = glob.sync('src/app/blog/*/page.tsx');
let fixedFiles = 0;

blogFiles.forEach(filePath => {
  try {
    const slug = filePath.split('/')[3];
    
    // Skip dynamic route
    if (slug === '[slug]') {
      return;
    }
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if 'use client' appears after other content
    if (content.includes("'use client'") && !content.startsWith("'use client'")) {
      console.log(`  🔧 Fixing ${slug}...`);
      
      // Remove 'use client' from wherever it is
      content = content.replace(/'use client';\n?/g, '');
      content = content.replace(/'use client'\n?/g, '');
      
      // Since we're exporting metadata, we should NOT have 'use client' at all
      // Metadata exports only work in server components
      
      fs.writeFileSync(filePath, content);
      fixedFiles++;
    }
    
  } catch (error) {
    console.error(`  ❌ Error fixing ${filePath}: ${error.message}`);
  }
});

console.log(`\n✅ Fixed ${fixedFiles} files by removing 'use client' directives`);
console.log('📝 Note: Removed "use client" since metadata exports require server components');