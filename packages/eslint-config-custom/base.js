module.exports = {
  root: true,
  extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
  rules: {
    'import/order': ['warn', { 'newlines-between': 'always' }],
    'import/no-default-export': 'error',
    'import/prefer-default-export': 'off',
  },
}
