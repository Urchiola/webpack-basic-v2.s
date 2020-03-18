// PROJECT  Pro
const configs = Object.assign(require('../core/_webpack.pro.config'), {
  entry: require('./webpack-config/entries.config'),
  output: require('./webpack-config/output.config')
})

configs.module.rules = configs.module.rules.concat(require('./webpack-config/module.config'))
configs.plugins = configs.plugins.concat(require('./webpack-config/plugins.config'))
configs.resolve.alias = Object.assign(configs.resolve.alias, require('./webpack-config/alias.config'))
configs.optimization = Object.assign(configs.optimization, require('./webpack-config/optimize.config'))

module.exports = configs
