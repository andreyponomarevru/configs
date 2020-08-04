module.exports = {
    'env': {
        'browser': true,
        'es6': true
    },
    'extends': 'eslint:recommended', 
    'plugins': [ 'prettier' ],
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parserOptions': {
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    'rules': {
      'func-names': ['error', 'never'],
      'no-console': 'off',
      'prettier/prettier': ['error'],
      'no-multiple-empty-lines': ['error', {'max': 4}]
    },
};
