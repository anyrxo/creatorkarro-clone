const fs = require('fs');
const path = require('path');

const BLOG_DIR = path.join(__dirname, '..', 'src', 'app', 'blog');

// Sample 20 random blog posts to analyze content quality
const allDirs = fs.readdirSync(BLOG_DIR)
  .filter(dir => {
    const dirPath = path.join(BLOG_DIR, dir);
    return fs.statSync(dirPath).isDirectory();
  })
  .filter(dir => {
    const pagePath = path.join(BLOG_DIR, dir, 'page.tsx');
    return fs.existsSync(pagePath);
  });

// Sample 20 random posts
const sampleDirs = allDirs.sort(() => 0.5 - Math.random()).slice(0, 20);

console.log('📊 ANALYZING 20 RANDOM BLOG POSTS\n');

const analysis = {
  salesHeavy: [],
  educational: [],
  mixed: [],
  thin: []
};

sampleDirs.forEach(slug => {
  const pagePath = path.join(BLOG_DIR, slug, 'page.tsx');
  const content = fs.readFileSync(pagePath, 'utf8');

  // Check for redirect
  if (content.includes('redirect(')) {
    return;
  }

  // Count content indicators
  const wordCount = content.split(/\s+/).length;
  const hasJoinNow = content.match(/Join Now|Buy Now|Get Access|Enroll|Purchase|\$\d+/gi) || [];
  const hasCTA = hasJoinNow.length;
  const hasH2 = (content.match(/<h2|## /g) || []).length;
  const hasH3 = (content.match(/<h3|### /g) || []).length;
  const hasListItems = (content.match(/<li>|• /g) || []).length;
  const hasParagraphs = (content.match(/<p |<p>/g) || []).length;

  const salesScore = hasCTA * 10;
  const eduScore = hasH2 * 5 + hasH3 * 3 + hasListItems * 2 + hasParagraphs;

  const type = salesScore > eduScore ? 'salesHeavy' :
               salesScore > 30 ? 'mixed' :
               wordCount < 1000 ? 'thin' : 'educational';

  analysis[type].push({
    slug,
    wordCount,
    salesCTAs: hasCTA,
    headers: hasH2 + hasH3,
    type
  });
});

console.log('RESULTS:\n');
console.log(`✅ Educational: ${analysis.educational.length}`);
console.log(`⚠️  Mixed (sales + education): ${analysis.mixed.length}`);
console.log(`❌ Sales-heavy: ${analysis.salesHeavy.length}`);
console.log(`📄 Thin content (<1000 words): ${analysis.thin.length}`);

console.log('\n📊 DETAILED BREAKDOWN:\n');

if (analysis.salesHeavy.length > 0) {
  console.log('Sales-Heavy Posts (NEED REWRITE):');
  analysis.salesHeavy.forEach(p => {
    console.log(`  - ${p.slug} (${p.wordCount} words, ${p.salesCTAs} CTAs)`);
  });
  console.log('');
}

if (analysis.thin.length > 0) {
  console.log('Thin Content Posts (NEED EXPANSION):');
  analysis.thin.forEach(p => {
    console.log(`  - ${p.slug} (${p.wordCount} words)`);
  });
  console.log('');
}

if (analysis.educational.length > 0) {
  console.log('Good Educational Posts (KEEP):');
  analysis.educational.slice(0, 5).forEach(p => {
    console.log(`  - ${p.slug} (${p.wordCount} words, ${p.headers} headers)`);
  });
  if (analysis.educational.length > 5) {
    console.log(`  ... and ${analysis.educational.length - 5} more`);
  }
}

// Extrapolate to full blog
const totalPosts = allDirs.length;
const sampleSize = sampleDirs.length;
const estimatedSalesHeavy = Math.round((analysis.salesHeavy.length / sampleSize) * totalPosts);
const estimatedThin = Math.round((analysis.thin.length / sampleSize) * totalPosts);
const estimatedGood = Math.round((analysis.educational.length / sampleSize) * totalPosts);

console.log('\n📈 ESTIMATED FULL BLOG (532 posts):');
console.log(`  Educational: ~${estimatedGood} posts (${Math.round(estimatedGood/totalPosts*100)}%)`);
console.log(`  Sales-heavy: ~${estimatedSalesHeavy} posts (${Math.round(estimatedSalesHeavy/totalPosts*100)}%)`);
console.log(`  Thin content: ~${estimatedThin} posts (${Math.round(estimatedThin/totalPosts*100)}%)`);

console.log('\n💡 RECOMMENDATION:');
if (estimatedSalesHeavy > 100) {
  console.log('  ⚠️  MAJOR REWRITE NEEDED - 100+ sales-heavy posts');
  console.log('  Consider AI-assisted bulk rewriting for efficiency');
} else if (estimatedSalesHeavy > 50) {
  console.log('  ⚠️  MODERATE REWRITE - 50-100 posts need work');
} else {
  console.log('  ✅ MINOR TWEAKS - Most content is already good!');
}
