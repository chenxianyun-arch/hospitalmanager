import Vue from 'vue'
import App from './App.vue'
//1.引入ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

//2.注册插件
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),

}).$mount('#app')
