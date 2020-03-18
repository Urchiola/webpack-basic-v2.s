// CORE PRO  整理基础设施的 webpack 配置，供具体项目继承
module.exports = {
  mode: 'production',
  module: require('./webpack-config/module.config'),
  plugins: require('./webpack-config/plugins.config'),
  resolve: require('./webpack-config/resolve.config'),
  optimization: require('./webpack-config/optimize.config')
  /// / devtool: 'eval-source-map'
}
