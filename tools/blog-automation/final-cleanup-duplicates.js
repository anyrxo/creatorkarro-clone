#!/usr/bin/env node

/**
 * FINAL CLEANUP - Remove any remaining duplicates
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

function cleanupDuplicates(content) {
  let cleaned = content;
  
  // Fix duplicate container classes
  cleaned = cleaned.replace(
    /container mx-auto px-4 sm:px-6 lg:px-8 mx-auto px-4 sm:px-6 lg:px-8/g,
    'container mx-auto px-4 sm:px-6 lg:px-8'
  );
  
  // Fix duplicate mx-auto
  cleaned = cleaned.replace(
    /container mx-auto px-4 sm:px-6 lg:px-8 mx-auto/g,
    'container mx-auto px-4 sm:px-6 lg:px-8'
  );
  
  // Fix duplicate px-4
  cleaned = cleaned.replace(
    /mx-auto px-4 sm:px-6 lg:px-8 mx-auto px-4/g,
    'mx-auto px-4 sm:px-6 lg:px-8'
  );
  
  // Fix any escaped slashes
  cleaned = cleaned.replace(/\\\//g, '/');
  
  // Fix any double className attributes
  cleaned = cleaned.replace(
    /className="([^"]*)" className="([^"]*)"/g,
    'className="$1 $2"'
  );
  
  return cleaned;
}

async function processAllBlogs() {
  console.log('🧹 Final Cleanup - Removing Duplicates...\n');
  
  // Process individual blog files
  const pattern = path.join('./src/app/blog', '**/page.tsx');
  const files = glob.sync(pattern);
  
  let fixedCount = 0;
  
  for (const file of files) {
    console.log(`📄 Checking ${path.basename(path.dirname(file))}...`);
    
    try {
      let content = fs.readFileSync(file, 'utf8');
      const original = content;
      
      content = cleanupDuplicates(content);
      
      if (content !== original) {
        fs.writeFileSync(file, content);
        fixedCount++;
        console.log(`   ✅ Fixed duplicates!`);
      } else {
        console.log(`   ✨ Clean!`);
      }
    } catch (error) {
      console.log(`   ❌ Error: ${error.message}`);
    }
  }
  
  console.log(`\n✅ Fixed ${fixedCount} files with duplicates`);
  console.log('🎉 Final cleanup complete!\n');
}

// Run cleanup
processAllBlogs();