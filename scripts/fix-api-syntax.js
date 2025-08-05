#!/usr/bin/env node

/**
 * FIX API ROUTE SYNTAX ERRORS
 * Fix the incorrectly placed exports
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

console.log('🔧 FIXING API ROUTE SYNTAX ERRORS...');

// Find all API route files
const apiFiles = glob.sync('src/app/api/**/route.ts', { cwd: process.cwd() });

let fixedFiles = 0;

apiFiles.forEach(filePath => {
  const fullPath = path.join(process.cwd(), filePath);
  let content = fs.readFileSync(fullPath, 'utf8');
  
  // Check if the file has syntax errors from our previous fix
  if (content.includes('import { \n// Required for static export')) {
    console.log(`  🔧 Fixing syntax in: ${filePath}`);
    
    // Remove the incorrectly placed exports
    content = content.replace(/import \{ \n\/\/ Required for static export\nexport const dynamic = 'force-static';\nexport const revalidate = false;\n\n/g, 'import { ');
    content = content.replace(/\/\/ Required for static export\nexport const dynamic = 'force-static';\nexport const revalidate = false;\n\n/g, '');
    
    // Find the end of all imports and add exports there
    const lines = content.split('\n');
    let lastImportIndex = -1;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line.startsWith('import ') || (line.startsWith('} from ') && i > 0)) {
        lastImportIndex = i;
      }
    }
    
    if (lastImportIndex !== -1) {
      // Add exports after the last import
      const exportsToAdd = [
        '',
        '// Required for static export',
        'export const dynamic = \'force-static\';',
        'export const revalidate = false;',
        ''
      ];
      
      lines.splice(lastImportIndex + 1, 0, ...exportsToAdd);
      content = lines.join('\n');
      
      fs.writeFileSync(fullPath, content);
      fixedFiles++;
    }
  }
});

console.log(`\n✅ SYNTAX FIXES APPLIED: ${fixedFiles} files corrected`);
console.log('🎯 All API routes should now compile correctly');