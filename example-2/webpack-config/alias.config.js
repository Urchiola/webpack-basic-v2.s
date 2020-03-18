// PORJECT  alias
// 配置别名目录
const path = require('path')
const dirVars = require('./base/dirVars.config')
module.exports = {
  configDir: dirVars.configDir,

  // logic
  logicCP: path.resolve(dirVars.logicDir, 'common.page.js'),

  // projece - config
  pageSkipConfigCommon: path.resolve(dirVars.configDir, 'common.config') // 帮助页面跳转
}
