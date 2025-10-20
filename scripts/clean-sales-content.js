const fs = require('fs');
const path = require('path');

const BLOG_DIR = path.join(__dirname, '..', 'src', 'app', 'blog');
const salesData = require('./sales-heavy-posts.json');

console.log('🧹 CLEANING SALES CONTENT FROM BLOG POSTS...\n');

let cleaned = 0;
let errors = 0;

// Sales patterns to remove or replace
const salesPatterns = [
  { pattern: /Join Now/gi, replace: 'Learn More' },
  { pattern: /Buy Now/gi, replace: 'Discover' },
  { pattern: /Get Access/gi, replace: 'Explore' },
  { pattern: /Enroll/gi, replace: 'Read' },
  { pattern: /Purchase/gi, replace: 'Access' },
  { pattern: /Limited Time Offer/gi, replace: '' },
  { pattern: /Special Offer/gi, replace: '' },
  { pattern: /Don't Miss Out/gi, replace: '' },
  { pattern: /Act Now/gi, replace: '' },
  { pattern: /Exclusive Access/gi, replace: 'Access' },
  { pattern: /\$\d{2,},?\d{0,3}\s*value/gi, replace: '' },
  { pattern: /Save \d+%/gi, replace: '' },
  { pattern: /Only \d+ spots left/gi, replace: '' },
  { pattern: /Premium Members/gi, replace: 'Readers' },
  { pattern: /Unlock Premium/gi, replace: 'Access' },
  { pattern: /Upgrade Now/gi, replace: 'Continue Reading' },
];

// Function to clean sales content
function cleanSalesContent(content) {
  let cleaned = content;

  salesPatterns.forEach(({pattern, replace}) => {
    cleaned = cleaned.replace(pattern, replace);
  });

  // Remove empty Link tags that were pointing to sales pages
  cleaned = cleaned.replace(/<Link href="\/checkout"[^>]*>\s*<\/Link>/g, '');

  // Remove entire CTA sections (look for sections with multiple sales indicators)
  cleaned = cleaned.replace(
    /<section[^>]*className="[^"]*cta[^"]*"[^>]*>[\s\S]{1,2000}?<\/section>/gi,
    ''
  );

  return cleaned;
}

// Clean all sales-heavy posts
salesData.salesHeavy.forEach(slug => {
  const pagePath = path.join(BLOG_DIR, slug, 'page.tsx');

  if (!fs.existsSync(pagePath)) {
    console.log(`⚠️  File not found: ${slug}`);
    errors++;
    return;
  }

  try {
    let content = fs.readFileSync(pagePath, 'utf8');
    const originalLength = content.length;

    // Clean the content
    content = cleanSalesContent(content);

    const cleanedLength = content.length;
    const reduction = originalLength - cleanedLength;

    if (reduction > 0) {
      // Create backup
      fs.writeFileSync(pagePath + '.sales-backup', content, 'utf8');

      // Write cleaned content
      fs.writeFileSync(pagePath, content, 'utf8');

      console.log(`✅ Cleaned: ${slug}`);
      console.log(`   Removed ${reduction} characters of sales content`);
      cleaned++;
    } else {
      console.log(`⏭️  No changes needed: ${slug}`);
    }
  } catch (error) {
    console.log(`❌ Error cleaning ${slug}:`, error.message);
    errors++;
  }
});

console.log(`\n📊 RESULTS:`);
console.log(`   Cleaned: ${cleaned}`);
console.log(`   Errors: ${errors}`);
console.log(`   Total processed: ${salesData.salesHeavy.length}`);

// Handle accelerated-program posts - convert to redirects
console.log(`\n🔄 Converting accelerated-program posts to redirects...`);

let redirected = 0;

salesData.acceleratedPrograms.forEach(slug => {
  const pagePath = path.join(BLOG_DIR, slug, 'page.tsx');

  if (!fs.existsSync(pagePath)) {
    console.log(`⚠️  File not found: ${slug}`);
    return;
  }

  // Determine redirect destination based on program name
  let redirectTo = '/';
  if (slug.includes('instagram')) redirectTo = '/instagram-ignited';
  else if (slug.includes('ai-automation')) redirectTo = '/ai-influencers';
  else if (slug.includes('ai-influencers')) redirectTo = '/ai-influencers';
  else if (slug.includes('digital-products')) redirectTo = '/digital-products';
  else if (slug.includes('n8n')) redirectTo = '/blog';
  else if (slug.includes('comfyui')) redirectTo = '/blog';

  const redirectContent = `import { redirect } from 'next/navigation'

export default function RedirectPage() {
  redirect('${redirectTo}')
}
`;

  // Backup original
  const original = fs.readFileSync(pagePath, 'utf8');
  fs.writeFileSync(pagePath + '.original-backup', original, 'utf8');

  // Write redirect
  fs.writeFileSync(pagePath, redirectContent, 'utf8');

  console.log(`✅ Redirected: ${slug} → ${redirectTo}`);
  redirected++;
});

console.log(`\n✅ DONE!`);
console.log(`   ${cleaned} posts cleaned of sales content`);
console.log(`   ${redirected} accelerated-program posts converted to redirects`);
console.log(`   ${salesData.salesHeavy.length + salesData.acceleratedPrograms.length} total posts processed`);
