<template>
  <el-row class="dashboard-container" id="dashboard-container" v-loading="loading" element-loading-text="数据连接中,请稍后...">
    <!--左侧内容-->
    <left-container :tyreData="tyreData"></left-container>
    <!--中间内容区域-->
    <svg-container :webData="webData" @refreshClick="refreshClick" :temperatureData="temperatureData"></svg-container>
    <!--底部内容-->
    <bottom-container :temper="temper" :temperatureData="temperatureData" ref="bottomContainer" :dataOptions="dataOptions"></bottom-container>
    <!--实时播放-->
  </el-row>
</template>
<script>
// 导入登录模块
import { bottomContainer, leftContainer, svgContainer } from './components'
import webscoketInit from '@/api/webscoket/deviceWebscoket.js'
import { isArray } from '@/utils/validate'
import axios from 'axios'
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
      webData:[],
      tyreData:[],
      temperatureData:[],
      webscoket:null,
      dataOptions:{},
      loading:false,
    }
  },
  mounted() {
    // let val = require('@/utils/UpdateActivity')
    // 进入全屏
    // let data = [{
    //   anaValue:1,
    //   driverType:1,
    //   driverName:'病人',
    //   isReign:1,
    // },{
    //   anaValue:1,
    //   driverType:1,
    //   driverName:'病人保险带开关',
    //   isReign:1,
    // },{
    //   anaValue:1,
    //   driverType:1,
    //   driverName:'急救舱后门',
    //   isReign:1,
    // },{
    //   anaValue:1,
    //   driverType:1,
    //   driverName:'急救舱中门',
    //   isReign:1,
    // },{
    //   anaValue:1,
    //   driverType:1,
    //   driverName:'上车担架在位开关',
    //   isReign:1,
    // },{
    //   anaValue:1,
    //   driverType:1,
    //   driverName:'灭火器',
    //   isReign:1,
    // },{
    //   anaValue:1,
    //   driverType:1,
    //   driverName:'氧气瓶（10L车载式）',
    //   isReign:1,
    // },{
    //   anaValue:1,
    //   driverType:1,
    //   driverName:'氧气瓶2',
    //   isReign:1,
    // }]
    this.webscoketInit();
  },
  methods:{
    refreshClick() {
      // 刷新页面
      this.webscoketInit();
      this.$refs.bottomContainer.dataInit();
    },
    webscoketInit() {
      this.loading = true;
      this.webscoket = new webscoketInit(`ws://192.168.3.254:8085/websocket/1`,res => {
        let data = JSON.parse(res.data)
        console.log('data',data)
        // 数据进来的时候 分为4种 1. 开关量 2.模拟量 3.胎压 4.温湿度
        if(isArray(data)){  // 第一次
          this.webData = [];
          this.tyreData = [];
          this.temperatureData = [];
          data.forEach(item => {
            if(item.driverType == 1 || item.driverType == 2 || item.driverType  == 5){  // 如果是开关量和模拟量
              if(item.driverName == '急救舱中门') {
                this.webData.push(item)
              }
            }
            if(item.driverType == 6) { // 是轮胎
              this.tyreData.push(item)
            }
            if(item.driverType == 4) {  // 是温湿度
              this.temperatureData.push(item)
            }
          })
          data.forEach(item => {
            if(item.driverType == 1 || item.driverType == 2 || item.driverType  == 5){  // 如果是开关量和模拟量
              if(item.driverName == '急救舱后门') {
                this.webData.push(item)
              }
            }
          })
          data.forEach(item => {
            if(item.driverType == 1 || item.driverType == 2 || item.driverType  == 5){  // 如果是开关量和模拟量
              if(item.driverName == '病人') {
                this.webData.push(item)
              }
            }
          })
          data.forEach(item => {
            if(item.driverType == 1 || item.driverType == 2 || item.driverType  == 5){  // 如果是开关量和模拟量
              if(item.driverName == '上车担架在位开关') {
                this.webData.push(item)
              }
            }
          })
          data.forEach(item => {
            if(item.driverType == 1 || item.driverType == 2 || item.driverType  == 5){  // 如果是开关量和模拟量
              if(item.driverName == '病人保险带开关') {
                this.webData.push(item)
              }
            }
          })
          data.forEach(item => {
            if(item.driverType == 1 || item.driverType == 2 || item.driverType  == 5){  // 如果是开关量和模拟量
              if(item.driverName == '灭火器') {
                this.webData.push(item)
              }
            }
          })
          data.forEach(item => {
            if(item.driverType == 1 || item.driverType == 2 || item.driverType  == 5){  // 如果是开关量和模拟量
              if(item.driverName == '氧气瓶（10L车载式）') {
                this.webData.push(item)
              }
            }
          })
          data.forEach(item => {
            if(item.driverType == 1 || item.driverType == 2 || item.driverType  == 5){  // 如果是开关量和模拟量
              if(item.driverName == '氧气瓶2') {
                this.webData.push(item)
              }
            }
          })
          
          
        }else{ // 第二次
          this.webData.forEach(item => {  // 更新开关量
            if(item.driverName == data.driverName){
              if(data.driverType == 1 || data.driverType == 2 || data.driverType  == 5){
                item.anaValue = data.anaValue
                item.batteryLevel = data.batteryLevel
              }
            }
          })
          this.tyreData.forEach(item => { // 更新胎压
            if(item.tireNumber == data.tireNumber && data.driverType == 6){
              item.baroPressure = data.baroPressure
              item.temperature = data.temperature
            }
          })
          this.temperatureData.forEach(item => { // 更新温湿度
            if(item.pathType == data.pathType && data.driverType == 4) {
              item.anaValue = data.anaValue
              item.batteryLevel = data.batteryLevel
            }
          })
        }
        this.loading = false;
      })
    }

  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard-container {
  position: relative;
  width:100%;
  height:100%;
  background:#e5ecef;
  .time-video-box{
    position: absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    width:400px;
    height:400px;
    background:#fff;
  }
}
</style>
