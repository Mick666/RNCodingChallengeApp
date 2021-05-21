module.exports = {
  'plugins': ['react'],
  'settings': {
    'react': {
      'version': 'detect'
    }
  },
  'extends': ['eslint:recommended', 'plugin:react/recommended'],
  'parser': 'babel-eslint',
  'env': {
    'browser': true
  },
  'rules': {
    'react/prop-types': 'off',
    'semi': 'warn',
    'quotes': [1, 'single'],
    'no-undef': 'warn',
    'no-unused-vars': 'warn'
  }
};