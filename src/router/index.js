import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },
  {
    path:'/set',
    name:'setContainer',
    component: () => import('@/views/set/index')
  },
  {
      path: '',
      name:'Dashboard',
      component: () => import('@/views/dashboard/index')
  },
  {
    path:'/videoList',
    name:'videoList',
    component: () => import('@/views/dashboard/components/videoList')
  },
  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
