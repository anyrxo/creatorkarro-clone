#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

console.log('🚀 Starting bulk fix for ALL 104 blog posts...');

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
    
    // 1. Add 'use client' and React imports if not present
    if (!content.includes("'use client'")) {
      content = `'use client'\n\nimport React from 'react'\nimport Link from 'next/link'\n\n${content}`;
      hasChanges = true;
    }
    
    // 2. Fix main tags to div tags
    if (content.includes('<main className="min-h-screen bg-dark">')) {
      content = content.replace(/<main className="min-h-screen bg-dark">/g, '<div className="min-h-screen bg-dark">');
      content = content.replace(/<\/main>/g, '</div>');
      hasChanges = true;
    }
    
    // 3. Remove metadata exports from client components
    if (content.includes("'use client'") && content.includes('export const metadata')) {
      content = content.replace(/\/\/\s*SEO Metadata Export[\s\S]*?export const metadata[\s\S]*?};?\s*$/m, '');
      hasChanges = true;
    }
    
    // 4. Fix <a> tags to <Link> components (but preserve external links)
    content = content.replace(/<a href="#([^"]*)"([^>]*)>/g, '<Link href="#$1"$2>');
    content = content.replace(/<a href="\/([^"]*)"([^>]*)>/g, '<Link href="/$1"$2>');
    content = content.replace(/<\/a>/g, '</Link>');
    
    // 5. Fix any template literal issues
    content = content.replace(/`([^`]*\$\{[^}]*\}[^`]*)`/g, (match) => {
      // Convert template literals to string concatenation
      return match.replace(/`/g, '"').replace(/\$\{([^}]*)\}/g, '" + $1 + "');
    });
    
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

console.log('\n🎉 Bulk fix complete!');
console.log(`✅ Fixed: ${fixedCount} files`);
console.log(`⏭️  No changes: ${blogFiles.length - fixedCount - errorCount} files`);
console.log(`❌ Errors: ${errorCount} files`);