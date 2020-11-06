module.exports = {
  env: {
    es2020: true,
    node: true,
    jest: true,
  },
  extends: ['standard', 'plugin:@typescript-eslint/recommended', 'prettier/@typescript-eslint', 'prettier/standard'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'comma-dangle': 'off',
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
}
