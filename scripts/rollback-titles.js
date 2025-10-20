#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// List all backups
function listBackups() {
  const backupDir = path.join(__dirname, '..', 'backups', 'title-fixes');

  if (!fs.existsSync(backupDir)) {
    console.log('❌ No backups found. Backup directory does not exist.');
    return [];
  }

  const backups = fs.readdirSync(backupDir)
    .filter(file => file.endsWith('.tsx'))
    .map(file => {
      const fullPath = path.join(backupDir, file);
      const stats = fs.statSync(fullPath);
      return {
        name: file,
        path: fullPath,
        created: stats.mtime,
        size: stats.size
      };
    })
    .sort((a, b) => b.created - a.created);

  return backups;
}

// Get original file path from backup name
function getOriginalPath(backupName) {
  // Remove timestamp from backup name
  // Format: filename-2025-01-15T10-30-00-000Z.tsx -> filename.tsx
  const cleanName = backupName.replace(/-\d{4}-\d{2}-\d{2}T[\d-]+Z\.tsx$/, '.tsx');

  // Search for the original file
  const possiblePaths = [
    path.join(__dirname, '..', 'src', 'app', cleanName),
    path.join(__dirname, '..', 'src', 'app', 'blog', cleanName)
  ];

  // Try to find based on backup directory structure
  const backupPath = path.join(__dirname, '..', 'backups', 'title-fixes', backupName);

  if (fs.existsSync(backupPath)) {
    try {
      const content = fs.readFileSync(backupPath, 'utf8');
      // Extract canonical URL to determine original path
      const canonicalMatch = content.match(/canonical:\s*["`']https?:\/\/[^\/]+\/([^"`']+)["`']/);

      if (canonicalMatch) {
        const urlPath = canonicalMatch[1];
        const segments = urlPath.split('/').filter(s => s);

        if (segments.length > 0) {
          const possiblePath = path.join(__dirname, '..', 'src', 'app', ...segments, 'page.tsx');
          if (fs.existsSync(possiblePath)) {
            return possiblePath;
          }
        }
      }
    } catch (error) {
      // Continue to fallback methods
    }
  }

  // Fallback: try standard paths
  for (const possiblePath of possiblePaths) {
    if (fs.existsSync(possiblePath)) {
      return possiblePath;
    }
  }

  return null;
}

// Rollback a single file
function rollbackFile(backupPath, originalPath, dryRun = false) {
  try {
    if (!fs.existsSync(backupPath)) {
      console.error(`❌ Backup file not found: ${backupPath}`);
      return false;
    }

    if (!originalPath) {
      console.error(`❌ Could not determine original file path for backup`);
      return false;
    }

    const backupContent = fs.readFileSync(backupPath, 'utf8');

    console.log(`  📄 Backup: ${path.basename(backupPath)}`);
    console.log(`  📍 Target: ${path.relative(path.join(__dirname, '..'), originalPath)}`);

    if (!dryRun) {
      // Create a backup of the current state before rollback
      const currentBackupPath = originalPath.replace('.tsx', `-before-rollback-${Date.now()}.tsx`);
      if (fs.existsSync(originalPath)) {
        const currentContent = fs.readFileSync(originalPath, 'utf8');
        fs.writeFileSync(currentBackupPath, currentContent, 'utf8');
        console.log(`  💾 Current state backed up to: ${path.basename(currentBackupPath)}`);
      }

      // Restore backup
      fs.writeFileSync(originalPath, backupContent, 'utf8');
      console.log(`  ✅ Rolled back successfully`);
      return true;
    } else {
      console.log(`  ⏭️  DRY RUN - Would rollback this file`);
      return true;
    }
  } catch (error) {
    console.error(`  ❌ Error rolling back: ${error.message}`);
    return false;
  }
}

// Rollback all backups
function rollbackAll(dryRun = false) {
  console.log('🔄 Title Rollback System - Phase 3\n');
  console.log('=' .repeat(60));

  const backups = listBackups();

  if (backups.length === 0) {
    console.log('\n❌ No backups found to rollback.\n');
    return { success: 0, failed: 0, total: 0 };
  }

  console.log(`\n📦 Found ${backups.length} backup files\n`);

  if (dryRun) {
    console.log('⚠️  DRY RUN MODE - No files will be modified\n');
  } else {
    console.log('⚠️  WARNING: This will restore all files to their backed up state!\n');
  }

  const stats = {
    success: 0,
    failed: 0,
    total: backups.length
  };

  backups.forEach((backup, index) => {
    console.log(`\n${index + 1}. Rolling back ${backup.name}:`);

    const originalPath = getOriginalPath(backup.name);

    if (rollbackFile(backup.path, originalPath, dryRun)) {
      stats.success++;
    } else {
      stats.failed++;
    }
  });

  // Print summary
  console.log('\n' + '='.repeat(60));
  console.log('📊 ROLLBACK SUMMARY\n');
  console.log(`Total Files:     ${stats.total}`);
  console.log(`Successful:      ${stats.success}`);
  console.log(`Failed:          ${stats.failed}`);
  console.log('='.repeat(60));

  if (!dryRun && stats.success > 0) {
    console.log('\n✅ Rollback completed. Files have been restored to backed up state.');
    console.log('💡 Tip: Run validate-titles.js to check the current state.\n');
  }

  return stats;
}

// Rollback by timestamp range
function rollbackByDate(startDate, endDate, dryRun = false) {
  console.log('🔄 Title Rollback System - By Date Range\n');
  console.log('=' .repeat(60));

  const backups = listBackups();
  const filtered = backups.filter(backup => {
    return backup.created >= startDate && backup.created <= endDate;
  });

  console.log(`\n📦 Found ${filtered.length} backups in date range\n`);

  if (filtered.length === 0) {
    console.log('❌ No backups found in specified date range.\n');
    return { success: 0, failed: 0, total: 0 };
  }

  const stats = {
    success: 0,
    failed: 0,
    total: filtered.length
  };

  filtered.forEach((backup, index) => {
    console.log(`\n${index + 1}. Rolling back ${backup.name} (${backup.created.toISOString()}):`);

    const originalPath = getOriginalPath(backup.name);

    if (rollbackFile(backup.path, originalPath, dryRun)) {
      stats.success++;
    } else {
      stats.failed++;
    }
  });

  console.log('\n' + '='.repeat(60));
  console.log('📊 ROLLBACK SUMMARY\n');
  console.log(`Total Files:     ${stats.total}`);
  console.log(`Successful:      ${stats.success}`);
  console.log(`Failed:          ${stats.failed}`);
  console.log('='.repeat(60));

  return stats;
}

// Show backup information
function showBackupInfo() {
  console.log('📦 Backup Information\n');
  console.log('=' .repeat(60));

  const backups = listBackups();

  if (backups.length === 0) {
    console.log('\n❌ No backups found.\n');
    return;
  }

  console.log(`\nTotal Backups: ${backups.length}\n`);

  // Group by date
  const byDate = {};
  backups.forEach(backup => {
    const dateKey = backup.created.toISOString().split('T')[0];
    if (!byDate[dateKey]) {
      byDate[dateKey] = [];
    }
    byDate[dateKey].push(backup);
  });

  Object.keys(byDate).sort().reverse().forEach(date => {
    console.log(`\n📅 ${date} (${byDate[date].length} backups):`);
    byDate[date].slice(0, 5).forEach(backup => {
      const sizeKB = (backup.size / 1024).toFixed(2);
      console.log(`  - ${backup.name} (${sizeKB} KB, ${backup.created.toLocaleTimeString()})`);
    });
    if (byDate[date].length > 5) {
      console.log(`  ... and ${byDate[date].length - 5} more`);
    }
  });

  const totalSize = backups.reduce((sum, b) => sum + b.size, 0);
  console.log(`\n💾 Total Backup Size: ${(totalSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`📍 Backup Location: ${path.join(__dirname, '..', 'backups', 'title-fixes')}`);
  console.log('='.repeat(60));
}

// CLI interface
if (require.main === module) {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry-run') || args.includes('-d');

  if (args.includes('--help') || args.includes('-h')) {
    console.log(`
Title Rollback Script - Phase 3

Usage:
  node rollback-titles.js [options]

Options:
  --dry-run, -d    Preview rollback without modifying files
  --info, -i       Show backup information
  --all, -a        Rollback all backups (default)
  --help, -h       Show this help message

Examples:
  node rollback-titles.js --info              # Show backup info
  node rollback-titles.js --dry-run           # Preview rollback
  node rollback-titles.js                     # Rollback all files
    `);
    process.exit(0);
  }

  if (args.includes('--info') || args.includes('-i')) {
    showBackupInfo();
  } else {
    rollbackAll(dryRun);
  }
}

module.exports = { rollbackAll, rollbackFile, listBackups, showBackupInfo };
