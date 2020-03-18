// core dirVars
const path = require('path')
var coreRoot = {}

coreRoot.Root = path.resolve(__dirname, '../../../') // 脚手架 根目录

coreRoot.vendorDir = path.resolve(coreRoot.Root, './vendor')

coreRoot.coreDir = path.resolve(coreRoot.Root, './core') // 脚手架 核心根目录

coreRoot.components = path.resolve(coreRoot.coreDir, './components') // 公共组件

coreRoot.layoutDir = path.resolve(coreRoot.coreDir, './layout') // 存放UI布局，组织各个组件拼起来，因应需要可以有不同的布局套路

coreRoot.libsDir = path.resolve(coreRoot.coreDir, 'libs') // 与业务逻辑无关的库都可以放到这里

coreRoot.dllDir = path.resolve(coreRoot.coreDir, './dll')// 存放由各种不常改变的js/css打包而来的dll

coreRoot.coreConfigDir = path.resolve(coreRoot.coreDir, 'config') // 存放项目框架的各种配置文件 目录

module.exports = coreRoot
