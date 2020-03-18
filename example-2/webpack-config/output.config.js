var dirVars = require('./base/dirVars.config.js');
module.exports = {
  path: dirVars.distDir,
  publicPath: '/',
  filename: '[name]/entry.[hash].js',    // [name]表示entry每一项中的key，用以批量指定生成后文件的名称
  //chunkFilename: '[id].bundle.js',

  // filename && chunkFilename 在 webpack4.0 splitChunks 会有 【错误警告】  miniextractCss HRM 不支持
  // chunkFilename:'[id].[chunkhash].bundle.js'
};
