#!/usr/bin/env node

/**
 * SEO REGRESSION PREVENTION GUARD
 * Git pre-commit hook to prevent SEO degradation
 *
 * Verifies before each commit:
 * - No title tags removed or degraded
 * - No meta descriptions shortened below minimum
 * - No schema markup removed
 * - No H1 tags removed
 * - No internal links broken
 * - All new blog posts have required metadata
 *
 * Installation:
 *   Add to package.json:
 *   "husky": {
 *     "hooks": {
 *       "pre-commit": "node scripts/seo-guard.js"
 *     }
 *   }
 *
 * Usage: node scripts/seo-guard.js
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Configuration
const CONFIG = {
  titleMinLength: 30,
  titleMaxLength: 60,
  descMinLength: 50,
  descMaxLength: 160,
  requiredMetaFields: ['title', 'description', 'openGraph', 'robots', 'canonical'],
  requiredSchemaTypes: ['@type'],
};

// Colors for output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  bold: '\x1b[1m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

/**
 * Get list of staged files
 */
function getStagedFiles() {
  try {
    const output = execSync('git diff --cached --name-only --diff-filter=ACM', {
      encoding: 'utf-8',
    });
    return output.trim().split('\n').filter(Boolean);
  } catch (error) {
    return [];
  }
}

/**
 * Get file content from git (previous version)
 */
function getGitFileContent(filePath, ref = 'HEAD') {
  try {
    return execSync(`git show ${ref}:${filePath}`, {
      encoding: 'utf-8',
    });
  } catch (error) {
    return null; // File might be new
  }
}

/**
 * Extract SEO metadata from file content
 */
function extractSEOData(content) {
  if (!content) return null;

  const data = {
    hasTitle: false,
    title: null,
    titleLength: 0,
    hasDescription: false,
    description: null,
    descLength: 0,
    hasSchema: false,
    schemaTypes: [],
    hasH1: false,
    h1Count: 0,
    hasMetadata: false,
    internalLinkCount: 0,
    hasCanonical: false,
  };

  // Check for metadata export
  data.hasMetadata = content.includes('export const metadata');

  // Extract title
  const titleMatch = content.match(/title:\s*["']([^"']+)["']/);
  if (titleMatch) {
    data.hasTitle = true;
    data.title = titleMatch[1];
    data.titleLength = titleMatch[1].length;
  }

  // Extract description
  const descMatch = content.match(/description:\s*["']([^"']+)["']/);
  if (descMatch) {
    data.hasDescription = true;
    data.description = descMatch[1];
    data.descLength = descMatch[1].length;
  }

  // Check for schema
  data.hasSchema = content.includes('"@type"') || content.includes('@type');
  if (data.hasSchema) {
    const schemaMatches = content.matchAll(/"@type":\s*"([^"]+)"/g);
    for (const match of schemaMatches) {
      data.schemaTypes.push(match[1]);
    }
  }

  // Check H1 tags
  const h1Matches = content.match(/<h1[^>]*>/g);
  data.hasH1 = h1Matches && h1Matches.length > 0;
  data.h1Count = h1Matches ? h1Matches.length : 0;

  // Check canonical
  data.hasCanonical = content.includes('canonical:');

  // Count internal links
  const linkMatches = content.matchAll(/href=["']\/[^"']+["']/g);
  data.internalLinkCount = Array.from(linkMatches).length;

  return data;
}

/**
 * Validate SEO changes for a file
 */
function validateSEOChanges(filePath, oldContent, newContent) {
  const issues = [];
  const warnings = [];

  const oldData = extractSEOData(oldContent);
  const newData = extractSEOData(newContent);

  // Skip if file is new
  if (!oldData) {
    // Validate new blog posts have required metadata
    if (filePath.includes('/blog/') && filePath.endsWith('page.tsx')) {
      if (!newData.hasMetadata) {
        issues.push('New blog post missing metadata export');
      }
      if (!newData.hasTitle) {
        issues.push('New blog post missing title');
      }
      if (!newData.hasDescription) {
        issues.push('New blog post missing meta description');
      }
      if (!newData.hasSchema) {
        warnings.push('New blog post missing schema markup (recommended)');
      }
      if (!newData.hasH1) {
        issues.push('New blog post missing H1 tag');
      }
      if (!newData.hasCanonical) {
        warnings.push('New blog post missing canonical URL (recommended)');
      }

      // Validate title length
      if (newData.titleLength > 0) {
        if (newData.titleLength < CONFIG.titleMinLength) {
          issues.push(`Title too short (${newData.titleLength} chars, minimum ${CONFIG.titleMinLength})`);
        }
        if (newData.titleLength > CONFIG.titleMaxLength) {
          issues.push(`Title too long (${newData.titleLength} chars, maximum ${CONFIG.titleMaxLength})`);
        }
      }

      // Validate description length
      if (newData.descLength > 0) {
        if (newData.descLength < CONFIG.descMinLength) {
          issues.push(`Description too short (${newData.descLength} chars, minimum ${CONFIG.descMinLength})`);
        }
        if (newData.descLength > CONFIG.descMaxLength) {
          warnings.push(`Description too long (${newData.descLength} chars, maximum ${CONFIG.descMaxLength})`);
        }
      }
    }
    return { issues, warnings };
  }

  // Check for title removal or degradation
  if (oldData.hasTitle && !newData.hasTitle) {
    issues.push('❌ CRITICAL: Title tag removed');
  } else if (oldData.hasTitle && newData.hasTitle) {
    if (newData.titleLength < CONFIG.titleMinLength) {
      issues.push(`Title shortened below minimum (${newData.titleLength} < ${CONFIG.titleMinLength})`);
    }
    if (newData.titleLength > CONFIG.titleMaxLength) {
      issues.push(`Title lengthened beyond maximum (${newData.titleLength} > ${CONFIG.titleMaxLength})`);
    }
  }

  // Check for description removal or degradation
  if (oldData.hasDescription && !newData.hasDescription) {
    issues.push('❌ CRITICAL: Meta description removed');
  } else if (oldData.hasDescription && newData.hasDescription) {
    if (newData.descLength < CONFIG.descMinLength) {
      issues.push(`Description shortened below minimum (${newData.descLength} < ${CONFIG.descMinLength})`);
    }
    if (newData.descLength > CONFIG.descMaxLength) {
      warnings.push(`Description lengthened beyond maximum (${newData.descLength} > ${CONFIG.descMaxLength})`);
    }
  }

  // Check for schema removal
  if (oldData.hasSchema && !newData.hasSchema) {
    issues.push('❌ CRITICAL: Schema markup removed');
  }

  // Check for H1 removal
  if (oldData.hasH1 && !newData.hasH1) {
    issues.push('❌ CRITICAL: H1 tag removed');
  } else if (newData.h1Count > 1) {
    warnings.push(`Multiple H1 tags detected (${newData.h1Count})`);
  }

  // Check for canonical removal
  if (oldData.hasCanonical && !newData.hasCanonical) {
    warnings.push('Canonical URL removed');
  }

  // Check for significant internal link reduction
  if (oldData.internalLinkCount > 0 && newData.internalLinkCount < oldData.internalLinkCount * 0.5) {
    warnings.push(`Internal links significantly reduced (${oldData.internalLinkCount} → ${newData.internalLinkCount})`);
  }

  return { issues, warnings };
}

/**
 * Main validation function
 */
async function validateCommit() {
  log('\n🛡️  SEO GUARD - Checking for SEO regressions...', 'cyan');

  const stagedFiles = getStagedFiles();
  const blogFiles = stagedFiles.filter(
    (file) => file.includes('/blog/') && file.endsWith('.tsx')
  );

  if (blogFiles.length === 0) {
    log('✅ No blog files to check\n', 'green');
    return true;
  }

  log(`📝 Checking ${blogFiles.length} blog file(s)...\n`, 'blue');

  let hasErrors = false;
  let totalIssues = 0;
  let totalWarnings = 0;

  for (const file of blogFiles) {
    const oldContent = getGitFileContent(file);
    const newContent = fs.readFileSync(file, 'utf-8');

    const { issues, warnings } = validateSEOChanges(file, oldContent, newContent);

    if (issues.length > 0 || warnings.length > 0) {
      log(`\n📄 ${file}`, 'yellow');

      if (issues.length > 0) {
        hasErrors = true;
        totalIssues += issues.length;
        log('  ❌ Issues:', 'red');
        issues.forEach((issue) => log(`     • ${issue}`, 'red'));
      }

      if (warnings.length > 0) {
        totalWarnings += warnings.length;
        log('  ⚠️  Warnings:', 'yellow');
        warnings.forEach((warning) => log(`     • ${warning}`, 'yellow'));
      }
    }
  }

  log('\n────────────────────────────────────────────────────', 'cyan');

  if (hasErrors) {
    log(`\n❌ COMMIT BLOCKED - ${totalIssues} critical SEO issue(s) detected`, 'red');
    log('\n💡 Fix the issues above and try again', 'yellow');
    log('💡 To bypass (NOT recommended): git commit --no-verify\n', 'yellow');
    return false;
  }

  if (totalWarnings > 0) {
    log(`\n⚠️  ${totalWarnings} warning(s) detected`, 'yellow');
    log('✅ Commit allowed, but please review warnings\n', 'green');
  } else {
    log('\n✅ All SEO checks passed!\n', 'green');
  }

  return true;
}

/**
 * Install as git hook
 */
function installHook() {
  const gitHooksDir = path.join(process.cwd(), '.git', 'hooks');
  const hookPath = path.join(gitHooksDir, 'pre-commit');

  if (!fs.existsSync(gitHooksDir)) {
    log('❌ Not a git repository', 'red');
    return false;
  }

  const hookContent = `#!/bin/sh
# SEO Guard - Prevent SEO regressions
node scripts/seo-guard.js
`;

  fs.writeFileSync(hookPath, hookContent, { mode: 0o755 });
  log('✅ SEO Guard installed as git pre-commit hook', 'green');
  return true;
}

/**
 * Main execution
 */
async function main() {
  const args = process.argv.slice(2);

  // Check for install command
  if (args.includes('--install')) {
    installHook();
    return;
  }

  // Run validation
  const passed = await validateCommit();

  if (!passed) {
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main().catch((error) => {
    log(`\n❌ ERROR: ${error.message}`, 'red');
    console.error(error);
    process.exit(1);
  });
}

module.exports = { validateCommit, validateSEOChanges, extractSEOData };
