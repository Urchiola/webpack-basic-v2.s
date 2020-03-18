// PROJECT module
var dirVars = require('./base/dirVars.config.js')
var MiniCssExtractPlugin = require('mini-css-extract-plugin')
var includeDirs = [dirVars.srcRoot]
const devMode = (process.env.NODE_ENV === 'development' ? 1 : 0)
module.exports = [
  // webpack并且代码都是经过Babel编译的，但是Babel处理过的代码有些语法可能对于eslint支持性不好，所以需要指定一个 parser
  // enforce: ‘pre’ 表示预处理.只让eslint来审查我们的代码，并不是去改变它
  {
    test: /\.(vue|js)$/,
    loader: 'eslint-loader',
    exclude: /node_modules/,
    enforce: 'pre',
    options: {
      // webpack编译时的自动修复
      fix: true
    }
  },
  {
    // 此loader配置项的目标是NPM中的jquery
    test: require.resolve('jquery'),
    // 先把jQuery对象声明成为全局变量`jQuery`，再通过管道进一步又声明成为全局变量`$`
    // 自动-loader模块名称扩展已删除
    // loader: 'expose?$!expose?jQuery',
    loader: 'expose-loader?$!expose-loader?jQuery'
  },
  {
    test: /\.css$/,
    include: includeDirs,
    use: [
      // "style-loader",
      devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          plugins: () => [
            require('autoprefixer')({
              overrideBrowserslist: ['ie >= 8', '> 1% in CN', 'last 100 versions']
            })
          ]
        }
      }
    ]
  },
  {
    // 未添加 posscss-loader & autoprefixer 后期添加
    test: /\.less$/,
    include: includeDirs,
    use: [
      devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
      'css-loader',
      'less-loader',
      // { 添加 posscss....}
      {
        loader: 'postcss-loader',
        options: {
          plugins: () => [
            require('autoprefixer')({
              overrideBrowserslist: ['ie >= 8', '> 1% in CN', 'last 100 versions']
            })
          ]
        }
      }
    ]
  },

  {
    test: /\.html$/,
    include: includeDirs,
    loader: 'html-loader'
  },
  {
    test: /\.ejs$/,
    include: includeDirs,
    loader: 'ejs-loader'
  },
  {
    // 图片加载器，雷同file-loader，更适合图片，可以将较小的图片转成base64，减少http请求
    // 如下配置，将小于8192byte的图片转成base64码
    test: /\.(png|jpg|gif)$/,
    include: includeDirs,
    loader: 'url-loader?limit=8192&name=./static/img/[hash].[ext]'
  },
  {
    // 专供iconfont方案使用的，后面会带一串时间戳，需要特别匹配到
    test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
    include: includeDirs,
    loader: 'file-loader?name=./static/fonts/[name].[ext]'
  },
  {
    test: /\.js$/,
    include: includeDirs,
    exclude: /node_module/,
    loader: 'babel-loader',
    options: {
      presets: [
        ['es2015', {
          loose: true
        }]
      ],
      cacheDirectory: true,
      plugins: ['transform-runtime']
    }
  }
  // {
  //   test: /\.js$/,
  //   include: includeDirs,
  //   loader: 'babel-loader',
  //   query: {
  //     presets: ['es2015-loose'],
  //     cacheDirectory: true,
  //     plugins: ['transform-runtime', 'transform-es3-member-expression-literals', 'transform-es3-property-literals'],
  //   },
  // },
]
