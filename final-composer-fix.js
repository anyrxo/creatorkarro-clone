#!/usr/bin/env node

const fs = require('fs');

console.log('🚀 Final fix for composer-agent file...');

const filePath = 'src/app/blog/composer-agent-code-llm-full-stack/page.tsx';

try {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Fix the mismatched tags - line 959 has </Link> but should be </a>
  content = content.replace(
    /Try Composer Agent Free\s*<\/Link>/g,
    'Try Composer Agent Free\n                    </a>'
  );
  
  // Remove the extra closing brace at the very end
  content = content.replace(/}\s*}$/, '}');
  
  // Ensure there's a newline at the end
  if (!content.endsWith('\n')) {
    content += '\n';
  }
  
  fs.writeFileSync(filePath, content);
  console.log('  ✅ Fixed composer-agent-code-llm-full-stack/page.tsx');
  
} catch (error) {
  console.error(`  ❌ Error: ${error.message}`);
}

console.log('\n🎉 Final composer fix completed!');