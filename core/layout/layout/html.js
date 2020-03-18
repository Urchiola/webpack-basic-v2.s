// src/config/
const pageSkipConfigCommon = require('pageSkipConfigCommon')
const newSplicInsideUrl = require('splicInsideUrl')
const layout = require('./html.ejs')
const header = require('../../components/header/html.ejs')
const topNav = require('../../components/top-nav/html.ejs')
const sideMenu = require('../../components/side-menu/html.ejs')
const footer = require('../../components/footer/html.ejs')
const dirsConfig = pageSkipConfigCommon.DIRS

const pf = {
  pageTitle: '',
  splicInsideUrl: newSplicInsideUrl.splicInsideUrl
}

var moduleExports = {

  init ({ pageTitle }) {
    pf.pageTitle = pageTitle
    return this
  },
  render (content) {
    const headerRenderData = Object.assign(dirsConfig, pf)
    const renderData = {
      header: header(headerRenderData),
      topNav: topNav(pf),
      sideMenu: sideMenu(pf),
      content,
      footer: footer()
    }
    return layout(renderData)
  }

}

module.exports = moduleExports
