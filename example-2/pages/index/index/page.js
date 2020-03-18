require('logicCP')
const config = require('pageSkipConfigCommon')
$(function () {
  console.log('这是我自己的代码！index/index')

  if (process.env.NODE_ENV === 'development') {
    console.log('如果您看到这份 Log, 当前处于开发版本')
    console.log(config.API_ROOT) // http://localhost/mock/
    console.log(process.env.NODE_ENV) // development
  } else {
    console.log('生产环境')
  }
}())
