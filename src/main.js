import Vue from 'vue'
import App from './App.vue'
import router from './router'

import "./assets/js/phone"

import './assets/css/base.css'
// 将echarts挂载到vue原型上
// import  echarts from "echarts";
// Vue.prototype.$echarts=echarts;

// 使用开发的插件
import echarts from './plugins/echarts'
Vue.use(echarts)

// swiper的使用
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper);

// eventBus 中央事件总线
import Bus from './utils/eventBus'
Vue.prototype.$bus=Bus;


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
