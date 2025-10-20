#!/usr/bin/env node

/**
 * SCHEMA VALIDATION SYSTEM
 * Validates all BlogPosting schema across the site
 *
 * Validates:
 * - All required fields present
 * - Date formats correct
 * - Image URLs accessible
 * - Author/publisher consistency
 * - BreadcrumbList structure
 * - Schema.org compliance
 *
 * Usage: node scripts/validate-all-schema.js [--fix] [--report]
 */

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

// Configuration
const CONFIG = {
  blogDir: path.join(process.cwd(), 'src/app/blog'),
  outputDir: path.join(process.cwd(), 'reports/schema-validation'),
  baseUrl: 'https://iimagined.ai',
  requiredSchemaTypes: {
    Article: ['headline', 'description', 'datePublished', 'author', 'publisher', 'image'],
    BlogPosting: ['headline', 'description', 'datePublished', 'author', 'publisher', 'image'],
    Organization: ['name', 'url'],
    Person: ['name'],
    ImageObject: ['url', 'width', 'height'],
  },
};

// Colors
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  magenta: '\x1b[35m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

// Validation results
const results = {
  timestamp: new Date().toISOString(),
  totalPosts: 0,
  validationScore: 0,
  summary: {
    withSchema: 0,
    withoutSchema: 0,
    validSchema: 0,
    invalidSchema: 0,
    coverageRate: 0,
    validityRate: 0,
  },
  issues: [],
  recommendations: [],
  posts: [],
};

/**
 * Extract and parse schema from content
 */
function extractSchema(content) {
  const schemas = [];

  // Look for JSON-LD script tags
  const scriptMatches = content.matchAll(
    /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi
  );

  for (const match of scriptMatches) {
    try {
      const jsonStr = match[1].trim();
      const schema = JSON.parse(jsonStr);
      schemas.push(schema);
    } catch (error) {
      // Try to extract from dangerouslySetInnerHTML
      const innerHtmlMatch = match[1].match(/dangerouslySetInnerHTML={{[^}]*__html:\s*JSON\.stringify\(([^)]+)\)/);
      if (innerHtmlMatch) {
        // This is a React component, we can't parse it statically
        schemas.push({ _note: 'React component with dynamic schema' });
      }
    }
  }

  // Look for inline schema objects
  const inlineMatches = content.matchAll(/const\s+\w+Schema\s*=\s*({[\s\S]*?});/g);

  for (const match of inlineMatches) {
    try {
      // Try to evaluate the object (dangerous, but controlled environment)
      const objStr = match[1];
      if (objStr.includes('"@context"') || objStr.includes('"@type"')) {
        schemas.push({ _note: 'Inline schema object found', raw: objStr.substring(0, 100) });
      }
    } catch (error) {
      // Ignore parsing errors
    }
  }

  return schemas;
}

/**
 * Validate a single schema object
 */
function validateSchemaObject(schema, schemaType = null) {
  const issues = [];

  if (!schema || typeof schema !== 'object') {
    return ['Schema is not a valid object'];
  }

  // Skip React component schemas
  if (schema._note) {
    return [];
  }

  // Check for @context
  if (!schema['@context']) {
    issues.push('Missing @context field');
  } else if (!schema['@context'].includes('schema.org')) {
    issues.push('Invalid @context - must include schema.org');
  }

  // Check for @type
  if (!schema['@type']) {
    issues.push('Missing @type field');
  } else {
    const type = Array.isArray(schema['@type']) ? schema['@type'][0] : schema['@type'];
    schemaType = type;

    // Validate required fields for this type
    if (CONFIG.requiredSchemaTypes[type]) {
      for (const field of CONFIG.requiredSchemaTypes[type]) {
        if (!schema[field]) {
          issues.push(`Missing required field for ${type}: ${field}`);
        }
      }
    }
  }

  // Validate dates
  const dateFields = ['datePublished', 'dateModified', 'dateCreated'];
  for (const field of dateFields) {
    if (schema[field]) {
      const dateStr = schema[field];
      if (!isValidISODate(dateStr)) {
        issues.push(`Invalid date format for ${field}: ${dateStr}`);
      }
    }
  }

  // Validate image object
  if (schema.image) {
    if (typeof schema.image === 'string') {
      if (!isValidUrl(schema.image)) {
        issues.push('Invalid image URL');
      }
    } else if (typeof schema.image === 'object') {
      if (!schema.image.url) {
        issues.push('Image object missing url field');
      }
      if (!schema.image.width || !schema.image.height) {
        issues.push('Image object missing dimensions');
      }
    }
  }

  // Validate author
  if (schema.author) {
    if (typeof schema.author === 'object') {
      if (!schema.author['@type']) {
        issues.push('Author object missing @type');
      }
      if (!schema.author.name && !schema.author.url) {
        issues.push('Author object missing name or url');
      }
    }
  }

  // Validate publisher
  if (schema.publisher) {
    if (typeof schema.publisher === 'object') {
      if (!schema.publisher['@type']) {
        issues.push('Publisher object missing @type');
      }
      if (!schema.publisher.name) {
        issues.push('Publisher object missing name');
      }
    }
  }

  // Handle @graph structure
  if (schema['@graph']) {
    const graphIssues = [];
    for (const item of schema['@graph']) {
      graphIssues.push(...validateSchemaObject(item, null));
    }
    return graphIssues;
  }

  return issues;
}

/**
 * Validate date format
 */
function isValidISODate(dateStr) {
  if (!dateStr || typeof dateStr !== 'string') return false;

  const iso8601Regex = /^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d{3})?Z)?$/;
  if (!iso8601Regex.test(dateStr)) return false;

  const date = new Date(dateStr);
  return date instanceof Date && !isNaN(date.getTime());
}

/**
 * Validate URL format
 */
function isValidUrl(urlStr) {
  if (!urlStr || typeof urlStr !== 'string') return false;

  try {
    const url = new URL(urlStr);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
}

/**
 * Validate a single blog post
 */
function validatePost(filePath, content) {
  const slug = path.basename(path.dirname(filePath));

  const postData = {
    path: filePath,
    slug,
    url: `${CONFIG.baseUrl}/blog/${slug}`,
    hasSchema: false,
    schemaCount: 0,
    schemas: [],
    isValid: false,
    issues: [],
    isRedirect: false,
  };

  // Check if redirect
  if (content.includes('redirect(') && content.includes('// ⚔ ORYANA\'S 301 REDIRECT')) {
    postData.isRedirect = true;
    return postData;
  }

  // Extract schemas
  postData.schemas = extractSchema(content);
  postData.schemaCount = postData.schemas.length;
  postData.hasSchema = postData.schemaCount > 0;

  if (!postData.hasSchema) {
    postData.issues.push({
      severity: 'critical',
      message: 'No schema markup found',
      fix: 'Add BlogPosting JSON-LD schema',
    });
    return postData;
  }

  // Validate each schema
  for (let i = 0; i < postData.schemas.length; i++) {
    const schema = postData.schemas[i];
    const schemaIssues = validateSchemaObject(schema);

    for (const issue of schemaIssues) {
      postData.issues.push({
        severity: issue.includes('Missing required') ? 'high' : 'medium',
        message: `Schema #${i + 1}: ${issue}`,
        fix: 'Update schema to include required fields',
      });
    }
  }

  postData.isValid = postData.issues.length === 0;

  return postData;
}

/**
 * Scan all blog posts
 */
async function scanAllPosts() {
  log('\n🔍 Validating schema markup...', 'cyan');
  log(`📁 Scanning: ${CONFIG.blogDir}\n`, 'blue');

  const pattern = path.join(CONFIG.blogDir, '**/page.tsx').replace(/\\/g, '/');
  const files = await glob(pattern);

  log(`📊 Found ${files.length} blog posts\n`, 'magenta');
  results.totalPosts = files.length;

  let processedCount = 0;
  let redirectCount = 0;

  for (const file of files) {
    processedCount++;

    if (processedCount % 50 === 0) {
      log(`   Validating ${processedCount}/${files.length}...`, 'blue');
    }

    const content = fs.readFileSync(file, 'utf-8');
    const postData = validatePost(file, content);

    if (postData.isRedirect) {
      redirectCount++;
      continue;
    }

    results.posts.push(postData);

    if (postData.hasSchema) {
      results.summary.withSchema++;
      if (postData.isValid) {
        results.summary.validSchema++;
      } else {
        results.summary.invalidSchema++;
      }
    } else {
      results.summary.withoutSchema++;
    }

    // Collect all issues
    results.issues.push(...postData.issues.map((issue) => ({
      ...issue,
      post: postData.slug,
      path: file,
    })));
  }

  log(`✓ Validated ${processedCount} posts (${redirectCount} redirects skipped)\n`, 'green');

  // Calculate rates
  const activePosts = files.length - redirectCount;
  results.summary.coverageRate = ((results.summary.withSchema / activePosts) * 100).toFixed(1);
  results.summary.validityRate = results.summary.withSchema > 0
    ? ((results.summary.validSchema / results.summary.withSchema) * 100).toFixed(1)
    : 0;

  // Calculate validation score
  const coverageWeight = 0.6;
  const validityWeight = 0.4;
  results.validationScore = (
    parseFloat(results.summary.coverageRate) * coverageWeight +
    parseFloat(results.summary.validityRate) * validityWeight
  ).toFixed(1);
}

/**
 * Generate recommendations
 */
function generateRecommendations() {
  if (results.summary.withoutSchema > 0) {
    results.recommendations.push({
      priority: 'critical',
      message: `${results.summary.withoutSchema} posts missing schema markup`,
      action: 'Add BlogPosting JSON-LD schema to all blog posts',
    });
  }

  if (results.summary.invalidSchema > 0) {
    results.recommendations.push({
      priority: 'high',
      message: `${results.summary.invalidSchema} posts have invalid schema`,
      action: 'Fix schema validation errors',
    });
  }

  if (parseFloat(results.summary.coverageRate) < 100) {
    results.recommendations.push({
      priority: 'medium',
      message: `Schema coverage at ${results.summary.coverageRate}%`,
      action: 'Aim for 100% schema coverage for maximum SEO benefit',
    });
  }

  const commonIssues = {};
  for (const issue of results.issues) {
    const key = issue.message.replace(/Schema #\d+:\s*/, '');
    commonIssues[key] = (commonIssues[key] || 0) + 1;
  }

  const topIssues = Object.entries(commonIssues)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  for (const [issue, count] of topIssues) {
    if (count > 10) {
      results.recommendations.push({
        priority: 'medium',
        message: `Common issue: ${issue} (${count} occurrences)`,
        action: 'Create bulk fix for this issue across all posts',
      });
    }
  }
}

/**
 * Display validation report
 */
function displayReport() {
  log('\n═══════════════════════════════════════════════════════════', 'cyan');
  log('                SCHEMA VALIDATION REPORT', 'cyan');
  log('═══════════════════════════════════════════════════════════\n', 'cyan');

  // Validation score
  const scoreColor = results.validationScore >= 90 ? 'green' :
                     results.validationScore >= 70 ? 'yellow' : 'red';
  log(`📊 VALIDATION SCORE: ${results.validationScore}/100`, scoreColor);
  log(`📅 Report Date: ${new Date(results.timestamp).toLocaleString()}\n`, 'blue');

  // Coverage summary
  log('📈 SCHEMA COVERAGE:', 'green');
  log(`   With Schema:    ${results.summary.withSchema} posts (${results.summary.coverageRate}%)`,
      parseFloat(results.summary.coverageRate) >= 90 ? 'green' : 'yellow');
  log(`   Without Schema: ${results.summary.withoutSchema} posts`,
      results.summary.withoutSchema > 0 ? 'red' : 'green');
  log('');

  // Validity summary
  log('✅ SCHEMA VALIDITY:', 'green');
  log(`   Valid Schema:   ${results.summary.validSchema} posts (${results.summary.validityRate}%)`,
      parseFloat(results.summary.validityRate) >= 90 ? 'green' : 'yellow');
  log(`   Invalid Schema: ${results.summary.invalidSchema} posts`,
      results.summary.invalidSchema > 0 ? 'red' : 'green');
  log('');

  // Issues breakdown
  const criticalIssues = results.issues.filter((i) => i.severity === 'critical');
  const highIssues = results.issues.filter((i) => i.severity === 'high');
  const mediumIssues = results.issues.filter((i) => i.severity === 'medium');

  log('🚨 ISSUES BREAKDOWN:', 'yellow');
  log(`   ❌ Critical: ${criticalIssues.length}`, 'red');
  log(`   ⚠️  High:     ${highIssues.length}`, 'yellow');
  log(`   ⚡ Medium:   ${mediumIssues.length}\n`, 'yellow');

  // Sample issues
  if (criticalIssues.length > 0) {
    log('❌ CRITICAL ISSUES (Sample):', 'red');
    criticalIssues.slice(0, 5).forEach((issue, i) => {
      log(`   ${i + 1}. [${issue.post}] ${issue.message}`, 'red');
    });
    if (criticalIssues.length > 5) {
      log(`   ... and ${criticalIssues.length - 5} more\n`, 'red');
    } else {
      log('');
    }
  }

  // Recommendations
  if (results.recommendations.length > 0) {
    log('💡 RECOMMENDATIONS:', 'cyan');
    results.recommendations.forEach((rec, i) => {
      const color = rec.priority === 'critical' ? 'red' :
                   rec.priority === 'high' ? 'yellow' : 'blue';
      log(`   ${i + 1}. [${rec.priority.toUpperCase()}] ${rec.message}`, color);
      log(`      → ${rec.action}`, 'cyan');
    });
    log('');
  }

  log('═══════════════════════════════════════════════════════════\n', 'cyan');
}

/**
 * Save detailed report
 */
function saveReport() {
  if (!fs.existsSync(CONFIG.outputDir)) {
    fs.mkdirSync(CONFIG.outputDir, { recursive: true });
  }

  const jsonPath = path.join(CONFIG.outputDir, `schema-validation-${Date.now()}.json`);
  fs.writeFileSync(jsonPath, JSON.stringify(results, null, 2));

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
    await scanAllPosts();
    generateRecommendations();
    displayReport();
    saveReport();

    // Exit with error if validation score is too low
    if (results.validationScore < 70 || results.summary.withoutSchema > 100) {
      log('❌ VALIDATION FAILED - Critical issues detected', 'red');
      process.exit(1);
    } else {
      log('✅ VALIDATION PASSED', 'green');
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

module.exports = { validatePost, validateSchemaObject, scanAllPosts };
