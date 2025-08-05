#!/usr/bin/env node

/**
 * FIX REMAINING ROUTE FILES
 * Add static export configs to sitemap and XML routes
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

console.log('🔧 FIXING REMAINING ROUTE FILES...');

// Find all remaining route files
const routeFiles = [
  ...glob.sync('src/app/**/route.ts', { cwd: process.cwd() }),
  ...glob.sync('src/app/sitemap.ts', { cwd: process.cwd() }),
  ...glob.sync('src/app/robots.ts', { cwd: process.cwd() })
];

let fixedFiles = 0;

routeFiles.forEach(filePath => {
  const fullPath = path.join(process.cwd(), filePath);
  
  if (!fs.existsSync(fullPath)) return;
  
  let content = fs.readFileSync(fullPath, 'utf8');
  
  // Skip if already has the required exports
  if (content.includes('export const dynamic') && content.includes('export const revalidate')) {
    return;
  }
  
  console.log(`  🔧 Fixing: ${filePath}`);
  
  // Add required exports at the beginning after imports
  const lines = content.split('\n');
  let insertIndex = 0;
  
  // Find where to insert (after imports/comments)
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith('import ') || line.startsWith('//') || line.startsWith('/*') || line === '') {
      insertIndex = i + 1;
    } else {
      break;
    }
  }
  
  // Insert the required exports
  const exportsToAdd = [
    '',
    '// Required for static export',
    'export const dynamic = \'force-static\';',
    'export const revalidate = false;',
    ''
  ];
  
  lines.splice(insertIndex, 0, ...exportsToAdd);
  content = lines.join('\n');
  
  fs.writeFileSync(fullPath, content);
  fixedFiles++;
});

console.log(`\n✅ REMAINING ROUTES FIXED: ${fixedFiles} files updated`);
console.log('🎯 All routes now compatible with static export');