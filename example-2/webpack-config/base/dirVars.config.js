const path = require("path");
var me = require("../../../core/webpack-config/base/dirVars.config");

me.srcRoot = path.resolve(me.Root, "./example-2"); // example-2 项目根目录

me.pagesDir = path.resolve(me.srcRoot, "./pages"); //项目 页面根目录

me.publicDir = path.resolve(me.srcRoot, "./public-resource"); /* 存放各个页面使用到的公共资源 */

me.logicDir = path.resolve(me.publicDir, "./logic");/* 存放公用的业务逻辑 */6

me.configDir = path.resolve(me.publicDir, "./config");/*  存放项目的各种配置文件 */

me.distDir = path.resolve(me.srcRoot, "./dist");/* 项目输出目录 */

module.exports = me;