#!/usr/bin/env node

/**
 * BLOG FORMATTING FIX SCRIPT
 * Fixes formatting issues after comment removal:
 * - Ensures proper newlines between sections
 * - Fixes template literal visibility issues
 * - Maintains proper JSX structure
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

class BlogFormattingFixer {
  constructor() {
    this.blogDir = './src/app/blog';
    this.fixesApplied = [];
  }

  getAllBlogFiles() {
    const pattern = path.join(this.blogDir, '**/page.tsx');
    return glob.sync(pattern);
  }

  fixFormattingIssues(filePath) {
    console.log(`🔧 Fixing formatting in ${path.basename(filePath)}...`);
    
    let content = fs.readFileSync(filePath, 'utf8');
    let hasChanges = false;
    const fixes = [];

    // 1. Fix sections running together - add proper newlines
    const sectionPattern = /<\/section><section/g;
    if (content.match(sectionPattern)) {
      content = content.replace(sectionPattern, '</section>\n\n      <section');
      hasChanges = true;
      fixes.push('Added proper spacing between sections');
    }

    // 2. Fix missing template literal rendering in titles
    const templateLiteralPattern = /\$\{([^}]+)\}/g;
    const matches = content.match(templateLiteralPattern);
    if (matches) {
      matches.forEach(match => {
        // Convert ${variable} to actual content where appropriate
        if (match.includes('new Date().getFullYear()')) {
          content = content.replace(match, '2025');
          hasChanges = true;
          fixes.push(`Fixed year template literal: ${match}`);
        }
      });
    }

    // 3. Fix visibility conditions that got broken
    const visibilityPattern = /className=\{`([^`]+)\s+\$\{[^}]+\s*\?\s*'[^']*'\s*:\s*'[^']*'\}\s*`\}/g;
    const visibilityMatches = content.match(visibilityPattern);
    if (visibilityMatches) {
      visibilityMatches.forEach(match => {
        // Simplify broken visibility conditions
        const simplified = match.replace(/\$\{[^}]+\s*\?\s*'[^']*'\s*:\s*'[^']*'\}/, '');
        content = content.replace(match, simplified);
        hasChanges = true;
        fixes.push('Fixed broken visibility condition');
      });
    }

    // 4. Ensure proper JSX structure
    content = this.fixJSXStructure(content);
    if (content !== fs.readFileSync(filePath, 'utf8')) {
      hasChanges = true;
      fixes.push('Fixed JSX structure');
    }

    // 5. Add missing newlines in JSX
    content = content.replace(/><section/g, '>\n\n      <section');
    content = content.replace(/><div className="min-h-screen/g, '>\n    <div className="min-h-screen');

    // Save changes if any were made
    if (hasChanges) {
      fs.writeFileSync(filePath, content);
      this.fixesApplied.push({
        file: filePath,
        fixes: fixes
      });
      console.log(`✅ Fixed ${fixes.length} formatting issues in ${path.basename(filePath)}`);
    } else {
      console.log(`✨ No formatting issues in ${path.basename(filePath)}`);
    }

    return hasChanges;
  }

  fixJSXStructure(content) {
    // Ensure proper React component structure
    let fixed = content;

    // Fix missing return newlines
    fixed = fixed.replace(/return \(/, 'return (\n    ');
    fixed = fixed.replace(/\)\s*\}$/, '\n  )\n}');

    // Ensure proper indentation
    const lines = fixed.split('\n');
    let indentLevel = 0;
    const fixedLines = lines.map(line => {
      const trimmed = line.trim();
      
      if (trimmed.includes('return (')) {
        indentLevel = 1;
        return `  ${trimmed}`;
      }
      
      if (trimmed.startsWith('<') && !trimmed.startsWith('</')) {
        const result = '    '.repeat(indentLevel) + trimmed;
        if (!trimmed.includes('/>') && !trimmed.includes('</')) {
          indentLevel++;
        }
        return result;
      }
      
      if (trimmed.startsWith('</')) {
        indentLevel = Math.max(0, indentLevel - 1);
        return '    '.repeat(indentLevel) + trimmed;
      }
      
      if (trimmed === ')' || trimmed === '}') {
        indentLevel = Math.max(0, indentLevel - 1);
        return '  '.repeat(indentLevel) + trimmed;
      }
      
      return line;
    });

    return fixedLines.join('\n');
  }

  generateReport() {
    console.log('\n📊 BLOG FORMATTING FIX REPORT\n');
    
    console.log(`✅ Files Fixed: ${this.fixesApplied.length}`);
    
    if (this.fixesApplied.length > 0) {
      console.log('\n🔧 FIXES APPLIED:\n');
      this.fixesApplied.forEach(fix => {
        console.log(`📄 ${path.basename(fix.file)}`);
        fix.fixes.forEach(fixDescription => {
          console.log(`   ✅ ${fixDescription}`);
        });
        console.log('');
      });
    }

    console.log('\n📋 NEXT STEPS:');
    console.log('1. Test the formatted blog posts in browser');
    console.log('2. Check that all sections display properly');
    console.log('3. Verify spacing and formatting looks correct');
    console.log('4. Deploy changes');
  }

  run() {
    console.log('🚀 Starting Blog Formatting Fix...\n');
    
    const blogFiles = this.getAllBlogFiles();
    
    if (blogFiles.length === 0) {
      console.log('❌ No blog files found!');
      return;
    }

    console.log(`📁 Found ${blogFiles.length} blog files to format\n`);

    // Process each file
    blogFiles.forEach(filePath => {
      try {
        this.fixFormattingIssues(filePath);
      } catch (error) {
        console.error(`❌ Error processing ${filePath}:`, error.message);
      }
    });

    this.generateReport();
  }
}

// CLI execution
if (require.main === module) {
  const fixer = new BlogFormattingFixer();
  fixer.run();
}

module.exports = BlogFormattingFixer;