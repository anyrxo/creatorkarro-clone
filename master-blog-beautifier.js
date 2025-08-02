#!/usr/bin/env node

/**
 * MASTER BLOG BEAUTIFIER
 * The ultimate script that beautifies EVERYTHING properly
 * Handles both individual blogs and newsArticles
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

class MasterBlogBeautifier {
  constructor() {
    this.stats = {
      individualBlogs: 0,
      newsArticles: 0,
      totalFixed: 0
    };
  }

  // Remove comment syntax but preserve content
  cleanCommentSyntax(content) {
    // Remove {/* */} patterns that appear as text
    let cleaned = content;
    
    // Pattern 1: Comments between tags
    cleaned = cleaned.replace(/>\s*{\s*\/\*\s*([^*]+)\s*\*\/\s*}\s*</g, '><');
    
    // Pattern 2: Standalone comments
    cleaned = cleaned.replace(/{\s*\/\*\s*[^*]+\s*\*\/\s*}/g, '');
    
    // Pattern 3: Comments in content
    cleaned = cleaned.replace(/\{\/\*\s+(.+?)\s+\*\/\}/g, '');
    
    return cleaned;
  }

  // Apply comprehensive beautification
  beautifyContent(content) {
    let beautiful = content;

    // 1. Fix React syntax
    beautiful = beautiful.replace(/class="/g, 'className="');
    
    // 2. Dark theme conversions
    beautiful = beautiful.replace(/bg-white/g, 'bg-gray-900');
    beautiful = beautiful.replace(/text-black/g, 'text-gray-300');
    beautiful = beautiful.replace(/text-gray-900(?!\/)/g, 'text-gray-300');
    beautiful = beautiful.replace(/border-gray-200/g, 'border-gray-700');
    beautiful = beautiful.replace(/hover:bg-gray-100/g, 'hover:bg-gray-800');
    beautiful = beautiful.replace(/bg-gray-50/g, 'bg-gray-800');
    
    // 3. Remove duplicate container classes
    beautiful = beautiful.replace(/container mx-auto px-4 sm:px-6 lg:px-8 mx-auto px-4 sm:px-6 lg:px-8/g, 
                                  'container mx-auto px-4 sm:px-6 lg:px-8');
    
    // 4. Fix BlogMetrics
    beautiful = beautiful.replace(/<BlogMetrics\s+className="text-gray-400"\s+className="text-gray-400"/g, 
                                  '<BlogMetrics className="text-gray-400"');
    
    // 5. Enhance buttons and CTAs
    beautiful = beautiful.replace(
      /className="([^"]*cta-button[^"]*)"/g,
      (match, classes) => {
        if (!classes.includes('bg-gradient')) {
          return `className="${classes} bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all"`;
        }
        return match;
      }
    );

    // 6. Fix section spacing
    beautiful = beautiful.replace(/(<\/section>)\s*(<section)/g, '$1\n\n      $2');

    return beautiful;
  }

  // Process individual blog files
  async processIndividualBlogs() {
    console.log('\n🎨 Processing Individual Blog Files...\n');
    
    const pattern = path.join('./src/app/blog', '**/page.tsx');
    const files = glob.sync(pattern);
    
    for (const file of files) {
      if (file.includes('[slug]')) continue; // Skip template
      
      console.log(`📄 Processing ${path.basename(path.dirname(file))}...`);
      
      try {
        let content = fs.readFileSync(file, 'utf8');
        const original = content;
        
        // Clean and beautify
        content = this.cleanCommentSyntax(content);
        content = this.beautifyContent(content);
        
        if (content !== original) {
          fs.writeFileSync(file, content);
          this.stats.individualBlogs++;
          console.log(`   ✅ Beautified successfully!`);
        } else {
          console.log(`   ✨ Already beautiful!`);
        }
      } catch (error) {
        console.log(`   ❌ Error: ${error.message}`);
      }
    }
  }

  // Process newsArticles in [slug]/page.tsx
  async processNewsArticles() {
    console.log('\n📰 Processing News Articles...\n');
    
    const slugFile = './src/app/blog/[slug]/page.tsx';
    
    try {
      let content = fs.readFileSync(slugFile, 'utf8');
      const original = content;
      
      // Find and process each article content
      const articleRegex = /content:\s*`([^`]+)`/g;
      let match;
      let count = 0;
      
      while ((match = articleRegex.exec(content)) !== null) {
        const articleContent = match[1];
        const cleanedContent = this.cleanCommentSyntax(articleContent);
        const beautifiedContent = this.beautifyContent(cleanedContent);
        
        if (beautifiedContent !== articleContent) {
          content = content.replace(match[0], `content: \`${beautifiedContent}\``);
          count++;
        }
      }
      
      if (content !== original) {
        fs.writeFileSync(slugFile, content);
        this.stats.newsArticles = count;
        console.log(`   ✅ Beautified ${count} news articles!`);
      } else {
        console.log(`   ✨ News articles already beautiful!`);
      }
    } catch (error) {
      console.log(`   ❌ Error: ${error.message}`);
    }
  }

  // Generate comprehensive report
  generateReport() {
    console.log('\n' + '='.repeat(60));
    console.log('📊 MASTER BEAUTIFICATION COMPLETE!');
    console.log('='.repeat(60));
    
    console.log('\n✅ RESULTS:');
    console.log(`   • Individual Blogs Beautified: ${this.stats.individualBlogs}`);
    console.log(`   • News Articles Beautified: ${this.stats.newsArticles}`);
    console.log(`   • Total Files Processed: ${this.stats.individualBlogs + (this.stats.newsArticles > 0 ? 1 : 0)}`);
    
    console.log('\n🎨 BEAUTIFICATION APPLIED:');
    console.log('   ✓ Dark theme (gray-900 backgrounds)');
    console.log('   ✓ Enhanced text colors (gray-300)');
    console.log('   ✓ Removed visible comment syntax');
    console.log('   ✓ Fixed duplicate classes');
    console.log('   ✓ Beautiful gradients on CTAs');
    console.log('   ✓ Proper section spacing');
    console.log('   ✓ Enhanced hover effects');
    
    console.log('\n🚀 Your blog is now BEAUTIFUL and PROFESSIONAL!');
    console.log('='.repeat(60) + '\n');
  }

  // Main execution
  async run() {
    console.log('\n' + '='.repeat(60));
    console.log('🚀 MASTER BLOG BEAUTIFIER - Starting...');
    console.log('='.repeat(60));
    
    await this.processIndividualBlogs();
    await this.processNewsArticles();
    
    this.generateReport();
  }
}

// Execute
if (require.main === module) {
  const beautifier = new MasterBlogBeautifier();
  beautifier.run();
}

module.exports = MasterBlogBeautifier;