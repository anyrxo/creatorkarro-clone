const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'data', 'blog-posts.ts');
const content = fs.readFileSync(filePath, 'utf-8');

const updated = content.replace(
  /\/\/ Featured posts \(\d+\)\nexport const featuredPosts[\s\S]*?\.slice\(0, \d+\);/,
  `// Featured posts - Manually curated high-quality posts (19 premium agent-created posts)
export const featuredPosts: BlogPost[] = allBlogPosts.filter(post =>
  [
    // Batch 1 (7 posts)
    'creating-ai-influencers',
    'topstep-vs-myfundedtrader-comparison',
    'rsi-trading-strategy-complete-guide',
    'instagram-growth-2025',
    'n8n-beginners-guide',
    'sales-page-psychology',
    'how-to-sell-templates',
    // Batch 2 (12 posts)
    'comfyui-advanced-techniques-professional-workflows',
    'ai-influencer-monetization-complete-guide-2025',
    'ftmo-challenge-guide-pass-first-attempt-2025',
    'order-flow-trading-strategy-complete-guide',
    'futures-trading-psychology-master-emotions-win',
    'instagram-reels-viral-formula-10m-views-2025',
    'instagram-hashtag-strategy-2025-what-actually-works',
    'instagram-content-pillars-build-engaged-audience',
    'n8n-instagram-automation-complete-growth-workflow',
    'n8n-crm-automation-pipedrive-hubspot-salesforce',
    'digital-product-validation-test-idea-before-building',
    'online-course-platform-comparison-teachable-gumroad-thinkific'
  ].includes(post.slug)
);`
);

fs.writeFileSync(filePath, updated);
console.log('✅ Updated featuredPosts to showcase 19 premium blog posts');
