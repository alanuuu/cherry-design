module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:vue/essential', 'airbnb-base'],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['vue'],
  rules: {
    'vue/multi-word-component-names': 0,
    'arrow-body-style': 0,
    'prefer-template': 0,
    'no-unused-vars': 0,
    'no-restricted-exports': 0,
    'consistent-return': 0,
    'no-underscore-dangle': 0,
    'no-plusplus': 0,
    'no-restricted-syntax': 0,
    'no-prototype-builtins': 0,
    'no-param-reassign': 0,
    'operator-linebreak': 0,
  },
};
