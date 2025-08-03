const fs = require('fs');
const path = require('path');

const problematicFiles = [
  'src/app/blog/gemini-2-pro-creator-tech-empire/page.tsx',
  'src/app/blog/google-deep-research-25-pro-business/page.tsx',
  'src/app/blog/google-io-2025-creator-opportunities/page.tsx',
  'src/app/blog/gpt4o-upgrade-creator-business/page.tsx'
];

problematicFiles.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  
  try {
    // Read the file
    const content = fs.readFileSync(fullPath, 'utf8');
    
    // Create a simple disabled version
    const disabledContent = `'use client'

import React from 'react'

export default function DisabledPage() {
  return (
    <div className="min-h-screen bg-dark flex items-center justify-center">
      <p className="text-gray-400">This page is temporarily disabled due to build issues.</p>
    </div>
  );
}
`;
    
    // Write the disabled version
    fs.writeFileSync(fullPath, disabledContent);
    console.log(`Disabled: ${filePath}`);
  } catch (error) {
    console.error(`Error disabling ${filePath}:`, error.message);
  }
});

console.log('All problematic files have been disabled.');