#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

console.log('🚀 Fixing metadata exports from client components...');

// Find all blog page.tsx files
const blogFiles = glob.sync('src/app/blog/*/page.tsx');
console.log(`Found ${blogFiles.length} blog files to check`);

let fixedCount = 0;

blogFiles.forEach((filePath, index) => {
  try {
    console.log(`[${index + 1}/${blogFiles.length}] Checking: ${filePath}`);
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has both 'use client' and metadata export
    if (content.includes("'use client'") && content.includes('export const metadata')) {
      console.log(`  🔧 Removing metadata export from: ${path.basename(path.dirname(filePath))}`);
      
      // Remove entire metadata export block
      content = content.replace(/export const metadata[^=]*=\s*{[^}]*(?:\{[^}]*\}[^}]*)*};?\s*/g, '');
      
      // Clean up any trailing export blocks or empty lines
      content = content.replace(/\n\s*\n\s*$/m, '\n');
      
      fs.writeFileSync(filePath, content);
      fixedCount++;
      console.log(`  ✅ Fixed: ${path.basename(path.dirname(filePath))}`);
    } else {
      console.log(`  ⏭️  No metadata conflict: ${path.basename(path.dirname(filePath))}`);
    }
    
  } catch (error) {
    console.error(`  ❌ Error fixing ${filePath}:`, error.message);
  }
});

console.log('\n🎉 Metadata fix complete!');
console.log(`✅ Fixed: ${fixedCount} files`);
console.log(`⏭️  No conflicts: ${blogFiles.length - fixedCount} files`);