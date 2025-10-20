const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

/**
 * Comprehensive Image Optimization Script - Phase 3
 * Optimizes ALL remaining unoptimized images across the website
 */

// Configuration
const CONFIG = {
  publicDir: path.join(__dirname, '..', 'public'),
  categories: {
    root: '',
    partners: 'partners',
    testimonials: 'testimonials'
  },
  quality: {
    default: 80,
    logo: 85,      // Higher quality for partner logos
    photo: 80      // Standard quality for photos
  },
  effort: 6,       // WebP compression effort (0-6, higher = better compression)
  skipWebP: true   // Skip files already in WebP format
}

// Statistics tracking
const stats = {
  totalImages: 0,
  optimized: 0,
  skipped: 0,
  failed: 0,
  totalOriginalSize: 0,
  totalOptimizedSize: 0,
  byCategory: {}
}

/**
 * Find all images in a directory recursively
 */
function findImages(dir, extensions = ['.jpg', '.jpeg', '.png']) {
  const images = []

  if (!fs.existsSync(dir)) {
    console.log(`Directory not found: ${dir}`)
    return images
  }

  const items = fs.readdirSync(dir)

  for (const item of items) {
    const fullPath = path.join(dir, item)
    const stat = fs.statSync(fullPath)

    if (stat.isDirectory()) {
      images.push(...findImages(fullPath, extensions))
    } else if (stat.isFile()) {
      const ext = path.extname(item).toLowerCase()
      if (extensions.includes(ext)) {
        images.push(fullPath)
      }
    }
  }

  return images
}

/**
 * Optimize a single image to WebP
 */
async function optimizeImage(inputPath, category = 'default') {
  try {
    // Check if file is empty
    const stat = fs.statSync(inputPath)
    if (stat.size === 0) {
      console.log(`⚠️  Skipping empty file: ${path.basename(inputPath)}`)
      stats.skipped++
      return {
        input: inputPath,
        status: 'skipped',
        reason: 'empty file'
      }
    }

    // Generate output path
    const outputPath = inputPath.replace(/\.(jpg|jpeg|png)$/i, '.webp')

    // Check if WebP already exists
    if (fs.existsSync(outputPath)) {
      console.log(`ℹ️  WebP already exists: ${path.basename(outputPath)}`)
      stats.skipped++
      return {
        input: inputPath,
        output: outputPath,
        status: 'skipped',
        reason: 'webp exists'
      }
    }

    // Determine quality based on category
    const quality = category === 'partners' ? CONFIG.quality.logo : CONFIG.quality.photo

    // Get input size
    const inputSize = stat.size

    console.log(`🔄 Optimizing: ${path.basename(inputPath)} (${(inputSize / 1024).toFixed(2)} KB)`)

    // Optimize to WebP
    await sharp(inputPath)
      .webp({ quality, effort: CONFIG.effort })
      .toFile(outputPath)

    const outputSize = fs.statSync(outputPath).size
    const savings = inputSize - outputSize
    const savingsPercent = Math.round((savings / inputSize) * 100)

    console.log(`✅ Saved: ${(savings / 1024).toFixed(2)} KB (${savingsPercent}%)`)

    stats.optimized++
    stats.totalOriginalSize += inputSize
    stats.totalOptimizedSize += outputSize

    return {
      input: inputPath,
      output: outputPath,
      inputSize,
      outputSize,
      savings,
      savingsPercent,
      status: 'success'
    }
  } catch (error) {
    console.error(`❌ Failed to optimize ${path.basename(inputPath)}: ${error.message}`)
    stats.failed++

    return {
      input: inputPath,
      error: error.message,
      status: 'failed'
    }
  }
}

/**
 * Optimize all images in a category
 */
async function optimizeCategory(categoryName, categoryPath) {
  console.log(`\n${'='.repeat(60)}`)
  console.log(`📁 Category: ${categoryName}`)
  console.log('='.repeat(60))

  const fullPath = path.join(CONFIG.publicDir, categoryPath)
  const images = findImages(fullPath)

  if (images.length === 0) {
    console.log(`No images found in ${categoryName}`)
    stats.byCategory[categoryName] = {
      total: 0,
      optimized: 0,
      skipped: 0,
      failed: 0
    }
    return []
  }

  console.log(`Found ${images.length} images\n`)

  const results = []
  const categoryStats = {
    total: images.length,
    optimized: 0,
    skipped: 0,
    failed: 0,
    totalSavings: 0
  }

  for (const image of images) {
    const result = await optimizeImage(image, categoryName)
    results.push(result)

    if (result.status === 'success') {
      categoryStats.optimized++
      categoryStats.totalSavings += result.savings
    } else if (result.status === 'skipped') {
      categoryStats.skipped++
    } else if (result.status === 'failed') {
      categoryStats.failed++
    }
  }

  stats.byCategory[categoryName] = categoryStats

  return results
}

/**
 * Generate optimization report
 */
function generateReport(results) {
  const totalSavings = stats.totalOriginalSize - stats.totalOptimizedSize
  const totalSavingsPercent = stats.totalOriginalSize > 0
    ? Math.round((totalSavings / stats.totalOriginalSize) * 100)
    : 0

  const report = {
    timestamp: new Date().toISOString(),
    summary: {
      totalImages: stats.totalImages,
      optimized: stats.optimized,
      skipped: stats.skipped,
      failed: stats.failed,
      totalOriginalSize: stats.totalOriginalSize,
      totalOptimizedSize: stats.totalOptimizedSize,
      totalSavings,
      totalSavingsPercent
    },
    byCategory: stats.byCategory,
    details: results
  }

  // Save JSON report
  const reportPath = path.join(__dirname, '..', 'image-optimization-phase3-report.json')
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2))

  // Print summary
  console.log(`\n${'='.repeat(60)}`)
  console.log('📊 OPTIMIZATION SUMMARY')
  console.log('='.repeat(60))
  console.log(`Total images found: ${stats.totalImages}`)
  console.log(`✅ Optimized: ${stats.optimized}`)
  console.log(`⏭️  Skipped: ${stats.skipped}`)
  console.log(`❌ Failed: ${stats.failed}`)
  console.log(`\n💾 Size Reduction:`)
  console.log(`   Original: ${(stats.totalOriginalSize / 1024 / 1024).toFixed(2)} MB`)
  console.log(`   Optimized: ${(stats.totalOptimizedSize / 1024 / 1024).toFixed(2)} MB`)
  console.log(`   Savings: ${(totalSavings / 1024 / 1024).toFixed(2)} MB (${totalSavingsPercent}%)`)

  console.log(`\n📁 By Category:`)
  for (const [name, catStats] of Object.entries(stats.byCategory)) {
    if (catStats.total > 0) {
      console.log(`   ${name}: ${catStats.optimized}/${catStats.total} optimized, ${(catStats.totalSavings / 1024).toFixed(2)} KB saved`)
    }
  }

  console.log(`\n📄 Detailed report saved to: ${reportPath}`)
  console.log('='.repeat(60))

  return report
}

/**
 * Main execution
 */
async function main() {
  console.log('🚀 Image Optimization - Phase 3')
  console.log('Optimizing ALL remaining unoptimized images\n')

  const allResults = []

  // Optimize each category
  for (const [categoryName, categoryPath] of Object.entries(CONFIG.categories)) {
    const results = await optimizeCategory(categoryName, categoryPath)
    allResults.push(...results)
    stats.totalImages += results.length
  }

  // Generate final report
  const report = generateReport(allResults)

  console.log('\n✨ Optimization complete!\n')

  return report
}

// Run if called directly
if (require.main === module) {
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error('Fatal error:', error)
      process.exit(1)
    })
}

module.exports = { main, optimizeImage, findImages }
