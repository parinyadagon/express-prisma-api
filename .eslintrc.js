module.exports = {
  env: {
    jest: true,
  },
  extends: 'airbnb-base',
  rules: {
    'comma-dangle': 0,
    'no-underscore-dangle': 0,
    'no-param-reassign': 0,
    'no-return-assign': 0,
    camelcase: 0,
    indent: 'off',
    'linebreak-style': 0,
    quotes: [
      'error',
      'single'
    ],
    semi: [
      'error',
      'always'
    ],
    'no-tabs': ['error', { allowIndentationTabs: true }],
    'import/prefer-default-export': 'off',
    'no-console': ['error', { allow: ['warn', 'error', 'log'] }]
  },
};
