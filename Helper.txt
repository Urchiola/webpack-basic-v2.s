## 记录为题手册



      
1. js 压缩问题 ？ 	mode:prodction 自动压缩  √

2. 融合  postcss √ ,  autoprefixer √   +  file-laoder 文件转移 √
* 未添加 posscss-loader & autoprefixer 后期添
  {
        loader: "postcss-loader",
        options: {
          plugins: () => [
            require('autoprefixer')({
              overrideBrowserslist: ['ie >= 8', '> 1% in CN', "last 100 versions"]
            })
          ]
        }
      }

3. bootstrap-webpack styleLoader：`${minicssplugin.loader}!css-loader`    √ 


4. file-loader 待解决（目前仍使用require()） jquery 不能抛入全局变量 ?   √ 但暂未找到最佳方案

5.  eslint eslint-loader ? √  注意 忽略文件的使用 位置

6. manifast.json, setffacts ?

7.  purifycss-webpack  // 清除未使用的 css样式 ? √  由于未更新暂不适用改插件

7. 融合vue ?

8. 微信小程序？


//es5 相关插件
babel-plugin-transform-es3-member-expression-literals babel-plugin-transform-es3-property-literals

// 全局 变量： process.env.NODE_ENV
process.env.NODE_ENV 设置 plugins+ package.json/ scripts  此处用到cross-env  --save-dev
new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV) })
// 写法：
node npm-scripts/build.script.js && cross-env NODE_ENV=development webpack --progress --color ...   
cross-env =dev 需要紧跟 webpack 命令后



