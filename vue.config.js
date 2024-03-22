const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // devServer: {
  //   proxy: {
  //     // 用‘/api’开头，代理所有请求到目标服务器
  //     '/serve_app': {
  //       target: 'http://localhost:9527/', // 接口域名
  //       changeOrigin: true, // 是否启用跨域
  //       pathRewrite: { //
  //         '^/serve_app': ''
  //       }
  //     }
  //   }
  // }
},
)
