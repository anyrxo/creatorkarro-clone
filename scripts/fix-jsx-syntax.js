#!/usr/bin/env node

/**
 * FIX JSX SYNTAX ERRORS IN BLOG FILES
 * Removes markdown remnants and fixes common syntax issues
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

console.log('🔧 FIXING JSX SYNTAX ERRORS IN BLOG FILES...');

// Find all blog page.tsx files
const blogFiles = glob.sync('src/app/blog/*/page.tsx', { cwd: process.cwd() });

console.log(`📁 Found ${blogFiles.length} blog files to check`);

let fixedFiles = 0;
let totalErrors = 0;

blogFiles.forEach(filePath => {
  const fullPath = path.join(process.cwd(), filePath);
  let content = fs.readFileSync(fullPath, 'utf8');
  let hasErrors = false;
  let fileErrors = 0;

  // Fix common JSX syntax errors
  const fixes = [
    // Remove markdown code blocks
    {
      pattern: /```[\s\S]*?```/g,
      replacement: '',
      description: 'Removed markdown code blocks'
    },
    // Remove markdown bold text (**text**)
    {
      pattern: /\*\*([^*]+)\*\*/g,
      replacement: '$1',
      description: 'Removed markdown bold syntax'
    },
    // Remove markdown comments that got mixed in
    {
      pattern: /\*\*Remember:\*\*[\s\S]*?(?=\s*\)\s*})/g,
      replacement: '',
      description: 'Removed markdown instructions'
    },
    // Fix any dangling closing braces/parentheses
    {
      pattern: /\s*\)\s*}\s*\)\s*}/g,
      replacement: '\n  )\n}',
      description: 'Fixed duplicate closing braces'
    }
  ];

  fixes.forEach(fix => {
    if (fix.pattern.test(content)) {
      content = content.replace(fix.pattern, fix.replacement);
      hasErrors = true;
      fileErrors++;
      console.log(`  ✅ ${path.basename(path.dirname(filePath))}: ${fix.description}`);
    }
  });

  // Ensure proper JSX closing
  if (!content.trim().endsWith(')\n}') && !content.trim().endsWith(') }')) {
    const lines = content.split('\n');
    // Find where JSX should end and fix it
    let foundJSXEnd = false;
    for (let i = lines.length - 1; i >= 0; i--) {
      const line = lines[i].trim();
      if (line === ')' && i < lines.length - 1 && lines[i + 1].trim() === '}') {
        foundJSXEnd = true;
        break;
      }
    }
    
    if (!foundJSXEnd) {
      // Remove any trailing content after the last </div>
      const lastDivIndex = content.lastIndexOf('</div>');
      if (lastDivIndex !== -1) {
        const beforeDiv = content.substring(0, lastDivIndex + 6);
        content = beforeDiv + '\n  )\n}';
        hasErrors = true;
        fileErrors++;
        console.log(`  ✅ ${path.basename(path.dirname(filePath))}: Fixed JSX closing`);
      }
    }
  }

  if (hasErrors) {
    fs.writeFileSync(fullPath, content);
    fixedFiles++;
    totalErrors += fileErrors;
  }
});

console.log(`\n✅ JSX SYNTAX FIX COMPLETE:`);
console.log(`- Files checked: ${blogFiles.length}`);
console.log(`- Files fixed: ${fixedFiles}`);
console.log(`- Total errors fixed: ${totalErrors}`);

if (fixedFiles > 0) {
  console.log('\n🎯 All JSX syntax errors have been resolved!');
} else {
  console.log('\n✨ No JSX syntax errors found - all files are clean!');
}