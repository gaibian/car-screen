<template>
  <div class="dashboard-container">
    <!--左侧内容-->
    <left-container></left-container>
    <!--底部内容-->
    <bottom-container></bottom-container>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import bottomContainer from './components/bottomContainer'
import leftContainer from './components/leftContainer'
export default {
  name: 'Dashboard',
  components:{
    bottomContainer,
    leftContainer
  },
  data() {
    return {
      
    }
  },
  created() {
    // 1rem = 12px
    
  },
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

.dashboard-container {
  width:100%;
  height:100%;
  background: -webkit-linear-gradient(to right,#fff,#e5e6ef);
  background: -moz-linear-gradient(to right,#fff,#e5e6ef);
  background: linear-gradient(to right,#fff,#e5e6ef);
}

</style>
