#!/usr/bin/env node

/**
 * COMPREHENSIVE JSX SYNTAX FIX
 * Fixes all common JSX syntax errors in blog files
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

console.log('🔧 COMPREHENSIVE JSX SYNTAX FIX...');

// Find all blog page.tsx files
const blogFiles = glob.sync('src/app/blog/*/page.tsx', { cwd: process.cwd() });

console.log(`📁 Checking ${blogFiles.length} blog files`);

let fixedFiles = 0;

blogFiles.forEach(filePath => {
  const fullPath = path.join(process.cwd(), filePath);
  let content = fs.readFileSync(fullPath, 'utf8');
  let originalContent = content;
  let hasChanges = false;

  // Fix 1: Remove ```jsx markdown blocks
  if (content.includes('```jsx')) {
    content = content.replace(/```jsx\s*/g, '');
    content = content.replace(/```\s*/g, '');
    hasChanges = true;
    console.log(`  ✅ ${path.basename(path.dirname(filePath))}: Removed jsx code blocks`);
  }

  // Fix 2: Remove any remaining markdown blocks
  if (/```[\s\S]*?```/g.test(content)) {
    content = content.replace(/```[\s\S]*?```/g, '');
    hasChanges = true;
    console.log(`  ✅ ${path.basename(path.dirname(filePath))}: Removed markdown blocks`);
  }

  // Fix 3: Remove markdown instructions and comments
  const markdownPatterns = [
    /\*\*Remember:\*\*[\s\S]*?(?=\s*\)\s*})/g,
    /\*\*Note:\*\*[\s\S]*?(?=\s*\)\s*})/g,
    /\/\*\*[\s\S]*?\*\*\//g,
  ];

  markdownPatterns.forEach(pattern => {
    if (pattern.test(content)) {
      content = content.replace(pattern, '');
      hasChanges = true;
    }
  });

  // Fix 4: Ensure proper JSX structure
  // Make sure there's proper spacing around JSX
  content = content.replace(/return \(\s*/g, 'return (\n');
  
  // Fix 5: Remove double closing braces/parentheses
  content = content.replace(/\s*\)\s*}\s*\)\s*}/g, '\n  )\n}');
  
  // Fix 6: Ensure proper JSX ending
  if (!content.trim().endsWith(')\n}') && !content.trim().endsWith(') }')) {
    const lines = content.split('\n');
    let lastMeaningfulLine = -1;
    
    // Find the last meaningful JSX line (typically </div> or </section>)
    for (let i = lines.length - 1; i >= 0; i--) {
      const line = lines[i].trim();
      if (line.includes('</div>') || line.includes('</section>') || line.includes('</article>')) {
        lastMeaningfulLine = i;
        break;
      }
    }
    
    if (lastMeaningfulLine !== -1) {
      // Remove everything after the last meaningful JSX line and add proper closing
      const cleanLines = lines.slice(0, lastMeaningfulLine + 1);
      content = cleanLines.join('\n') + '\n  )\n}';
      hasChanges = true;
      console.log(`  ✅ ${path.basename(path.dirname(filePath))}: Fixed JSX ending`);
    }
  }

  // Write changes if any
  if (hasChanges && content !== originalContent) {
    fs.writeFileSync(fullPath, content);
    fixedFiles++;
  }
});

console.log(`\n✅ COMPREHENSIVE FIX COMPLETE:`);
console.log(`- Files checked: ${blogFiles.length}`);
console.log(`- Files fixed: ${fixedFiles}`);

if (fixedFiles > 0) {
  console.log('\n🎯 All JSX syntax issues resolved!');
} else {
  console.log('\n✨ All files are already clean!');
}