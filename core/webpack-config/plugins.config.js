
// core inherit/plugins
var webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
// eslint-disable-next-line eqeqeq
const devMode = (process.env.NODE_ENV == 'development' ? 1 : 0)

console.log(devMode ? '[name]/styles.extract.css' : '[name]/styles.extract.css?[hash:8]')
// 开发和生产 环境公共配置：
// 1.全局shimming:Jq
// 2.抽取通用部分  webpack4迁移至 optimization
// 3.抽取 chunk 的css
var pluginsConfig = [
  /* 配置全局的shimming : jQuery */
  /* 方法一:ProvidePlugin + expose-loader:用<script>来加载 */
  /* 方法二:externals 中可以不用配置了 */
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    'window.jQuery': 'jquery',
    'window.$': 'jquery',
    Vue: 'vue',
    vue: 'vue'
  }),

  // optimize.CommonsChunkPlugin   webpack4 已移除、
  // 迁移至 entry 和 output 同级

  // /* 抽取出chunk的css */
  // // new ExtractTextPlugin('[name]/styles.[contenthash].css'), //webpack4 已不支持
  // // css提取到单独的文件 plugin+module 配合使用
  new MiniCssExtractPlugin({
    publicPath: '/',
    filename: devMode ? '[name]/styles.extract.css' : '[name]/styles.extract.css?[hash]'
    // chunkFilename: devMode ? '[id].extract.css' : '[id].[hash].extract.css'
    // option: {
    // 这里可以指定一个 publicPath
    // 默认使用 webpackOptions.output中的publicPath
    // publicPath: '../'
    // }
  }),

  /* 配置好Dll   ,webpack.config.js中使用的 */
  // new webpack.DllReferencePlugin({
  //   context: dirVars.coreDir, // 指定一个路径作为上下文环境，需要与DllPlugin的context参数保持一致，建议统一设置为项目根目录
  //   manifest: require('../../manifest.json'), // 指定manifest.json
  //   name: 'dll',  // 当前Dll的所有内容都会存放在这个参数指定变量名的一个全局变量下，注意与DllPlugin的name参数保持一致
  // }),

  // 区分开发环境，配合 package.json的scripts + cross-env插件 + webpack.DefinePlugin 插件 使用
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  }),

  /* webpack1下，用了压缩插件会导致所有loader添加min配置，而autoprefixser也被定格到某个browers配置 */
  // pluginsConfig.push(new webpack.optimize.UglifyJsPlugin({
  //   compress: {
  //     warnings: false,
  //   },
  // }));

  // 配合CLI的--bail，一出error就终止webpack的编译进程
  // pluginsConfig.push(new webpack.NoErrorsPlugin());

  // 普通压缩
  // new OptimizeCSSAssetsPlugin()
  // 使用cssnano配置规则
  // 先 npm i cssnano -D
  new OptimizeCSSAssetsPlugin({
    // 默认是全部的CSS都压缩，该字段可以指定某些要处理的文件
    assetNameRegExp: /\.(sa|sc|c)ss$/g,
    // 指定一个优化css的处理器，默认cssnano
    cssProcessor: require('cssnano'),

    cssProcessorPluginOptions: {
      preset: ['default', {
        discardComments: { removeAll: true }, // 对注释的处理
        normalizeUnicode: false // 建议false,否则在使用unicode-range的时候会产生乱码
      }]
    },
    canPrint: true // 是否打印编译过程中的日志
  })
  // 这样配置会存在只有css压缩的问题，这时webpack4原本自己配置好的js压缩会无效 ，需要重新配置UglifyJsPlugin（用于压缩js,webpack4内置了）一下

]

module.exports = pluginsConfig
