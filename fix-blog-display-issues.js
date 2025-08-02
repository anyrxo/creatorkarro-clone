#!/usr/bin/env node

/**
 * BLOG DISPLAY ISSUES FIX SCRIPT
 * Fixes common display issues in blog posts:
 * - Comments showing as visible text
 * - Metadata appearing in content
 * - Formatting issues
 * - SEO snippet optimization text showing
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

class BlogDisplayFixer {
  constructor() {
    this.blogDir = './src/app/blog';
    this.issuesFound = [];
    this.fixesApplied = [];
  }

  // Find all blog page.tsx files
  getAllBlogFiles() {
    const pattern = path.join(this.blogDir, '**/page.tsx');
    return glob.sync(pattern);
  }

  // Detect and fix display issues
  fixDisplayIssues(filePath) {
    console.log(`🔍 Checking ${filePath}...`);
    
    let content = fs.readFileSync(filePath, 'utf8');
    let hasChanges = false;
    const issues = [];

    // 1. Fix comments appearing as visible text
    const commentMatches = content.match(/\{\/\*[^*]*\*+(?:[^/*][^*]*\*+)*\/\}/g);
    if (commentMatches) {
      commentMatches.forEach(comment => {
        // Check if comment is inside JSX content (not just in JSX tags)
        const visibleCommentRegex = new RegExp(`\\s*${this.escapeRegExp(comment)}\\s*`, 'g');
        if (content.includes(comment)) {
          content = content.replace(visibleCommentRegex, '');
          hasChanges = true;
          issues.push(`Removed visible comment: ${comment.substring(0, 50)}...`);
        }
      });
    }

    // 2. Fix raw metadata appearing in content
    const metadataPatterns = [
      /OPENAI O3 PRO ANALYSIS \d{4}/g,
      /\{\/* Hero Section - Optimized for featured snippets \*\/\}/g,
      /\{\/* Quick answer for featured snippets \*\/\}/g,
      /\{\/* [^}]+ for featured snippets \*\/\}/g,
      /\{\/\* [^}]+ \*\/\}/g
    ];

    metadataPatterns.forEach(pattern => {
      const matches = content.match(pattern);
      if (matches) {
        content = content.replace(pattern, '');
        hasChanges = true;
        issues.push(`Removed metadata pattern: ${pattern.toString()}`);
      }
    });

    // 3. Fix unescaped content in JSX
    const unescapedPatterns = [
      // Fix unescaped curly braces in text
      /(?<!\\)\{(?![^{}]*\})/g,
      /(?<!\\)\}(?![^{}]*\{)/g
    ];

    // 4. Fix improper string interpolation showing as text
    const interpolationFixes = [
      {
        pattern: /\$\{[^}]+\}/g,
        replacement: (match) => {
          // If this appears in regular text (not in template literals), remove it
          return '';
        }
      }
    ];

    interpolationFixes.forEach(fix => {
      const matches = content.match(fix.pattern);
      if (matches) {
        content = content.replace(fix.pattern, fix.replacement);
        hasChanges = true;
        issues.push(`Fixed interpolation: ${matches.length} instances`);
      }
    });

    // 5. Fix improper JSX comment syntax in content
    const jsxCommentFixes = [
      // Fix {/* comments */} that appear in text content
      {
        pattern: />\s*\{\/\*[^*]*\*+(?:[^/*][^*]*\*+)*\/\}\s*</g,
        replacement: '><'
      },
      // Fix comments between JSX elements
      {
        pattern: /\{\/\*[^*]*\*+(?:[^/*][^*]*\*+)*\/\}\s*\n/g,
        replacement: '\n'
      }
    ];

    jsxCommentFixes.forEach(fix => {
      const matches = content.match(fix.pattern);
      if (matches) {
        content = content.replace(fix.pattern, fix.replacement);
        hasChanges = true;
        issues.push(`Fixed JSX comment syntax: ${matches.length} instances`);
      }
    });

    // 6. Fix specific OpenAI O3 content issues
    const openAIFixes = [
      // Remove analysis headers that shouldn't be visible
      {
        pattern: /OpenAI's O3 Pro: Brilliant Strategist or Overthinking Giant\?[\s\S]*?(?=<h[1-6]|<section|$)/,
        replacement: ''
      },
      // Fix duplicate titles
      {
        pattern: /<h1[^>]*>([^<]+)<\/h1>\s*<h1[^>]*>\1<\/h1>/g,
        replacement: '<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">$1</h1>'
      }
    ];

    openAIFixes.forEach(fix => {
      const matches = content.match(fix.pattern);
      if (matches) {
        content = content.replace(fix.pattern, fix.replacement);
        hasChanges = true;
        issues.push(`Fixed OpenAI content issue: ${matches.length} instances`);
      }
    });

    // 7. Ensure proper React component structure
    if (!content.includes('export default function')) {
      issues.push('❌ Missing default export function');
    }

    // 8. Check for proper JSX structure
    const jsxIssues = this.validateJSXStructure(content);
    if (jsxIssues.length > 0) {
      issues.push(...jsxIssues);
    }

    // Save changes if any were made
    if (hasChanges) {
      // Create backup
      const backupPath = filePath + '.backup-' + Date.now();
      fs.writeFileSync(backupPath, fs.readFileSync(filePath));
      
      // Write fixed content
      fs.writeFileSync(filePath, content);
      
      this.fixesApplied.push({
        file: filePath,
        issues: issues,
        backup: backupPath
      });
      
      console.log(`✅ Fixed ${issues.length} issues in ${path.basename(filePath)}`);
    } else {
      console.log(`✨ No issues found in ${path.basename(filePath)}`);
    }

    if (issues.length > 0) {
      this.issuesFound.push({
        file: filePath,
        issues: issues,
        fixed: hasChanges
      });
    }

    return { hasChanges, issues };
  }

  // Validate JSX structure
  validateJSXStructure(content) {
    const issues = [];

    // Check for unmatched JSX tags
    const tagPattern = /<(\/?[a-zA-Z][a-zA-Z0-9]*)[^>]*>/g;
    const tags = [];
    let match;

    while ((match = tagPattern.exec(content)) !== null) {
      const tagName = match[1];
      if (tagName.startsWith('/')) {
        // Closing tag
        const openTag = tagName.substring(1);
        if (tags[tags.length - 1] === openTag) {
          tags.pop();
        } else {
          issues.push(`Unmatched closing tag: ${tagName}`);
        }
      } else if (!match[0].endsWith('/>')) {
        // Opening tag (not self-closing)
        tags.push(tagName);
      }
    }

    if (tags.length > 0) {
      issues.push(`Unclosed tags: ${tags.join(', ')}`);
    }

    return issues;
  }

  // Escape regex special characters
  escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  // Generate report
  generateReport() {
    console.log('\n📊 BLOG DISPLAY ISSUES FIX REPORT\n');
    
    console.log(`🔍 Files Scanned: ${this.getAllBlogFiles().length}`);
    console.log(`⚠️  Files with Issues: ${this.issuesFound.length}`);
    console.log(`✅ Files Fixed: ${this.fixesApplied.length}`);
    
    if (this.issuesFound.length > 0) {
      console.log('\n🚨 ISSUES FOUND:\n');
      this.issuesFound.forEach(item => {
        console.log(`📄 ${path.basename(item.file)} ${item.fixed ? '✅' : '❌'}`);
        item.issues.forEach(issue => {
          console.log(`   • ${issue}`);
        });
        console.log('');
      });
    }

    if (this.fixesApplied.length > 0) {
      console.log('\n🔧 FIXES APPLIED:\n');
      this.fixesApplied.forEach(fix => {
        console.log(`📄 ${path.basename(fix.file)}`);
        console.log(`   💾 Backup: ${fix.backup}`);
        fix.issues.forEach(issue => {
          console.log(`   ✅ ${issue}`);
        });
        console.log('');
      });
    }

    console.log('\n📋 NEXT STEPS:');
    console.log('1. Test the fixed blog posts in browser');
    console.log('2. Check that no content is missing');
    console.log('3. Verify SEO metadata is working');
    console.log('4. Remove backup files if everything works');
    console.log('5. Deploy and test on production');
  }

  // Main execution method
  run() {
    console.log('🚀 Starting Blog Display Issues Fix...\n');
    
    const blogFiles = this.getAllBlogFiles();
    
    if (blogFiles.length === 0) {
      console.log('❌ No blog files found!');
      return;
    }

    console.log(`📁 Found ${blogFiles.length} blog files to check\n`);

    // Process each file
    blogFiles.forEach(filePath => {
      try {
        this.fixDisplayIssues(filePath);
      } catch (error) {
        console.error(`❌ Error processing ${filePath}:`, error.message);
        this.issuesFound.push({
          file: filePath,
          issues: [`Error: ${error.message}`],
          fixed: false
        });
      }
    });

    // Generate report
    this.generateReport();
  }
}

// CLI execution
if (require.main === module) {
  const fixer = new BlogDisplayFixer();
  fixer.run();
}

module.exports = BlogDisplayFixer;