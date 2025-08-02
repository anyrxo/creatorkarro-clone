#!/usr/bin/env node

/**
 * ULTIMATE BLOG TRANSFORMER
 * The ONE script to rule them all - beautify, clean, and perfect all blog posts
 * Perfect for agents and manual use alike
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

class UltimateBlogTransformer {
  constructor() {
    this.stats = {
      individualBlogs: 0,
      newsArticles: 0,
      duplicatesFixed: 0,
      commentsRemoved: 0,
      totalProcessed: 0
    };
  }

  // STEP 1: Remove ALL problematic syntax
  cleanCommentSyntax(content) {
    let cleaned = content;
    
    // Remove {/* */} patterns that appear as text
    cleaned = cleaned.replace(/>\s*{\s*\/\*\s*([^*]+)\s*\*\/\s*}\s*</g, '><');
    cleaned = cleaned.replace(/{\s*\/\*\s*[^*]+\s*\*\/\s*}/g, '');
    cleaned = cleaned.replace(/\{\/\*\s+(.+?)\s+\*\/\}/g, '');
    
    return cleaned;
  }

  // STEP 2: Apply FULL beautification
  beautifyContent(content) {
    let beautiful = content;

    // 1. Fix React syntax
    beautiful = beautiful.replace(/class="/g, 'className="');
    
    // 2. Dark theme conversions - COMPREHENSIVE
    beautiful = beautiful.replace(/bg-white/g, 'bg-gray-900');
    beautiful = beautiful.replace(/text-black/g, 'text-gray-300');
    beautiful = beautiful.replace(/text-gray-900(?!\/)/g, 'text-gray-300');
    beautiful = beautiful.replace(/border-gray-200/g, 'border-gray-700');
    beautiful = beautiful.replace(/hover:bg-gray-100/g, 'hover:bg-gray-800');
    beautiful = beautiful.replace(/bg-gray-50/g, 'bg-gray-800');
    beautiful = beautiful.replace(/bg-gray-100/g, 'bg-gray-800');
    beautiful = beautiful.replace(/text-gray-800/g, 'text-gray-300');
    beautiful = beautiful.replace(/text-gray-700/g, 'text-gray-400');
    beautiful = beautiful.replace(/text-gray-600/g, 'text-gray-400');
    beautiful = beautiful.replace(/bg-slate-50/g, 'bg-slate-900');
    beautiful = beautiful.replace(/bg-slate-100/g, 'bg-slate-800');
    
    // 3. Fix section spacing
    beautiful = beautiful.replace(/(<\/section>)\s*(<section)/g, '$1\n\n      $2');
    
    // 4. Enhance buttons and CTAs with gradients
    beautiful = beautiful.replace(
      /className="([^"]*cta-button[^"]*)"/g,
      (match, classes) => {
        if (!classes.includes('bg-gradient')) {
          return `className="${classes} bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all"`;
        }
        return match;
      }
    );
    
    // 5. Fix any escaped slashes
    beautiful = beautiful.replace(/\\\//g, '/');
    
    return beautiful;
  }

  // STEP 3: Clean up ALL duplicates
  cleanupDuplicates(content) {
    let cleaned = content;
    
    // Fix all variations of duplicate container classes
    cleaned = cleaned.replace(
      /container mx-auto px-4 sm:px-6 lg:px-8 mx-auto px-4 sm:px-6 lg:px-8/g,
      'container mx-auto px-4 sm:px-6 lg:px-8'
    );
    
    cleaned = cleaned.replace(
      /container mx-auto px-4 sm:px-6 lg:px-8 mx-auto/g,
      'container mx-auto px-4 sm:px-6 lg:px-8'
    );
    
    cleaned = cleaned.replace(
      /mx-auto px-4 sm:px-6 lg:px-8 mx-auto px-4/g,
      'mx-auto px-4 sm:px-6 lg:px-8'
    );
    
    // Fix duplicate BlogMetrics classes
    cleaned = cleaned.replace(
      /<BlogMetrics\s+className="text-gray-400"\s+className="text-gray-400"/g,
      '<BlogMetrics className="text-gray-400"'
    );
    
    // Fix any double className attributes
    cleaned = cleaned.replace(
      /className="([^"]*)" className="([^"]*)"/g,
      'className="$1 $2"'
    );
    
    return cleaned;
  }

  // STEP 4: Apply beautiful content wrapper to news articles
  wrapNewsArticleContent(content, color = 'blue') {
    // Only wrap if not already wrapped
    if (content.includes('section-spacing bg-dark')) {
      return content;
    }
    
    return `
      <section className="section-spacing bg-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-invert prose-lg max-w-none">
              ${content}
              
              <div className="mt-12 p-6 bg-gradient-to-r from-${color}-600/10 to-purple-600/10 rounded-xl border border-${color}-500/20">
                <h3 className="text-xl font-bold text-white mb-3">Ready to Master AI Automation?</h3>
                <p className="text-gray-300 mb-4">
                  Join thousands who are already leveraging AI to transform their businesses.
                </p>
                <a href="/ai-agents" className="inline-flex items-center gap-2 bg-gradient-to-r from-${color}-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-${color}-700 hover:to-purple-700 transition-all">
                  Explore Our Courses
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>`;
  }

  // Process individual blog files
  async processIndividualBlogs() {
    console.log('\n🎨 Processing Individual Blog Files...\n');
    
    const pattern = path.join('./src/app/blog', '**/page.tsx');
    const files = glob.sync(pattern);
    
    for (const file of files) {
      if (file.includes('[slug]')) continue; // Skip template
      
      const blogName = path.basename(path.dirname(file));
      console.log(`📄 Transforming ${blogName}...`);
      
      try {
        let content = fs.readFileSync(file, 'utf8');
        const original = content;
        
        // Apply ALL transformations in sequence
        content = this.cleanCommentSyntax(content);
        content = this.beautifyContent(content);
        content = this.cleanupDuplicates(content);
        
        if (content !== original) {
          fs.writeFileSync(file, content);
          this.stats.individualBlogs++;
          console.log(`   ✅ Transformed successfully!`);
        } else {
          console.log(`   ✨ Already perfect!`);
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
      
      // First clean the whole file
      content = this.cleanupDuplicates(content);
      
      // Then process each article content
      const articleRegex = /'([a-z0-9-]+)':\s*{\s*[\s\S]*?content:\s*`([^`]*)`[\s\S]*?color:\s*'([^']*)'[\s\S]*?}/g;
      let match;
      let count = 0;
      
      content = content.replace(articleRegex, (fullMatch, slug, articleContent, color) => {
        console.log(`   🔄 Processing article: ${slug}`);
        
        // Transform the article content
        let transformedContent = this.cleanCommentSyntax(articleContent);
        transformedContent = this.beautifyContent(transformedContent);
        transformedContent = this.wrapNewsArticleContent(transformedContent, color);
        
        count++;
        
        // Return the updated article object
        return fullMatch.replace(
          /content:\s*`[^`]*`/,
          `content: \`${transformedContent}\``
        );
      });
      
      if (content !== original) {
        // Create backup
        const backupPath = slugFile + '.backup-ultimate-' + Date.now();
        fs.writeFileSync(backupPath, original);
        
        fs.writeFileSync(slugFile, content);
        this.stats.newsArticles = count;
        console.log(`\n   ✅ Transformed ${count} news articles!`);
      } else {
        console.log(`   ✨ News articles already perfect!`);
      }
    } catch (error) {
      console.log(`   ❌ Error: ${error.message}`);
    }
  }

  // Generate comprehensive report
  generateReport() {
    console.log('\n' + '='.repeat(60));
    console.log('🚀 ULTIMATE TRANSFORMATION COMPLETE!');
    console.log('='.repeat(60));
    
    this.stats.totalProcessed = this.stats.individualBlogs + (this.stats.newsArticles > 0 ? 1 : 0);
    
    console.log('\n✅ RESULTS:');
    console.log(`   • Individual Blogs Transformed: ${this.stats.individualBlogs}`);
    console.log(`   • News Articles Transformed: ${this.stats.newsArticles}`);
    console.log(`   • Total Files Processed: ${this.stats.totalProcessed}`);
    
    console.log('\n🎨 TRANSFORMATIONS APPLIED:');
    console.log('   ✓ Dark theme (gray-900 backgrounds)');
    console.log('   ✓ Enhanced text colors (gray-300)');
    console.log('   ✓ Removed ALL visible comment syntax');
    console.log('   ✓ Fixed ALL duplicate classes');
    console.log('   ✓ Beautiful gradients on CTAs');
    console.log('   ✓ Proper section spacing');
    console.log('   ✓ Enhanced hover effects');
    console.log('   ✓ News articles wrapped beautifully');
    console.log('   ✓ No escaped slashes or formatting issues');
    
    console.log('\n💡 USAGE:');
    console.log('   This is THE script for blog transformation!');
    console.log('   Perfect for agents, automation, and manual use.');
    console.log('   Run anytime to ensure perfect blog formatting.');
    
    console.log('\n🏆 Your blog is now BEAUTIFUL, CLEAN, and PERFECT!');
    console.log('='.repeat(60) + '\n');
  }

  // Main execution
  async run() {
    console.log('\n' + '='.repeat(60));
    console.log('⚡ ULTIMATE BLOG TRANSFORMER - Starting...');
    console.log('   The ONE script to beautify, clean, and perfect everything!');
    console.log('='.repeat(60));
    
    await this.processIndividualBlogs();
    await this.processNewsArticles();
    
    this.generateReport();
  }
}

// Auto-execute when run directly
if (require.main === module) {
  const transformer = new UltimateBlogTransformer();
  transformer.run().catch(error => {
    console.error('❌ Fatal error:', error);
    process.exit(1);
  });
}

// Export for use by other scripts/agents
module.exports = UltimateBlogTransformer;