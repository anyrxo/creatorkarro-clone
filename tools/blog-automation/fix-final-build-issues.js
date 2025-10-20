#!/usr/bin/env node

const fs = require('fs');
const glob = require('glob');

console.log('🚀 Fixing final build issues: duplicate imports and types...');

// Get all blog files
const blogFiles = glob.sync('src/app/blog/*/page.tsx');

let fixedFiles = 0;

blogFiles.forEach(filePath => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix duplicate Link imports
    const linkImportMatches = content.match(/import Link from 'next\/link'/g);
    if (linkImportMatches && linkImportMatches.length > 1) {
      // Keep only the first import and remove duplicates
      content = content.replace(/import Link from 'next\/link'\n/g, '');
      content = content.replace(/import React from 'react'\n/, "import React from 'react'\nimport Link from 'next/link'\n");
      modified = true;
    }
    
    // Fix duplicate Image imports
    const imageImportMatches = content.match(/import Image from 'next\/image'/g);
    if (imageImportMatches && imageImportMatches.length > 1) {
      content = content.replace(/import Image from 'next\/image'\n/g, '');
      content = content.replace(/import Link from 'next\/link'\n/, "import Link from 'next/link'\nimport Image from 'next/image'\n");
      modified = true;
    }
    
    // Fix any other duplicate imports
    const lines = content.split('\n');
    const seenImports = new Set();
    const cleanedLines = [];
    
    for (const line of lines) {
      if (line.startsWith('import ')) {
        if (!seenImports.has(line)) {
          seenImports.add(line);
          cleanedLines.push(line);
        } else {
          modified = true; // Skip duplicate
        }
      } else {
        cleanedLines.push(line);
      }
    }
    
    if (modified) {
      content = cleanedLines.join('\n');
      fs.writeFileSync(filePath, content);
      fixedFiles++;
      console.log(`  ✅ Fixed duplicates in ${filePath.split('/').slice(-2).join('/')}`);
    }
    
  } catch (error) {
    console.error(`  ❌ Error processing ${filePath}: ${error.message}`);
  }
});

// Fix the [slug] page async issue
const slugPagePath = 'src/app/blog/[slug]/page.tsx';
try {
  let content = fs.readFileSync(slugPagePath, 'utf8');
  
  // Remove 'use client' directive for async server component
  content = content.replace("'use client'\n\n", '');
  
  fs.writeFileSync(slugPagePath, content);
  console.log('  ✅ Fixed [slug] page async client component issue');
} catch (error) {
  console.error(`  ❌ Error fixing slug page: ${error.message}`);
}

console.log(`\n🎉 Fixed duplicate imports in ${fixedFiles} files and final type issues!`);