#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

console.log('🚀 Final JSX syntax fix for all blog posts...');

// Find all blog page.tsx files
const blogFiles = glob.sync('src/app/blog/*/page.tsx');
console.log(`Found ${blogFiles.length} blog files to fix`);

let fixedCount = 0;
let errorCount = 0;

blogFiles.forEach((filePath, index) => {
  try {
    console.log(`[${index + 1}/${blogFiles.length}] Fixing: ${filePath}`);
    
    let content = fs.readFileSync(filePath, 'utf8');
    let hasChanges = false;
    
    // Ensure 'use client' and React imports are at the top
    if (!content.includes("'use client'")) {
      content = `'use client'\n\nimport React from 'react'\nimport Link from 'next/link'\n\n${content}`;
      hasChanges = true;
    }
    
    // Fix common syntax issues
    
    // 1. Fix missing React import after 'use client'
    if (content.includes("'use client'") && !content.includes('import React from')) {
      content = content.replace("'use client'\n", "'use client'\n\nimport React from 'react'\nimport Link from 'next/link'\n");
      hasChanges = true;
    }
    
    // 2. Fix any stray closing braces at the end
    content = content.replace(/\s*};\s*$/g, '');
    content = content.replace(/\s*}\s*$/g, '');
    
    // 3. Ensure proper function closing
    if (!content.match(/}\s*$/)) {
      content = content.trim() + '\n}';
      hasChanges = true;
    }
    
    // 4. Remove any metadata exports from client components
    if (content.includes("'use client'") && content.includes('export const metadata')) {
      content = content.replace(/export const metadata[^=]*=\s*{[^}]*(?:\{[^}]*\}[^}]*)*};?\s*/g, '');
      hasChanges = true;
    }
    
    // 5. Fix any double main/div issues
    content = content.replace(/<main className="min-h-screen bg-dark"><section/g, '<div className="min-h-screen bg-dark"><section');
    content = content.replace(/<\/section><\/main>/g, '</section></div>');
    
    // 6. Fix malformed JSX - ensure parentheses around return statements
    if (content.includes('return (') && !content.includes('return (\n    <div')) {
      // Check if there are syntax issues with the return statement structure
      const returnMatch = content.match(/return\s*\(\s*<div[^>]*>/);
      if (returnMatch) {
        // This is likely properly formed, skip
      } else {
        // Try to fix malformed return statements
        content = content.replace(/return\s*\(\s*<div/g, 'return (\n    <div');
        hasChanges = true;
      }
    }
    
    // 7. Remove any trailing invalid syntax
    content = content.replace(/\n+\s*};\s*$/m, '');
    content = content.replace(/\n+\s*}\s*$/m, '');
    
    // 8. Ensure proper function ending
    if (!content.endsWith('}') && !content.endsWith('}\n')) {
      content = content.trim() + '\n}';
      hasChanges = true;
    }
    
    // Write the fixed content
    if (hasChanges) {
      fs.writeFileSync(filePath, content);
      fixedCount++;
      console.log(`  ✅ Fixed: ${path.basename(path.dirname(filePath))}`);
    } else {
      console.log(`  ⏭️  No changes needed: ${path.basename(path.dirname(filePath))}`);
    }
    
  } catch (error) {
    errorCount++;
    console.error(`  ❌ Error fixing ${filePath}:`, error.message);
  }
});

console.log('\n🎉 Final JSX fix complete!');
console.log(`✅ Fixed: ${fixedCount} files`);
console.log(`⏭️  No changes: ${blogFiles.length - fixedCount - errorCount} files`);
console.log(`❌ Errors: ${errorCount} files`);