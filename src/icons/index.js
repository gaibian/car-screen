import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon' // svg组件

// 注册为全局都可以调用的区间
Vue.component('svg-icon', SvgIcon)

//利用require.context()来引入文件模块
const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./svg', false, /\.svg$/)
requireAll(req)
