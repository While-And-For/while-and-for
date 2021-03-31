module.exports = {
  extends: [
    'react-app',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint'
  ],
  plugins: ['@typescript-eslint', 'prettier', 'react'],
  rules: {
    // start pair
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    // end
    '@typescript-eslint/camelcase': [0, { properties: 'never' }],
    '@typescript-eslint/no-explicit-any': 'off',
    'prettier/prettier': ['warn'],
    indent: 'off',
    quotes: 'off',
    semi: 'off',
    'react/prop-types': 0
  }
};
