// core resolve
var path = require('path')
var dirVars = require('./base/dirVars.config')
module.exports = {
  alias: {
    vendorDir: dirVars.vendorDir,
    coreConfigDir: dirVars.coreConfigDir,
    dllDir: dirVars.dllDir,
    lessDir: path.resolve(dirVars.coreDir, 'less'),
    iconfontDir: path.resolve(dirVars.coreDir, 'iconfont'),

    metisMenu: path.resolve(dirVars.vendorDir, 'metisMenu/'),

    /* layout */
    layout: path.resolve(dirVars.layoutDir, 'layout/html'),
    'layout-without-nav': path.resolve(dirVars.layoutDir, 'layout-without-nav/html'),

    // libs
    splicInsideUrl: path.resolve(dirVars.libsDir, './splicInsideUrl'),
    libsMoudle: path.resolve(dirVars.libsDir, './libs.module'),

    /* config */

    // bootstrap
    bootstrapConfig: path.resolve(dirVars.coreConfigDir, 'bootstrap.config')
  }
}
