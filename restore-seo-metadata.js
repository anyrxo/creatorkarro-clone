#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

console.log('🚀 Restoring SEO metadata to all blog posts...');

// Find all blog page.tsx files
const blogFiles = glob.sync('src/app/blog/*/page.tsx');
console.log(`Found ${blogFiles.length} blog files to restore SEO metadata`);

let fixedCount = 0;

// Helper function to generate SEO metadata from blog content
function generateSEOMetadata(content, slug) {
  // Extract title from h1 tag
  const titleMatch = content.match(/<h1[^>]*>([^<]+(?:<span[^>]*>[^<]+<\/span>[^<]*)*)<\/h1>/);
  let title = 'Blog Post';
  if (titleMatch) {
    title = titleMatch[1]
      .replace(/<span[^>]*>/g, '')
      .replace(/<\/span>/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  }

  // Extract description from first paragraph
  const descMatch = content.match(/<p[^>]*className="text-xl[^"]*"[^>]*>([^<]+)<\/p>/);
  let description = title;
  if (descMatch) {
    description = descMatch[1].replace(/\s+/g, ' ').trim().substring(0, 155) + '...';
  }

  // Generate keywords based on content
  const keywords = [
    slug.replace(/-/g, ' '),
    'automation',
    'AI',
    'business automation',
    'workflow optimization',
    'productivity tools'
  ];

  // Generate proper metadata structure
  return `
// SEO Metadata
export const metadata = {
  title: '${title}',
  description: '${description}',
  keywords: ${JSON.stringify(keywords)},
  openGraph: {
    title: '${title}',
    description: '${description}',
    type: 'article',
    publishedTime: '${new Date().toISOString()}',
    authors: ['IImagined.ai Team'],
    tags: ${JSON.stringify(keywords.slice(0, 5))},
  },
  twitter: {
    card: 'summary_large_image',
    title: '${title}',
    description: '${description}',
  }
};`;
}

blogFiles.forEach((filePath, index) => {
  try {
    console.log(`[${index + 1}/${blogFiles.length}] Processing: ${filePath}`);
    
    let content = fs.readFileSync(filePath, 'utf8');
    const slug = path.basename(path.dirname(filePath));
    
    // Skip if already has metadata or if it's the [slug] dynamic route
    if (content.includes('export const metadata') || slug === '[slug]') {
      console.log(`  ⏭️  Already has metadata or is dynamic route: ${slug}`);
      return;
    }

    // Check if this is a client component
    if (content.includes("'use client'")) {
      console.log(`  🔄 Converting client component to server component: ${slug}`);
      
      // Remove 'use client' directive
      content = content.replace("'use client'\n\n", '');
      
      // Remove hooks and client-side imports that require client components
      content = content.replace(/import.*useScrollAnimation.*\n/g, '');
      content = content.replace(/import.*BlogMetrics.*\n/g, '');
      content = content.replace(/const.*useScrollAnimation.*\n/g, '');
      content = content.replace(/const.*Animation.*useScrollAnimation.*\n/g, '');
      
      // Remove hook usage in JSX
      content = content.replace(/\{\.\.\..*Animation\}/g, '');
      content = content.replace(/ref=\{.*Animation\.ref\}/g, '');
      
      // Remove BlogMetrics components
      content = content.replace(/<BlogMetrics[^>]*\/>/g, '');
      content = content.replace(/<BlogMetrics[^>]*>.*?<\/BlogMetrics>/gs, '');
    }

    // Generate and add SEO metadata at the end of the file
    const seoMetadata = generateSEOMetadata(content, slug);
    
    // Add metadata before the closing of the file
    if (!content.endsWith('\n')) {
      content += '\n';
    }
    content += seoMetadata;

    // Write the updated content
    fs.writeFileSync(filePath, content);
    fixedCount++;
    console.log(`  ✅ Added SEO metadata: ${slug}`);
    
  } catch (error) {
    console.error(`  ❌ Error processing ${filePath}:`, error.message);
  }
});

console.log('\n🎉 SEO metadata restoration complete!');
console.log(`✅ Added SEO metadata to: ${fixedCount} files`);
console.log(`⏭️  Skipped: ${blogFiles.length - fixedCount} files`);