module.exports = {
    // devServer: {
    //   proxy: 'https://www.qyer.com'
    // }

    devServer: {
        proxy: {
          '/api': {
            target: 'http://apis.juhe.cn',
            ws: true,
            changeOrigin: true,
            pathRewrite: {"^/api" : ""}
          },
          '/foo': {
            target: 'https://bang.360.cn',
            ws: true,
            changeOrigin: true,
            pathRewrite: {"^/foo" : ""}
          },
        },
        
      }
  }