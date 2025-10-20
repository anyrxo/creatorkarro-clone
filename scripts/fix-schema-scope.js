const fs = require('fs');
const path = require('path');

const BLOG_DIR = path.join(__dirname, '..', 'src', 'app', 'blog');

// List of files with schema errors
const filesToFix = [
  'claude-4-vs-gpt-4-comparison',
  'cloud-automation-infrastructure',
  'comfyui-workflow-library',
  'content-scaling-framework',
  'database-automation-systems',
  'deepseek-market-disruption',
  'devops-automation-pipeline',
  'faceless-content-strategy',
  'gpt5-roadmap-creator-empire',
  'how-to-sell-templates',
  'mobile-app-automation',
  'monetize-with-ai',
  'n8n-ecommerce-automation',
  'n8n-email-automation',
  'n8n-enterprise-solutions',
  'n8n-integration-tutorials',
  'n8n-scheduling-workflows',
  'n8n-social-media-automation',
  'n8n-vs-zapier-comparison',
  'n8n-webhook-automation',
  'n8n-workflow-optimization',
  'n8n-workflow-templates',
  'no-code-automation-tools',
  'personal-brand-building',
  'product-launch-strategy',
  'social-media-calendar',
  'tiktok-growth-hacks',
  'viral-instagram-content-strategy',
  'virtual-influencer-creation'
];

let fixed = 0;
let errors = 0;

filesToFix.forEach(slug => {
  const filePath = path.join(BLOG_DIR, slug, 'page.tsx');

  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  File not found: ${slug}`);
    errors++;
    return;
  }

  try {
    let content = fs.readFileSync(filePath, 'utf8');

    // Check if schema is defined inside the function
    const schemaInsideFunction = /export default function \w+\(\) \{[\s\S]*?const schema = generateBlogPostSchema\(/;

    if (!schemaInsideFunction.test(content)) {
      console.log(`⏭️  Skipping ${slug} - schema not inside function`);
      return;
    }

    // Extract the schema definition
    const schemaMatch = content.match(/(\s+const schema = generateBlogPostSchema\({[\s\S]*?\}\))/);

    if (!schemaMatch) {
      console.log(`❌ Could not extract schema from ${slug}`);
      errors++;
      return;
    }

    const schemaDefinition = schemaMatch[1];

    // Remove the schema from inside the function
    content = content.replace(schemaDefinition, '');

    // Insert schema definition after metadata and before export default
    const insertPattern = /(\n)(export default function)/;
    content = content.replace(insertPattern, `\n${schemaDefinition.trim()}\n\n$2`);

    // Create backup
    fs.writeFileSync(filePath + '.backup-scope', content, 'utf8');

    // Write the fixed content
    fs.writeFileSync(filePath, content, 'utf8');

    console.log(`✅ Fixed: ${slug}`);
    fixed++;

  } catch (error) {
    console.log(`❌ Error fixing ${slug}:`, error.message);
    errors++;
  }
});

console.log(`\n📊 Results:`);
console.log(`   Fixed: ${fixed}`);
console.log(`   Errors: ${errors}`);
console.log(`   Total: ${filesToFix.length}`);
