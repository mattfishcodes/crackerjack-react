import baseConfig from '../lint-staged.config.mjs'

const config = {
  ...baseConfig,
  '*.{mjs,js}': (files) => [`eslint --fix ${files.join(' ')}`],
  '*.ts?(x)': (files) => [`eslint --fix ${files.join(' ')}`, 'tsc --noEmit'],
}

export default config
