#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Get all blog directories
const blogDir = path.join(__dirname, '../src/app/blog');
const dirs = fs.readdirSync(blogDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name)
  .filter(name => name !== '[slug]'); // Exclude dynamic route folder

console.log(`Found ${dirs.length} blog directories`);

// Function to convert slug to title
function slugToTitle(slug) {
  return slug.split('-').map(word => {
    // Handle special cases
    if (word === 'ai') return 'AI';
    if (word === 'api') return 'API';
    if (word === 'seo') return 'SEO';
    if (word === 'iot') return 'IoT';
    if (word === 'crm') return 'CRM';
    if (word === 'vs') return 'vs';
    if (word === 'gpt') return 'GPT';
    if (word === 'claude') return 'Claude';
    if (word === 'chatgpt') return 'ChatGPT';
    if (word === 'devops') return 'DevOps';
    if (word === 'saas') return 'SaaS';
    if (word === 'no') return 'No';
    if (word === 'code') return 'Code';
    
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ');
}

// Function to generate description based on slug
function generateDescription(slug, title) {
  const keywords = slug.split('-');
  
  if (keywords.includes('automation')) {
    return `Discover how ${title.toLowerCase()} can transform your business processes. Learn implementation strategies, best practices, and real-world applications for maximum efficiency.`;
  }
  if (keywords.includes('ai')) {
    return `Explore ${title.toLowerCase()} and its impact on modern business. From implementation to optimization, learn how to leverage AI for competitive advantage.`;
  }
  if (keywords.includes('marketing')) {
    return `Master ${title.toLowerCase()} with our comprehensive guide. Discover proven strategies, tools, and techniques to boost your marketing ROI.`;
  }
  if (keywords.includes('development') || keywords.includes('coding')) {
    return `Learn ${title.toLowerCase()} with practical examples and best practices. From setup to deployment, master the skills that matter.`;
  }
  if (keywords.includes('growth')) {
    return `Unlock ${title.toLowerCase()} strategies that drive real results. Learn from successful case studies and actionable insights.`;
  }
  
  return `Comprehensive guide to ${title.toLowerCase()}. Learn practical strategies, tools, and techniques to achieve your goals effectively.`;
}

// Function to determine category based on slug
function getCategory(slug) {
  const keywords = slug.split('-');
  
  if (keywords.some(k => ['ai', 'machine', 'learning', 'gpt', 'claude', 'chatgpt'].includes(k))) {
    return 'AI & Machine Learning';
  }
  if (keywords.some(k => ['automation', 'bot', 'workflow', 'process'].includes(k))) {
    return 'Automation';
  }
  if (keywords.some(k => ['marketing', 'seo', 'content', 'social'].includes(k))) {
    return 'Marketing';
  }
  if (keywords.some(k => ['development', 'coding', 'programming', 'api', 'devops'].includes(k))) {
    return 'Development';
  }
  if (keywords.some(k => ['business', 'strategy', 'growth', 'revenue'].includes(k))) {
    return 'Business Strategy';
  }
  if (keywords.some(k => ['security', 'privacy', 'encryption'].includes(k))) {
    return 'Security';
  }
  if (keywords.some(k => ['mobile', 'app', 'ios', 'android'].includes(k))) {
    return 'Mobile Development';
  }
  if (keywords.some(k => ['cloud', 'aws', 'infrastructure', 'deployment'].includes(k))) {
    return 'Cloud & Infrastructure';
  }
  
  return 'Technology';
}

// Generate blog posts data
const blogPosts = dirs.map((slug, index) => {
  const title = slugToTitle(slug);
  const description = generateDescription(slug, title);
  const category = getCategory(slug);
  
  // Generate realistic dates over the past 6 months
  const daysAgo = Math.floor(Math.random() * 180);
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  
  return {
    id: index + 1,
    title,
    slug,
    description,
    category,
    date: date.toISOString().split('T')[0],
    readTime: Math.floor(Math.random() * 8) + 3, // 3-10 minutes
    featured: index < 6, // First 6 are featured
    tags: slug.split('-').slice(0, 3) // First 3 words as tags
  };
}).sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by date descending

// Generate TypeScript interface and data
const tsContent = `// Auto-generated blog posts data
// Generated on: ${new Date().toISOString()}

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

export const allBlogPosts: BlogPost[] = ${JSON.stringify(blogPosts, null, 2)};

export const featuredPosts = allBlogPosts.filter(post => post.featured);

export const categories = Array.from(new Set(allBlogPosts.map(post => post.category))).sort();

export const allTags = Array.from(new Set(allBlogPosts.flatMap(post => post.tags))).sort();
`;

// Write the data file
const outputPath = path.join(__dirname, '../src/data/blog-posts.ts');
fs.writeFileSync(outputPath, tsContent);

// Extract categories and tags for summary
const categories = Array.from(new Set(blogPosts.map(post => post.category))).sort();
const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags))).sort();
const featuredPosts = blogPosts.filter(post => post.featured);

console.log(`✅ Generated blog data for ${blogPosts.length} posts`);
console.log(`📁 Output: ${outputPath}`);
console.log(`📊 Categories: ${categories.length}`);
console.log(`🏷️  Tags: ${allTags.length}`);
console.log(`⭐ Featured: ${featuredPosts.length}`);