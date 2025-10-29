const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, '..', 'src', 'app', 'blog');
const dirs = fs.readdirSync(blogDir, { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => d.name);

console.log('\n📊 BLOG HEALTH ANALYSIS\n');
console.log(`Total blog directories: ${dirs.length}\n`);

// Categorize posts
const categories = {
  beautified: [],
  hasPage: [],
  empty: [],
  redirect: [],
  short: []
};

dirs.forEach(dir => {
  const pagePath = path.join(blogDir, dir, 'page.tsx');
  
  if (!fs.existsSync(pagePath)) {
    categories.empty.push(dir);
    return;
  }
  
  const content = fs.readFileSync(pagePath, 'utf-8');
  const lines = content.split('\n').length;
  
  // Check if beautified (has gradient boxes)
  if (content.includes('bg-gradient-to-r from-blue-600/10')) {
    categories.beautified.push(dir);
  }
  // Check if redirect (very short, <100 lines)
  else if (lines < 100) {
    categories.redirect.push(dir);
  }
  // Check if short content (<300 lines)
  else if (lines < 300) {
    categories.short.push(dir);
  }
  else {
    categories.hasPage.push(dir);
  }
});

console.log(`✨ Beautified posts: ${categories.beautified.length}`);
console.log(`📄 Regular posts: ${categories.hasPage.length}`);
console.log(`📝 Short posts (<300 lines): ${categories.short.length}`);
console.log(`↩️  Redirect/Empty posts (<100 lines): ${categories.redirect.length}`);
console.log(`❌ No page.tsx: ${categories.empty.length}\n`);

// Save detailed report
const report = {
  timestamp: new Date().toISOString(),
  total: dirs.length,
  categories,
  recommendations: {
    keep: categories.beautified.length + categories.hasPage.length,
    review: categories.short.length,
    archive: categories.redirect.length + categories.empty.length
  }
};

fs.writeFileSync(
  path.join(__dirname, '..', '_ARCHIVE', '2025-01-29-cleanup', 'blog-health-report.json'),
  JSON.stringify(report, null, 2)
);

console.log('✅ Report saved to _ARCHIVE/2025-01-29-cleanup/blog-health-report.json');
