const fs = require('fs');
const path = require('path');

const files = [
  'ai-agents-business-automation',
  'ai-automation-business',
  'cloud-gpu-ai-automation',
  'deepagent-update-god-tier-ai-automation',
  'digital-product-pricing',
  'digital-products-ideas-2025',
  'digital-product-success-story',
  'voice-ai-automation'
];

files.forEach(slug => {
  const filePath = path.join('src', 'app', 'blog', slug, 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf-8');

  // Remove the import for generateBlogPostSchema
  content = content.replace(/import { generateBlogPostSchema } from '@\/lib\/blog-schema'\n/, '');

  // Remove React import if it's unused (redirect pages don't need it)
  if (!content.includes('React.')) {
    content = content.replace(/import React from 'react'\n/, '');
  }

  // Remove the entire schema generation block (from const schema = ... to })
  content = content.replace(/\nconst schema = generateBlogPostSchema\({[\s\S]*?}\)\n/, '\n');

  fs.writeFileSync(filePath, content);
  console.log('✅ Fixed:', slug);
});

console.log('\n✅ All 8 redirect pages fixed!');
