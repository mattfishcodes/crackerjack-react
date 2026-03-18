import { defineConfig } from 'eslint/config'
import js from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier/flat'

export default defineConfig([
  {
    files: ['**/*.js', '**/*.mjs'],
    plugins: {
      js,
    },
    extends: ['js/recommended'],
  },
  eslintConfigPrettier,
])
