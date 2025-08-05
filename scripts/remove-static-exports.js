#!/usr/bin/env node

/**
 * REMOVE STATIC EXPORT CONFIGS
 * Remove static export configs since we're back to SSR
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

console.log('🔧 REMOVING STATIC EXPORT CONFIGS...');

// Find all API route files
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
  
  // Skip if no static export configs
  if (!content.includes('export const dynamic') && !content.includes('export const revalidate')) {
    return;
  }
  
  console.log(`  🔧 Removing from: ${filePath}`);
  
  // Remove the static export configs
  content = content.replace(/\n\n\/\/ Required for static export\nexport const dynamic = 'force-static';\nexport const revalidate = false;\n\n/g, '\n\n');
  content = content.replace(/\/\/ Required for static export\nexport const dynamic = 'force-static';\nexport const revalidate = false;\n\n/g, '');
  content = content.replace(/export const dynamic = 'force-static';\n/g, '');
  content = content.replace(/export const revalidate = false;\n/g, '');
  
  fs.writeFileSync(fullPath, content);
  fixedFiles++;
});

console.log(`\n✅ STATIC EXPORT CONFIGS REMOVED: ${fixedFiles} files updated`);
console.log('🎯 All routes ready for SSR');