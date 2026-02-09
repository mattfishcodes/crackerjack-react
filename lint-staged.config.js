module.exports = {
  '*.{ts,tsx,mjs,js}': (files) => [
    `pnpm lint ${files.join(' ')}`,
    'pnpm typecheck',
  ],
  '*.css': (files) => `pnpm stylelint ${files.join(' ')}`,
  '*': (files) => `pnpm format ${files.join(' ')}`,
}
