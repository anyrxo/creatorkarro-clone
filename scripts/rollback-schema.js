#!/usr/bin/env node

/**
 * BLOG SCHEMA ROLLBACK UTILITY
 *
 * Restores blog posts from backups created during bulk schema implementation
 *
 * Features:
 * - Restore individual posts or all posts
 * - List available backups
 * - Verify backups before restoration
 * - Detailed rollback reporting
 *
 * Usage:
 *   node scripts/rollback-schema.js                    # List all backups
 *   node scripts/rollback-schema.js [slug]             # Restore single post
 *   node scripts/rollback-schema.js --all              # Restore all posts
 *   node scripts/rollback-schema.js --verify           # Verify backups only
 */

const fs = require('fs');
const path = require('path');

// Configuration
const BACKUP_DIR = path.join(__dirname, '../.schema-backups');
const BLOG_DIR = path.join(__dirname, '../src/app/blog');

// Parse arguments
const args = process.argv.slice(2);
const slug = args[0];
const restoreAll = args.includes('--all');
const verifyOnly = args.includes('--verify');

// Statistics
const stats = {
  backupsFound: 0,
  postsRestored: 0,
  errors: []
};

/**
 * List all available backups
 */
function listBackups() {
  if (!fs.existsSync(BACKUP_DIR)) {
    console.log('❌ No backup directory found');
    console.log(`   Expected: ${BACKUP_DIR}`);
    return [];
  }

  const backups = fs.readdirSync(BACKUP_DIR)
    .filter(file => file.endsWith('.backup'))
    .map(file => {
      const backupPath = path.join(BACKUP_DIR, file);
      const stat = fs.statSync(backupPath);
      const slug = file.replace('.backup', '');
      return {
        slug,
        file,
        path: backupPath,
        size: stat.size,
        created: stat.mtime
      };
    })
    .sort((a, b) => b.created - a.created);

  stats.backupsFound = backups.length;
  return backups;
}

/**
 * Verify a backup file
 */
function verifyBackup(backup) {
  try {
    const content = fs.readFileSync(backup.path, 'utf-8');

    // Basic validation
    const checks = {
      hasMetadata: content.includes('export const metadata'),
      hasDefaultExport: content.includes('export default function'),
      hasReturn: content.includes('return'),
      isTypeScript: backup.file.includes('.tsx') || content.includes('React'),
      noSchemaImport: !content.includes('generateBlogPostSchema'),
      noSchemaScript: !content.includes('type="application/ld+json"')
    };

    const isValid = Object.values(checks).every(v => v);

    return {
      valid: isValid,
      checks,
      size: backup.size,
      created: backup.created
    };
  } catch (error) {
    return {
      valid: false,
      error: error.message
    };
  }
}

/**
 * Restore a single post from backup
 */
function restorePost(backup) {
  try {
    const targetPath = path.join(BLOG_DIR, backup.slug, 'page.tsx');

    if (!fs.existsSync(targetPath)) {
      throw new Error(`Target file does not exist: ${targetPath}`);
    }

    // Verify backup before restoring
    const verification = verifyBackup(backup);
    if (!verification.valid) {
      throw new Error('Backup verification failed: ' + JSON.stringify(verification.checks));
    }

    // Read backup content
    const backupContent = fs.readFileSync(backup.path, 'utf-8');

    // Create a safety backup of current state (before restoring)
    const safetyBackupPath = targetPath + '.pre-rollback';
    const currentContent = fs.readFileSync(targetPath, 'utf-8');
    fs.writeFileSync(safetyBackupPath, currentContent);

    // Restore from backup
    fs.writeFileSync(targetPath, backupContent);

    stats.postsRestored++;

    return {
      success: true,
      targetPath,
      safetyBackup: safetyBackupPath
    };

  } catch (error) {
    stats.errors.push({
      slug: backup.slug,
      error: error.message
    });

    return {
      success: false,
      error: error.message
    };
  }
}

/**
 * Main execution
 */
function main() {
  console.log('🔄 BLOG SCHEMA ROLLBACK UTILITY\n');

  // List all backups
  const backups = listBackups();

  if (backups.length === 0) {
    console.log('No backups found.');
    return;
  }

  console.log(`Found ${backups.length} backup(s):\n`);

  // If no arguments, just list backups
  if (!slug && !restoreAll && !verifyOnly) {
    backups.forEach((backup, i) => {
      console.log(`${i + 1}. ${backup.slug}`);
      console.log(`   Created: ${backup.created.toISOString()}`);
      console.log(`   Size: ${(backup.size / 1024).toFixed(2)} KB`);
      console.log('');
    });

    console.log('Usage:');
    console.log('  node scripts/rollback-schema.js [slug]     # Restore single post');
    console.log('  node scripts/rollback-schema.js --all      # Restore all posts');
    console.log('  node scripts/rollback-schema.js --verify   # Verify backups only');
    return;
  }

  // Verify mode
  if (verifyOnly) {
    console.log('🔍 Verifying backups...\n');

    let validCount = 0;
    let invalidCount = 0;

    backups.forEach(backup => {
      const verification = verifyBackup(backup);
      if (verification.valid) {
        validCount++;
        console.log(`✅ ${backup.slug} - Valid`);
      } else {
        invalidCount++;
        console.log(`❌ ${backup.slug} - Invalid`);
        if (verification.error) {
          console.log(`   Error: ${verification.error}`);
        } else {
          console.log('   Failed checks:', Object.entries(verification.checks)
            .filter(([k, v]) => !v)
            .map(([k]) => k)
            .join(', '));
        }
      }
    });

    console.log(`\n✅ Valid: ${validCount}`);
    console.log(`❌ Invalid: ${invalidCount}`);
    return;
  }

  // Restore single post
  if (slug && !restoreAll) {
    const backup = backups.find(b => b.slug === slug);

    if (!backup) {
      console.log(`❌ No backup found for slug: ${slug}`);
      console.log('\nAvailable backups:');
      backups.forEach(b => console.log(`  - ${b.slug}`));
      return;
    }

    console.log(`🔄 Restoring ${slug}...\n`);

    const result = restorePost(backup);

    if (result.success) {
      console.log(`✅ Successfully restored ${slug}`);
      console.log(`   Target: ${result.targetPath}`);
      console.log(`   Safety backup: ${result.safetyBackup}`);
    } else {
      console.log(`❌ Failed to restore ${slug}`);
      console.log(`   Error: ${result.error}`);
    }

    return;
  }

  // Restore all posts
  if (restoreAll) {
    console.log(`🔄 Restoring all ${backups.length} posts...\n`);

    const confirm = process.argv.includes('--confirm');

    if (!confirm) {
      console.log('⚠️  This will restore ALL posts from backups.');
      console.log('   Current versions will be backed up to .pre-rollback files.');
      console.log('\n   To proceed, run:');
      console.log('   node scripts/rollback-schema.js --all --confirm');
      return;
    }

    let successCount = 0;
    let errorCount = 0;

    backups.forEach((backup, i) => {
      const progress = `[${i + 1}/${backups.length}]`;
      console.log(`${progress} Restoring ${backup.slug}...`);

      const result = restorePost(backup);

      if (result.success) {
        successCount++;
        console.log(`  ✅ Success`);
      } else {
        errorCount++;
        console.log(`  ❌ Error: ${result.error}`);
      }
    });

    console.log('\n' + '='.repeat(60));
    console.log('ROLLBACK SUMMARY');
    console.log('='.repeat(60));
    console.log(`Total backups:     ${backups.length}`);
    console.log(`Successfully restored: ${successCount}`);
    console.log(`Errors:            ${errorCount}`);
    console.log('='.repeat(60));

    if (stats.errors.length > 0) {
      console.log('\n⚠️  ERRORS:');
      stats.errors.forEach(err => {
        console.log(`  - ${err.slug}: ${err.error}`);
      });
    }

    console.log('\n✨ Rollback complete!');
    console.log('\nNote: Previous versions saved with .pre-rollback extension');
  }
}

// Run the script
main();
