module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import'],
  rules: {
    'import/no-named-as-default': 'off',
    'import/order': ['warn', { 'newlines-between': 'always' }],
    'import/no-default-export': 'error',
  },
}
