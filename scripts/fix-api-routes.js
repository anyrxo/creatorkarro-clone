#!/usr/bin/env node

/**
 * FIX API ROUTES FOR STATIC EXPORT
 * Add required exports to all API routes
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

console.log('🔧 FIXING API ROUTES FOR STATIC EXPORT...');

// Find all API route files
const apiFiles = glob.sync('src/app/api/**/route.ts', { cwd: process.cwd() });

console.log(`📁 Found ${apiFiles.length} API routes to fix`);

let fixedFiles = 0;

apiFiles.forEach(filePath => {
  const fullPath = path.join(process.cwd(), filePath);
  let content = fs.readFileSync(fullPath, 'utf8');
  
  // Check if exports already exist
  if (content.includes('export const dynamic') || content.includes('export const revalidate')) {
    return; // Already has required exports
  }
  
  // Add required exports at the top
  const exportsToAdd = `// Required for static export
export const dynamic = 'force-static';
export const revalidate = false;

`;
  
  // Insert after imports
  const lines = content.split('\n');
  let insertIndex = 0;
  
  // Find the last import line
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith('import ') || lines[i].startsWith('//') || lines[i].trim() === '') {
      insertIndex = i + 1;
    } else {
      break;
    }
  }
  
  // Insert the exports
  lines.splice(insertIndex, 0, exportsToAdd);
  content = lines.join('\n');
  
  fs.writeFileSync(fullPath, content);
  fixedFiles++;
  
  console.log(`  ✅ Fixed: ${filePath}`);
});

console.log(`\n✅ API ROUTES FIXED: ${fixedFiles} files updated`);
console.log('🎯 All routes now compatible with static export');