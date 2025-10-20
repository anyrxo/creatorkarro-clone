const fs = require('fs');
const path = require('path');

const BLOG_DIR = path.join(__dirname, '..', 'src', 'app', 'blog');

console.log('📊 CONSOLIDATING BLOG CATEGORIES...\n');

// Define the new simplified category structure
const CATEGORY_MAP = {
  // AI & Automation (everything AI-related)
  'AI & Automation': [
    'AI & Machine Learning',
    'AI Automation',
    'AI Automation Mastery',
    'AI Content Creation',
    'AI Tools',
    'Automation',
    'Machine Learning',
    'Content Automation',
    'Workflow Automation'
  ],

  // Trading & Finance (all trading/financial content)
  'Trading & Finance': [
    'Prop Firms',
    'Technical Analysis',
    'Trading Psychology',
    'Futures Trading',
    'Financial Trading',
    'Investment'
  ],

  // Instagram & Social Media (social media growth)
  'Instagram & Social Media': [
    'Instagram Growth',
    'Instagram Marketing',
    'Social Media',
    'Social Media Marketing',
    'Content Strategy',
    'Influencer Marketing',
    'TikTok',
    'YouTube'
  ],

  // Digital Products & Business (entrepreneurship)
  'Digital Products & Business': [
    'Digital Products',
    'Business',
    'Entrepreneurship',
    'Online Business',
    'Product Launch',
    'Creator Economy',
    'Monetization'
  ],

  // SEO & Marketing (marketing/seo strategies)
  'SEO & Marketing': [
    'SEO',
    'Marketing',
    'Content Marketing',
    'Email Marketing',
    'Digital Marketing',
    'Growth Hacking'
  ],

  // Technology (general tech topics)
  'Technology': [
    'Technology',
    'Tech',
    'Software',
    'Tools',
    'Productivity',
    'Development'
  ]
};

// Reverse mapping for quick lookup
const getCategoryFor = (oldCategory) => {
  for (const [newCat, oldCats] of Object.entries(CATEGORY_MAP)) {
    if (oldCats.includes(oldCategory)) {
      return newCat;
    }
  }
  return 'Technology'; // Default fallback
};

// Get all blog posts
const allDirs = fs.readdirSync(BLOG_DIR)
  .filter(dir => {
    const dirPath = path.join(BLOG_DIR, dir);
    return fs.statSync(dirPath).isDirectory();
  })
  .filter(dir => {
    const pagePath = path.join(BLOG_DIR, dir, 'page.tsx');
    return fs.existsSync(pagePath);
  });

let updated = 0;
let skipped = 0;
const categoryCount = {};

allDirs.forEach(slug => {
  const pagePath = path.join(BLOG_DIR, slug, 'page.tsx');
  let content = fs.readFileSync(pagePath, 'utf8');

  // Skip redirects
  if (content.includes('redirect(')) {
    skipped++;
    return;
  }

  // Extract current category
  const categoryMatch = content.match(/category:\s*["']([^"']+)["']/);
  if (!categoryMatch) {
    console.log(`⚠️  No category found: ${slug}`);
    skipped++;
    return;
  }

  const oldCategory = categoryMatch[1];
  const newCategory = getCategoryFor(oldCategory);

  // Track category usage
  categoryCount[newCategory] = (categoryCount[newCategory] || 0) + 1;

  // Update if changed
  if (oldCategory !== newCategory) {
    content = content.replace(
      /category:\s*["'][^"']+["']/,
      `category: "${newCategory}"`
    );

    fs.writeFileSync(pagePath, content, 'utf8');
    updated++;
  }
});

console.log('📊 RESULTS:\n');
console.log(`✅ Updated: ${updated} posts`);
console.log(`⏭️  Skipped: ${skipped} posts (redirects/no category)`);
console.log(`📁 Total: ${allDirs.length} posts\n`);

console.log('📈 NEW CATEGORY DISTRIBUTION:\n');
Object.entries(categoryCount)
  .sort((a, b) => b[1] - a[1])
  .forEach(([cat, count]) => {
    const percentage = ((count / (allDirs.length - skipped)) * 100).toFixed(1);
    console.log(`  ${cat}: ${count} posts (${percentage}%)`);
  });

console.log(`\n✅ Categories consolidated from 41 to ${Object.keys(categoryCount).length}!`);
console.log('\n💡 Next: Run regenerate-blog-data.js to update the blog index');
