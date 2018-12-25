export default [
  {
    path: '',
    name: 'demohome',
    component: () => import('@/views/Home'),
    meta: {
      title: '首页'
    }
  },
  {
    path: 'about',
    name: 'demoabout',
    component: () => import('@/views/About'),
    meta: {
      title: '关于Demo'
    }
  }
]
