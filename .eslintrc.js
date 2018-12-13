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
    'plugin:vue/recommended',
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    'vue/component-name-in-template-casing': ['off'],
    'vue/max-attributes-per-line': ['off'],
    'vue/html-closing-bracket-spacing': ['off'],
    'vue/html-closing-bracket-newline': ['off'],
    'vue/singleline-html-element-content-newline': ['warn', {
      'ignoreWhenEmpty': true,
      'ignores': ['a', 'h1', 'div', 'b-navbar-brand', 'b-nav-item']
    }],
    'vue/multiline-html-element-content-newline': ['warn', {
      'ignoreWhenEmpty': true,
      'ignores': ['p', 'div']
    }]
  }
}
