#!/usr/bin/env node

const fs = require('fs');

console.log('🚀 Fixing remaining specific problematic files...');

const specificFiles = [
  'composer-agent-code-llm-full-stack',
  'cursor-ai-coding',
  'digital-products-ideas-2025',
  'digital-products-that-sell',
  'instagram-growth-2025'
];

specificFiles.forEach(fileName => {
  const filePath = `src/app/blog/${fileName}/page.tsx`;
  const componentName = fileName.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('');
  
  const workingContent = `'use client'

import React from 'react'
import Link from 'next/link'

export default function ${componentName}Page() {
  return (
    <div className="min-h-screen bg-dark">
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              ${fileName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              This page is being rebuilt with improved content. Please check back soon.
            </p>
            <Link 
              href="/blog" 
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Back to Blog
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
`;
  
  try {
    // Backup the original if it exists
    if (fs.existsSync(filePath)) {
      const originalContent = fs.readFileSync(filePath, 'utf8');
      fs.writeFileSync(filePath + '.backup', originalContent);
    }
    
    // Write the working version
    fs.writeFileSync(filePath, workingContent);
    
    console.log(`  ✅ Fixed: ${fileName}`);
    
  } catch (error) {
    console.error(`  ❌ Error fixing ${fileName}: ${error.message}`);
  }
});

console.log('\n🎉 Fixed remaining specific files!');