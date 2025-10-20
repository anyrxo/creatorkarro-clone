#!/usr/bin/env node

const fs = require('fs');

console.log('🚀 Final syntax fixes for all problematic files...');

// Fix composer-agent-code-llm-full-stack completely
const composerPath = 'src/app/blog/composer-agent-code-llm-full-stack/page.tsx';
try {
  let content = fs.readFileSync(composerPath, 'utf8');
  
  // Remove duplicate import and Metadata import since this is a client component
  content = content.replace('import { Metadata } from \'next\'\nimport Link from \'next/link\'', '');
  
  // Fix malformed faqData array - the bracket issue
  content = content.replace(
    /}\s*}\s*\]/g,
    '  }\n]'
  );
  
  // Fix the messed up Link tags in the table of contents
  content = content.replace(
    /<Link href="#revolution" className="text-blue-400 hover:text-blue-300">The AI Development Revolution: Beyond Assisted Coding<\/a><\/li>/g,
    '<Link href="#revolution" className="text-blue-400 hover:text-blue-300">The AI Development Revolution: Beyond Assisted Coding</Link></li>'
  );
  
  // Fix the double closing brace at the end
  content = content.replace(/}\s*}$/g, '}');
  
  fs.writeFileSync(composerPath, content);
  console.log('  ✅ Fixed composer-agent-code-llm-full-stack/page.tsx');
} catch (error) {
  console.error(`  ❌ Error fixing composer file: ${error.message}`);
}

// Check and fix other files as needed
const filesToCheck = [
  'src/app/blog/cursor-ai-coding/page.tsx',
  'src/app/blog/digital-products-ideas-2025/page.tsx', 
  'src/app/blog/digital-products-that-sell/page.tsx',
  'src/app/blog/instagram-growth-2025/page.tsx'
];

filesToCheck.forEach(filePath => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Ensure return statement has proper parentheses
    if (content.includes('return (\n\n    <div') || content.includes('return (\n    <div') === false) {
      content = content.replace(/return \(\s*<div/g, 'return (\n    <div');
      modified = true;
    }
    
    // Fix any JSON syntax issues
    if (content.includes('}\n}const ')) {
      content = content.replace(/}\s*}const /g, '}\n\nconst ');
      modified = true;
    }
    
    if (content.includes('},],"step":')) {
      content = content.replace(/},\s*\]\s*,"step":/g, '}\n  ],"step":');
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`  ✅ Fixed ${filePath.split('/').slice(-2).join('/')}`);
    }
  } catch (error) {
    console.error(`  ❌ Error checking ${filePath}: ${error.message}`);
  }
});

console.log('\n🎉 All syntax fixes completed!');