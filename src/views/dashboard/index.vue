<template>
  <div class="dashboard-container">
    <!--左侧内容-->
    <left-container></left-container>
    <!--中间内容区域-->
    <svg-container></svg-container>
    <!--底部内容-->
    <bottom-container :temper="temper"></bottom-container>
  </div>
</template>
<script>
// 导入登录模块
import { bottomContainer, leftContainer, svgContainer } from './components'
export default {
  name: 'Dashboard',
  components:{
    bottomContainer,
    leftContainer,
    svgContainer
  },
  data() {
    return {
      temper:{
        plate:'浙BG0G603（本部急救点）',
        cTemper:30,
        tTemper:90
      },
    }
  },
  created() {
    // api调用的方式
    // 左侧模块
    // this.$api.aidIndex.aidBase({
    //   plate:'浙BG0G603'
    // }).then(res => {
    //   console.log(res)
    // }).catch(err => {
    //   console.log(err)
    // })
    // 登录
    // this.$api.login({
    //   username:'admin',
    //   password:'123456'
    // }).then(res => {
    //   console.log(res)
    // }).catch(err => {
    //   console.log(err)
    // })
  },
  methods:{

  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard-container {
  width:100%;
  height:100%;
  background:#e5ecef;
}
</style>
