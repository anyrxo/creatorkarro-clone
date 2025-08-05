const fs = require('fs');
const path = require('path');

console.log('🔄 Merging existing blog posts with generated posts...');

// Read the current generated posts
const blogDataPath = path.join(__dirname, '../data/blog-posts.ts');
let blogDataContent = fs.readFileSync(blogDataPath, 'utf8');

// Extract the generated posts array
const generatedMatch = blogDataContent.match(/export const allBlogPosts: BlogPost\[\] = (\[[\s\S]*?\]);/);
if (!generatedMatch) {
  console.error('❌ Could not parse generated blog posts');
  process.exit(1);
}

const generatedPosts = JSON.parse(generatedMatch[1]);
console.log(`📊 Found ${generatedPosts.length} generated posts`);

// Scan for ALL original blog post directories
const blogDir = path.join(__dirname, '../app/blog');
const allDirectories = fs.readdirSync(blogDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory() && dirent.name !== '[slug]')
  .map(dirent => dirent.name);

console.log(`📁 Found ${allDirectories.length} total blog directories`);

// Find which directories are NOT in the generated posts
const generatedSlugs = new Set(generatedPosts.map(post => post.slug));
const originalSlugs = allDirectories.filter(slug => !generatedSlugs.has(slug));

console.log(`📝 Found ${originalSlugs.length} original posts to preserve`);

// Extract metadata from original posts
const originalPosts = [];
let idCounter = generatedPosts.length + 1;

for (const slug of originalSlugs) {
  const pagePath = path.join(blogDir, slug, 'page.tsx');
  
  if (fs.existsSync(pagePath)) {
    try {
      const content = fs.readFileSync(pagePath, 'utf8');
      
      // Extract title from metadata or h1
      let title = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      const titleMatch = content.match(/title.*?["']([^"']+)["']/i) || 
                       content.match(/<h1[^>]*>([^<]+)<\/h1>/i);
      if (titleMatch) {
        title = titleMatch[1].replace(/\s*\|\s*.*$/, '').trim();
      }
      
      // Extract description  
      let description = `${title} - comprehensive guide and strategies`;
      const descMatch = content.match(/description.*?["']([^"']+)["']/i);
      if (descMatch) {
        description = descMatch[1].trim();
      }
      
      // Determine category based on content
      let category = 'Business';
      if (content.includes('instagram') || content.includes('social')) category = 'Social Media';
      else if (content.includes('automation') || content.includes('n8n')) category = 'Automation';
      else if (content.includes('ai') || content.includes('AI')) category = 'AI Tools';
      else if (content.includes('course') || content.includes('digital product')) category = 'Education';
      else if (content.includes('comfyui') || content.includes('image')) category = 'Creative Tools';
      
      // Extract tags from content
      const tags = [];
      const commonKeywords = ['automation', 'ai', 'instagram', 'business', 'course', 'guide', 'strategy', 'tools', 'marketing', 'social media'];
      for (const keyword of commonKeywords) {
        if (content.toLowerCase().includes(keyword)) {
          tags.push(keyword);
        }
      }
      if (tags.length === 0) tags.push('guide', 'strategy');
      
      originalPosts.push({
        id: idCounter++,
        title,
        slug,
        description,
        category,
        date: '2025-08-05',
        readTime: 12,
        featured: Math.random() < 0.1, // 10% featured
        tags: tags.slice(0, 3)
      });
      
    } catch (error) {
      console.warn(`⚠️ Could not process ${slug}:`, error.message);
    }
  }
}

console.log(`✅ Processed ${originalPosts.length} original posts`);

// Merge all posts
const allPosts = [...generatedPosts, ...originalPosts];
console.log(`🎯 Total posts: ${allPosts.length}`);

// Generate categories and tags
const categories = [...new Set(allPosts.map(post => post.category))];
const allTags = [...new Set(allPosts.flatMap(post => post.tags))];

// Select featured posts (mix of generated and original)
const featuredPosts = allPosts.filter(post => post.featured);
console.log(`⭐ Featured posts: ${featuredPosts.length}`);

// Create new blog data content
const newBlogData = `// Auto-generated blog posts data (merged with original posts)
// Generated on: ${new Date().toISOString()}
// Original posts preserved: ${originalPosts.length}
// Generated posts: ${generatedPosts.length}
// Total posts: ${allPosts.length}

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

export const allBlogPosts: BlogPost[] = ${JSON.stringify(allPosts, null, 2)};

export const categories: string[] = ${JSON.stringify(categories, null, 2)};

export const featuredPosts: BlogPost[] = allBlogPosts.filter(post => post.featured);

export const tags: string[] = ${JSON.stringify(allTags, null, 2)};

export const blogStats = {
  totalPosts: ${allPosts.length},
  originalPosts: ${originalPosts.length},
  generatedPosts: ${generatedPosts.length},
  categories: ${categories.length},
  tags: ${allTags.length},
  featuredPosts: ${featuredPosts.length}
};
`;

// Write the merged data
fs.writeFileSync(blogDataPath, newBlogData);

console.log('🎉 Successfully merged blog posts!');
console.log(`📊 Final stats:
  - Original posts preserved: ${originalPosts.length}
  - Generated posts: ${generatedPosts.length}  
  - Total posts: ${allPosts.length}
  - Categories: ${categories.length}
  - Tags: ${allTags.length}
  - Featured posts: ${featuredPosts.length}`);