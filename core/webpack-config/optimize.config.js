// core optimize
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

// webpack.optimize.CommonsChunkPlugin webpack4 已移除，现在迁移至此
module.exports = {
  // 抽取多入口通用部分
  splitChunks: {
    cacheGroups: {
      commons: {
        name: 'commons/commons', // 提取出来的文件命名 //  即先生成common文件夹
        minSize: 0, // 表示提取公共部分最小的大小
        chunks: 'all', // 提取所有文件的公共部分
        // test： '/\.css$/'  // 只提取公共css ，命名可改styles
        minChunks: 2, // 表示提取公共部分最少的文件数
        filename: '[name]/common.bundle.js'
        // 如果发现页面中未引用公共文件，加上enforce: true
      }
    }
  },

  // 抽取 webpack-runtime
  // 等价  runtimeChunk:" single"  或  runtimeChunks:{ name: "manifest"}
  runtimeChunk: {
    name: 'commons/webpack-runtime'
  },

  minimizer: [
    // JS 压缩
    new UglifyJsPlugin({
      cache: true, // Boolean/String,字符串即是缓存文件存放的路径
      parallel: true, // 启用多线程并行运行提高编译速度
      sourceMap: true
      /*
        uglifyOptions: {
          output: {
            comments: false  // 删掉所有注释
          }，
          compress: {
              warning: false, // 插件在进行删除一些无用的代码时不提示警告
              drop_console: true // 过滤console,即使写了console,线上也不显示
          }
        } */
    }),
    // css压缩
    new OptimizeCSSAssetsPlugin({})
  ]

}
