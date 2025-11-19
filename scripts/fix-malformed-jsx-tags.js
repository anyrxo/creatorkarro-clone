#!/usr/bin/env node

/**
 * Fix malformed JSX tags in blog and course pages
 * Removes empty lines between opening tag and attributes
 */

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

async function fixMalformedTags() {
  console.log('🔍 Searching for files with malformed JSX tags...\n');

  // Find all page.tsx files in blog and app directories
  const files = await glob('src/app/**/page.tsx', {
    cwd: process.cwd(),
    absolute: true
  });

  let fixedCount = 0;
  let checkedCount = 0;

  for (const filePath of files) {
    try {
      let content = fs.readFileSync(filePath, 'utf-8');
      const originalContent = content;

      // Fix malformed div tags: <div\n\n            className="..." to <div className="..."
      content = content.replace(/<div\s*\n\s*\n\s+className=/g, '<div className=');
      
      // Fix malformed section tags: <section\n\n        className="..." to <section className="..."
      content = content.replace(/<section\s*\n\s*\n\s+className=/g, '<section className=');
      
      // Fix any other malformed opening tags with empty lines before attributes
      content = content.replace(/<(\w+)\s*\n\s*\n\s+className=/g, '<$1 className=');

      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf-8');
        fixedCount++;
        console.log(`✅ Fixed: ${path.relative(process.cwd(), filePath)}`);
      }

      checkedCount++;
    } catch (error) {
      console.error(`❌ Error processing ${filePath}:`, error.message);
    }
  }

  console.log(`\n📊 Summary:`);
  console.log(`   Files checked: ${checkedCount}`);
  console.log(`   Files fixed: ${fixedCount}`);
  console.log(`\n✅ Done!`);
}

fixMalformedTags().catch(console.error);

