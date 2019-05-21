<template>
  <div class="dashboard-container">
    <!--左侧内容-->
    <left-container></left-container>
    <!--中间内容区域-->
    <svg-container></svg-container>
    <!--底部内容-->
    <bottom-container></bottom-container>
  </div>
</template>
<script>
import bottomContainer from './components/bottomContainer'
import leftContainer from './components/leftContainer'
import svgContainer from './components/svgContainer'
export default {
  name: 'Dashboard',
  components:{
    bottomContainer,
    leftContainer,
    svgContainer
  },
  data() {
    return {
    }
  },
  methods:{
  },
  mounted() {
  },
  created() {
  },
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard-container {
  width:100%;
  height:100%;
  background:#f0f5f7;
}
</style>
