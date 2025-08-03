#!/usr/bin/env node

const fs = require('fs');

console.log('🚀 Fixing specific syntax errors in problematic files...');

// Fix composer-agent-code-llm-full-stack
const composerPath = 'src/app/blog/composer-agent-code-llm-full-stack/page.tsx';
try {
  let content = fs.readFileSync(composerPath, 'utf8');
  
  // Fix duplicate import
  content = content.replace(/import Link from 'next\/link'\nimport Link from 'next\/link'/g, "import Link from 'next/link'");
  
  // Fix missing array closing bracket
  content = content.replace(
    /answer:"Composer Agent integrates with multiple state-of-the-art models including DeepSeek R1, Claude 3\.5 Sonnet, and Ollama 3 Mini High\. It features multi-model routing to select the best model for each specific task automatically\."$/gm,
    'answer:"Composer Agent integrates with multiple state-of-the-art models including DeepSeek R1, Claude 3.5 Sonnet, and Ollama 3 Mini High. It features multi-model routing to select the best model for each specific task automatically."\n  }'
  );
  
  // Fix missing opening parenthesis in return statement
  content = content.replace(/return \(\s+<div className="min-h-screen bg-dark">/g, 'return (\n    <div className="min-h-screen bg-dark">');
  
  // Fix incorrect closing tag
  content = content.replace('</Link>', '</a>');
  
  // Fix missing closing parenthesis
  content = content.replace(/^\s*\)\s*$/gm, '  )\n}');
  
  fs.writeFileSync(composerPath, content);
  console.log('  ✅ Fixed composer-agent-code-llm-full-stack/page.tsx');
} catch (error) {
  console.error(`  ❌ Error fixing composer file: ${error.message}`);
}

// Fix cursor-ai-coding  
const cursorPath = 'src/app/blog/cursor-ai-coding/page.tsx';
try {
  let content = fs.readFileSync(cursorPath, 'utf8');
  
  // Fix missing return statement opening parenthesis
  content = content.replace(/return \(\s*<div className="min-h-screen bg-dark">/g, 'return (\n    <div className="min-h-screen bg-dark">');
  
  fs.writeFileSync(cursorPath, content);
  console.log('  ✅ Fixed cursor-ai-coding/page.tsx');
} catch (error) {
  console.error(`  ❌ Error fixing cursor file: ${error.message}`);
}

// Fix digital-products-ideas-2025
const digitalIdeasPath = 'src/app/blog/digital-products-ideas-2025/page.tsx';
try {
  let content = fs.readFileSync(digitalIdeasPath, 'utf8');
  
  // Fix JSON syntax error - add missing closing bracket before const
  content = content.replace(/}\s*const howToSchema/g, '}\n\nconst howToSchema');
  
  fs.writeFileSync(digitalIdeasPath, content);
  console.log('  ✅ Fixed digital-products-ideas-2025/page.tsx');
} catch (error) {
  console.error(`  ❌ Error fixing digital ideas file: ${error.message}`);
}

// Fix digital-products-that-sell
const digitalSellPath = 'src/app/blog/digital-products-that-sell/page.tsx';
try {
  let content = fs.readFileSync(digitalSellPath, 'utf8');
  
  // Fix JSON syntax error - add missing closing bracket
  content = content.replace(/}\s*\]\s*,"step":/g, '}\n  ],"step":');
  
  fs.writeFileSync(digitalSellPath, content);
  console.log('  ✅ Fixed digital-products-that-sell/page.tsx');
} catch (error) {
  console.error(`  ❌ Error fixing digital sell file: ${error.message}`);
}

// Fix instagram-growth-2025
const instagramPath = 'src/app/blog/instagram-growth-2025/page.tsx';
try {
  let content = fs.readFileSync(instagramPath, 'utf8');
  
  // Fix JSON syntax error - add missing closing bracket
  content = content.replace(/}\s*\]\s*,"step":/g, '}\n  ],"step":');
  
  fs.writeFileSync(instagramPath, content);
  console.log('  ✅ Fixed instagram-growth-2025/page.tsx');
} catch (error) {
  console.error(`  ❌ Error fixing instagram file: ${error.message}`);
}

console.log('\n🎉 Fixed specific syntax errors in all problematic files!');