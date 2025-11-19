#!/usr/bin/env node

/**
 * Fix JSX syntax errors in blog and course pages
 * Removes empty lines after 'return (' that cause parsing errors
 */

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

async function fixReturnSyntax() {
  console.log('🔍 Searching for files with JSX syntax issues...\n');

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

      // Pattern: return ( followed by empty line(s) and then <div
      // Fix: Remove empty lines between return ( and <div
      const pattern = /return\s*\(\s*\n\s*\n\s*<div/g;
      if (pattern.test(content)) {
        content = content.replace(/return\s*\(\s*\n\s*\n\s*<div/g, 'return (\n    <div');
        fixedCount++;
        console.log(`✅ Fixed: ${path.relative(process.cwd(), filePath)}`);
      }

      // Also check for return ( followed by single empty line and <div (less common but possible)
      const pattern2 = /return\s*\(\s*\n\s*<div(?!\s*className)/g;
      if (pattern2.test(content) && !originalContent.includes('return (\n    <div')) {
        content = content.replace(/return\s*\(\s*\n\s*<div(?!\s*className)/g, 'return (\n    <div');
        if (content !== originalContent) {
          fixedCount++;
          console.log(`✅ Fixed: ${path.relative(process.cwd(), filePath)}`);
        }
      }

      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf-8');
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

fixReturnSyntax().catch(console.error);

