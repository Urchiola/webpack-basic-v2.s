const content = require('./content.ejs') // 使用存放页面的内容模板文件
const layout = require('layout')// 调用所使用的布局方案,webpack.resolve配置中有定义
const pageTitle = '首页'

module.exports = layout.init({ pageTitle }).render(content())
