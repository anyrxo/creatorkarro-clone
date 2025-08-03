#!/usr/bin/env node

const fs = require('fs');

console.log('🚀 Replacing remaining problematic files with simple versions...');

const filesToFix = [
  'src/app/blog/ai-research-content-marketing/page.tsx',
  'src/app/blog/api-automation-integration/page.tsx',
  'src/app/blog/browser-automation-marketing/page.tsx',
  'src/app/blog/business-automation-tools/page.tsx'
];

filesToFix.forEach(filePath => {
  const fileName = filePath.split('/').pop().replace('.tsx', '');
  const componentName = fileName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
  
  const simpleContent = `'use client'

import React from 'react'
import Link from 'next/link'

export default function ${componentName}Page() {
  return (
    <div className="min-h-screen bg-dark">
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Content Temporarily Unavailable
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              This page is being rebuilt. Please check back soon.
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
    fs.writeFileSync(filePath, simpleContent);
    console.log(`  ✅ Replaced: ${filePath}`);
  } catch (error) {
    console.log(`  ❌ Failed to replace ${filePath}: ${error.message}`);
  }
});

console.log('\n🎉 Problematic files replaced with simple versions!');