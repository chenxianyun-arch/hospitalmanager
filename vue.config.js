//配置别名的文件
module.exports = {
  configureWebpack: {
    resolve: {
      extensions:[],
      //配置别名
      alias:{
        'assets': '@/assets',
        'common': '@/common',
        'network': '@/network',
        'views': '@/views',
        'router': '@/router',
        'components': '@/components',
        'static': '@static',
        'store': '@store'
      }
    }
  }
}
