import baseConfig from '../lint-staged.config.mjs'

const config = {
  ...baseConfig,
  '*.css': ['stylelint --fix', 'prettier --write'],
}

export default config
