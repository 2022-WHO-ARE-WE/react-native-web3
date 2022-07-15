module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es2021': true,
    'node': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'google',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 'latest',
  },
  'plugins': [
    'react',
    'react-hooks',
    'react-native',
    '@typescript-eslint',
    'sort-class-members',
  ],
  'rules': {
    'object-curly-spacing': ['error', 'always'],
    'require-jsdoc': 'off',
    'max-len': ['error', { 'code': 120 }],
    'react/react-in-jsx-scope': 'off',
    'react/no-unescaped-entities': 'off',
    'lines-between-class-members': ['error', 'always'],
    'sort-class-members/sort-class-members': [
      'warn',
      {
        'order': [
          '[static-properties]',
          '[static-methods]',
          '[properties]',
          '[conventional-private-properties]',
          'constructor',
          '[methods]',
          '[conventional-private-methods]',
        ],
        'groups': {
          'methods': [{ 'type': 'method', 'sort': 'alphabetical' }],
        },
        'accessorPairPositioning': 'setThenGet',
      },
    ],
  },
};
