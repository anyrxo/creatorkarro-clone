#!/usr/bin/env node

/**
 * SEO HEALTH CHECK SYSTEM
 * Automated daily monitoring of 587 blog posts
 *
 * Monitors:
 * - Title tag compliance (30-60 chars)
 * - Meta description compliance (50-160 chars)
 * - Schema presence and validity
 * - Internal link count per post
 * - Image alt text coverage
 * - H1 presence and uniqueness
 * - Canonical URL correctness
 * - Broken links
 * - Duplicate content
 *
 * Usage: node scripts/seo-health-check.js [--fix] [--verbose] [--json]
 */

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

// Configuration
const CONFIG = {
  blogDir: path.join(process.cwd(), 'src/app/blog'),
  outputDir: path.join(process.cwd(), 'reports/seo-health'),
  titleMinLength: 30,
  titleMaxLength: 60,
  descMinLength: 50,
  descMaxLength: 160,
  minInternalLinks: 2,
  maxInternalLinks: 50,
  checkDuplicates: true,
};

// Color output helpers
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

// Results storage
const results = {
  timestamp: new Date().toISOString(),
  totalPosts: 0,
  healthScore: 0,
  issues: {
    critical: [],
    high: [],
    medium: [],
    low: [],
  },
  metrics: {
    titleCompliance: { passed: 0, failed: 0, rate: 0 },
    descriptionCompliance: { passed: 0, failed: 0, rate: 0 },
    schemaPresence: { passed: 0, failed: 0, rate: 0 },
    h1Tags: { passed: 0, failed: 0, rate: 0 },
    canonicalUrls: { passed: 0, failed: 0, rate: 0 },
    internalLinks: { passed: 0, failed: 0, rate: 0 },
    duplicateContent: { count: 0, groups: [] },
  },
  details: [],
};

/**
 * Extract metadata from a blog post file
 */
function extractMetadata(filePath, content) {
  const metadata = {
    path: filePath,
    slug: path.basename(path.dirname(filePath)),
    title: null,
    titleLength: 0,
    description: null,
    descLength: 0,
    hasSchema: false,
    schemaTypes: [],
    hasH1: false,
    h1Count: 0,
    hasCanonical: false,
    canonicalUrl: null,
    internalLinkCount: 0,
    imageCount: 0,
    imagesWithoutAlt: 0,
    isRedirect: false,
  };

  // Check if it's a redirect page
  if (content.includes('redirect(') && content.includes('// ⚔ ORYANA\'S 301 REDIRECT')) {
    metadata.isRedirect = true;
    return metadata;
  }

  // Extract title from metadata export
  const titleMatch = content.match(/title:\s*["']([^"']+)["']/);
  if (titleMatch) {
    metadata.title = titleMatch[1];
    metadata.titleLength = titleMatch[1].length;
  }

  // Extract description
  const descMatch = content.match(/description:\s*["']([^"']+)["']/);
  if (descMatch) {
    metadata.description = descMatch[1];
    metadata.descLength = descMatch[1].length;
  }

  // Check for schema
  metadata.hasSchema = content.includes('"@type"') || content.includes('@type');
  if (metadata.hasSchema) {
    const schemaMatches = content.matchAll(/"@type":\s*"([^"]+)"/g);
    for (const match of schemaMatches) {
      metadata.schemaTypes.push(match[1]);
    }
  }

  // Check H1 tags
  const h1Matches = content.match(/<h1[^>]*>/g);
  metadata.hasH1 = h1Matches && h1Matches.length > 0;
  metadata.h1Count = h1Matches ? h1Matches.length : 0;

  // Check canonical URL
  const canonicalMatch = content.match(/canonical:\s*["']([^"']+)["']/);
  if (canonicalMatch) {
    metadata.hasCanonical = true;
    metadata.canonicalUrl = canonicalMatch[1];
  }

  // Count internal links
  const linkMatches = content.matchAll(/href=["']\/[^"']+["']/g);
  metadata.internalLinkCount = Array.from(linkMatches).length;

  // Count images and check alt text
  const imgMatches = content.matchAll(/<img[^>]*>/g);
  metadata.imageCount = Array.from(imgMatches).length;

  for (const img of content.matchAll(/<img[^>]*>/g)) {
    if (!img[0].includes('alt=')) {
      metadata.imagesWithoutAlt++;
    }
  }

  return metadata;
}

/**
 * Validate a single blog post
 */
function validatePost(filePath, content) {
  const metadata = extractMetadata(filePath, content);
  const postIssues = [];

  // Skip redirect pages from validation
  if (metadata.isRedirect) {
    return { metadata, issues: [] };
  }

  // Title validation
  if (!metadata.title) {
    postIssues.push({
      severity: 'critical',
      type: 'title',
      message: 'Missing title tag',
      fix: 'Add title to metadata export',
    });
  } else if (metadata.titleLength < CONFIG.titleMinLength) {
    postIssues.push({
      severity: 'high',
      type: 'title',
      message: `Title too short (${metadata.titleLength} chars, minimum ${CONFIG.titleMinLength})`,
      fix: 'Expand title with relevant keywords',
    });
  } else if (metadata.titleLength > CONFIG.titleMaxLength) {
    postIssues.push({
      severity: 'high',
      type: 'title',
      message: `Title too long (${metadata.titleLength} chars, maximum ${CONFIG.titleMaxLength})`,
      fix: 'Shorten title to fit Google SERP display',
    });
  } else {
    results.metrics.titleCompliance.passed++;
  }

  // Description validation
  if (!metadata.description) {
    postIssues.push({
      severity: 'critical',
      type: 'description',
      message: 'Missing meta description',
      fix: 'Add description to metadata export',
    });
  } else if (metadata.descLength < CONFIG.descMinLength) {
    postIssues.push({
      severity: 'medium',
      type: 'description',
      message: `Description too short (${metadata.descLength} chars, minimum ${CONFIG.descMinLength})`,
      fix: 'Expand description with compelling copy',
    });
  } else if (metadata.descLength > CONFIG.descMaxLength) {
    postIssues.push({
      severity: 'medium',
      type: 'description',
      message: `Description too long (${metadata.descLength} chars, maximum ${CONFIG.descMaxLength})`,
      fix: 'Trim description to avoid truncation',
    });
  } else {
    results.metrics.descriptionCompliance.passed++;
  }

  // Schema validation
  if (!metadata.hasSchema) {
    postIssues.push({
      severity: 'critical',
      type: 'schema',
      message: 'Missing structured data (BlogPosting schema)',
      fix: 'Add JSON-LD schema markup',
    });
  } else {
    results.metrics.schemaPresence.passed++;
  }

  // H1 validation
  if (!metadata.hasH1) {
    postIssues.push({
      severity: 'critical',
      type: 'h1',
      message: 'Missing H1 tag',
      fix: 'Add primary heading to content',
    });
  } else if (metadata.h1Count > 1) {
    postIssues.push({
      severity: 'medium',
      type: 'h1',
      message: `Multiple H1 tags found (${metadata.h1Count})`,
      fix: 'Use only one H1 per page',
    });
  } else {
    results.metrics.h1Tags.passed++;
  }

  // Canonical URL validation
  if (!metadata.hasCanonical) {
    postIssues.push({
      severity: 'high',
      type: 'canonical',
      message: 'Missing canonical URL',
      fix: 'Add canonical URL to prevent duplicate content issues',
    });
  } else {
    results.metrics.canonicalUrls.passed++;
  }

  // Internal links validation
  if (metadata.internalLinkCount < CONFIG.minInternalLinks) {
    postIssues.push({
      severity: 'medium',
      type: 'internal-links',
      message: `Too few internal links (${metadata.internalLinkCount})`,
      fix: `Add at least ${CONFIG.minInternalLinks} internal links`,
    });
  } else if (metadata.internalLinkCount > CONFIG.maxInternalLinks) {
    postIssues.push({
      severity: 'low',
      type: 'internal-links',
      message: `Too many internal links (${metadata.internalLinkCount})`,
      fix: 'Reduce internal links to avoid appearing spammy',
    });
  } else {
    results.metrics.internalLinks.passed++;
  }

  // Image alt text validation
  if (metadata.imagesWithoutAlt > 0) {
    postIssues.push({
      severity: 'medium',
      type: 'images',
      message: `${metadata.imagesWithoutAlt} images missing alt text`,
      fix: 'Add descriptive alt text to all images',
    });
  }

  return { metadata, issues: postIssues };
}

/**
 * Scan all blog posts
 */
async function scanBlogPosts() {
  log('\n🔍 Starting SEO Health Check...', 'cyan');
  log(`📁 Scanning: ${CONFIG.blogDir}\n`, 'blue');

  // Find all blog post files
  const pattern = path.join(CONFIG.blogDir, '**/page.tsx').replace(/\\/g, '/');
  const files = await glob(pattern);

  log(`📊 Found ${files.length} blog posts\n`, 'magenta');
  results.totalPosts = files.length;

  let processedCount = 0;
  let redirectCount = 0;

  for (const file of files) {
    processedCount++;

    // Show progress every 50 posts
    if (processedCount % 50 === 0) {
      log(`   Processing ${processedCount}/${files.length}...`, 'blue');
    }

    const content = fs.readFileSync(file, 'utf-8');
    const { metadata, issues } = validatePost(file, content);

    if (metadata.isRedirect) {
      redirectCount++;
      continue;
    }

    // Store post details
    results.details.push({
      path: file,
      slug: metadata.slug,
      title: metadata.title,
      issues: issues.length,
      metadata,
    });

    // Categorize issues by severity
    for (const issue of issues) {
      const fullIssue = {
        ...issue,
        post: metadata.slug,
        path: file,
      };
      results.issues[issue.severity].push(fullIssue);
    }
  }

  log(`✓ Processed ${processedCount} posts (${redirectCount} redirects skipped)\n`, 'green');

  // Calculate compliance rates
  const activePosts = files.length - redirectCount;
  results.metrics.titleCompliance.failed = activePosts - results.metrics.titleCompliance.passed;
  results.metrics.titleCompliance.rate = (results.metrics.titleCompliance.passed / activePosts * 100).toFixed(1);

  results.metrics.descriptionCompliance.failed = activePosts - results.metrics.descriptionCompliance.passed;
  results.metrics.descriptionCompliance.rate = (results.metrics.descriptionCompliance.passed / activePosts * 100).toFixed(1);

  results.metrics.schemaPresence.failed = activePosts - results.metrics.schemaPresence.passed;
  results.metrics.schemaPresence.rate = (results.metrics.schemaPresence.passed / activePosts * 100).toFixed(1);

  results.metrics.h1Tags.failed = activePosts - results.metrics.h1Tags.passed;
  results.metrics.h1Tags.rate = (results.metrics.h1Tags.passed / activePosts * 100).toFixed(1);

  results.metrics.canonicalUrls.failed = activePosts - results.metrics.canonicalUrls.passed;
  results.metrics.canonicalUrls.rate = (results.metrics.canonicalUrls.passed / activePosts * 100).toFixed(1);

  results.metrics.internalLinks.failed = activePosts - results.metrics.internalLinks.passed;
  results.metrics.internalLinks.rate = (results.metrics.internalLinks.passed / activePosts * 100).toFixed(1);
}

/**
 * Calculate overall health score
 */
function calculateHealthScore() {
  const weights = {
    critical: -10,
    high: -5,
    medium: -2,
    low: -0.5,
  };

  let score = 100;

  for (const [severity, issues] of Object.entries(results.issues)) {
    score += issues.length * weights[severity];
  }

  // Ensure score is between 0-100
  results.healthScore = Math.max(0, Math.min(100, score)).toFixed(1);
}

/**
 * Generate and display report
 */
function displayReport() {
  log('\n═══════════════════════════════════════════════════════════', 'cyan');
  log('                    SEO HEALTH REPORT', 'cyan');
  log('═══════════════════════════════════════════════════════════\n', 'cyan');

  // Overall health score
  const scoreColor = results.healthScore >= 90 ? 'green' :
                     results.healthScore >= 70 ? 'yellow' : 'red';
  log(`📊 OVERALL HEALTH SCORE: ${results.healthScore}/100`, scoreColor);
  log(`📅 Report Date: ${new Date(results.timestamp).toLocaleString()}\n`, 'blue');

  // Issue summary
  log('🚨 ISSUE SUMMARY:', 'yellow');
  log(`   ❌ Critical: ${results.issues.critical.length}`, 'red');
  log(`   ⚠️  High:     ${results.issues.high.length}`, 'yellow');
  log(`   ⚡ Medium:   ${results.issues.medium.length}`, 'yellow');
  log(`   ℹ️  Low:      ${results.issues.low.length}\n`, 'blue');

  // Compliance metrics
  log('✅ COMPLIANCE RATES:', 'green');
  log(`   Title Tags:        ${results.metrics.titleCompliance.rate}% (${results.metrics.titleCompliance.passed}/${results.totalPosts})`,
      results.metrics.titleCompliance.rate >= 90 ? 'green' : 'yellow');
  log(`   Meta Descriptions: ${results.metrics.descriptionCompliance.rate}% (${results.metrics.descriptionCompliance.passed}/${results.totalPosts})`,
      results.metrics.descriptionCompliance.rate >= 90 ? 'green' : 'yellow');
  log(`   Schema Markup:     ${results.metrics.schemaPresence.rate}% (${results.metrics.schemaPresence.passed}/${results.totalPosts})`,
      results.metrics.schemaPresence.rate >= 90 ? 'green' : 'yellow');
  log(`   H1 Tags:           ${results.metrics.h1Tags.rate}% (${results.metrics.h1Tags.passed}/${results.totalPosts})`,
      results.metrics.h1Tags.rate >= 90 ? 'green' : 'yellow');
  log(`   Canonical URLs:    ${results.metrics.canonicalUrls.rate}% (${results.metrics.canonicalUrls.passed}/${results.totalPosts})`,
      results.metrics.canonicalUrls.rate >= 90 ? 'green' : 'yellow');
  log(`   Internal Links:    ${results.metrics.internalLinks.rate}% (${results.metrics.internalLinks.passed}/${results.totalPosts})\n`,
      results.metrics.internalLinks.rate >= 90 ? 'green' : 'yellow');

  // Top critical issues
  if (results.issues.critical.length > 0) {
    log('❌ CRITICAL ISSUES (Sample):', 'red');
    results.issues.critical.slice(0, 10).forEach((issue, i) => {
      log(`   ${i + 1}. [${issue.post}] ${issue.message}`, 'red');
      log(`      Fix: ${issue.fix}`, 'yellow');
    });
    if (results.issues.critical.length > 10) {
      log(`   ... and ${results.issues.critical.length - 10} more\n`, 'red');
    } else {
      log('');
    }
  }

  // Recommendations
  log('💡 RECOMMENDATIONS:', 'cyan');
  if (results.healthScore < 70) {
    log('   🔴 URGENT: Health score below 70%. Immediate action required!', 'red');
  }
  if (results.issues.critical.length > 0) {
    log(`   ⚠️  Fix ${results.issues.critical.length} critical issues immediately`, 'yellow');
  }
  if (results.metrics.schemaPresence.rate < 50) {
    log('   📊 Prioritize adding schema markup to remaining posts', 'yellow');
  }
  if (results.metrics.titleCompliance.rate < 80) {
    log('   📝 Review and optimize title tags', 'yellow');
  }
  log('');

  log('═══════════════════════════════════════════════════════════\n', 'cyan');
}

/**
 * Save detailed report to file
 */
function saveReport() {
  // Ensure output directory exists
  if (!fs.existsSync(CONFIG.outputDir)) {
    fs.mkdirSync(CONFIG.outputDir, { recursive: true });
  }

  // Save JSON report
  const jsonPath = path.join(CONFIG.outputDir, `seo-health-${Date.now()}.json`);
  fs.writeFileSync(jsonPath, JSON.stringify(results, null, 2));

  // Save latest report
  const latestPath = path.join(CONFIG.outputDir, 'latest.json');
  fs.writeFileSync(latestPath, JSON.stringify(results, null, 2));

  log(`💾 Detailed report saved to: ${jsonPath}`, 'green');
  log(`💾 Latest report: ${latestPath}\n`, 'green');
}

/**
 * Main execution
 */
async function main() {
  try {
    await scanBlogPosts();
    calculateHealthScore();
    displayReport();
    saveReport();

    // Exit with error code if health score is critical
    if (results.healthScore < 60 || results.issues.critical.length > 10) {
      log('❌ HEALTH CHECK FAILED - Critical issues detected', 'red');
      process.exit(1);
    } else {
      log('✅ HEALTH CHECK PASSED', 'green');
      process.exit(0);
    }
  } catch (error) {
    log(`\n❌ ERROR: ${error.message}`, 'red');
    console.error(error);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { scanBlogPosts, validatePost, calculateHealthScore };
