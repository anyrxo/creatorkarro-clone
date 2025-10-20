#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Title optimization rules and power words
const POWER_WORDS = {
  guides: ['Complete Guide', 'Expert Guide', 'Ultimate Guide', 'Step-by-Step', 'Beginner Guide'],
  outcomes: ['Master', 'Build', 'Create', 'Learn', 'Generate', 'Boost', 'Grow'],
  urgency: ['2025', 'Updated', 'Latest', 'New', 'Modern'],
  value: ['Pro', 'Advanced', 'Professional', 'Proven', 'Essential']
};

const OPTIMAL_LENGTH = { min: 50, max: 60 };
const ACCEPTABLE_LENGTH = { min: 30, max: 60 };

// Load analysis data
function loadAnalysisData() {
  const reportPath = path.join(__dirname, '..', 'title-analysis-report.json');
  const suggestionsPath = path.join(__dirname, '..', 'title-fix-suggestions.json');

  const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
  const suggestions = JSON.parse(fs.readFileSync(suggestionsPath, 'utf8'));

  return { report, suggestions };
}

// Extract keywords from file path and existing title
function extractKeywords(filePath, currentTitle) {
  const dirName = path.basename(path.dirname(filePath));
  const keywords = new Set();

  // Extract from directory name
  const pathParts = dirName.split('-').filter(p => p.length > 2);
  pathParts.forEach(part => {
    if (!['page', 'tsx', 'blog', 'app'].includes(part.toLowerCase())) {
      keywords.add(part);
    }
  });

  // Extract from current title
  if (currentTitle) {
    currentTitle.split(/\s+/).forEach(word => {
      const clean = word.replace(/[^a-zA-Z0-9]/g, '');
      if (clean.length > 2) keywords.add(clean);
    });
  }

  return Array.from(keywords);
}

// Generate optimized title for missing titles
function generateTitleForMissing(filePath) {
  const dirName = path.basename(path.dirname(filePath));
  const keywords = extractKeywords(filePath, null);

  // Common patterns
  const patterns = [
    { match: /ai-automation/, template: 'AI Automation: Complete Guide & Expert Strategies 2025' },
    { match: /instagram-growth/, template: 'Instagram Growth: Proven Strategies & Expert Tips 2025' },
    { match: /ai-influencer/, template: 'AI Influencers: Master Virtual Influencer Creation 2025' },
    { match: /digital-products/, template: 'Digital Products: Create & Sell Guide for Success 2025' },
    { match: /n8n/, template: 'N8N Automation: Complete Workflow Guide & Best Practices' },
    { match: /comfyui/, template: 'ComfyUI: Professional AI Art Generation Guide 2025' },
    { match: /algorithm-defense/, template: 'Algorithm Defense: Protect Against Google Updates 2025' },
    { match: /analytics/, template: 'Analytics Dashboard: Track Performance & Grow Revenue' },
    { match: /checkout/, template: 'Secure Checkout: Complete Your Purchase & Start Learning' },
    { match: /contact/, template: 'Contact Us: Get Expert Help & Support for Your Goals' },
  ];

  for (const pattern of patterns) {
    if (pattern.match.test(dirName)) {
      return pattern.template;
    }
  }

  // Generic fallback
  const cleanName = dirName.split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
  return `${cleanName}: Expert Guide & Proven Strategies 2025`;
}

// Expand short title
function expandShortTitle(currentTitle, filePath, targetLength = OPTIMAL_LENGTH.min) {
  const keywords = extractKeywords(filePath, currentTitle);
  let newTitle = currentTitle;

  // Mapping of common short titles to expanded versions
  const expansions = {
    'AI Era Skills': 'AI Era Skills: Master Future-Ready Tech in 2025',
    'Whop Clipping': 'Whop Clipping: Complete Guide to Content Monetization',
    '500k Followers': '500k Followers: Proven Instagram Growth Strategy Guide',
    'Monetize With AI': 'Monetize With AI: Complete Income Generation Guide 2025',
    'AI Content Income': 'AI Content Income: Build Profitable Content Business 2025',
    'Instagram Ignited': 'Instagram Ignited: Master Growth & Engagement in 2025',
    'ComfyUI Comparison': 'ComfyUI Comparison: Best AI Art Tools Reviewed 2025',
    'AI Automation Guide': 'AI Automation Guide: Master Workflows & Boost Productivity',
    'Make App Automation': 'Make App Automation: Complete Workflow Builder Guide 2025',
    'TikTok Growth Hacks': 'TikTok Growth Hacks: Viral Content Strategies for 2025',
    'AI Influencer Trends': 'AI Influencer Trends: Virtual Creator Success in 2025',
    'Viral Carousel Guide': 'Viral Carousel Guide: Create Engaging Instagram Posts 2025'
  };

  // Check for direct match
  if (expansions[currentTitle]) {
    return expansions[currentTitle];
  }

  // Pattern-based expansion
  const patterns = [
    {
      match: /certification/i,
      expansion: (title) => title.includes('2025') ? title : `${title}: Professional Training & Career Boost 2025`
    },
    {
      match: /case stud/i,
      expansion: (title) => title.includes('Success') ? title : `${title}: Real Success Stories & Results 2025`
    },
    {
      match: /roi calculator/i,
      expansion: (title) => `${title.split(':')[0]}: Calculate Your Investment Returns`
    },
    {
      match: /tools comparison/i,
      expansion: (title) => `${title.split(':')[0]}: Best Tools Compared & Reviewed`
    }
  ];

  for (const pattern of patterns) {
    if (pattern.match.test(currentTitle)) {
      newTitle = pattern.expansion(currentTitle);
      if (newTitle.length >= targetLength - 10 && newTitle.length <= ACCEPTABLE_LENGTH.max) {
        return newTitle;
      }
    }
  }

  // Generic expansion strategies
  if (!currentTitle.includes('Guide') && !currentTitle.includes('Complete')) {
    newTitle = `${currentTitle}: Complete Guide & Expert Strategies`;
  }

  if (newTitle.length < targetLength - 5 && !newTitle.includes('2025')) {
    newTitle = `${newTitle} 2025`;
  }

  // Ensure within acceptable range
  if (newTitle.length > ACCEPTABLE_LENGTH.max) {
    newTitle = trimToLength(newTitle, ACCEPTABLE_LENGTH.max);
  }

  return newTitle;
}

// Trim long title
function trimLongTitle(currentTitle, targetLength = ACCEPTABLE_LENGTH.max) {
  if (currentTitle.length <= targetLength) return currentTitle;

  // Remove brand suffix if present
  let trimmed = currentTitle.replace(/\s*\|\s*IImagined\.ai\s*$/, '').trim();

  if (trimmed.length <= targetLength) return trimmed;

  // Remove year in brackets if too long
  trimmed = trimmed.replace(/\s*\[2025[^\]]*\]\s*/, ' ').trim();

  if (trimmed.length <= targetLength) return trimmed;

  // Smart truncation at word boundaries
  if (trimmed.length > targetLength) {
    // Try to preserve up to last complete word before target
    const words = trimmed.split(' ');
    let result = '';

    for (let i = 0; i < words.length; i++) {
      const testResult = result + (result ? ' ' : '') + words[i];
      if (testResult.length <= targetLength) {
        result = testResult;
      } else {
        break;
      }
    }

    trimmed = result || trimmed.substring(0, targetLength - 3);
  }

  return trimmed;
}

// Trim title to exact length at word boundary
function trimToLength(title, maxLength) {
  if (title.length <= maxLength) return title;

  let trimmed = title.substring(0, maxLength);
  const lastSpace = trimmed.lastIndexOf(' ');

  if (lastSpace > maxLength * 0.8) {
    trimmed = trimmed.substring(0, lastSpace);
  }

  return trimmed.trim();
}

// Read and parse page.tsx file
function readPageFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');

    // Extract metadata title using regex
    const titleMatch = content.match(/title:\s*["`']([^"`']+)["`']/);
    const currentTitle = titleMatch ? titleMatch[1] : null;

    return { content, currentTitle };
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error.message);
    return null;
  }
}

// Update title in page.tsx file
function updatePageFile(filePath, oldTitle, newTitle, createBackup = true) {
  try {
    const fileData = readPageFile(filePath);
    if (!fileData) return false;

    const { content } = fileData;

    // Create backup
    if (createBackup) {
      const backupDir = path.join(__dirname, '..', 'backups', 'title-fixes');
      if (!fs.existsSync(backupDir)) {
        fs.mkdirSync(backupDir, { recursive: true });
      }

      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const backupName = path.basename(filePath).replace('.tsx', `-${timestamp}.tsx`);
      const backupPath = path.join(backupDir, backupName);
      fs.writeFileSync(backupPath, content, 'utf8');
    }

    // Replace title in metadata
    let updatedContent = content;

    // Replace in main title field
    if (oldTitle) {
      updatedContent = updatedContent.replace(
        new RegExp(`title:\\s*["\`']${escapeRegex(oldTitle)}["\`']`, 'g'),
        `title: "${newTitle}"`
      );
    } else {
      // Add title if missing (after export const metadata = {)
      updatedContent = updatedContent.replace(
        /export\s+const\s+metadata\s*=\s*\{/,
        `export const metadata = {\n  title: "${newTitle}",`
      );
    }

    // Replace in openGraph
    if (oldTitle) {
      updatedContent = updatedContent.replace(
        new RegExp(`(openGraph:\\s*\\{[^}]*title:\\s*)["\`']${escapeRegex(oldTitle)}["\`']`, 'g'),
        `$1"${newTitle}"`
      );
    }

    // Replace in twitter
    if (oldTitle) {
      updatedContent = updatedContent.replace(
        new RegExp(`(twitter:\\s*\\{[^}]*title:\\s*)["\`']${escapeRegex(oldTitle)}["\`']`, 'gs'),
        `$1"${newTitle}"`
      );
    }

    // Write updated content
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    return true;
  } catch (error) {
    console.error(`Error updating ${filePath}:`, error.message);
    return false;
  }
}

// Escape regex special characters
function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Process all title issues
function processAllTitles(dryRun = false) {
  console.log('🎯 Title Optimization System - Phase 3\n');
  console.log('=' .repeat(60));

  const { report } = loadAnalysisData();
  const fixes = [];
  const stats = {
    missing: { processed: 0, success: 0, failed: 0 },
    tooShort: { processed: 0, success: 0, failed: 0 },
    tooLong: { processed: 0, success: 0, failed: 0 },
    total: 0
  };

  // Process missing titles (CRITICAL)
  console.log('\n📌 CRITICAL: Processing Missing Titles...\n');
  if (report.missingTitle && report.missingTitle.length > 0) {
    report.missingTitle.forEach(item => {
      const filePath = item.file;
      const newTitle = generateTitleForMissing(filePath);

      stats.missing.processed++;

      const fix = {
        file: filePath,
        severity: 'CRITICAL',
        issue: 'Missing Title',
        before: null,
        after: newTitle,
        length: { before: 0, after: newTitle.length },
        status: 'pending'
      };

      console.log(`  ${stats.missing.processed}. ${path.basename(path.dirname(filePath))}/`);
      console.log(`     BEFORE: [MISSING]`);
      console.log(`     AFTER:  "${newTitle}" (${newTitle.length} chars)`);

      if (!dryRun) {
        const success = updatePageFile(filePath, null, newTitle);
        fix.status = success ? 'success' : 'failed';
        if (success) {
          stats.missing.success++;
          console.log(`     ✅ SUCCESS`);
        } else {
          stats.missing.failed++;
          console.log(`     ❌ FAILED`);
        }
      } else {
        console.log(`     ⏭️  DRY RUN - No changes made`);
      }

      console.log('');
      fixes.push(fix);
      stats.total++;
    });
  }

  // Process short titles (HIGH)
  console.log('\n📏 HIGH: Processing Too Short Titles...\n');
  if (report.tooShort && report.tooShort.length > 0) {
    report.tooShort.forEach(item => {
      const filePath = item.file;
      const currentTitle = item.title;
      const newTitle = expandShortTitle(currentTitle, filePath);

      stats.tooShort.processed++;

      const fix = {
        file: filePath,
        severity: 'HIGH',
        issue: 'Too Short',
        before: currentTitle,
        after: newTitle,
        length: { before: currentTitle.length, after: newTitle.length },
        status: 'pending'
      };

      console.log(`  ${stats.tooShort.processed}. ${path.basename(path.dirname(filePath))}/`);
      console.log(`     BEFORE: "${currentTitle}" (${currentTitle.length} chars)`);
      console.log(`     AFTER:  "${newTitle}" (${newTitle.length} chars)`);

      if (!dryRun) {
        const success = updatePageFile(filePath, currentTitle, newTitle);
        fix.status = success ? 'success' : 'failed';
        if (success) {
          stats.tooShort.success++;
          console.log(`     ✅ SUCCESS`);
        } else {
          stats.tooShort.failed++;
          console.log(`     ❌ FAILED`);
        }
      } else {
        console.log(`     ⏭️  DRY RUN - No changes made`);
      }

      console.log('');
      fixes.push(fix);
      stats.total++;
    });
  }

  // Process long titles (MEDIUM)
  console.log('\n✂️  MEDIUM: Processing Too Long Titles...\n');
  if (report.tooLong && report.tooLong.length > 0) {
    report.tooLong.forEach(item => {
      const filePath = item.file;
      const currentTitle = item.title;
      const newTitle = trimLongTitle(currentTitle);

      stats.tooLong.processed++;

      const fix = {
        file: filePath,
        severity: 'MEDIUM',
        issue: 'Too Long',
        before: currentTitle,
        after: newTitle,
        length: { before: currentTitle.length, after: newTitle.length },
        status: 'pending'
      };

      console.log(`  ${stats.tooLong.processed}. ${path.basename(path.dirname(filePath))}/`);
      console.log(`     BEFORE: "${currentTitle}" (${currentTitle.length} chars)`);
      console.log(`     AFTER:  "${newTitle}" (${newTitle.length} chars)`);

      if (!dryRun) {
        const success = updatePageFile(filePath, currentTitle, newTitle);
        fix.status = success ? 'success' : 'failed';
        if (success) {
          stats.tooLong.success++;
          console.log(`     ✅ SUCCESS`);
        } else {
          stats.tooLong.failed++;
          console.log(`     ❌ FAILED`);
        }
      } else {
        console.log(`     ⏭️  DRY RUN - No changes made`);
      }

      console.log('');
      fixes.push(fix);
      stats.total++;
    });
  }

  // Save results
  if (!dryRun) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const resultsPath = path.join(__dirname, '..', `title-fixes-phase3-${timestamp}.json`);
    fs.writeFileSync(resultsPath, JSON.stringify({ fixes, stats, timestamp }, null, 2));
    console.log(`\n💾 Results saved to: ${resultsPath}\n`);
  }

  // Print summary
  console.log('\n' + '='.repeat(60));
  console.log('📊 SUMMARY\n');
  console.log(`CRITICAL (Missing):  ${stats.missing.processed} processed, ${stats.missing.success} success, ${stats.missing.failed} failed`);
  console.log(`HIGH (Too Short):    ${stats.tooShort.processed} processed, ${stats.tooShort.success} success, ${stats.tooShort.failed} failed`);
  console.log(`MEDIUM (Too Long):   ${stats.tooLong.processed} processed, ${stats.tooLong.success} success, ${stats.tooLong.failed} failed`);
  console.log(`\nTOTAL:               ${stats.total} titles optimized`);
  console.log('='.repeat(60));

  return { fixes, stats };
}

// CLI interface
if (require.main === module) {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry-run') || args.includes('-d');
  const test = args.includes('--test') || args.includes('-t');

  if (args.includes('--help') || args.includes('-h')) {
    console.log(`
Title Optimization Script - Phase 3

Usage:
  node bulk-fix-titles.js [options]

Options:
  --dry-run, -d    Preview changes without modifying files
  --test, -t       Test on 5 posts from each category
  --help, -h       Show this help message

Examples:
  node bulk-fix-titles.js --dry-run    # Preview all changes
  node bulk-fix-titles.js --test       # Test on 15 posts
  node bulk-fix-titles.js              # Process all 197 titles
    `);
    process.exit(0);
  }

  if (test) {
    console.log('🧪 TEST MODE: Processing 5 posts from each category\n');
    // TODO: Implement test mode
  }

  processAllTitles(dryRun);
}

module.exports = { processAllTitles, expandShortTitle, trimLongTitle, generateTitleForMissing };
