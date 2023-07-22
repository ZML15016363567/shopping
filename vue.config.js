// const { defineConfig } = require('@vue/cli-service')
module.exports = {
  transpileDependencies: true,
  productionSourceMap:false,
  //关闭eslint
  lintOnSave:false,
  devServer:{
    proxy:{
      '/api':{
        target:'http://gmall-h5-api.atguigu.cn',
      },
    },
  },
}
