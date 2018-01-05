// 页面路由信息
export default [
  {
    path: '*',
    component: resolve => require(['../pages/not_found'], resolve),
    meta: {needLogin: false}
  }
  {
    path: '*',
    component: resolve => require(['../pages/not_found'], resolve),
    meta: {needLogin: false}
  }
]