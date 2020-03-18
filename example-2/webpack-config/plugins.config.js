// project plugins
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const pageArr = require('./base/page-entries.config.js')
const dirVars = require('./base/dirVars.config.js')

// onst PurifyCSSPlugin = require('purifycss-webpack') // 更新 3 年前，[不建议使用]
const configPlugins = []

// 循环遍历 多个页面
pageArr.forEach(function (page) {
  const htmlPlugin = new HtmlWebpackPlugin({
    filename: `${page}/page.html`,
    template: path.resolve(dirVars.pagesDir, `./${page}/html.js`),
    // chunks:允许插入到模板中的一些chunk，不配置此项默认会将entry中所有的thunk注入到模板中,
    // 在配置多个页面时，每个页面注入的chunk应该是不相同的，需要通过该配置为不同页面注入不同的chunk；
    chunks: [page, 'commons', 'commons/commons', 'commons/webpack-runtime', 'styles'],
    // hash: true, // 是否为所有注入的静态资源添加webpack每次编译产生的唯一hash值
    hash: true, // 为静态资源生成hash值
    xhtml: true // 默认false；是否渲染link为自闭合的标签，true则为自闭合标签a
  })
  configPlugins.push(htmlPlugin)
})

// // 清除未使用的 css样式
// configPlugins.push(
// 更新 3年前[不建议使用]
//   new PurifyCSSPlugin({
//     // nodir: true 只匹配文件,不匹配目录
//     // paths: glob.sync(path.join(__dirname, "src"), { nodir: true }),
//     paths: glob.sync(`${path.join(dirVars.srcRoot)}/pages/*/*/*.html;`, { nodir: true })
//   })
// )
// .
module.exports = configPlugins
