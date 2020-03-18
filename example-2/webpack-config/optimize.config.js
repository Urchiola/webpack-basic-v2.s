// project optimize

// webpack.optimize.CommonsChunkPlugin webpack4 已移除，现在迁移至此
module.exports = {
  // 抽取多入口通用部分
  splitChunks: {
    cacheGroups: {
      commons: {
        name: 'commons/commons',
        minSize: 0,
        chunks: 'all',
        minChunks: 2,
        filename: '[name]/commons.bundle.js'
      },
      styles: {
        name: 'styles',
        test: /\.(css|scss)$/,
        chunks: 'all',
        enforce: true
      }
    }
  },
  // 抽取 webpack-runtime
  // 等价  runtimeChunk:" single"  或  runtimeChunks:{ name: "manifest"}
  runtimeChunk: {
    name: 'commons/webpack-runtime'
  }
}
