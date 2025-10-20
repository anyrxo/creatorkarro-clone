const fs = require('fs');
const path = require('path');

const BLOG_DIR = path.join(__dirname, '..', 'src', 'app', 'blog');
const OUTPUT_FILE = path.join(__dirname, '..', 'src', 'data', 'blog-posts.ts');

console.log('🔄 Regenerating blog-posts.ts from actual blog directories...\n');

// Get all blog directories
const blogDirs = fs.readdirSync(BLOG_DIR)
  .filter(dir => {
    const dirPath = path.join(BLOG_DIR, dir);
    return fs.statSync(dirPath).isDirectory();
  })
  .filter(dir => {
    // Check if it has a page.tsx
    const pagePath = path.join(BLOG_DIR, dir, 'page.tsx');
    return fs.existsSync(pagePath);
  });

console.log(`Found ${blogDirs.length} blog post directories\n`);

const allBlogPosts = [];
const categoriesSet = new Set();
const tagsSet = new Set();

// Read metadata from each blog post
blogDirs.forEach((slug, index) => {
  const pagePath = path.join(BLOG_DIR, slug, 'page.tsx');
  const content = fs.readFileSync(pagePath, 'utf8');

  // Check if it's a redirect page
  if (content.includes('redirect(')) {
    console.log(`⏭️  Skipping redirect: ${slug}`);
    return;
  }

  // Extract metadata
  const titleMatch = content.match(/title:\s*["'](.+?)["']/);
  const descMatch = content.match(/description:\s*["'](.+?)["']/);
  const categoryMatch = content.match(/category:\s*["'](.+?)["']/);
  const keywordsMatch = content.match(/keywords:\s*\[([^\]]+)\]/);

  const title = titleMatch ? titleMatch[1] : slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const description = descMatch ? descMatch[1] : '';
  const category = categoryMatch ? categoryMatch[1] : 'Technology';

  // Extract keywords as tags
  let tags = [];
  if (keywordsMatch) {
    tags = keywordsMatch[1]
      .split(',')
      .map(k => k.trim().replace(/["']/g, ''))
      .filter(k => k.length > 0)
      .slice(0, 5); // Limit to 5 tags
  }

  // Estimate read time (assume 200 words/min)
  const wordCount = content.split(/\s+/).length;
  const readTime = Math.max(3, Math.ceil(wordCount / 200));

  // Add to categories and tags
  categoriesSet.add(category);
  tags.forEach(tag => tagsSet.add(tag));

  // Determine if featured (top 20 posts by word count)
  const featured = wordCount > 2000;

  allBlogPosts.push({
    id: index + 1,
    title,
    slug,
    description,
    category,
    date: 'Jan 15, 2025', // Default date
    readTime,
    featured,
    tags
  });
});

// Sort by word count/quality (featured first, then by title)
allBlogPosts.sort((a, b) => {
  if (a.featured !== b.featured) return b.featured - a.featured;
  return a.title.localeCompare(b.title);
});

// Get featured posts (top 6)
const featuredPosts = allBlogPosts.filter(post => post.featured).slice(0, 6);

console.log(`\n📊 Statistics:`);
console.log(`   Total Posts: ${allBlogPosts.length}`);
console.log(`   Categories: ${categoriesSet.size}`);
console.log(`   Tags: ${tagsSet.size}`);
console.log(`   Featured: ${featuredPosts.length}`);

// Generate TypeScript file
const categories = Array.from(categoriesSet).sort();
const tags = Array.from(tagsSet).sort();

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
export const featuredPosts: BlogPost[] = allBlogPosts.filter(post => post.featured).slice(0, 6);
`;

// Write the file
fs.writeFileSync(OUTPUT_FILE, tsContent, 'utf8');

console.log(`\n✅ Successfully regenerated blog-posts.ts!`);
console.log(`   File: ${OUTPUT_FILE}`);
console.log(`   Size: ${(tsContent.length / 1024).toFixed(2)} KB\n`);
