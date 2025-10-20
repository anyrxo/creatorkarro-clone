#!/usr/bin/env node

const fs = require('fs');
const glob = require('glob');

console.log('🚀 Fixing trailing syntax errors...');

// Get all blog page files
const blogFiles = glob.sync('src/app/blog/*/page.tsx');

console.log(`Found ${blogFiles.length} blog files to clean`);

blogFiles.forEach(filePath => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove trailing semicolons and braces that shouldn't be there
    content = content.replace(/\s*};\s*No newline at end of file$/m, '');
    content = content.replace(/\s*};\s*$/m, '');
    content = content.replace(/\s*No newline at end of file$/m, '');
    
    // Ensure file ends properly
    if (!content.endsWith('\n')) {
      content += '\n';
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`  ✅ Cleaned syntax: ${filePath.split('/').pop()}`);
    
  } catch (error) {
    console.error(`  ❌ Error processing ${filePath}:`, error.message);
  }
});

console.log('\n🎉 Trailing syntax cleaned!');