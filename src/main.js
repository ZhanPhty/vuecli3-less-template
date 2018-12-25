import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// base样式
import '@/assets/less/base.less'

Vue.config.productionTip = false

// 设置title
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
