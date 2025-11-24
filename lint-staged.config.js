module.exports = {
  '*.{ts,tsx,mjs,js}': (files) => [
    `npm run lint -- ${files.join(' ')}`,
    'npm run typecheck',
    `npx prettier ${files.join(' ')} --write`,
  ],
  '*.{json,scss}': (files) => [`npx prettier ${files.join(' ')} --write`],
}
