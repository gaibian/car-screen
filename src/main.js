import Vue from 'vue'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n
import '@/styles/index.scss' // global css
import '@/vue-prototype'
import App from './App'
import store from './store'
import router from './router'
import g from './utils/global'
import filter from "./filters"; //导入全局的vue过滤器
import '@/icons' // 导入icon图标 并注册为全局的icon组件
// import '@/permission' // permission control
import '../mock' // 模拟数据
Vue.use(ElementUI, { locale })
Vue.config.productionTip = false
//实例化全局的js方法
window._g = new g()



new Vue({
  el: '#app',
  router,
  filters:filter,
  store,
  render: h => h(App)
})
