const config = {
  '*.{json,html,md}': 'prettier --write',
  '*.{mjs,js,ts,tsx}': ['eslint --fix --max-warnings=0', 'prettier --write'],
}

export default config
