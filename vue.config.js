const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: "http://8.153.68.28:8090",
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
})
