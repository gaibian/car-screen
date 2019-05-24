import Vue from 'vue'
import App from './App'
// 导入全局的scss
import '@/styles/index.scss' // global css
// 导入全局绑定在vue实例上的方法
import '@/vue-prototype'
// 导入全局的组件
import "./components";
// 导入全局的状态管理
import store from './store'
// 导入路由表
import router from './router'
// 全局的js方法
import g from './utils/global'
window._g = new g()
// 全局的过滤方法
import filter from "./filters"; //导入全局的vue过滤器

// import '../mock' // 模拟数据

// element框架
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n
Vue.use(ElementUI, { locale })

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  filters:filter,
  store,
  render: h => h(App)
})
