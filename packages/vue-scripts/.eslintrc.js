module.exports = {
  env: {
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  rules: {
    'no-unused-vars': 0,
    'no-multiple-empty-lines': 0,
    'no-trailing-spaces': 0,
  },
};
