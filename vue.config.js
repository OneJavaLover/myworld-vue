module.exports = {
  pages: {
    index: {
      //入口
      entry: 'src/main.js',
    },
  },
  lintOnSave:false, //关闭语法检查
  devServer:{
    proxy:{
      '/api':{
        // target:'http://1.117.175.168:8443',
        target:'http://localhost:8443',
        changeOrigin:true,
        pathRewrite:{
          '^/api':''
        }
      }
    }
  },
}
