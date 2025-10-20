#!/usr/bin/env node

const fs = require('fs');
const glob = require('glob');

console.log('🚀 Converting blog files to pure server components...');

// Get all blog page files except [slug]
const blogFiles = glob.sync('src/app/blog/*/page.tsx').filter(f => !f.includes('[slug]'));

console.log(`Found ${blogFiles.length} blog files to convert`);

blogFiles.forEach(filePath => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove client-side references
    content = content.replace(/ref=\{[^}]+\}/g, '');
    content = content.replace(/className=\{`([^`]+)`\}/g, 'className="$1"');
    content = content.replace(/\$\{[^}]+\}/g, '');
    content = content.replace(/\s*scroll-fade-up\s*/g, ' ');
    content = content.replace(/\s*in-view\s*/g, ' ');
    content = content.replace(/\s*:\s*''\s*/g, '');
    
    // Clean up animation references
    content = content.replace(/heroAnimation\.elementRef/g, 'null');
    content = content.replace(/heroAnimation\.inView \? '[^']*' : '[^']*'/g, "''");
    content = content.replace(/\$\{heroAnimation\.inView[^}]*\}/g, "");
    
    // Fix spacing issues
    content = content.replace(/className="\s+/g, 'className="');
    content = content.replace(/\s+"/g, '"');
    content = content.replace(/className="([^"]*)\s+([^"]*)"/g, 'className="$1 $2"');
    
    fs.writeFileSync(filePath, content);
    console.log(`  ✅ Cleaned server component: ${filePath.split('/').pop()}`);
    
  } catch (error) {
    console.error(`  ❌ Error processing ${filePath}:`, error.message);
  }
});

// Fix the [slug]/page.tsx separately
console.log('\nFixing [slug]/page.tsx...');
const slugPath = 'src/app/blog/[slug]/page.tsx';
try {
  let content = fs.readFileSync(slugPath, 'utf8');
  
  // Add 'use client' only to this file since it doesn't have metadata
  if (!content.includes("'use client'")) {
    content = `'use client'\n\n${content}`;
  }
  
  fs.writeFileSync(slugPath, content);
  console.log('  ✅ Fixed [slug]/page.tsx with use client');
} catch (error) {
  console.log('  ⚠️  Warning:', error.message);
}

console.log('\n🎉 Server components cleaned!');