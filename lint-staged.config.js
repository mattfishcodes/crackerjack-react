module.exports = {
  '*.{ts,tsx,mjs,js}': (files) => {
    return [
      `npm run lint -- --file ${files.join(' ')}`,
      'npm run typecheck',
      `npx prettier ${files.join(' ')} --write`,
    ]
  },
}
