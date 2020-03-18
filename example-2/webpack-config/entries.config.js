// PROJECT
var path = require('path')
var dirVars = require('./base/dirVars.config')
var pageArr = require('./base/page-entries.config')
var configEntry = {}
pageArr.forEach(function (page) {
  configEntry[page] = path.resolve(dirVars.pagesDir, page + '/page')
})

module.exports = configEntry
