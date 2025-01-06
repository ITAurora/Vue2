//const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
// })
const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
} 

module.exports = {
  devServer: {
    port: 8080, // 将端口设置为80
    proxy: {
      '/api': {
        target: 'http://localhost:3000',  // 后台接口域名
        ws: false,        //如果要代理 websockets，配置这个参数
        secure: false,  // 如果是https接口，需要配置这个参数
        changeOrigin: true,  //是否跨域
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("packages"))
  },
  lintOnSave:false
}

