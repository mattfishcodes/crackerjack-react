import baseConfig from '../lint-staged.config.mjs'

const config = {
  ...baseConfig,
  '*.{mjs,js,ts,tsx}': (files) => [`eslint --fix ${files.join(' ')}`],
  '*.css': (files) => `stylelint --fix ${files.join(' ')}`,
}

export default config
