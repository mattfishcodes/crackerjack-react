/* eslint-disable @typescript-eslint/no-require-imports */
// scripts/optimize-images.js

const sharp = require('sharp')
const fs = require('fs-extra')
const path = require('path')

const dir = path.join(__dirname, '../public/images')

// You can customize these sizes
const sizes = [16, 32, 256, 576, 768, 992, 1200, 1400]

async function optimizeImages() {
  await fs.ensureDir(dir)
  const files = await fs.readdir(dir)

  for (const file of files) {
    const ext = path.extname(file).toLowerCase()
    const name = path.basename(file, ext)

    const inputFile = path.join(dir, file)

    for (const width of sizes) {
      const outputFileWebP = path.join(dir, `${name}-${width}.webp`)

      await sharp(inputFile)
        .resize({ width })
        .webp({ quality: 80 })
        .toFile(outputFileWebP)

      console.log(`✓ ${name}-${width}.webp`)
    }
  }
}

optimizeImages().catch(console.error)
