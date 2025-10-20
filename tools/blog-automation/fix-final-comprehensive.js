#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Running comprehensive final fix...');

// 1. Fix the [slug]/page.tsx file structure issues
console.log('1. Fixing [slug]/page.tsx JSX structure...');
const slugPath = 'src/app/blog/[slug]/page.tsx';
let slugContent = fs.readFileSync(slugPath, 'utf8');

// Find where the JSX error is and add proper import/structure
if (!slugContent.includes("'use client'")) {
  slugContent = `'use client'\n\n${slugContent}`;
}

// Make sure the function is properly structured
slugContent = slugContent.replace(
  /}\s*\/\/ Check if this is a news article\s*const newsArticle = newsArticles\[slug\]\s*if \(newsArticle\) \{\s*return \(\s*<div/,
  `}

  // Check if this is a news article
  const newsArticle = newsArticles[slug]
  if (newsArticle) {
    return (
      <div`
);

fs.writeFileSync(slugPath, slugContent);
console.log('  ✅ Fixed [slug]/page.tsx');

// 2. Fix string escaping issues in all metadata
console.log('2. Fixing string escaping in metadata...');
const filesWithStringIssues = [
  'ai-automation-guide-toxic-seo',
  'ai-influencer-success', 
  'alpha-evolve-ai-business-empire',
  'ai-research-content-marketing'
];

filesWithStringIssues.forEach(slug => {
  const filePath = `src/app/blog/${slug}/page.tsx`;
  
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix all the escaping issues in metadata
    content = content.replace(/title: '([^']*)'([^']*)'([^']*)',/g, (match, p1, p2, p3) => {
      return `title: '${p1}${p2}${p3}',`;
    });
    
    content = content.replace(/description: '([^']*)'([^']*)'([^']*)',/g, (match, p1, p2, p3) => {
      return `description: '${p1}${p2}${p3}',`;
    });
    
    // Fix specific files
    if (slug === 'ai-automation-guide-toxic-seo') {
      content = content.replace(
        /title: 'AI Automation Tools That Built My \$88K\/Month Business in Just 4 Hours Daily\\',/,
        "title: 'AI Automation Tools That Built My $88K/Month Business in Just 4 Hours Daily',"
      );
      content = content.replace(
        /description: \\'Get my complete AI automation blueprint/,
        "description: 'Get my complete AI automation blueprint"
      );
    }
    
    if (slug === 'alpha-evolve-ai-business-empire') {
      content = content.replace(
        /description: 'How Google's Alpha Evolve reveals/,
        "description: 'How Google\\'s Alpha Evolve reveals"
      );
    }
    
    if (slug === 'ai-influencer-success') {
      content = content.replace(
        /description: 'Learn Isabella's exact system/g,
        "description: 'Learn Isabella\\'s exact system"
      );
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`  ✅ Fixed strings in: ${slug}`);
    
  } catch (error) {
    console.log(`  ⚠️  Warning fixing ${slug}: ${error.message}`);
  }
});

// 3. Fix ai-research-content-marketing JSX structure specifically
console.log('3. Fixing ai-research-content-marketing JSX...');
const aiResearchPath = 'src/app/blog/ai-research-content-marketing/page.tsx';
let aiResearchContent = fs.readFileSync(aiResearchPath, 'utf8');

// Add 'use client' if missing
if (!aiResearchContent.includes("'use client'")) {
  aiResearchContent = `'use client'\n\n${aiResearchContent}`;
}

fs.writeFileSync(aiResearchPath, aiResearchContent);
console.log('  ✅ Fixed ai-research-content-marketing');

console.log('\n🎉 Comprehensive fixes complete!');