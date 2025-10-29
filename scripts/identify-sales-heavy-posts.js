const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, '..', 'src', 'app', 'blog');

console.log('\n🔍 IDENTIFYING SALES-HEAVY BLOG POSTS\n');

const results = {
  salesHeavy: [],
  borderline: [],
  educational: []
};

// Get all blog post directories
const dirs = fs.readdirSync(blogDir).filter(dir => {
  const dirPath = path.join(blogDir, dir);
  return fs.statSync(dirPath).isDirectory();
});

dirs.forEach(dir => {
  const pagePath = path.join(blogDir, dir, 'page.tsx');

  if (!fs.existsSync(pagePath)) return;

  const content = fs.readFileSync(pagePath, 'utf-8');
  const lines = content.split('\n');
  const totalLines = lines.length;

  // Count sales indicators
  let salesScore = 0;
  let educationalScore = 0;

  // Sales indicators
  const salesPhrases = [
    /127K\+\s+[Ss]tudents/g,
    /\$2\.7M\+/g,
    /\$7,361/g,
    /Total Value/g,
    /Lifetime Access/g,
    /Get .+ for \$\d+/g,
    /30-Day Guarantee/g,
    /Expert Support/g,
    /Master .+ with N8N/g,
    /Why Trust Our .+ Expertise/g,
    /Students Trained/g,
    /Student Revenue Generated/g,
    /Advanced strategies covered/gi,
    /How to master .+ for maximum results/g,
    /Common mistakes that cost beginners/g
  ];

  // Educational indicators (real content)
  const educationalPhrases = [
    /Step \d+:/g,
    /Example:/gi,
    /Tutorial:/gi,
    /```[\s\S]*?```/g, // Code blocks
    /<pre>/g,
    /Case study:/gi,
    /Real-world example:/gi,
    /Implementation:/gi,
    /Here's how:/gi,
    /Let me show you:/gi,
    /const \w+ = /g, // Actual code
    /function \w+\(/g,
    /npm install/g,
    /git clone/g
  ];

  const contentText = content.toLowerCase();

  // Count sales phrases
  salesPhrases.forEach(phrase => {
    const matches = content.match(phrase);
    if (matches) salesScore += matches.length * 2;
  });

  // Count educational phrases
  educationalPhrases.forEach(phrase => {
    const matches = content.match(phrase);
    if (matches) educationalScore += matches.length;
  });

  // Count gradient boxes (these are often sales-heavy)
  const gradientBoxes = (content.match(/bg-gradient-to-r from-blue-600\/\d+/g) || []).length;

  // Count CTAs
  const ctas = (content.match(/Get .+ for \$/g) || []).length;

  // Count actual content paragraphs (excluding headers, lists, CTAs)
  const contentParagraphs = content
    .split('\n')
    .filter(line => {
      const trimmed = line.trim();
      return trimmed.startsWith('<p ') &&
             trimmed.length > 100 &&
             !trimmed.includes('127K+') &&
             !trimmed.includes('$2.7M') &&
             !trimmed.includes('Expert guide');
    }).length;

  const ratio = salesScore / Math.max(educationalScore, 1);

  const analysis = {
    slug: dir,
    totalLines,
    salesScore,
    educationalScore,
    ratio: ratio.toFixed(2),
    gradientBoxes,
    ctas,
    contentParagraphs,
    verdict: ratio > 3 ? 'SALES_HEAVY' : (ratio > 1.5 ? 'BORDERLINE' : 'EDUCATIONAL')
  };

  if (analysis.verdict === 'SALES_HEAVY') {
    results.salesHeavy.push(analysis);
  } else if (analysis.verdict === 'BORDERLINE') {
    results.borderline.push(analysis);
  } else {
    results.educational.push(analysis);
  }
});

// Sort by worst offenders first (highest ratio)
results.salesHeavy.sort((a, b) => parseFloat(b.ratio) - parseFloat(a.ratio));
results.borderline.sort((a, b) => parseFloat(b.ratio) - parseFloat(a.ratio));

console.log(`\n🚨 SALES-HEAVY POSTS (${results.salesHeavy.length}):`);
console.log('   (High sales-to-education ratio, need transformation)\n');
results.salesHeavy.forEach((post, i) => {
  console.log(`${i+1}. ${post.slug}`);
  console.log(`   Lines: ${post.totalLines} | Sales: ${post.salesScore} | Education: ${post.educationalScore} | Ratio: ${post.ratio}`);
  console.log(`   CTAs: ${post.ctas} | Content ¶: ${post.contentParagraphs}\n`);
});

console.log(`\n⚠️  BORDERLINE POSTS (${results.borderline.length}):`);
console.log('   (Some sales, but decent education - may need minor fixes)\n');
results.borderline.slice(0, 10).forEach((post, i) => {
  console.log(`${i+1}. ${post.slug}`);
  console.log(`   Lines: ${post.totalLines} | Sales: ${post.salesScore} | Education: ${post.educationalScore} | Ratio: ${post.ratio}\n`);
});

console.log(`\n✅ EDUCATIONAL POSTS (${results.educational.length}):`);
console.log('   (Good balance, actual teaching content)\n');

// Save full report
const reportPath = path.join(__dirname, '..', '_ARCHIVE', '2025-01-29-cleanup', 'sales-heavy-analysis.json');
fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));

console.log(`\n📊 SUMMARY:`);
console.log(`   Sales-Heavy (need fixing): ${results.salesHeavy.length}`);
console.log(`   Borderline (minor fixes): ${results.borderline.length}`);
console.log(`   Educational (good): ${results.educational.length}`);
console.log(`\n📄 Full report saved: _ARCHIVE/2025-01-29-cleanup/sales-heavy-analysis.json`);
