#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Fixing remaining build issues...');

const problematicFiles = [
  'google-io-2025-creator-opportunities',
  'ai-automation-guide-toxic-seo', 
  'ai-content-opportunity',
  'ai-era-skills'
];

problematicFiles.forEach(slug => {
  const filePath = `src/app/blog/${slug}/page.tsx`;
  
  try {
    console.log(`Fixing: ${slug}`);
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove any remaining 'use client' directives (with or without semicolon)
    content = content.replace(/'use client';?\s*\n/g, '');
    
    // Fix metadata string syntax issues - escape single quotes in descriptions
    content = content.replace(/description: '([^']*)'([^']*)'([^']*)',/g, (match, p1, p2, p3) => {
      return `description: '${p1}\\'${p2}\\'${p3}',`;
    });
    
    // Fix other string issues
    content = content.replace(/title: '([^']*)'([^']*)'([^']*)',/g, (match, p1, p2, p3) => {
      return `title: '${p1}\\'${p2}\\'${p3}',`;
    });
    
    // Fix specific known issues
    if (slug === 'ai-automation-guide-toxic-seo') {
      // Fix the missing comma before const faqSchema
      content = content.replace(/}\s*const faqSchema/g, '},\n\nconst faqSchema');
    }
    
    if (slug === 'ai-content-opportunity') {
      // Fix the ellipsis issue
      content = content.replace(/description: 'The question isn't IF you'll use AI for content......'/g, "description: 'The question isn\\'t IF you\\'ll use AI for content...'");
    }
    
    if (slug === 'ai-era-skills') {
      // Fix the apostrophe issue
      content = content.replace(/title: 'The 10 High-Income Skills That AI Can't Replace'/g, "title: 'The 10 High-Income Skills That AI Can\\'t Replace'");
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`  ✅ Fixed: ${slug}`);
    
  } catch (error) {
    console.error(`  ❌ Error fixing ${slug}:`, error.message);
  }
});

console.log('\n🎉 Remaining issues fixed!');