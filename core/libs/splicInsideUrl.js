/* 用于内部的页面跳转 链接 */

const config = require('pageSkipConfigCommon')
// 例如,src ='index/index/splicInsideUrl('login/index/page.html')'
module.exports = {
  // es6 可以直接创建这种写法,不解释
  // splicInsideUrl  从页面传入的url 因此页面使用 模板变量来使用
  // 此处参数 根据页面出入两个参数,第二个参数以下有做判断
  // url: 例如, index/index
  // urlTail: 例如,空字符串参数或是 根据自己需求传入
  splicInsideUrl (url, urlTail) {
    urlTail = urlTail || ''

    return config.PAGE_ROOT_PATH + url + '/page.html' + urlTail
  }
}
