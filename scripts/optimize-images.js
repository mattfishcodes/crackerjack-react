/* eslint-disable @typescript-eslint/no-require-imports */

const path = require('path')
const { optimizeImages } = require('@mattfishcodes/image-tools')

optimizeImages({
  inputDir: path.join(__dirname, '../src/assets/images'),
  outputDir: path.join(__dirname, '../public/images'),
})
