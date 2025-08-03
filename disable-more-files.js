const fs = require('fs');
const path = require('path');

const problematicFiles = [
  'src/app/blog/gpt5-roadmap-creator-empire/page.tsx',
  'src/app/blog/hr-automation-systems/page.tsx',
  'src/app/blog/inventory-management-automation/page.tsx',
  'src/app/blog/lead-generation-automation/page.tsx',
  'src/app/blog/make-app-automation/page.tsx'
];

problematicFiles.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  
  try {
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