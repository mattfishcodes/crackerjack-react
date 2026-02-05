/* eslint-disable @typescript-eslint/no-require-imports */

const fs = require('node:fs')
const path = require('node:path')

const fn = 'consent.iife.js'

const src = path.resolve(`node_modules/cookie-consent/dist/${fn}`)

const dest = path.resolve(`public/${fn}`)

fs.mkdirSync(path.dirname(dest), { recursive: true })
fs.copyFileSync(src, dest)

console.log(`✔ ${fn} copied to public/`)
