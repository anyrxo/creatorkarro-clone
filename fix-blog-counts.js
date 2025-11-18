const fs = require('fs');
const path = require('path');

const BLOG_DIR = path.join(__dirname, 'src', 'app', 'blog');
const OUTPUT_FILE = path.join(__dirname, 'src', 'data', 'blog-posts.ts');

console.log('🔄 Regenerating blog-posts.ts...\n');

const blogDirs = fs.readdirSync(BLOG_DIR)
  .filter(dir => {
    const dirPath = path.join(BLOG_DIR, dir);
    return fs.statSync(dirPath).isDirectory() && dir !== '[slug]';
  })
  .filter(dir => {
    const pagePath = path.join(BLOG_DIR, dir, 'page.tsx');
    return fs.existsSync(pagePath);
  });

console.log(`Found ${blogDirs.length} blog post directories\n`);

const allBlogPosts = [];
const categoriesSet = new Set();
const tagsSet = new Set();

blogDirs.forEach((slug, index) => {
  const pagePath = path.join(BLOG_DIR, slug, 'page.tsx');
  const content = fs.readFileSync(pagePath, 'utf8');

  if (content.includes('redirect(')) {
    console.log(`⏭️  Skipping redirect: ${slug}`);
    return;
  }

  const titleMatch = content.match(/title:\s*["'](.+?)["']/);
  const descMatch = content.match(/description:\s*["'](.+?)["']/);
  const categoryMatch = content.match(/category:\s*["'](.+?)["']/);
  const keywordsMatch = content.match(/keywords:\s*\[([^\]]+)\]/);

  const title = titleMatch ? titleMatch[1] : slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const description = descMatch ? descMatch[1] : '';
  const category = categoryMatch ? categoryMatch[1] : 'Technology';

  let tags = [];
  if (keywordsMatch) {
    tags = keywordsMatch[1]
      .split(',')
      .map(k => k.trim().replace(/["']/g, ''))
      .filter(k => k.length > 0)
      .slice(0, 8);
  }

  const wordCount = content.split(/\s+/).length;
  const readTime = Math.max(3, Math.ceil(wordCount / 200));
  const featured = wordCount > 2000;

  categoriesSet.add(category);
  tags.forEach(tag => tagsSet.add(tag));

  allBlogPosts.push({
    id: index + 1,
    title,
    slug,
    description,
    category,
    date: 'Jan 15, 2025',
    readTime,
    featured,
    tags
  });
});

allBlogPosts.sort((a, b) => {
  if (a.featured !== b.featured) return b.featured - a.featured;
  return a.title.localeCompare(b.title);
});

const categories = Array.from(categoriesSet).sort();
const tags = Array.from(tagsSet).sort();
const featuredPosts = allBlogPosts.filter(post => post.featured);

console.log(`\n📊 Statistics:`);
console.log(`   Total Posts: ${allBlogPosts.length}`);
console.log(`   Categories: ${categories.length}`);
console.log(`   Tags: ${tags.length}`);
console.log(`   Featured: ${featuredPosts.length}`);

const tsContent = `// Auto-generated from blog directories
// Last updated: ${new Date().toISOString()}
// Total posts: ${allBlogPosts.length}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  description: string;
  category: string;
  date: string;
  readTime: number;
  featured: boolean;
  tags: string[];
}

// All blog posts (${allBlogPosts.length} posts)
export const allBlogPosts: BlogPost[] = ${JSON.stringify(allBlogPosts, null, 2)};

// Categories (${categories.length})
export const categories: string[] = ${JSON.stringify(categories, null, 2)};

// Tags (${tags.length})
export const tags: string[] = ${JSON.stringify(tags, null, 2)};

// Featured posts (${featuredPosts.length})
export const featuredPosts: BlogPost[] = allBlogPosts.filter(post => post.featured);
`;

fs.writeFileSync(OUTPUT_FILE, tsContent, 'utf8');

console.log(`\n✅ Successfully regenerated blog-posts.ts!`);
console.log(`   File: ${OUTPUT_FILE}`);
console.log(`   Total: ${allBlogPosts.length} posts\n`);

