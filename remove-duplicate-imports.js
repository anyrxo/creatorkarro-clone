#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

console.log('🚀 Removing duplicate imports...');

// Find all blog page.tsx files
const blogFiles = glob.sync('src/app/blog/*/page.tsx');
console.log(`Found ${blogFiles.length} blog files to fix`);

let fixedCount = 0;

blogFiles.forEach((filePath, index) => {
  try {
    console.log(`[${index + 1}/${blogFiles.length}] Fixing: ${filePath}`);
    
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Remove duplicate consecutive Link imports
    content = content.replace(/import Link from 'next\/link'\s*\nimport Link from 'next\/link'/g, "import Link from 'next/link'");
    
    // Remove duplicate consecutive React imports
    content = content.replace(/import React from 'react'\s*\nimport React from 'react'/g, "import React from 'react'");
    
    // If changes were made, write the file
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      fixedCount++;
      console.log(`  ✅ Fixed: ${path.basename(path.dirname(filePath))}`);
    } else {
      console.log(`  ⏭️  No duplicates: ${path.basename(path.dirname(filePath))}`);
    }
    
  } catch (error) {
    console.error(`  ❌ Error fixing ${filePath}:`, error.message);
  }
});

console.log('\n🎉 Duplicate import removal complete!');
console.log(`✅ Fixed: ${fixedCount} files`);