const fs = require('fs');
const path = require('path');
const { GoogleGenerativeAI } = require('@google/generative-ai');

console.log('🤖 GEMINI BULK BLOG GENERATOR - MASS CONTENT CREATION');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

// Initialize Gemini AI
require('dotenv').config({ path: path.join(__dirname, '../../.env.local') });
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

// Read existing blog structure to understand patterns
const existingBlogPath = path.join(__dirname, '../app/blog/500k-followers/page.tsx');
const existingBlogContent = fs.readFileSync(existingBlogPath, 'utf8');

// Extract the pattern from existing beautiful blogs
const blogTemplate = `
// Pattern Analysis from existing blogs:
// 1. Comprehensive SEO metadata with OpenGraph, Twitter cards
// 2. Beautiful hero section with stats and gradients  
// 3. Structured content sections with visual elements
// 4. Success stories and case studies
// 5. Strong CTA sections linking to courses
// 6. Related content recommendations
// 7. Consistent design system with animations
`;

// Analyze existing blog structure
function analyzeBlogPattern() {
  console.log('📊 Analyzing existing blog patterns...');
  
  // Extract key patterns from successful blog
  const patterns = {
    heroStructure: 'Hero with category badge, title, description, stats grid',
    contentStructure: 'Multiple sections with visual cards and examples',
    ctaPlacement: 'Multiple CTAs throughout, strong final CTA',
    visualElements: 'Gradients, cards, stats, icons, animations',
    seoOptimization: 'Comprehensive metadata, schema, structured data'
  };
  
  return patterns;
}

// Course-specific content frameworks based on existing patterns
const courseFrameworks = {
  'AI Automation Mastery': {
    heroStats: ['4K+ Students', 'Proven Results', '30 Day Success', '98% Satisfaction'],
    sections: [
      'AI Automation Fundamentals',
      'Building Your First Workflow', 
      'Advanced Integration Strategies',
      'Business Implementation Guide',
      'ROI Optimization Techniques'
    ],
    expertise: 'automation systems for growing businesses',
    cta: 'Transform your business with AI automation'
  },
  'Instagram Growth Academy': {
    heroStats: ['4K+ Students', 'Viral Strategies', '100K+ Growth', 'Creator Success'],
    sections: [
      'Instagram Algorithm Mastery',
      'Content Creation Strategy',
      'Engagement Optimization',
      'Monetization Methods',
      'Scaling Your Influence'
    ],
    expertise: 'viral growth strategies for creators',
    cta: 'Master Instagram growth like a pro'
  },
  'N8N Automation Hub': {
    heroStats: ['4K+ Students', 'No-Code Power', 'Workflow Magic', 'Agency Ready'],
    sections: [
      'N8N Setup and Basics',
      'Advanced Workflow Design',
      'API Integration Mastery',
      'Business Process Automation',
      'Scaling Your Operations'
    ],
    expertise: 'powerful automation workflows for businesses',
    cta: 'Automate everything with N8N mastery'
  },
  'ComfyUI Pro Training': {
    heroStats: ['4K+ Students', 'AI Art Pro', 'Commercial Use', 'Pro Workflows'],
    sections: [
      'ComfyUI Professional Setup',
      'Advanced Workflow Creation',
      'Business Applications',
      'Commercial Licensing',
      'Scaling AI Art Business'
    ],
    expertise: 'professional AI image generation workflows',
    cta: 'Master ComfyUI for business success'
  },
  'AI Influencers Academy': {
    heroStats: ['4K+ Students', 'Virtual Stars', 'AI Personas', 'Future Ready'],
    sections: [
      'Virtual Influencer Creation',
      'AI Personality Development',
      'Content Automation',
      'Monetization Strategies',
      'Scaling Virtual Brands'
    ],
    expertise: 'cutting-edge virtual influencer technology',
    cta: 'Create your AI influencer empire'
  }
};

// Gemini prompt for generating blog content
function createGeminiPrompt(post, framework) {
  return `Create a HEAVILY SEO-OPTIMIZED blog post about "${post.title}" designed to RANK #1 on Google:

TOXIC SEO REQUIREMENTS:
- Topic: ${post.seoKeyword || post.title}
- Target keyword density: 2-3% for main keyword
- Secondary keywords: ${post.tags.slice(0, 5).join(', ')}
- Category: ${post.category}
- GOAL: Rank #1 on Google for "${post.seoKeyword || post.title}"

AGGRESSIVE SEO OPTIMIZATION:
- Use target keyword in H1, H2, H3 headings (natural placement)
- Include keyword in first 100 words and last 100 words
- Add semantic keywords and LSI terms throughout
- Include FAQ section targeting long-tail keywords
- Add internal links to related course pages
- Optimize for featured snippets with numbered lists and tables
- Include "People Also Ask" style content

CONTENT STRUCTURE FOR MAXIMUM SEO:

1. HERO SECTION (SEO-optimized):
   - H1 with exact target keyword
   - Meta description keyword placement
   - Authority stats: ${framework.heroStats.join(', ')}

2. MAIN CONTENT (5 SEO sections):
   ${framework.sections.map((section, i) => `   H2: ${section} (include target keyword)`).join('\n')}

3. COURSE INTEGRATION (Natural product placement):
   - Mention "${framework.cta}" naturally within content
   - Link to course pages with anchor text optimization
   - Include course benefits without over-selling
   - Reference our 4K+ community achievements

4. EMBEDDED COURSE LINKS:
   - Link to relevant courses within content sections
   - Use keyword-rich anchor text
   - Add "Learn more about [topic]" calls-to-action
   - Include course preview boxes mid-content

5. FAQ SECTION (Long-tail SEO):
   - 10+ questions targeting related keywords
   - Answer with keyword optimization
   - Include course mentions in answers

6. BOTTOM CTA SECTION:
   - Strong course enrollment call-to-action
   - Course benefits and social proof
   - Link to course page with optimized anchor text

SEO CONTENT GUIDELINES:
- Target keyword: "${post.seoKeyword || post.title}" (use 15-20 times naturally)
- Write 2500+ words for long-form SEO dominance
- Include numbered lists, bullet points, tables for featured snippets
- Add comparison sections and "vs" content
- Include current year (2025) for freshness
- Use power words: "ultimate", "complete", "master", "proven"
- Add social proof and authority signals
- Include related keyword variations naturally

OUTPUT FORMAT: Return ONLY the React JSX content with aggressive SEO optimization, maintaining beautiful design. Include embedded course links, FAQ sections, and strong CTAs throughout. Use the exact same CSS classes as existing blogs.

Do not include metadata or imports - just the SEO-optimized JSX content starting with the outer div.`;
}

// Generate blog content using Gemini API
async function generateBlogWithGemini(post, framework) {
  try {
    const prompt = createGeminiPrompt(post, framework);
    const result = await model.generateContent(prompt);
    const content = result.response.text();
    
    return content;
  } catch (error) {
    console.warn(`⚠️ Failed to generate content for ${post.slug}:`, error.message);
    return null;
  }
}

// One-by-one generation to avoid API overload
async function generateBlogsOneByOne(posts) {
  console.log(`🤖 Starting ONE BY ONE Gemini generation for ${posts.length} posts...`);
  
  let totalGenerated = 0;
  
  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    console.log(`📝 Processing post ${i + 1}/${posts.length}: ${post.slug}...`);
    
    const framework = courseFrameworks[post.category] || courseFrameworks['AI Automation Mastery'];
    const content = await generateBlogWithGemini(post, framework);
    
    if (content) {
      // Create blog directory and file
      const postDir = path.join(__dirname, '../app/blog', post.slug);
      if (!fs.existsSync(postDir)) {
        fs.mkdirSync(postDir, { recursive: true });
      }
      
      // Generate complete blog file with metadata
      const fullBlogContent = `import React from 'react'
import Link from 'next/link'
import { Calendar, Clock, Tag, TrendingUp, ArrowRight, CheckCircle, Star, Users, BarChart3 } from 'lucide-react'

// Comprehensive SEO Metadata
export const metadata = {
  title: "${post.title}",
  description: "${post.description}",
  keywords: ${JSON.stringify(post.tags.concat(['course', 'training', 'guide', '2025']))},
  authors: [{ name: "IImagined.ai Expert Team", url: "https://iimagined.ai" }],
  creator: "IImagined.ai",
  publisher: "IImagined.ai", 
  category: "${post.category}",
  openGraph: {
    title: "${post.title}",
    description: "${post.description}",
    url: "https://iimagined.ai/blog/${post.slug}",
    siteName: "IImagined.ai",
    type: "article",
    publishedTime: "${post.date}T10:00:00.000Z",
    modifiedTime: "${new Date().toISOString()}",
    authors: ["IImagined.ai Expert Team"],
    tags: ${JSON.stringify(post.tags)},
    images: [{
      url: "https://iimagined.ai/images/${post.slug}-og.jpg",
      width: 1200,
      height: 630,
      alt: "${post.title}",
      type: "image/jpeg"
    }],
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    site: "@iimagined_ai",
    creator: "@iimagined_ai",
    title: "${post.title}",
    description: "${post.description}",
    images: [{
      url: "https://iimagined.ai/images/${post.slug}-og.jpg",
      alt: "${post.title}"
    }]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  alternates: {
    canonical: "https://iimagined.ai/blog/${post.slug}"
  }
}

export default function BlogPost() {
  return (
${content}
  )
}`;
      
      const filePath = path.join(postDir, 'page.tsx');
      fs.writeFileSync(filePath, fullBlogContent);
      totalGenerated++;
      
      console.log(`✅ Generated: ${post.slug}`);
    } else {
      console.log(`❌ Failed: ${post.slug}`);
    }
    
    // Add 3 second delay between each post to respect API limits
    if (i < posts.length - 1) {
      console.log('⏳ Waiting 3 seconds before next post...');
      await new Promise(resolve => setTimeout(resolve, 3000));
    }
  }
  
  console.log(`✅ One-by-one generation complete: ${totalGenerated} blog posts created`);
  return totalGenerated;
}

// Batch generation function
async function generateBlogsBatch(posts, batchSize = 5) {
  console.log(`🤖 Starting Gemini batch generation for ${posts.length} posts...`);
  
  const batches = [];
  for (let i = 0; i < posts.length; i += batchSize) {
    batches.push(posts.slice(i, i + batchSize));
  }
  
  let totalGenerated = 0;
  
  for (let batchIndex = 0; batchIndex < batches.length; batchIndex++) {
    const batch = batches[batchIndex];
    console.log(`📝 Processing batch ${batchIndex + 1}/${batches.length} (${batch.length} posts)...`);
    
    const batchPromises = batch.map(async (post) => {
      const framework = courseFrameworks[post.category] || courseFrameworks['AI Automation Mastery'];
      const content = await generateBlogWithGemini(post, framework);
      
      if (content) {
        // Create blog directory and file
        const postDir = path.join(__dirname, '../app/blog', post.slug);
        if (!fs.existsSync(postDir)) {
          fs.mkdirSync(postDir, { recursive: true });
        }
        
        // Generate complete blog file with metadata
        const fullBlogContent = `import React from 'react'
import Link from 'next/link'
import { Calendar, Clock, Tag, TrendingUp, ArrowRight, CheckCircle, Star, Users, BarChart3 } from 'lucide-react'

// Comprehensive SEO Metadata
export const metadata = {
  title: "${post.title}",
  description: "${post.description}",
  keywords: ${JSON.stringify(post.tags.concat(['course', 'training', 'guide', '2025']))},
  authors: [{ name: "IImagined.ai Expert Team", url: "https://iimagined.ai" }],
  creator: "IImagined.ai",
  publisher: "IImagined.ai", 
  category: "${post.category}",
  openGraph: {
    title: "${post.title}",
    description: "${post.description}",
    url: "https://iimagined.ai/blog/${post.slug}",
    siteName: "IImagined.ai",
    type: "article",
    publishedTime: "${post.date}T10:00:00.000Z",
    modifiedTime: "${new Date().toISOString()}",
    authors: ["IImagined.ai Expert Team"],
    tags: ${JSON.stringify(post.tags)},
    images: [{
      url: "https://iimagined.ai/images/${post.slug}-og.jpg",
      width: 1200,
      height: 630,
      alt: "${post.title}",
      type: "image/jpeg"
    }],
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    site: "@iimagined_ai",
    creator: "@iimagined_ai",
    title: "${post.title}",
    description: "${post.description}",
    images: [{
      url: "https://iimagined.ai/images/${post.slug}-og.jpg",
      alt: "${post.title}"
    }]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  alternates: {
    canonical: "https://iimagined.ai/blog/${post.slug}"
  }
}

export default function BlogPost() {
  return (
${content}
  )
}`;
        
        const filePath = path.join(postDir, 'page.tsx');
        fs.writeFileSync(filePath, fullBlogContent);
        totalGenerated++;
        
        return { success: true, slug: post.slug };
      }
      
      return { success: false, slug: post.slug };
    });
    
    await Promise.all(batchPromises);
    
    // Add delay between batches to respect API limits
    if (batchIndex < batches.length - 1) {
      console.log('⏳ Waiting 2 seconds before next batch...');
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  }
  
  console.log(`✅ Gemini generation complete: ${totalGenerated} blog posts created`);
  return totalGenerated;
}

// Main execution
async function main() {
  try {
    // Read current blog data
    const blogDataPath = path.join(__dirname, '../data/blog-posts.ts');
    const blogData = fs.readFileSync(blogDataPath, 'utf8');
    const postsMatch = blogData.match(/export const allBlogPosts: BlogPost\[\] = (\[[\s\S]*?\]);/);
    const allPosts = JSON.parse(postsMatch[1]);
    
    // Find posts without files
    const blogDir = path.join(__dirname, '../app/blog');
    const existingDirs = fs.readdirSync(blogDir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory() && dirent.name !== '[slug]')
      .map(dirent => dirent.name);
    
    const postsNeedingFiles = allPosts.filter(post => !existingDirs.includes(post.slug));
    
    console.log(`📊 Analysis complete:`);
    console.log(`  - Total posts: ${allPosts.length}`);
    console.log(`  - Existing files: ${existingDirs.length}`);  
    console.log(`  - Need generation: ${postsNeedingFiles.length}`);
    
    if (postsNeedingFiles.length === 0) {
      console.log('✅ All blog posts already have files!');
      return;
    }
    
    // Generate posts one by one to avoid API overload
    const generationLimit = Math.min(postsNeedingFiles.length, 10);
    const postsToGenerate = postsNeedingFiles.slice(0, generationLimit);
    
    console.log(`🤖 Generating ${generationLimit} posts ONE BY ONE with Gemini API...`);
    
    const generated = await generateBlogsOneByOne(postsToGenerate);
    
    console.log('🎉 GEMINI BULK GENERATION COMPLETE!');
    console.log(`📊 Generated ${generated} new blog posts using AI`);
    console.log(`🎯 Remaining posts: ${postsNeedingFiles.length - generated}`);
    
  } catch (error) {
    console.error('❌ Generation failed:', error);
  }
}

// Export for use as module
module.exports = {
  generateBlogsBatch,
  createGeminiPrompt,
  courseFrameworks,
  analyzeBlogPattern
};

// Run if called directly
if (require.main === module) {
  main();
}