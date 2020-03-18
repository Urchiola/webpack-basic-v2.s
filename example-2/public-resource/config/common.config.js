const coreConfig = require('coreConfigDir/common.config')
const moduleExports = Object.assign(coreConfig, {
  DIRS: {
    BUILD_FILE: require('configDir/build-file.config')
  },

  PAGE_ROOT_PATH: '../../'
})

/* 帮助确定ie下CORS的代理文件 */
moduleExports.DIRS.SERVER_API_URL = moduleExports.SERVER_API_URL

if (process.env.NODE_ENV !== 'development') { // 由于本脚手架并没有牵涉到HTTP请求，因此此处仅作为演示分离开发/生产环境之用。
  moduleExports.API_ROOT = 'http://api.xxxx.com/'
} else {
  moduleExports.API_ROOT = 'http://localhost/mock/'
}

module.exports = moduleExports
