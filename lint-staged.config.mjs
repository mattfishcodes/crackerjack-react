const config = {
  '*': (files) => `prettier --write --ignore-unknown ${files.join(' ')}`,
}

export default config
