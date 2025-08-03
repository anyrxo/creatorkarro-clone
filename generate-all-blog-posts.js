const fs = require('fs');
const path = require('path');

// Get all blog post directories
const blogDir = './src/app/blog';
const blogPosts = fs.readdirSync(blogDir)
  .filter(item => {
    const itemPath = path.join(blogDir, item);
    return fs.statSync(itemPath).isDirectory() && item !== 'page.tsx';
  })
  .sort();

console.log(`Found ${blogPosts.length} blog posts`);

// Function to convert slug to title
function slugToTitle(slug) {
  return slug
    .split('-')
    .map(word => {
      // Handle special cases
      if (word === 'ai') return 'AI';
      if (word === 'gpt4o') return 'GPT-4o';
      if (word === 'gpt5') return 'GPT-5';
      if (word === 'gpt') return 'GPT';
      if (word === 'claude') return 'Claude';
      if (word === 'n8n') return 'N8N';
      if (word === 'seo') return 'SEO';
      if (word === 'api') return 'API';
      if (word === 'iot') return 'IoT';
      if (word === 'hr') return 'HR';
      if (word === 'vs') return 'vs';
      if (word === 'diy') return 'DIY';
      if (word === 'ui') return 'UI';
      if (word === 'ux') return 'UX';
      if (word === 'saas') return 'SaaS';
      if (word === 'crm') return 'CRM';
      if (word === 'roi') return 'ROI';
      if (word === 'ceo') return 'CEO';
      if (word === 'cto') return 'CTO';
      if (word === '2025') return '2025';
      if (word === '2024') return '2024';
      if (word === '500k') return '500K';
      
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}

// Function to generate description based on slug
function generateDescription(slug) {
  const title = slugToTitle(slug);
  
  if (slug.includes('automation')) {
    return `Complete guide to ${title.toLowerCase()} - step-by-step strategies and tools to automate your processes effectively`;
  }
  if (slug.includes('ai-')) {
    return `Discover how ${title.toLowerCase()} can transform your business with cutting-edge AI strategies and practical implementation tips`;
  }
  if (slug.includes('guide')) {
    return `Comprehensive ${title.toLowerCase()} with proven strategies, best practices, and real-world examples for success`;
  }
  if (slug.includes('growth') || slug.includes('hacks')) {
    return `Proven ${title.toLowerCase()} strategies used by top creators to build massive audiences and engagement`;
  }
  if (slug.includes('monetization') || slug.includes('income')) {
    return `Learn how to ${title.toLowerCase()} with effective monetization strategies and revenue optimization techniques`;
  }
  if (slug.includes('tools') || slug.includes('comparison')) {
    return `In-depth ${title.toLowerCase()} analysis - features, pricing, and which option is best for your needs`;
  }
  if (slug.includes('digital-products')) {
    return `Master ${title.toLowerCase()} to build a profitable online business with proven digital product strategies`;
  }
  if (slug.includes('social-media')) {
    return `Advanced ${title.toLowerCase()} tactics to grow your social presence and engage your audience effectively`;
  }
  
  return `Comprehensive guide to ${title.toLowerCase()} with actionable strategies and proven techniques for success`;
}

// Function to categorize posts
function categorizePost(slug) {
  if (slug.includes('ai-') || slug.includes('automation') || slug.includes('claude') || slug.includes('gpt') || slug.includes('gemini')) {
    return 'AI & Automation';
  }
  if (slug.includes('instagram') || slug.includes('tiktok') || slug.includes('youtube') || slug.includes('twitter') || slug.includes('linkedin') || slug.includes('facebook') || slug.includes('social-media')) {
    return 'Social Media';
  }
  if (slug.includes('digital-products') || slug.includes('monetize') || slug.includes('passive-income') || slug.includes('revenue') || slug.includes('business')) {
    return 'Digital Products';
  }
  if (slug.includes('content') || slug.includes('creator') || slug.includes('viral') || slug.includes('faceless')) {
    return 'Content Creation';
  }
  if (slug.includes('marketing') || slug.includes('ads') || slug.includes('funnel') || slug.includes('lead-generation')) {
    return 'Marketing';
  }
  if (slug.includes('tools') || slug.includes('comparison') || slug.includes('review') || slug.includes('n8n') || slug.includes('zapier')) {
    return 'Tools & Platforms';
  }
  if (slug.includes('crypto') || slug.includes('trading') || slug.includes('affiliate') || slug.includes('dropshipping')) {
    return 'Business';
  }
  return 'Technology';
}

// Generate blog post objects
const blogPostsData = blogPosts.map((slug, index) => {
  const title = slugToTitle(slug);
  const description = generateDescription(slug);
  const category = categorizePost(slug);
  
  // Calculate read time based on content complexity
  let readTime = Math.floor(Math.random() * 8) + 5; // 5-12 minutes
  if (slug.includes('guide') || slug.includes('complete') || slug.includes('comprehensive')) {
    readTime += 3; // Longer for comprehensive guides
  }
  
  // Generate publish dates (recent posts)
  const daysAgo = Math.floor(Math.random() * 30); // Last 30 days
  const publishDate = new Date();
  publishDate.setDate(publishDate.getDate() - daysAgo);
  
  const publishedAt = publishDate.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric' 
  });

  // Mark some as featured based on popularity indicators
  const featured = [
    'digital-products-ideas-2025',
    'instagram-growth-2025', 
    'ai-automation-guide',
    'passive-income-blueprint',
    'cursor-ai-coding',
    'youtube-shorts-strategy'
  ].includes(slug);

  return {
    slug,
    title,
    description,
    category,
    readTime: `${readTime} min`,
    publishedAt,
    featured
  };
});

// Generate the TypeScript interface and data
const blogPostsCode = `const blogPosts: BlogPost[] = [
${blogPostsData.map(post => `  {
    slug: '${post.slug}',
    title: '${post.title}',
    description: '${post.description}',
    category: '${post.category}',
    readTime: '${post.readTime}',
    publishedAt: '${post.publishedAt}',${post.featured ? '\n    featured: true' : ''}
  }`).join(',\n')}
];`;

console.log(`Generated ${blogPostsData.length} blog posts`);
console.log('\nCategories:', [...new Set(blogPostsData.map(p => p.category))]);
console.log('\nFeatured posts:', blogPostsData.filter(p => p.featured).length);

// Write to file
fs.writeFileSync('blog-posts-data.js', blogPostsCode);
console.log('\nBlog posts data written to blog-posts-data.js');