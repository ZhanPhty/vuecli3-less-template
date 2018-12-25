import Vue from 'vue'
import Router from 'vue-router'

// 按模块管理引用路由
import demo from './demo'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/404',
      name: 'nofind',
      component: () => import('@/views/common/404'),
      meta: {
        title: '找不到页面'
      }
    },
    {
      path: '/',
      component: () => import('@/views/Demo'),
      meta: {
        title: 'demo页面'
      },
      children: [...demo]
    }
  ]
})
