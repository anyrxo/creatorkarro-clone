#!/usr/bin/env node

/**
 * Bulk Individual Blog Beautification Script
 * Fixes white backgrounds and old class attributes in individual blog post files
 */

const fs = require('fs').promises;
const path = require('path');

// Function to apply dark theme fixes to file content
function applyDarkThemeFixes(content) {
  let updated = content;
  
  // Fix white backgrounds
  updated = updated.replace(/bg-white(?!\/)/g, 'bg-gray-900');
  updated = updated.replace(/bg-white\s/g, 'bg-gray-900 ');
  
  // Fix text colors
  updated = updated.replace(/text-black/g, 'text-gray-300');
  updated = updated.replace(/text-gray-900/g, 'text-gray-300');
  
  // Fix borders
  updated = updated.replace(/border-gray-200/g, 'border-gray-700');
  updated = updated.replace(/border-gray-300/g, 'border-gray-600');
  
  // Transform class to className (if any remain)
  updated = updated.replace(/class="/g, 'className="');
  
  // Fix light hover states
  updated = updated.replace(/hover:bg-gray-100/g, 'hover:bg-gray-800');
  updated = updated.replace(/hover:bg-white/g, 'hover:bg-gray-800');
  
  return updated;
}

// Function to check if file needs beautification
function needsBeautification(content) {
  return content.includes('bg-white') || 
         content.includes('text-black') || 
         content.includes('class=') ||
         content.includes('text-gray-900') ||
         content.includes('hover:bg-gray-100');
}

// Main function
async function beautifyIndividualBlogs() {
  try {
    console.log('🎨 Starting individual blog beautification...\n');
    
    // Find all individual blog page files
    const blogDir = path.join(process.cwd(), 'src/app/blog');
    const entries = await fs.readdir(blogDir, { withFileTypes: true });
    
    const blogFiles = [];
    
    // Get all page.tsx files in blog subdirectories
    for (const entry of entries) {
      if (entry.isDirectory() && entry.name !== '[slug]') {
        const pageFile = path.join(blogDir, entry.name, 'page.tsx');
        try {
          await fs.access(pageFile);
          blogFiles.push(pageFile);
        } catch (error) {
          // File doesn't exist, skip
        }
      }
    }
    
    console.log(`📁 Found ${blogFiles.length} individual blog files`);
    
    // Process each file
    let fixedCount = 0;
    const fixedFiles = [];
    
    for (const filePath of blogFiles) {
      const content = await fs.readFile(filePath, 'utf-8');
      
      if (needsBeautification(content)) {
        console.log(`🔧 Fixing: ${path.basename(path.dirname(filePath))}`);
        
        // Create backup
        const backupPath = filePath.replace('.tsx', '.backup.tsx');
        await fs.writeFile(backupPath, content);
        
        // Apply fixes
        const fixedContent = applyDarkThemeFixes(content);
        
        // Write updated content
        await fs.writeFile(filePath, fixedContent);
        
        fixedCount++;
        fixedFiles.push(path.basename(path.dirname(filePath)));
        
        console.log(`   ✅ Fixed and backed up`);
      }
    }
    
    console.log(`\n✨ Beautification complete!`);
    console.log(`📊 Files processed: ${blogFiles.length}`);
    console.log(`🎨 Files fixed: ${fixedCount}`);
    
    if (fixedFiles.length > 0) {
      console.log(`\n🔧 Fixed files:`);
      fixedFiles.forEach(file => console.log(`   • ${file}`));
    }
    
    console.log(`\n🔍 Run 'npm run dev' to see the results`);
    
  } catch (error) {
    console.error('❌ Error during beautification:', error);
    process.exit(1);
  }
}

// Execute if run directly
if (require.main === module) {
  beautifyIndividualBlogs();
}

module.exports = { beautifyIndividualBlogs };