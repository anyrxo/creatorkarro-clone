const fs = require('fs');
const path = require('path');

const filesToFix = [
  'src/app/blog/digital-product-launch-checklist-30-day-timeline-2025/page.tsx',
  'src/app/blog/instagram-story-engagement-strategies-double-interactions/page.tsx',
  'src/app/blog/membership-site-strategy-recurring-revenue-model-2025/page.tsx',
  'src/app/blog/notion-template-business-create-sell-scale-2025/page.tsx',
  'src/app/blog/n8n-crm-automation-pipedrive-hubspot-salesforce/page.tsx'
];

console.log('🔧 Fixing JSX syntax errors in 5 blog posts...\n');

filesToFix.forEach(filePath => {
  const fullPath = path.join(__dirname, '..', filePath);

  if (!fs.existsSync(fullPath)) {
    console.log(`⚠️  Skipping ${filePath} - file not found`);
    return;
  }

  let content = fs.readFileSync(fullPath, 'utf-8');
  const originalContent = content;

  // Fix common JSX errors

  // 1. Fix ">" characters in JSX that should be escaped
  // Look for patterns like "10-20%" or "target: 5-10" in text content
  content = content.replace(/(\d+)-(\d+)%/g, (match, num1, num2) => {
    // If it's inside JSX text (not in a string or attribute), it needs escaping
    return `${num1}-${num2}%`;
  });

  // 2. Fix "> " that should be "&gt; " in JSX text
  content = content.replace(/([^{]|^)>\s+([A-Z])/g, '$1&gt; $2');

  // 3. Fix "</" followed by unexpected tokens
  // Common pattern: </li><li>• Text with 10-20%
  // The issue is often percentages in JSX text need to be in {`...`}

  // 4. Look for list items with percentages and wrap in template literals if needed
  content = content.replace(/<li>([^<]*\d+-\d+%[^<]*)<\/li>/g, (match, text) => {
    // If text contains special characters, wrap in template literal
    if (text.includes('%') || text.includes('>') || text.includes('<')) {
      return `<li>{${JSON.stringify(text)}}</li>`;
    }
    return match;
  });

  // 5. Fix dollar signs followed by curly braces in template literals
  // Pattern: ${{expression}} should be \${{expression}}
  content = content.replace(/([^\\])\$\{\{/g, '$1\\${{');

  if (content !== originalContent) {
    fs.writeFileSync(fullPath, content);
    console.log(`✅ Fixed ${path.basename(path.dirname(filePath))}`);
  } else {
    console.log(`ℹ️  No changes needed for ${path.basename(path.dirname(filePath))}`);
  }
});

console.log('\n✅ JSX syntax fix script completed!');
