module.exports = {
    'env': {
      'browser': true,
      'commonjs': true,
      'es2021': true
    },
    'extends': 'eslint:recommended',
    'parserOptions': {
      'ecmaVersion': 'latest'
    },
    'rules': {
      'indent': [
        'error',
        2
      ],
      'eqeqeq': 'error',
      'no-trailing-spaces': 'error',
      'object-curly-spacing': [
        'error', 'always'
      ],
      'arrow-spacing': [
        'error', { 'before': true, 'after': true }
      ],
      'linebreak-style': [
        'error',
        'unix'
      ],
      'quotes': [
        'error',
        'single'
      ],
      'semi': [
        'error',
        'never'
      ],
      'no-console': 0,
      'no-undef': 0
    }
  }
  