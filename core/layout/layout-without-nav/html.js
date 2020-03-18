const config = require('pageSkipConfigCommon')
const newSplicInsideUrl = require('splicInsideUrl')
const layout = require('./html.ejs')
const header = require('../../components/header/html.ejs')
const footer = require('../../components/footer/html.ejs')
const dirsConfig = config.DIRS

const pf = {
  pageTitle: '',
  splicInsideUrl: newSplicInsideUrl.splicInsideUrl
}

const moduleExports = {
  init ({ pageTitle }) {
    pf.pageTitle = pageTitle
    return this
  },
  render (content) {
    const headerRenderData = Object.assign(dirsConfig, pf)
    const renderData = {
      header: header(headerRenderData),
      footer: footer(),
      content
    }
    return layout(renderData)
  }
}

module.exports = moduleExports
