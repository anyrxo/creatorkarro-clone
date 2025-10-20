const fs = require('fs');
const path = require('path');

console.log('🔧 FIXING CODE QUALITY ISSUES...\n');

const fixes = {
  anonymousExports: 0,
  consoleLogsMuted: 0,
  filesProcessed: 0
};

// Fix anonymous default exports in analytics and gtag
const filesToFix = [
  'src/lib/analytics.ts',
  'src/lib/gtag.ts'
];

filesToFix.forEach(filePath => {
  const fullPath = path.join(__dirname, '..', filePath);

  if (!fs.existsSync(fullPath)) {
    console.log(`⏭️  Skipping ${filePath} - not found`);
    return;
  }

  let content = fs.readFileSync(fullPath, 'utf8');
  const originalContent = content;

  // Fix anonymous export default function
  if (content.includes('export default function') && !content.match(/export default function \w+/)) {
    const fileName = path.basename(filePath, '.ts');
    const functionName = fileName.charAt(0).toUpperCase() + fileName.slice(1);

    content = content.replace(
      /export default function\s*\(/g,
      `export default function ${functionName}(`
    );

    fixes.anonymousExports++;
    console.log(`✅ Fixed anonymous export in ${filePath}`);
  }

  if (content !== originalContent) {
    fs.writeFileSync(fullPath, content, 'utf8');
    fixes.filesProcessed++;
  }
});

// Add performance improvements to BeautifulHero component
const heroPath = path.join(__dirname, '..', 'src/components/hero/BeautifulHero.tsx');
if (fs.existsSync(heroPath)) {
  let content = fs.readFileSync(heroPath, 'utf8');

  // Check if React.memo is already applied
  if (!content.includes('React.memo')) {
    // Add React import if not present
    if (!content.includes("import React from 'react'") && !content.includes('import React,')) {
      content = content.replace(
        "import { useEffect, useRef } from 'react'",
        "import React, { useEffect, useRef } from 'react'"
      );
    }

    // Wrap export with React.memo
    content = content.replace(
      /export default function BeautifulHero/,
      'const BeautifulHero = React.memo(function BeautifulHero'
    );

    // Add closing parenthesis and export
    if (!content.includes('export default BeautifulHero')) {
      content = content.replace(
        /}\s*$/,
        '})\n\nexport default BeautifulHero\n'
      );
    }

    fs.writeFileSync(heroPath, content, 'utf8');
    console.log('✅ Added React.memo to BeautifulHero component');
    fixes.filesProcessed++;
  }
}

console.log('\n📊 CODE QUALITY FIXES SUMMARY:\n');
console.log(`  Anonymous exports fixed: ${fixes.anonymousExports}`);
console.log(`  Files processed: ${fixes.filesProcessed}`);
console.log('\n✅ Code quality improvements complete!');
console.log('\n💡 Note: console.log removal deferred (452 instances) - requires careful testing');
