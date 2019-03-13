module.exports = {
  extends: ['airbnb', 'prettier'],
  parser: 'babel-eslint',
  env: {
    browser: true,
  },
  globals: {
    describe: true,
    test: true,
    beforeEach: true,
    afterEach: true,
    before: true,
    after: true,
    expect: true,
    document: true,
    cy: true,
    it: true,
    jest: true,
    window: true,
  },
  rules: {
    'prettier/prettier': 'error',
    'react/destructuring-assignment': 'off',
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: { multiline: true, minProperties: 1 },
        ObjectPattern: { multiline: true, minProperties: 3 },
        ImportDeclaration: { multiline: true, minProperties: 6 },
        ExportDeclaration: { multiline: true, minProperties: 3 },
      },
    ],
  },
  plugins: ['prettier'],
};
