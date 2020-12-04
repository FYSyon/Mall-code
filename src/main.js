import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from "./vuex.js"
import 'bootstrap/dist/css/bootstrap.min.css'
//图片懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload,{
  loading:require('@/assets/img/homeimg/w1.gif')//图片未加载完成时的显示
})

Vue.use(router)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
