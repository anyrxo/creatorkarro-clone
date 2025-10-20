#!/usr/bin/env node

const fs = require('fs');
const glob = require('glob');

console.log('🚀 Converting blog files to server components with metadata...');

// Get all blog page files
const blogFiles = glob.sync('src/app/blog/*/page.tsx');

console.log(`Found ${blogFiles.length} blog files to convert`);

blogFiles.forEach(filePath => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has metadata export
    if (content.includes('export const metadata')) {
      // Remove 'use client' directive to allow metadata export
      content = content.replace(/'use client'\s*\n\s*/g, '');
      
      // Make sure imports are preserved
      if (!content.includes("import React from 'react'")) {
        const importMatch = content.match(/^(import [^;]+;?\s*)+/m);
        if (importMatch) {
          content = content.replace(importMatch[0], `import React from 'react'\n${importMatch[0]}`);
        } else {
          content = `import React from 'react'\nimport Link from 'next/link'\n\n${content}`;
        }
      }
      
      if (!content.includes("import Link from 'next/link'") && content.includes('<Link')) {
        content = content.replace("import React from 'react'", "import React from 'react'\nimport Link from 'next/link'");
      }
      
      fs.writeFileSync(filePath, content);
      console.log(`  ✅ Converted to server component: ${filePath.split('/').pop()}`);
    } else {
      console.log(`  ⏩ No metadata export: ${filePath.split('/').pop()}`);
    }
    
  } catch (error) {
    console.error(`  ❌ Error processing ${filePath}:`, error.message);
  }
});

console.log('\n🎉 Blog files converted to server components!');