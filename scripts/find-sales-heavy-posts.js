const fs = require('fs');
const path = require('path');

const BLOG_DIR = path.join(__dirname, '..', 'src', 'app', 'blog');

console.log('🔍 SCANNING ALL BLOG POSTS FOR SALES-HEAVY CONTENT...\n');

const allDirs = fs.readdirSync(BLOG_DIR)
  .filter(dir => {
    const dirPath = path.join(BLOG_DIR, dir);
    return fs.statSync(dirPath).isDirectory();
  })
  .filter(dir => {
    const pagePath = path.join(BLOG_DIR, dir, 'page.tsx');
    return fs.existsSync(pagePath);
  });

const salesHeavyPosts = [];
const acceleratedPrograms = [];

allDirs.forEach(slug => {
  const pagePath = path.join(BLOG_DIR, slug, 'page.tsx');
  const content = fs.readFileSync(pagePath, 'utf8');

  // Check for redirect
  if (content.includes('redirect(')) {
    return;
  }

  // Check if it's an accelerated-program post
  if (slug.startsWith('accelerated-program-')) {
    acceleratedPrograms.push(slug);
    return;
  }

  // Count sales indicators
  const salesIndicators = [
    /Join Now/gi,
    /Buy Now/gi,
    /Get Access/gi,
    /Enroll/gi,
    /Purchase/gi,
    /\$\d{2,}/g,
    /Limited Time/gi,
    /Special Offer/gi,
    /Don't Miss Out/gi,
    /Act Now/gi,
    /Exclusive Access/gi,
    /Premium/gi,
    /Unlock/gi,
    /Upgrade/gi,
    /Save \d+%/gi
  ];

  let totalSalesMatches = 0;
  salesIndicators.forEach(regex => {
    const matches = content.match(regex) || [];
    totalSalesMatches += matches.length;
  });

  // If more than 5 sales indicators, mark as sales-heavy
  if (totalSalesMatches > 5) {
    const wordCount = content.split(/\s+/).length;
    salesHeavyPosts.push({
      slug,
      salesCount: totalSalesMatches,
      wordCount
    });
  }
});

// Sort by sales count (highest first)
salesHeavyPosts.sort((a, b) => b.salesCount - a.salesCount);

console.log('📊 RESULTS:\n');
console.log(`❌ Sales-heavy posts: ${salesHeavyPosts.length}`);
console.log(`🚫 Accelerated-program posts: ${acceleratedPrograms.length}`);
console.log(`✅ Clean educational posts: ${allDirs.length - salesHeavyPosts.length - acceleratedPrograms.length}\n`);

if (salesHeavyPosts.length > 0) {
  console.log('SALES-HEAVY POSTS (need rewriting):\n');
  salesHeavyPosts.forEach((post, i) => {
    console.log(`${i + 1}. ${post.slug}`);
    console.log(`   Sales indicators: ${post.salesCount}`);
    console.log(`   Word count: ${post.wordCount}`);
    console.log('');
  });
}

if (acceleratedPrograms.length > 0) {
  console.log('\nACCELERATED-PROGRAM POSTS (should be removed/moved):\n');
  acceleratedPrograms.forEach((slug, i) => {
    console.log(`${i + 1}. ${slug}`);
  });
}

// Save to file for processing
const outputFile = path.join(__dirname, 'sales-heavy-posts.json');
fs.writeFileSync(outputFile, JSON.stringify({
  salesHeavy: salesHeavyPosts.map(p => p.slug),
  acceleratedPrograms
}, null, 2));

console.log(`\n✅ Results saved to: ${outputFile}`);
console.log(`\n💡 Next steps:`);
console.log(`   1. Remove ${acceleratedPrograms.length} accelerated-program posts`);
console.log(`   2. Rewrite ${salesHeavyPosts.length} sales-heavy posts with educational content`);
