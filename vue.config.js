const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://8.153.68.28:8090',  // 代理目标地址
        changeOrigin: true,               // 支持跨域
        secure: false,                    // 如果是 https 接口，需要设置为 false
        pathRewrite: {
          '^/api': ''  // 重写路径：把请求中的 /api 去掉
        }
      }
    }
  }
})
