#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

const OPTIMAL_LENGTH = { min: 50, max: 60 };
const ACCEPTABLE_LENGTH = { min: 30, max: 60 };

// Extract title from page.tsx content
function extractTitle(content) {
  const titleMatch = content.match(/title:\s*["`']([^"`']+)["`']/);
  return titleMatch ? titleMatch[1] : null;
}

// Check for duplicate titles
function findDuplicates(titles) {
  const seen = new Map();
  const duplicates = [];

  titles.forEach(({ title, file }) => {
    if (seen.has(title)) {
      duplicates.push({ title, files: [seen.get(title), file] });
    } else {
      seen.set(title, file);
    }
  });

  return duplicates;
}

// Validate keyword preservation
function validateKeywords(originalTitle, newTitle) {
  if (!originalTitle) return { preserved: true, missing: [] };

  const originalWords = new Set(
    originalTitle.toLowerCase()
      .split(/\s+/)
      .map(w => w.replace(/[^a-z0-9]/g, ''))
      .filter(w => w.length > 3)
  );

  const newWords = new Set(
    newTitle.toLowerCase()
      .split(/\s+/)
      .map(w => w.replace(/[^a-z0-9]/g, ''))
      .filter(w => w.length > 3)
  );

  const missing = [];
  originalWords.forEach(word => {
    if (!newWords.has(word)) {
      missing.push(word);
    }
  });

  return {
    preserved: missing.length === 0,
    missing,
    preservationRate: originalWords.size > 0
      ? ((originalWords.size - missing.length) / originalWords.size * 100).toFixed(1)
      : 100
  };
}

// Check title quality
function assessTitleQuality(title) {
  const issues = [];
  const warnings = [];
  let score = 100;

  // Length checks
  if (title.length < ACCEPTABLE_LENGTH.min) {
    issues.push(`Too short (${title.length} chars, minimum ${ACCEPTABLE_LENGTH.min})`);
    score -= 30;
  } else if (title.length > ACCEPTABLE_LENGTH.max) {
    issues.push(`Too long (${title.length} chars, maximum ${ACCEPTABLE_LENGTH.max})`);
    score -= 20;
  } else if (title.length < OPTIMAL_LENGTH.min) {
    warnings.push(`Below optimal length (${title.length} chars, recommended ${OPTIMAL_LENGTH.min}-${OPTIMAL_LENGTH.max})`);
    score -= 5;
  } else if (title.length > OPTIMAL_LENGTH.max) {
    warnings.push(`Above optimal length (${title.length} chars, recommended ${OPTIMAL_LENGTH.min}-${OPTIMAL_LENGTH.max})`);
    score -= 5;
  }

  // Content quality checks
  const hasNumbers = /\d/.test(title);
  const hasYear = /202[0-9]/.test(title);
  const hasPowerWords = /(complete|guide|master|expert|ultimate|proven|best|top|essential)/i.test(title);
  const hasSpecialChars = /[:|–—]/.test(title);

  if (hasPowerWords) {
    warnings.push('Contains power words (good for CTR)');
  }

  if (hasYear) {
    warnings.push('Contains current year (shows freshness)');
  }

  if (title.includes('|')) {
    warnings.push('Contains brand separator');
  }

  // Readability
  const wordCount = title.split(/\s+/).length;
  if (wordCount < 5) {
    warnings.push('Very few words (may lack context)');
    score -= 5;
  }

  if (wordCount > 12) {
    warnings.push('Many words (may be hard to scan)');
    score -= 5;
  }

  // All caps check
  if (title === title.toUpperCase() && title.length > 10) {
    issues.push('All caps (avoid shouting)');
    score -= 15;
  }

  // Multiple punctuation
  if ((title.match(/[!?]/g) || []).length > 1) {
    warnings.push('Multiple exclamation/question marks');
    score -= 5;
  }

  score = Math.max(0, Math.min(100, score));

  return {
    score,
    grade: score >= 90 ? 'A' : score >= 80 ? 'B' : score >= 70 ? 'C' : score >= 60 ? 'D' : 'F',
    issues,
    warnings
  };
}

// Validate all titles in the website
async function validateAllTitles() {
  console.log('🔍 Title Validation System - Phase 3\n');
  console.log('=' .repeat(60));

  // Find all page.tsx files
  const pageFiles = await glob('src/app/**/page.tsx', {
    cwd: path.join(__dirname, '..'),
    absolute: true
  });

  console.log(`\n📂 Found ${pageFiles.length} page files\n`);

  const results = {
    total: 0,
    valid: 0,
    invalid: 0,
    missing: 0,
    tooShort: 0,
    tooLong: 0,
    optimal: 0,
    duplicates: 0,
    titles: [],
    issues: [],
    statistics: {
      avgLength: 0,
      minLength: Infinity,
      maxLength: 0,
      avgQualityScore: 0
    }
  };

  const allTitles = [];
  let totalLength = 0;
  let totalQuality = 0;

  // Process each file
  for (const filePath of pageFiles) {
    results.total++;

    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const title = extractTitle(content);

      const relativePath = path.relative(path.join(__dirname, '..'), filePath);

      if (!title) {
        results.missing++;
        results.invalid++;
        results.issues.push({
          file: relativePath,
          severity: 'CRITICAL',
          issue: 'Missing title',
          title: null
        });
        continue;
      }

      allTitles.push({ title, file: relativePath });

      // Length validation
      const length = title.length;
      totalLength += length;
      results.statistics.minLength = Math.min(results.statistics.minLength, length);
      results.statistics.maxLength = Math.max(results.statistics.maxLength, length);

      let isValid = true;

      if (length < ACCEPTABLE_LENGTH.min) {
        results.tooShort++;
        results.invalid++;
        isValid = false;
        results.issues.push({
          file: relativePath,
          severity: 'HIGH',
          issue: 'Too short',
          title,
          length
        });
      } else if (length > ACCEPTABLE_LENGTH.max) {
        results.tooLong++;
        results.invalid++;
        isValid = false;
        results.issues.push({
          file: relativePath,
          severity: 'MEDIUM',
          issue: 'Too long',
          title,
          length
        });
      } else if (length >= OPTIMAL_LENGTH.min && length <= OPTIMAL_LENGTH.max) {
        results.optimal++;
      }

      // Quality assessment
      const quality = assessTitleQuality(title);
      totalQuality += quality.score;

      if (quality.issues.length > 0) {
        results.issues.push({
          file: relativePath,
          severity: 'WARNING',
          issue: quality.issues.join(', '),
          title,
          qualityScore: quality.score
        });
      }

      if (isValid) {
        results.valid++;
      }

      results.titles.push({
        file: relativePath,
        title,
        length,
        quality: quality.score,
        grade: quality.grade,
        isValid
      });

    } catch (error) {
      console.error(`Error processing ${filePath}:`, error.message);
      results.invalid++;
    }
  }

  // Calculate statistics
  results.statistics.avgLength = (totalLength / results.total).toFixed(1);
  results.statistics.avgQualityScore = (totalQuality / results.total).toFixed(1);

  // Check for duplicates
  const duplicates = findDuplicates(allTitles);
  results.duplicates = duplicates.length;

  if (duplicates.length > 0) {
    console.log('\n⚠️  DUPLICATE TITLES FOUND:\n');
    duplicates.forEach(dup => {
      console.log(`  "${dup.title}"`);
      dup.files.forEach(file => console.log(`    - ${file}`));
      console.log('');
      results.issues.push({
        severity: 'HIGH',
        issue: 'Duplicate title',
        title: dup.title,
        files: dup.files
      });
    });
  }

  // Print detailed report
  console.log('\n' + '='.repeat(60));
  console.log('📊 VALIDATION RESULTS\n');
  console.log(`Total Pages:           ${results.total}`);
  console.log(`Valid Titles:          ${results.valid} (${(results.valid / results.total * 100).toFixed(1)}%)`);
  console.log(`Invalid Titles:        ${results.invalid} (${(results.invalid / results.total * 100).toFixed(1)}%)`);
  console.log(`\nIssue Breakdown:`);
  console.log(`  Missing:             ${results.missing}`);
  console.log(`  Too Short (<30):     ${results.tooShort}`);
  console.log(`  Too Long (>60):      ${results.tooLong}`);
  console.log(`  Optimal (50-60):     ${results.optimal}`);
  console.log(`  Duplicates:          ${results.duplicates}`);
  console.log(`\nStatistics:`);
  console.log(`  Avg Length:          ${results.statistics.avgLength} chars`);
  console.log(`  Min Length:          ${results.statistics.minLength} chars`);
  console.log(`  Max Length:          ${results.statistics.maxLength} chars`);
  console.log(`  Avg Quality Score:   ${results.statistics.avgQualityScore}/100`);
  console.log('='.repeat(60));

  // Show issues by severity
  if (results.issues.length > 0) {
    console.log('\n❌ ISSUES FOUND:\n');

    const critical = results.issues.filter(i => i.severity === 'CRITICAL');
    const high = results.issues.filter(i => i.severity === 'HIGH');
    const medium = results.issues.filter(i => i.severity === 'MEDIUM');
    const warnings = results.issues.filter(i => i.severity === 'WARNING');

    if (critical.length > 0) {
      console.log(`\n🚨 CRITICAL (${critical.length}):`);
      critical.forEach(issue => {
        console.log(`  - ${issue.file}`);
        console.log(`    ${issue.issue}`);
      });
    }

    if (high.length > 0) {
      console.log(`\n⚠️  HIGH (${high.length}):`);
      high.slice(0, 10).forEach(issue => {
        console.log(`  - ${issue.file}`);
        console.log(`    ${issue.issue}: "${issue.title}" (${issue.length} chars)`);
      });
      if (high.length > 10) {
        console.log(`  ... and ${high.length - 10} more`);
      }
    }

    if (medium.length > 0) {
      console.log(`\n⚡ MEDIUM (${medium.length}):`);
      medium.slice(0, 10).forEach(issue => {
        console.log(`  - ${issue.file}`);
        console.log(`    ${issue.issue}: "${issue.title}" (${issue.length} chars)`);
      });
      if (medium.length > 10) {
        console.log(`  ... and ${medium.length - 10} more`);
      }
    }

    if (warnings.length > 0) {
      console.log(`\n💡 WARNINGS (${warnings.length}) - Check quality scores\n`);
    }
  } else {
    console.log('\n✅ ALL TITLES VALID! No issues found.\n');
  }

  // Save results to file
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const outputPath = path.join(__dirname, '..', `title-validation-${timestamp}.json`);
  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));
  console.log(`\n💾 Full report saved to: ${outputPath}\n`);

  // Generate summary file
  const summary = `
TITLE VALIDATION SUMMARY
Generated: ${new Date().toISOString()}

OVERVIEW
========
Total Pages: ${results.total}
Valid: ${results.valid} (${(results.valid / results.total * 100).toFixed(1)}%)
Invalid: ${results.invalid} (${(results.invalid / results.total * 100).toFixed(1)}%)

ISSUES
======
Missing Titles: ${results.missing}
Too Short: ${results.tooShort}
Too Long: ${results.tooLong}
Duplicates: ${results.duplicates}

QUALITY
=======
Optimal Length (50-60): ${results.optimal}
Average Length: ${results.statistics.avgLength} chars
Average Quality Score: ${results.statistics.avgQualityScore}/100

STATUS
======
${results.invalid === 0 ? '✅ ALL TITLES VALIDATED SUCCESSFULLY' : '❌ ISSUES FOUND - Review validation report'}
  `.trim();

  const summaryPath = path.join(__dirname, '..', 'TITLE_VALIDATION_SUMMARY.txt');
  fs.writeFileSync(summaryPath, summary);
  console.log(`📄 Summary saved to: TITLE_VALIDATION_SUMMARY.txt\n`);

  return results;
}

// CLI interface
if (require.main === module) {
  validateAllTitles().catch(error => {
    console.error('Validation failed:', error);
    process.exit(1);
  });
}

module.exports = { validateAllTitles, assessTitleQuality, validateKeywords };
