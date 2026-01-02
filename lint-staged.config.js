module.exports = {
  '*.{ts,tsx,mjs,js}': (files) => [
    `npx eslint --fix ${files.join(' ')}`,
    'npm run typecheck',
    `npx prettier ${files.join(' ')} --write`,
  ],
  '*.{json,css}': (files) => [`npx prettier ${files.join(' ')} --write`],
}
