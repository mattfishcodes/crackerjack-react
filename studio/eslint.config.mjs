import studio from '@sanity/eslint-config-studio'
import { defineConfig } from 'eslint/config'
import eslintConfigPrettier from 'eslint-config-prettier/flat'

export default defineConfig([...studio, eslintConfigPrettier])
