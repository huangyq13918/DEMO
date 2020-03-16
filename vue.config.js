
const path = require('path') // 引入模块
// 声明全局变量
const resolve = dir => path.join(__dirname, dir)
const BASE_URL = process.env.NODE_ENV === 'production' ? '/' : '/' // production 开发环境
module.export = {
  listeners: false,
  baseUrl: BASE_URL, // 项目的根路径
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('components', resolve('src/components'))
  },
  // 打包时不生成.map文件
  productionSourceMap: false,
  devServer: { // 跨域
    proxy: 'http://localhost:3000'
  }
}


