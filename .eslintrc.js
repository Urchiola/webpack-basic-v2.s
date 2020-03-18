module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'plugin:vue/essential',
    'standard'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    // 开发过程中能够实时进行eslint代码审查，需要安装两个依赖： eslint-loader babel-eslint。配置 .eslintrc: "parser": "babel-eslint"
    "parser": "babel-eslint",

  },
  //vue文件中 script标签内的代码，eslint 无法识别，需eslint-plugin-html。 .eslintrc 中配置该插件：
  plugins: [
    'vue',
    "html"
  ],
  rules: {
    'key-spacing': 'off', //不太建议使用这种,会让整个项目都屏蔽这个错误
    "no-new": "off",
    "no-undef": "off", //不允许 未定义 字段
    "no-eq-null": "off", //不允许对null用==或者!=
    "import/no-webpack-loader-syntax": "off" //非模块化引入 检查
  }
}
//ESLint的规则有三种级别：(较新版本，使用 0 值会报错)
// "off"或者0，不启用这个规则
// "warn"或者1，出现问题会有警告
// "error"或者2，出现问题会报错