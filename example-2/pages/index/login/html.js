const config = require('pageSkipConfigCommon')
const noJquery = require('splicInsideUrl')
const content = require('./templates/main.ejs')
const layout = require('layout-without-nav')
const dirsConfig = config.DIRS

const loginBoxHtml = require('./templates/login-box.ejs')({
  constructInsideUrl: noJquery.splicInsideUrl
})
const forgetPasswordHtml = require('./templates/forget-password-box.html')
const renderData = Object.assign(dirsConfig, { loginBoxHtml, forgetPasswordHtml })

module.exports = layout.init({
  pageTitle: ''
}).render(content(renderData))
