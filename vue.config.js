module.exports = {
  pwa: {
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      globDirectory: './dist/',
      globPatterns: ['**/*.{html,js,css}'],
      // directoryIndex: null,
      clientsClaim: true,
      skipWaiting: true,
      globIgnores: ['service-wroker.js'],
      cacheId: 'hpb',
      runtimeCaching: [
        {
          urlPattern: 'index.html',
          handler: 'networkFirst'
        },
        {
          urlPattern: new RegExp('^https://fonts\.googleapis\.com/'),
          handler: 'cacheFirst'
        }
      ]
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://192.168.0.11:3000/', // 接口的域名
        secure: false, // 如果是https接口，需要配置这个参数
        changeOrigin: true // 如果接口跨域，需要进行这个参数配置
      }
    }
  },
  pages: {
    index: {
      // page 的入口
      entry: 'src/index/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html'
    },

    open: {
      entry: 'src/open/main.js',
      template: 'public/open.html',
      filename: 'open.html'
    }
  }
}
