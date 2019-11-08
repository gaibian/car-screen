<template>
    <div class="bottom-container">
        <span class="header-text">车牌号:{{dataOptions.carNumber}}</span>
        <!-- <span class="img-span thermometer"></span>
        <span class="text">{{thermometer}}℃</span>
        <span class="img-span humidity"></span>
        <span class="text">{{humidity}}%</span> -->
        <div class="video-btn" @click.stop.prevent="handleVideoClick">
          <svg-icon class="svg" :icon-class="'shexiangtou'" style="color:#409EFF;font-size:0.3rem"></svg-icon>
        </div>
        <div class="set-btn" @click.stop.prevent="handleSetClick">
          <svg-icon class="svg" :icon-class="'set'" style="color:#fff;font-size:0.3rem"></svg-icon>
        </div>
        <div class="realTime-btn" @click.stop.prevent="handleRealtimeClick">实时</div>
        <el-dialog  title="设置" v-model="dialogVisible" :visible.sync="dialogVisible" :modal-append-to-body='false' width="400px" :destroy-on-close="true" @close="handleClose">
          <el-row type="flex">
            <el-col>
              <el-switch
                v-model="value1"
                inactive-text="发送数据">
              </el-switch>
            </el-col>
            <el-col>
              <el-switch
              style="display: block"
              v-model="value2"
              inactive-text="GPS定位">
            </el-switch>
            </el-col>
          </el-row>
          <div style="width:100%;margin-top:0.3rem;">
            <el-button size="mini" @click="handleCancel" style="margin-right:0.1rem;">取消</el-button>
            <el-button type="primary" size="mini" :disabled="sureDisabled" @click="handleSure">确定</el-button>
          </div>
        </el-dialog>
        <!--实时视频-->
        <el-dialog title="实时视频" v-model="dialogRealtimeVideoVisible" :visible.sync="dialogRealtimeVideoVisible" :modal-append-to-body='false' width="400px" :destroy-on-close="true" @close="handleClose">
          <el-row :gutter="20">
            <el-col :span="12" v-for="(item,index) in monitorOptions" :key="index" @click="handleMonitor(item)">{{item.name}}</el-col>
          </el-row>
          <div class="time-video-box" v-if="isMonitorActive">
            <video style="width:100%;height:100%" autoplay controls :src="`http://192.168.3.254:8080.nbguardian.com:9999/${monitorSrc}`"></video>
          </div>
        </el-dialog>
        <!-- <el-dialog title="视频列表" v-model="dialogVideoVisible" :visible.sync="dialogVideoVisible" :modal-append-to-body='false' :destroy-on-close="true" @close="handleClose">
            <video-list v-if="dialogVideoVisible"></video-list>
        </el-dialog> -->
    </div>
</template>
<script>
import axios from 'axios'
import videoList from './videoList'
export default {
  name:'bottomContainer',
  components:{
    videoList
  },
  props:{
    temper:{
      type: Object,
      required: true
    },
    temperatureData:{
      type:[Array,Object],
      required:true
    }
  },
  data() {
    return {
      dialogVisible:false,
      dialogVideoVisible:false,
      dialogRealtimeVideoVisible:false,
      checkList:[],
      value1:'',
      value2:'',
      sureDisabled:false,
      dataOptions:{},
      thermometer:'',
      humidity:'',
      monitorOptions:[],
      monitorSrc:'',
      isMonitorActive:false,
    }
  },
  watch:{
    temperatureData:{
      handler() {
        if(this.temperatureData.length > 0){
          console.log('进来的温湿度',this.temperatureData)
          this.temperatureData.forEach(item => {
            if(item.pathType == 2){
              this.humidity = item.anaValue
            }else{
              this.thermometer = item.anaValue
            }
          })
          console.log(this.humidity)
          console.log(this.thermometer)
        }
      },
      deep:true
    },
    // dataOptions:{
    //   handler() {
    //     let arr = Object.keys(this.dataOptions);
    //     if(arr.length > 0){
    //       this.dataOptions.dataSendSwitch == 0 ? this.value1 = false : this.value1 = true;
    //       this.dataOptions.gpsSwitch == 0 ? this.value2 = false : this.value2 = true;
    //     }
    //   },
    //   deep:true
    // }
  },
  mounted() {
    this.dataInit();
    
  },
  methods:{
    handleMonitor(item) {
      this.monitorSrc = item.streams[0]
    },
    async videoMonitorData() {
      this.isMonitorActive = false;
       await axios.get(`http://192.168.3.254:8080/${this.$token}/monitor/${this.$ke}`).then(res => {
            if(isArray(res.data)){
                this.monitorOptions = res.data.map(item => {
                    item.isActive = false;
                    return item
                });
            }else{
                let data = res.data;
                data['isActive'] = false;
                this.monitorOptions.push(data)
            }
            this.monitorSrc = this.monitorOptions[0].streams[0]
            this.monitorOptions[0].isActive = true;
            this.isMonitorActive = true;
            // 直接播放视频
            
        })
    },
    handleRealtimeClick() {
      this.videoMonitorData();
      this.dialogRealtimeVideoVisible = true;
    },
    handleVideoClick() {  // 视频列表
      this.$router.push({name:'videoList'})

    },
    dataInit() {
      axios.get('http://192.168.3.254:8085/configure').then(res => {
        this.dataOptions = res.data.data
        this.dataOptions.dataSendSwitch == 0 ? this.value1 = false : this.value1 = true;
        this.dataOptions.gpsSwitch == 0 ? this.value2 = false : this.value2 = true;
        
      })
    },
    handleClose() {
      this.dialogVisible = false;
      this.dialogVideoVisible = false;
      this.dialogRealtimeVideoVisible = false;
    },
    handleSetClick() {
      this.dataInit();
      this.dialogVisible = true;
    },
    handleCancel() {
      this.dialogVisible = false;
    },
    handleSure() {
      let form = Object.assign({},this.dataOptions)
      this.sureDisabled = true;
      this.value1 ? form.dataSendSwitch = 1 : form.dataSendSwitch = 0
      this.value2 ? form.gpsSwitch = 1 : form.gpsSwitch = 0
      axios.post('http://192.168.3.254:8085/setUp',form).then(res => {
        console.log('提交的成功',res)
        this.sureDisabled = false;
        this.dialogVisible = false;
      }).catch(err => {
        this.sureDisabled = false;
      })
      
    }
  }
}
</script>
<style lang="scss" scoped>
.bottom-container{
  display:flex;
  position: fixed;
  left:0;
  bottom:0;
  width:100%;
  height:10vh;
  background:#60ACF6;
  box-sizing:border-box;
  text-align:center;
  align-items:center;
  justify-content:center;
  .set-btn{
    position: absolute;
    right:0.2rem;
    top:50%;
    width:6vh;
    height:6vh;
    line-height:6vh;
    transform:translate(0,-50%);
    color:#fff;
    text-align:center;
    font-size:0.20rem;
    background:#909399;
    border-radius:0.08rem;
    cursor: pointer;
    .svg{
      position: absolute;
      top:50%;
      left:50%;
      color:#fff;
      transform:translate(-50%,-50%)
    }
  }
  .realTime-btn{
    position: absolute;
    right:1.6rem;
    top:50%;
    width:6vh;
    height:6vh;
    line-height:6vh;
    transform:translate(0,-50%);
    color:#fff;
    text-align:center;
    font-size:0.20rem;
    background:#909399;
    border-radius:0.08rem;
    cursor: pointer;
  }
  .video-btn{
    position: absolute;
    right:0.9rem;
    top:50%;
    width:6vh;
    height:6vh;
    line-height:6vh;
    transform:translate(0,-50%);
    color:#fff;
    text-align:center;
    font-size:0.20rem;
    background:#F2F6FC;
    border-radius:0.08rem;
    cursor: pointer;
    .svg{
      position: absolute;
      top:50%;
      left:50%;
      transform:translate(-50%,-50%)
    }
  }
  .header-text{
    position:absolute;
    top:50%;
    transform:translate(0,-50%);
    left:12px;
    color:#fff;
    font-size:0.18rem;
  }
  span{
    display:inline-block;
  }
  .img-span{
    font-size:0;
    margin-right:0.06rem;
    &.thermometer{
      width:0.15rem;
      height:0.26rem;
      background:url('../../../assets/wd@2x.png');
      background-size:contain;
    }
    &.humidity{
      width:0.2rem;
      height:0.26rem;
      background:url('../../../assets/sd@2x.png');
      background-size:contain;
    }
  }
  .text{
    font-size:0.18rem;
    color:#fff;
    margin-right:0.25rem;
  }
}
</style>