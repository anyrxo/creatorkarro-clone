#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Fixing final build issues...');

// Fix the [slug]/page.tsx file JSX issue
console.log('Fixing [slug]/page.tsx...');
const slugFilePath = 'src/app/blog/[slug]/page.tsx';
let slugContent = fs.readFileSync(slugFilePath, 'utf8');

// The issue is that we need to add the missing import and fix the structure
const fixedSlugContent = slugContent.replace(
  /const newsArticle = newsArticles\[slug\]\s*if \(newsArticle\) \{\s*return \(\s*<div className="min-h-screen bg-dark">/,
  `const newsArticle = newsArticles[slug]
  if (newsArticle) {
    return (
      <div className="min-h-screen bg-dark">`
);

fs.writeFileSync(slugFilePath, fixedSlugContent);
console.log('  ✅ Fixed [slug]/page.tsx');

// Fix the ai-automation-guide-toxic-seo file - missing function structure
console.log('Fixing ai-automation-guide-toxic-seo...');
const toxicSeoPath = 'src/app/blog/ai-automation-guide-toxic-seo/page.tsx';
let toxicSeoContent = fs.readFileSync(toxicSeoPath, 'utf8');

// Fix the function structure - the return statement needs to be inside a function
toxicSeoContent = toxicSeoContent.replace(
  /}\s*;\s*const faqSchema = \{[^}]+\}\s*\]\s*\}\s*return \(/,
  `};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are AI automation tools?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI automation tools are software applications that use artificial intelligence to automate business processes, workflows, and tasks without human intervention. These tools can handle everything from content creation to customer service, saving businesses 70-90% of manual work time."
        }
      }
    ]
};

export default function AiAutomationGuideToxicSeoPage() {
  return (`
);

fs.writeFileSync(toxicSeoPath, toxicSeoContent);
console.log('  ✅ Fixed ai-automation-guide-toxic-seo');

// Fix string escaping issues in multiple files
const problematicFiles = [
  'ai-influencer-success',
  'alpha-evolve-ai-business-empire',
  'ai-research-content-marketing'
];

problematicFiles.forEach(slug => {
  const filePath = `src/app/blog/${slug}/page.tsx`;
  
  try {
    console.log(`Fixing string issues in: ${slug}`);
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix escaped quotes in metadata
    content = content.replace(/Isabella\\\\'s/g, "Isabella's");
    content = content.replace(/Google\\\\'s/g, "Google's");
    content = content.replace(/Can\\\\'t/g, "Can't");
    content = content.replace(/doesn\\\\'t/g, "doesn't");
    content = content.replace(/won\\\\'t/g, "won't");
    content = content.replace(/you\\\\'ll/g, "you'll");
    content = content.replace(/isn\\\\'t/g, "isn't");
    
    // Fix the specific ai-research-content-marketing JSX issue
    if (slug === 'ai-research-content-marketing') {
      content = content.replace(
        /import React from 'react'\s*import Link from 'next\/link'\s*export default function AiResearchContentMarketingPage\(\) \{\s*return \(\s*<div className="min-h-screen bg-dark">\s*<section/,
        `import React from 'react'
import Link from 'next/link'

export default function AiResearchContentMarketingPage() {
  return (
    <div className="min-h-screen bg-dark">
      <section`
      );
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`  ✅ Fixed: ${slug}`);
    
  } catch (error) {
    console.error(`  ❌ Error fixing ${slug}:`, error.message);
  }
});

console.log('\n🎉 Final issues fixed!');