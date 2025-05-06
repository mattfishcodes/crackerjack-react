module.exports = {
  '*.{ts,tsx,mjs,js}': (files) => [
    `npm run lint -- --file ${files.join(' ')}`,
    'npm run typecheck',
    `npx prettier ${files.join(' ')} --write`,
  ],
  '!(*.ts|*.tsx|*.mjs|*.js)': (files) => [
    `npx prettier ${files.join(' ')} --write`,
  ],
}
