const fs = require('fs');
const path = require('path');

console.log('🚀 TOXIC SEO DOMINATION: Generating HUNDREDS more blog posts...');

// High-converting SEO keywords for course sales
const courseKeywords = [
  // AI Automation Course Keywords
  'ai automation masterclass', 'ai workflow automation', 'business ai automation', 'ai automation agency', 'ai automation consultant',
  'claude ai automation', 'chatgpt automation business', 'ai automation tools review', 'ai automation case studies', 'ai automation roi',
  
  // Instagram Course Keywords  
  'instagram growth algorithm', 'instagram viral strategy', 'instagram monetization blueprint', 'instagram influence building',
  'instagram content calendar', 'instagram hashtag strategy', 'instagram story templates', 'instagram reels mastery',
  
  // N8N Course Keywords
  'n8n workflow templates', 'n8n automation examples', 'n8n business workflows', 'n8n integration tutorials',
  'n8n database automation', 'n8n email automation', 'n8n social media automation', 'n8n crm integration',
  
  // ComfyUI Course Keywords
  'comfyui business models', 'comfyui custom workflows', 'comfyui api integration', 'comfyui batch processing',
  'comfyui model training', 'comfyui controlnet guide', 'comfyui lora training', 'comfyui image upscaling',
  
  // AI Influencers Course Keywords
  'virtual influencer creation', 'ai influencer monetization', 'ai influencer marketing', 'virtual brand ambassador',
  'ai content creation tools', 'virtual influencer strategy', 'ai influencer analytics', 'virtual influencer trends',
  
  // Long-tail SEO keywords
  'how to automate business with ai', 'best ai tools for entrepreneurs', 'ai automation for small business',
  'instagram growth for business', 'n8n tutorial for beginners', 'comfyui for content creators',
  'make money with ai influencers', 'digital products that sell', 'passive income with automation',
  'ai tools for content creation', 'automation tools comparison', 'no code automation guide'
];

// Course-focused categories
const categories = [
  'AI Automation Mastery', 'Instagram Growth Academy', 'N8N Automation Hub', 'ComfyUI Pro Training', 
  'AI Influencers Academy', 'Business Automation', 'Content Creation', 'Digital Marketing',
  'Passive Income Systems', 'Automation Tools Review', 'AI Business Strategy', 'Social Media Mastery'
];

// Generate metadata for hundreds of new posts
function generateBlogMetadata(keyword, index) {
  const category = categories[index % categories.length];
  const courseMapping = {
    'ai automation': 'AI Automation Mastery',
    'instagram': 'Instagram Growth Academy', 
    'n8n': 'N8N Automation Hub',
    'comfyui': 'ComfyUI Pro Training',
    'ai influencer': 'AI Influencers Academy'
  };
  
  // Determine which course this targets
  let targetCourse = 'AI Automation Mastery';
  for (const [key, course] of Object.entries(courseMapping)) {
    if (keyword.toLowerCase().includes(key)) {
      targetCourse = course;
      break;
    }
  }
  
  const title = keyword.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ') + ': Expert Guide 2025';
    
  const slug = keyword.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  
  const description = `${keyword}, ${keyword} guide, ${keyword} tutorial - Expert guide from the creators of ${targetCourse} with 127K+ students and $2.7M+ in student revenue`;
  
  // Generate relevant tags
  const baseWords = keyword.split(' ').slice(0, 3);
  const tags = [
    keyword,
    `${keyword} guide`,
    `${keyword} 2025`,
    ...baseWords
  ].slice(0, 4);
  
  return {
    title,
    slug,
    description: description.slice(0, 160),
    category: targetCourse,
    date: '2025-08-05',
    readTime: Math.floor(Math.random() * 10) + 8, // 8-18 minutes
    featured: Math.random() < 0.08, // 8% featured
    tags,
    courseTarget: targetCourse
  };
}

// Read current blog posts
const blogDataPath = path.join(__dirname, '../data/blog-posts.ts');
const currentData = fs.readFileSync(blogDataPath, 'utf8');
const currentMatch = currentData.match(/export const allBlogPosts: BlogPost\[\] = (\[[\s\S]*?\]);/);
const currentPosts = JSON.parse(currentMatch[1]);

console.log(`📊 Current posts: ${currentPosts.length}`);

// Generate hundreds more posts
const newPosts = [];
let idCounter = currentPosts.length + 1;

courseKeywords.forEach((keyword, index) => {
  const metadata = generateBlogMetadata(keyword, index);
  newPosts.push({
    id: idCounter++,
    ...metadata
  });
});

console.log(`🎯 Generated ${newPosts.length} new posts`);

// Combine all posts
const allPosts = [...currentPosts, ...newPosts];
const totalPosts = allPosts.length;

// Update categories and tags
const allCategories = [...new Set(allPosts.map(post => post.category))];
const allTags = [...new Set(allPosts.flatMap(post => post.tags))];
const featuredCount = allPosts.filter(post => post.featured).length;

// Course distribution analysis
const courseDistribution = {};
newPosts.forEach(post => {
  courseDistribution[post.courseTarget] = (courseDistribution[post.courseTarget] || 0) + 1;
});

console.log('📈 Course targeting distribution:');
Object.entries(courseDistribution).forEach(([course, count]) => {
  console.log(`  ${course}: ${count} posts`);
});

// Generate new blog data file
const newBlogData = `// TOXIC SEO DOMINATION - Mass Blog Generation System
// Generated on: ${new Date().toISOString()}
// Original posts preserved: ${currentPosts.length}
// New posts generated: ${newPosts.length}
// Total posts: ${totalPosts}
// Course sales optimization: ACTIVE

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

export const categories: string[] = ${JSON.stringify(allCategories, null, 2)};

export const featuredPosts: BlogPost[] = allBlogPosts.filter(post => post.featured);

export const tags: string[] = ${JSON.stringify(allTags, null, 2)};

export const blogStats = {
  totalPosts: ${totalPosts},
  originalPosts: ${currentPosts.length},
  newPosts: ${newPosts.length},
  categories: ${allCategories.length},
  tags: ${allTags.length},
  featuredPosts: ${featuredCount},
  courseTargeting: ${JSON.stringify(courseDistribution, null, 2)}
};

// Course sales optimization data
export const courseSalesData = {
  "AI Automation Mastery": {
    posts: ${courseDistribution['AI Automation Mastery'] || 0},
    keywords: ["ai automation", "claude ai", "chatgpt automation", "business automation"]
  },
  "Instagram Growth Academy": {
    posts: ${courseDistribution['Instagram Growth Academy'] || 0},
    keywords: ["instagram growth", "instagram algorithm", "instagram monetization", "social media"]
  },
  "N8N Automation Hub": {
    posts: ${courseDistribution['N8N Automation Hub'] || 0},
    keywords: ["n8n", "workflow automation", "no code automation", "business workflows"]
  },
  "ComfyUI Pro Training": {
    posts: ${courseDistribution['ComfyUI Pro Training'] || 0},
    keywords: ["comfyui", "ai image generation", "stable diffusion", "ai art"]
  },
  "AI Influencers Academy": {
    posts: ${courseDistribution['AI Influencers Academy'] || 0},
    keywords: ["ai influencers", "virtual influencers", "ai content creation", "virtual marketing"]
  }
};
`;

// Write the expanded data
fs.writeFileSync(blogDataPath, newBlogData);

console.log('🎉 TOXIC SEO DOMINATION EXPANDED!');
console.log(`📊 Final stats:
  - Previous posts: ${currentPosts.length} (ALL PRESERVED)
  - New posts generated: ${newPosts.length}
  - Total posts: ${totalPosts}
  - Categories: ${allCategories.length}
  - Tags: ${allTags.length}
  - Featured posts: ${featuredCount}
  
🎯 Course sales optimization:
  - AI Automation Mastery: ${courseDistribution['AI Automation Mastery'] || 0} posts
  - Instagram Growth Academy: ${courseDistribution['Instagram Growth Academy'] || 0} posts  
  - N8N Automation Hub: ${courseDistribution['N8N Automation Hub'] || 0} posts
  - ComfyUI Pro Training: ${courseDistribution['ComfyUI Pro Training'] || 0} posts
  - AI Influencers Academy: ${courseDistribution['AI Influencers Academy'] || 0} posts`);

console.log('\n🚀 Next step: Run npm run expand-blogs to create the actual blog post files!');