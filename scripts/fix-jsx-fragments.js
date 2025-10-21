const fs = require('fs');
const path = require('path');

// List of broken blog post files from TypeScript errors
const brokenFiles = [
  'advanced-comfyui-workflows-professional-ai-art',
  'ai-automation-workflows-integrate-gpt-with-n8n',
  'ai-image-generation-for-influencers-professional-guide',
  'ai-influencers-complete-guide-virtual-influencer-creation-2025',
  'best-ai-content-creation-tools-virtual-influencers-2025',
  'best-automation-tools-2025-n8n-vs-zapier-vs-make',
  'best-passive-income-ideas-digital-products-2025',
  'business-process-automation-save-20-hours-per-week',
  'comfyui-installation-setup-complete-beginner-guide',
  'comfyui-tutorial-master-ai-image-generation-2025',
  'comfyui-vs-stable-diffusion-complete-tool-comparison',
  'composer-agent-code-llm-full-stack',
  'create-online-courses-that-sell-step-by-step-blueprint',
  'digital-product-launch-strategy-idea-to-100k',
  'digital-product-pricing-strategy-maximize-revenue',
  'email-marketing-automation-advanced-n8n-sequences',
  'how-to-create-digital-products-that-sell-2025',
  'how-to-get-10k-instagram-followers-fast',
  'how-to-make-money-with-ai-influencers-15-proven-methods',
  'how-to-make-money-with-comfyui-ai-art-business-guide',
  'instagram-algorithm-secrets-master-2025',
  'instagram-content-strategy-maximum-engagement-2025',
  'instagram-growth-hacks-that-work-2025',
  'instagram-influencer-marketing-build-personal-brand',
  'instagram-monetization-guide-15-ways-make-money',
  'instagram-reels-algorithm-viral-content-strategy-2025',
  'instagram-story-marketing-advanced-engagement-tactics',
  'n8n-api-integration-connect-any-service-workflows',
  'n8n-database-automation-automate-data-workflows',
  'n8n-tutorial-complete-beginners-guide-automation-2025',
  'n8n-zapier-alternative-why-n8n-superior-automation',
  'online-course-creation-guide-build-sell-courses',
  'sell-digital-products-on-etsy-complete-success-guide',
  'virtual-influencer-marketing-strategy-dominate-social-media'
];

let fixed = 0;
let failed = 0;

brokenFiles.forEach(slug => {
  const filePath = path.join(__dirname, '..', 'src', 'app', 'blog', slug, 'page.tsx');

  try {
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File not found: ${slug}`);
      failed++;
      return;
    }

    let content = fs.readFileSync(filePath, 'utf-8');

    // Check if file has the unclosed fragment issue
    if (content.includes('return (') && content.includes('<>') && content.includes('<Head>')) {
      // Remove the fragment wrapper and Head component that shouldn't be there
      content = content.replace(/return \(\s*<>\s*<Head>[\s\S]*?<\/Head>\s*/g, 'return (');

      // Also remove the orphaned closing fragment if it exists
      content = content.replace(/\s*<\/>\s*\)/g, ')');

      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed: ${slug}`);
      fixed++;
    } else {
      console.log(`ℹ️  Skipped (no issue found): ${slug}`);
    }
  } catch (error) {
    console.error(`❌ Error fixing ${slug}:`, error.message);
    failed++;
  }
});

console.log(`\n📊 Summary:`);
console.log(`✅ Fixed: ${fixed} files`);
console.log(`❌ Failed: ${failed} files`);
console.log(`Total: ${brokenFiles.length} files processed`);
