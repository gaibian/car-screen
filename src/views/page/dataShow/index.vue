<template>
    <div class="page">
        <!--按图标组件加载-->
        <!--顶部标题栏目-->
        <div class="data-title">网易云易盾.网络安全</div>
        <div class="bg">急救车</div>
        <!--当前时间组件-->
        <div class="time-box">
            <current-time></current-time>
        </div>
        <div class="visualization-box flex-container">
            <air-mission :key="index" class="airMission flex-item"></air-mission>
            <current-map :key="index + 1" class="current-map flex-item"></current-map>
        </div>
        <el-button type="primary" style="margin-top:20px;" @click="handleClick">刷新组件</el-button>
    </div>
</template>
<script>
import echarts from 'echarts'
import airMission from './components/airMission'
import test from './components/test'
import currentTime from './components/time'
import currentMap from './components/currentMap'
export default {
    name:'dataShow',
    components:{
        airMission,
        test,
        currentTime,
        currentMap
    },
    data() {
        return {
            active:true,
            index:0,
        }
    },
    methods:{
        handleClick() {
            this.index ++
        },
        handleResize() {
            // 缩放窗口
            this.index ++
        }
    },
    created() {

    },
    mounted() {
        window.addEventListener('resize',this.handleResize)
    },
    beforeDestroy(){
        window.removeEventListener('resize',this.handleResize);
    },
}
</script>
<style lang="scss" scoped>
/* 尺寸单位 vh vw*/
.page{
    width:100%;
    height:100%;
    background:radial-gradient(#112d80,#0d0d21);
    // background:-webkit-radial-gradient(ellipse,#215bba 10%,#173058 30%);
    // background:-moz-radial-gradient(ellipse,#215bba 10%,#173058 30%);
    // background:-o-radial-gradient(ellipse,#215bba 10%,#173058 30%);
    padding:20px;
    box-sizing:box-sizing;
}
.flex-container{
    width:100%;
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    .flex-item{
        width:40vw;
        height:50vw;
    }
}

.bg{
    width:200px;
    height:100px;
    background:#182664;
    line-height:100px;
    text-align:center;
    color:#fff;
}
.time-box{
    padding:1vw 0;
    font-size:1vw;
    color:#fff;
    box-sizing:box-sizing;
}
.airMission{
    width:50vw;
    height:50vh;
    border:#e5e5e5 1px solid;

}
.data-title{
    width:100%;
    height:40px;
    line-height:40px;
    font-size:2vw;
    text-align:center;
    color:#fff;
}
</style>