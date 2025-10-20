const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

async function optimizeImage(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .webp({ quality: 80, effort: 6 })
      .toFile(outputPath)

    const inputSize = fs.statSync(inputPath).size
    const outputSize = fs.statSync(outputPath).size
    const savings = Math.round((1 - outputSize / inputSize) * 100)

    console.log(`✓ ${path.basename(inputPath)} → ${path.basename(outputPath)} (${savings}% smaller)`)

    return {
      input: path.basename(inputPath),
      output: path.basename(outputPath),
      inputSize,
      outputSize,
      savings
    }
  } catch (error) {
    console.error(`✗ Failed to optimize ${inputPath}:`, error.message)
    return null
  }
}

async function optimizeDirectory(dirPath) {
  console.log(`\n📁 Optimizing images in: ${dirPath}\n`)

  const files = fs.readdirSync(dirPath)
  const imageFiles = files.filter(f => /\.(jpg|jpeg|png)$/i.test(f))

  console.log(`Found ${imageFiles.length} images to optimize...\n`)

  const results = []
  let totalInputSize = 0
  let totalOutputSize = 0

  for (const file of imageFiles) {
    const inputPath = path.join(dirPath, file)
    const outputPath = inputPath.replace(/\.(jpg|jpeg|png)$/i, '.webp')

    const result = await optimizeImage(inputPath, outputPath)
    if (result) {
      results.push(result)
      totalInputSize += result.inputSize
      totalOutputSize += result.outputSize
    }
  }

  console.log(`\n✅ Optimization complete!`)
  console.log(`\n📊 Summary:`)
  console.log(`   Total images optimized: ${results.length}`)
  console.log(`   Original size: ${(totalInputSize / 1024 / 1024).toFixed(2)} MB`)
  console.log(`   Optimized size: ${(totalOutputSize / 1024 / 1024).toFixed(2)} MB`)
  const savingsMB = ((totalInputSize - totalOutputSize) / 1024 / 1024).toFixed(2)
  const savingsPct = Math.round((1 - totalOutputSize / totalInputSize) * 100)
  console.log(`   Total savings: ${savingsMB} MB (${savingsPct}%)`)
}

// Optimize testimonials directory
const testimonialsPath = path.join(__dirname, '..', 'public', 'testimonials')
if (fs.existsSync(testimonialsPath)) {
  optimizeDirectory(testimonialsPath)
} else {
  console.log('Testimonials directory not found at:', testimonialsPath)
}
