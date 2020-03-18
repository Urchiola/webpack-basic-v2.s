// core
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const dirVars = require('./webpack-config/base/dirVars.config')
module.exports = {
  mode: 'production',
  entry: {
    /*
     指定需要打包的js模块
     或是css/less/图片/字体文件等资源，但注意要在module参数配置好相应的loader
   */
    dll: [
      'jquery', '!!bootstrap-webpack!bootstrapConfig',
      'metisMenu/metisMenu.min', 'metisMenu/metisMenu.min.css'
    ]
  },
  output: {
    path: dirVars.dllDir,
    filename: '[name].js',
    library: '[name]' // 当前Dll的所有内容都会存放在这个参数指定变量名的一个全局变量下，注意与DllPlugin的name参数保持一致
  },
  plugins: [
    new webpack.DllPlugin({
      path: 'manifest.json', // 本Dll文件中各模块的索引，供DllReferencePlugin读取使用
      name: '[name]', // 当前Dll的所有内容都会存放在这个参数指定变量名的一个全局变量下，注意与参数output.library保持一致
      context: dirVars.staticRootDir // 指定一个路径作为上下文环境，需要与DllReferencePlugin的context参数保持一致，建议统一设置为项目根目录
    }),

    /* 跟业务代码一样，该兼容的还是得兼容 */
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'window.$': 'jquery'
    }),

    // /* 抽取出chunk的css */
    // // new ExtractTextPlugin('[name]/styles.[contenthash].css'), //webpack4 已不支持
    // // css提取到单独的文件 plugin+module 配合使用
    new MiniCssExtractPlugin({
      // 类似 webpackOptions.output里面的配置 可以忽略
      filename: 'dll.extract.css',
      publicPath: '/'
      // chunkFilename: '[id].extract.css',
    })

    /* 配置好Dll   ,webpack.config.js中使用的 */
    // new webpack.DllReferencePlugin({
    //   context: dirVars.coreDir, // 指定一个路径作为上下文环境，需要与DllPlugin的context参数保持一致，建议统一设置为项目根目录
    //   manifest: require('../../manifest.json'), // 指定manifest.json
    //   name: 'dll',  // 当前Dll的所有内容都会存放在这个参数指定变量名的一个全局变量下，注意与DllPlugin的name参数保持一致
    // }),
  ],
  module: require('./webpack-config/module.config'),
  resolve: require('./webpack-config/resolve.config')
}
