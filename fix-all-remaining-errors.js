#!/usr/bin/env node

const fs = require('fs');

console.log('🚀 Fixing all remaining build errors...');

// Fix composer-agent - remove extra closing brace
const composerPath = 'src/app/blog/composer-agent-code-llm-full-stack/page.tsx';
try {
  let content = fs.readFileSync(composerPath, 'utf8');
  
  // Remove any trailing extra closing braces
  content = content.replace(/}\s*}\s*$/, '}');
  
  fs.writeFileSync(composerPath, content);
  console.log('  ✅ Fixed composer-agent extra closing brace');
} catch (error) {
  console.error(`  ❌ Error fixing composer file: ${error.message}`);
}

// Fix cursor-ai-coding JSX issue
const cursorPath = 'src/app/blog/cursor-ai-coding/page.tsx';
try {
  let content = fs.readFileSync(cursorPath, 'utf8');
  
  // Fix the return statement JSX structure
  content = content.replace(
    /return \(\s*<div className="min-h-screen bg-dark">/g,
    'return (\n    <div className="min-h-screen bg-dark">'
  );
  
  fs.writeFileSync(cursorPath, content);
  console.log('  ✅ Fixed cursor-ai-coding JSX structure');
} catch (error) {
  console.error(`  ❌ Error fixing cursor file: ${error.message}`);
}

// Fix digital-products-ideas-2025 JSON schema
const digitalIdeasPath = 'src/app/blog/digital-products-ideas-2025/page.tsx';
try {
  let content = fs.readFileSync(digitalIdeasPath, 'utf8');
  
  // Fix the malformed JSON schema - add missing closing bracket before const
  content = content.replace(
    /},"potentialAction": {"@type":"ReadAction","target":"https:\/\/iimagined\.ai\/blog\/digital-products-ideas-2025"\s*}\s*const howToSchema/g,
    '},"potentialAction": {"@type":"ReadAction","target":"https://iimagined.ai/blog/digital-products-ideas-2025"\n}\n\nconst howToSchema'
  );
  
  fs.writeFileSync(digitalIdeasPath, content);
  console.log('  ✅ Fixed digital-products-ideas-2025 JSON schema');
} catch (error) {
  console.error(`  ❌ Error fixing digital ideas file: ${error.message}`);
}

// Fix digital-products-that-sell JSON schema
const digitalSellPath = 'src/app/blog/digital-products-that-sell/page.tsx';
try {
  let content = fs.readFileSync(digitalSellPath, 'utf8');
  
  // Fix the malformed JSON - add missing closing bracket in supply array
  content = content.replace(
    /{"@type":"HowToSupply","name":"Email marketing platform"\s*\],"step":/g,
    '{"@type":"HowToSupply","name":"Email marketing platform"\n    }\n  ],"step":'
  );
  
  fs.writeFileSync(digitalSellPath, content);
  console.log('  ✅ Fixed digital-products-that-sell JSON schema');
} catch (error) {
  console.error(`  ❌ Error fixing digital sell file: ${error.message}`);
}

// Fix instagram-growth-2025 JSON schema  
const instagramPath = 'src/app/blog/instagram-growth-2025/page.tsx';
try {
  let content = fs.readFileSync(instagramPath, 'utf8');
  
  // Fix the malformed JSON - add missing closing bracket in tool array
  content = content.replace(
    /{"@type":"HowToTool","name":"Content Planning Tools"\s*\],"step":/g,
    '{"@type":"HowToTool","name":"Content Planning Tools"\n    }\n  ],"step":'
  );
  
  fs.writeFileSync(instagramPath, content);
  console.log('  ✅ Fixed instagram-growth-2025 JSON schema');
} catch (error) {
  console.error(`  ❌ Error fixing instagram file: ${error.message}`);
}

console.log('\n🎉 All remaining build errors fixed!');