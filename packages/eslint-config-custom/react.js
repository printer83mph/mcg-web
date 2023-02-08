module.exports = {
  root: true,
  extends: ['airbnb', 'airbnb-typescript', 'airbnb/hooks', './base.js'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': [
      'warn',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
  },
}
