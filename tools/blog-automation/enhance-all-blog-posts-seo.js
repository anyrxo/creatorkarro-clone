#!/usr/bin/env node

const fs = require('fs');
const glob = require('glob');

console.log('🚀 Adding comprehensive SEO metadata to ALL 104 blog posts...');

// Function to generate intelligent SEO data from slug
function generateSEOFromSlug(slug) {
  // Convert slug to readable title
  const words = slug.split('-').map(word => {
    // Handle common abbreviations and special cases
    const upperCaseWords = ['ai', 'seo', 'api', 'ui', 'ux', 'ctr', 'rpa', 'n8n', 'hr', 'iot', 'gpt', 'llm'];
    const specialCases = {
      'gpt4o': 'GPT-4o',
      'gpt5': 'GPT-5',
      'claude4': 'Claude 4',
      'comfyui': 'ComfyUI',
      'deepseek': 'DeepSeek',
      'youtube': 'YouTube',
      'instagram': 'Instagram',
      'telegram': 'Telegram',
      'tiktok': 'TikTok',
      'chatgpt': 'ChatGPT',
      'saas': 'SaaS'
    };
    
    if (specialCases[word.toLowerCase()]) {
      return specialCases[word.toLowerCase()];
    }
    
    if (upperCaseWords.includes(word.toLowerCase())) {
      return word.toUpperCase();
    }
    
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  
  const title = words.join(' ');
  
  // Generate description based on title/slug content
  let description = '';
  const currentYear = '2025';
  
  if (slug.includes('automation')) {
    description = `Complete guide to ${title.toLowerCase()} - proven strategies, tools, and techniques for ${currentYear}`;
  } else if (slug.includes('ai') || slug.includes('gpt') || slug.includes('claude')) {
    description = `${title} comprehensive guide - latest AI tools, strategies, and implementation tips for ${currentYear}`;
  } else if (slug.includes('instagram') || slug.includes('social') || slug.includes('youtube')) {
    description = `${title} strategies that work - proven tactics for growth, engagement, and monetization in ${currentYear}`;
  } else if (slug.includes('business') || slug.includes('monetize') || slug.includes('revenue')) {
    description = `${title} - proven business strategies and monetization techniques for entrepreneurs in ${currentYear}`;
  } else if (slug.includes('guide') || slug.includes('tutorial')) {
    description = `Complete ${title.toLowerCase()} - step-by-step instructions, best practices, and expert tips`;
  } else {
    description = `${title} - comprehensive strategies, tools, and techniques for ${currentYear}`;
  }
  
  // Ensure description is under 160 characters
  if (description.length > 160) {
    description = description.substring(0, 157) + '...';
  }
  
  // Generate keywords based on slug and title
  const baseKeywords = slug.split('-').filter(word => word.length > 2);
  const keywords = [
    ...baseKeywords,
    `${baseKeywords[0]} ${currentYear}`,
    `${baseKeywords.join(' ')}`,
    'automation',
    'AI tools',
    'business growth',
    'productivity',
    `${currentYear} strategies`
  ].filter((keyword, index, arr) => arr.indexOf(keyword) === index).slice(0, 12);
  
  return {
    title,
    description,
    keywords,
    publishDate: '2025-01-15'
  };
}

function createComprehensiveSEOMetadata(seoData, slug) {
  const keywordsStr = seoData.keywords.map(k => `"${k}"`).join(', ');
  
  return `// Comprehensive SEO Metadata
export const metadata = {
  title: "${seoData.title}",
  description: "${seoData.description}",
  keywords: [${keywordsStr}],
  authors: [{ name: "IImagined.ai Team", url: "https://iimagined.ai" }],
  creator: "IImagined.ai",
  publisher: "IImagined.ai",
  category: "Technology",
  openGraph: {
    title: "${seoData.title}",
    description: "${seoData.description}",
    url: "https://iimagined.ai/blog/${slug}",
    siteName: "IImagined.ai",
    type: "article",
    publishedTime: "${seoData.publishDate}T10:00:00.000Z",
    modifiedTime: "${new Date().toISOString()}",
    authors: ["IImagined.ai Team"],
    tags: [${seoData.keywords.slice(0, 8).map(k => `"${k}"`).join(', ')}],
    images: [{
      url: "https://iimagined.ai/images/${slug}-og.jpg",
      width: 1200,
      height: 630,
      alt: "${seoData.title}",
      type: "image/jpeg"
    }],
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    site: "@iimagined_ai",
    creator: "@iimagined_ai", 
    title: "${seoData.title}",
    description: "${seoData.description}",
    images: [{
      url: "https://iimagined.ai/images/${slug}-og.jpg",
      alt: "${seoData.title}"
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
    canonical: "https://iimagined.ai/blog/${slug}"
  }
}`;
}

// Get all blog files
const blogFiles = glob.sync('src/app/blog/*/page.tsx');
let enhancedFiles = 0;
let skippedFiles = 0;

console.log(`Found ${blogFiles.length} blog files to enhance...`);

blogFiles.forEach((filePath, index) => {
  try {
    const slug = filePath.split('/')[3];
    
    // Skip dynamic route
    if (slug === '[slug]') {
      console.log(`  [${index + 1}/${blogFiles.length}] ⏭️  Skipping dynamic route: ${slug}`);
      skippedFiles++;
      return;
    }
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if already has metadata
    if (content.includes('export const metadata')) {
      console.log(`  [${index + 1}/${blogFiles.length}] ✅ ${slug} already has SEO metadata`);
      skippedFiles++;
      return;
    }
    
    console.log(`  [${index + 1}/${blogFiles.length}] 🔧 Enhancing ${slug}...`);
    
    const seoData = generateSEOFromSlug(slug);
    const seoMetadata = createComprehensiveSEOMetadata(seoData, slug);
    
    // Remove 'use client' if present since we're adding metadata
    if (content.includes("'use client'")) {
      content = content.replace("'use client'\n\n", '');
    }
    
    // Add metadata after imports
    const importRegex = /(import.*\n)+/;
    const match = content.match(importRegex);
    
    if (match) {
      const imports = match[0];
      const rest = content.replace(importRegex, '');
      content = imports + '\n' + seoMetadata + '\n' + rest;
    } else {
      // If no imports found, add at the beginning
      content = seoMetadata + '\n\n' + content;
    }
    
    // Write the enhanced content
    fs.writeFileSync(filePath, content);
    enhancedFiles++;
    
  } catch (error) {
    console.error(`  [${index + 1}/${blogFiles.length}] ❌ Error processing ${filePath}: ${error.message}`);
  }
});

console.log(`\n🎉 SEO Enhancement Complete!`);
console.log(`✅ Enhanced: ${enhancedFiles} blog posts`);
console.log(`⏭️  Skipped: ${skippedFiles} posts (already had SEO or dynamic route)`);
console.log(`📊 Total: ${blogFiles.length} blog files processed`);

console.log(`\n📈 Each enhanced post now has:`);
console.log('   - Optimized page titles for search engines');
console.log('   - Meta descriptions under 160 characters');
console.log('   - Complete OpenGraph tags for social sharing');
console.log('   - Twitter Card optimization');
console.log('   - Comprehensive keywords arrays');
console.log('   - Proper robots meta directives');
console.log('   - Canonical URL configuration');
console.log('   - Article metadata for rich snippets');