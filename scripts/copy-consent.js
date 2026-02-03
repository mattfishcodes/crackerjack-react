/* eslint-disable @typescript-eslint/no-require-imports */

const fs = require('node:fs')
const path = require('node:path')

const src = path.resolve('node_modules/cookie-consent/dist/consent.iife.js')

const dest = path.resolve('public/consent.js')

fs.mkdirSync(path.dirname(dest), { recursive: true })
fs.copyFileSync(src, dest)

console.log('✔ consent.js copied to public/')
