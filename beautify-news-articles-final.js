#!/usr/bin/env node

/**
 * BEAUTIFY NEWS ARTICLES - FINAL VERSION
 * Properly beautifies all articles in newsArticles object
 * Preserves beauty while fixing display issues
 */

const fs = require('fs');
const path = require('path');

// Beautiful content transformation
function transformToBeautiful(content, color = 'blue') {
  let beautiful = content;

  // 1. Fix basic React syntax
  beautiful = beautiful.replace(/class="/g, 'className="');
  
  // 2. Apply dark theme
  beautiful = beautiful.replace(/bg-white/g, 'bg-gray-900');
  beautiful = beautiful.replace(/text-black/g, 'text-gray-300');
  beautiful = beautiful.replace(/text-gray-900/g, 'text-gray-300');
  beautiful = beautiful.replace(/border-gray-200/g, 'border-gray-700');
  beautiful = beautiful.replace(/hover:bg-gray-100/g, 'hover:bg-gray-800');
  
  // 3. Remove visible comment syntax but keep structure
  beautiful = beautiful.replace(/{\s*\/\*\s*[^*]+\s*\*\/\s*}/g, '');
  
  // 4. Fix template literals
  beautiful = beautiful.replace(/\${new Date\(\)\.getFullYear\(\)}/g, '2025');
  
  // 5. Wrap in beautiful dark section
  return `
      <section className="section-spacing bg-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-invert prose-lg max-w-none">
              ${beautiful}
              
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

// Process the blog file
function beautifyNewsArticles() {
  const filePath = path.join(__dirname, 'src/app/blog/[slug]/page.tsx');
  
  console.log('🎨 Beautifying news articles...\n');
  
  if (!fs.existsSync(filePath)) {
    console.log('❌ Blog file not found!');
    return;
  }

  let fileContent = fs.readFileSync(filePath, 'utf8');
  const originalContent = fileContent;

  // Find newsArticles object
  const newsArticlesMatch = fileContent.match(/const newsArticles.*?=.*?{([\s\S]*?)^}/m);
  if (!newsArticlesMatch) {
    console.log('❌ Could not find newsArticles object!');
    return;
  }

  // Extract all articles
  const articleRegex = /'([a-z0-9-]+)':\s*{[\s\S]*?content:\s*`([^`]*)`[\s\S]*?color:\s*'([^']*)'[\s\S]*?}/g;
  let match;
  let updatedCount = 0;

  while ((match = articleRegex.exec(fileContent)) !== null) {
    const [fullMatch, slug, content, color] = match;
    console.log(`🔄 Processing: ${slug}`);
    
    // Transform the content
    const beautifulContent = transformToBeautiful(content, color);
    
    // Create the replacement
    const replacement = fullMatch.replace(
      /content:\s*`[^`]*`/,
      `content: \`${beautifulContent}\``
    );
    
    // Replace in file content
    fileContent = fileContent.replace(fullMatch, replacement);
    updatedCount++;
  }

  // Write the updated file
  if (fileContent !== originalContent) {
    // Create backup
    const backupPath = filePath + '.backup-' + Date.now();
    fs.writeFileSync(backupPath, originalContent);
    console.log(`\n💾 Backup created: ${backupPath}`);
    
    // Write updated content
    fs.writeFileSync(filePath, fileContent);
    console.log(`✅ Successfully beautified ${updatedCount} articles!`);
  } else {
    console.log('✨ No changes needed - already beautiful!');
  }

  console.log('\n🎨 BEAUTIFICATION COMPLETE!');
  console.log('   • Dark theme applied');
  console.log('   • Comment syntax cleaned');
  console.log('   • Beautiful CTAs added');
  console.log('   • Gradient effects included');
  console.log('   • Proper spacing maintained');
}

// Run the beautification
beautifyNewsArticles();