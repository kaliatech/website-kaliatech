module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'vue/component-name-in-template-casing': ['off'],
    'vue/max-attributes-per-line': ['off'],
    'vue/html-closing-bracket-spacing': ['off'],
    'vue/attributes-order': ['off'],
    'vue/html-closing-bracket-newline': ['off'],
    'vue/singleline-html-element-content-newline': [
      'warn',
      {
        ignoreWhenEmpty: true,
        ignores: ['a', 'h1', 'div', 'b-navbar-brand', 'b-nav-item', 'p']
      }
    ],
    'vue/multiline-html-element-content-newline': [
      'warn',
      {
        ignoreWhenEmpty: true,
        ignores: ['p', 'div']
      }
    ]
  }
}
