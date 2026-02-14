import { type Config } from 'prettier'

const config: Config = {
  jsxSingleQuote: true,
  singleQuote: true,
  semi: false,
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindFunctions: ['cn'],
}

export default config
