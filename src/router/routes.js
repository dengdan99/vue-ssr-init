// 页面路由信息
export default [
  {
    path: '/',
    component: require('../pages/home.vue'),
    meta: {needLogin: false}
  },
  {
    path: '/event',
    component: require('../pages/event/list.vue'),
    meta: {needLogin: false}
  },
  {
    path: '*',
    component: require('../pages/not_found.vue'),
    meta: {needLogin: false}
  }
]