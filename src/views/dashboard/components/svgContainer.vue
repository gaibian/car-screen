<template>
    <div class="svg-container">
        <div class="item-box" ref="box">
            <div class="header-title">
                <h2 class="title">
                    <svg-icon class="equipment-icon" :icon-class="'equipmentAdmin'"></svg-icon>
                    相关设备
                    <p class="refresh" @click="handleRefreshClick">
                        <i class="el-icon-refresh"></i>
                    </p>
                </h2>
            </div>
            <el-row class="carousel-box" style="margin:0" :gutter="12">
                <el-col :span="6" class="icon-flex" v-for="(item,index) in carOptions" :key="index">
                    <div class="flex-item">
                        <div class="pos-box">
                            <div class="icon-box" :style="{color:`${handleType(item).color}`}">
                                <svg-icon class="car-svg" :icon-class="item.icon"></svg-icon>
                            </div>
                            <p class="val">
                                <el-tag :type="handleType(item).val">{{item.val}}</el-tag>
                            </p>
                            <p class="name">{{item.name}}</p>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
        <!-- <el-row type="flex" class="charts-box item-box" style="margin-top:1.5vh">
            <el-col :span="6" class="icon-flex" v-for="(item,index) in temperatureData" :key="index">
                <div :id="`temperature${index}`" style="width:100%;height:100%"></div>
                <div class="name">温度</div>
            </el-col>
        </el-row> -->
        <!-- <div class="item-box" style="margin-top:1.5vh">
            <el-row type="flex" class="carousel-box" justify="space-between" style="margin:0;height:47vh">
                <el-col :span="6" class="icon-flex">
                    <div class="oxygen-box">
                        
                        <svg-icon :icon-class="'oxygenBomb'" style="font-size:1.8rem;color:#409EFF"></svg-icon>
                        <p class="val">80%</p>
                        <p class="name">氧气瓶1</p>
                    </div>
                </el-col>
            </el-row>
        </div> -->
        <!-- <div class="item-box" style="margin-top:1vh;">
            <el-row class="carousel-box" type="flex" justify="space-between" style="margin:0">
                <el-col :span="3" class="icon-flex" v-for="(item,index) in equipmentOptions" :key="index">
                    <div class="flex-item">
                        <div class="pos-box" :class="classChange(item.status)">
                            <div class="icon-box">
                                <svg-icon class="car-svg" :icon-class="item.icon"></svg-icon>
                            </div>
                            <p class="name">{{item.name}}</p>
                            <p class="val">{{item.val}}</p>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div> -->
        <!--电池-->
        <!-- <div class="battery-box">
            <el-row type="flex" justify="space-between" style="margin:0">
                <el-col :span="6" class="battery-item">
                    <div class="flex-item flex-item-red">
                        <img src="../../../assets/ty01@2x.png" class="battery-img">
                        <div class="battery-title">{{brmodule.name}}</div>
                        <div class="battery-del">{{brmodule.val}} - <span class="battery-red">{{brmodule.aqd}}</span></div>
                        <img src="../../../assets/people@2x.png" class="battery-bottom-img">
                        <span class="battery-bottom-warning">!</span>
                    </div>
                </el-col>
                <el-col :span="6" class="battery-item" v-for="(item,index) in bottommodule" :key="index">
                    <div class="flex-item" :class="classHandle(item.status)">
                        <img :src="require(`../../../assets/ty0${index + 2}@2x.png`)" class="battery-img">
                        <div class="battery-title">{{item.name}}</div>
                        <div class="battery-del">余量 {{item.yl}}</div>
                        <div class="battery-del">健康度 {{item.jkd}}</div>
                        <div class="pos-box">
                        <div class="icon-box">
                            <svg-icon class="battery-svg" :icon-class="item.icon"></svg-icon>
                        </div>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div> -->
    </div>
</template>
<script>
//grasp null
import echarts from 'echarts'
export default {
    name:'svgContainer',
    props:{
        webData:{
            type:[Array,Object],
            required: true
        },
        temperatureData:{
            type:[Array,Object],
            required:true
        },
    },
    watch:{
        webData:{
            handler() {
                if(this.webData.length > 0){
                    console.log('webData',this.webData)
                    this.updateData();
                } 
            },
            deep:true
        },
        temperatureData:{
            handler() {
                if(this.temperatureData.length > 0) {
                    //this.chartInit();
                }
            },
            deep:true
        }
    },
    data() {
        return {
            carOptions:[],
            charts:null,
        }
    },
    mounted() {
        let svg = document.getElementById('icon-oxygenBomb_xiaojun')
        // 获取到的svg图标的位置不对，获取到的宽高也是不对的
        let rect = svg.getBoundingClientRect();
    },
    methods:{
        // 刷新页面
        handleRefreshClick() {
            this.$emit('refreshClick',true)
        },
        // chartInit() {
        //     this.$nextTick(() => {
        //         this.temperatureData.forEach((item,index) => {
        //             let chartId = document.getElementById(`temperature${index}`);
        //             this.charts = echarts.init(chartId);
        //             let option = {
        //                 tooltip : {
        //                     formatter: "{a} <br/>{b} : {c}%"
        //                 },
        //                 grid:{
        //                     top:10,
        //                     bottom:30,
        //                     left:10,
        //                     right:10
        //                 },
        //                 series: [
        //                     {
        //                         name: '温度',
        //                         type: 'gauge',
        //                         axisLine: {
        //                             lineStyle: {
        //                                 width:10,
        //                             }
        //                         },
        //                         axisLabel:{
        //                             distance:-14
        //                         },
        //                         detail: {
        //                             formatter:'{value}℃',
        //                             fontSize:15,
        //                             offsetCenter:[0,'70%'],
        //                         },
        //                         data: [{value: item.anaValue, name: ''}]
        //                     }
        //                 ]
        //             };
        //             this.charts.setOption(option)
        //         })
                
        //     })
            
        // },
        handleType(item) {
    
            let obj = {
                val: '',
                color:''
            }
            // 上车担架在位开关 是反的 1 是不在位
            if(item.isReign == 1){
                if(item.name == '上车担架在位开关'){
                    if(item.anaValue == 1){
                        obj.val = 'danger'
                        obj.color = '#F56C6C'
                    }else{
                        obj.val = ''
                        obj.color = '#409EFF'
                    }
                }else if(item.name == '灭火器'){
                        obj.val = '';
                        obj.color = '#409EFF'
                }else if(item.name == '急救舱中门'){
                        if(item.anaValue == 1){
                            obj.val = 'danger'
                            obj.color = '#F56C6C'
                        }else{
                            obj.val = ''
                            obj.color = '#409EFF'
                        }
                }else if(item.name == '急救舱后门'){
                        if(item.anaValue == 1){
                            obj.val = 'danger'
                            obj.color = '#F56C6C'
                        }else{
                            obj.val = ''
                            obj.color = '#409EFF'
                        }
                }else{
                    if(item.anaValue == 1 && item.driverType != 2){
                        obj.val = ''
                        obj.color = '#409EFF'
                    }else{
                        obj.val = 'danger'
                        obj.color = '#F56C6C'
                    }
                    if(item.driverType == 2){  // 模拟量 颜色分类 只分为在线和离线
                        obj.val = '';
                        obj.color = '#409EFF'
                    }
                    // 
                }
            }else{
                obj.val = 'info'
                obj.color = '#909399'
            }
            
            return obj
        },
        updateData() {
            this.carOptions = [];
            let type = (element,name,val1,val2) => {
                let obj = {val:'',color:''}
                if(element.anaValue == 1){
                    obj.val = val1
                }else{
                    obj.val = val2
                }
                return obj
            }
            
                this.webData.forEach(element => {
                    this.$prototype.deviceSvgOptions.forEach(item => {
                        let name = item.name;
                            if(name == element.driverName){
                                let val = '';
                                // 先判断在线离线 => 再判断是否在位等状态
                                if(element.isReign == 1){  // 在线
                                    if(element.driverType == 1){
                                        if(element.driverName == '病人'){
                                            val = type(element,'病人','在位','不在位').val
                                        }
                                        if(element.driverName == '病人保险带开关'){
                                            val = type(element,'病人保险带开关','已系','未系').val
                                        }
                                        if(element.driverName == '急救舱后门'){
                                            val = type(element,'急救舱后门','开启','关闭').val
                                        }
                                        if(element.driverName == '急救舱中门'){
                                            val = type(element,'急救舱中门','开启','关闭').val
                                        }
                                        if(element.driverName == '上车担架在位开关'){
                                            val = type(element,'上车担架在位开关','不在位','在位').val
                                        }
                                        if(element.driverName == '灭火器'){
                                            val = '在线'
                                        }
                                    }
                                    if(element.driverType == 5){  // 等于5的话, 只显示在线和离线
                                        val = '在线'
                                    }
                                    if(val == ''){  // 如果为空的话 显示模拟量 => 为氧气瓶
                                        val = `${((element.anaValue / 1000 / 150) * 100).toFixed(2)}%`
                                    }
                                }else{
                                    val = '离线'
                                }

                                this.carOptions.push({
                                    name:element.driverName,
                                    val:val,
                                    icon:item.svg,
                                    anaValue:element.anaValue,
                                    isReign:element.isReign,
                                    driverType:element.driverType
                                })
                            }
                    })
               
                })
  
        }
    }
}
</script>
<style lang="scss" scoped>
$margin:1vh;
#temperature{
    width:100%;
    height:100%;
}
.charts-box{
    width:100%;
    height:42vh;
    .icon-flex{
        position: relative;
        height:100%;
        background:#fff;
        .name{
            position: absolute;
            bottom:0.12rem;
            left:0;
            width:100%;
            text-align:center;
            font-size:0.18rem;
            color:#606266;
        }
    }
}
.svg-container{
    width:100%;
    height:100%;
    box-sizing:border-box;
    padding:$margin 0.12rem $margin 2.62rem;
    .item-box{
        width:100%;
        .header-title{
            position: relative;
            width:100%;
            height:8vh;
            line-height:8vh;
            //padding-right:0.1rem;
            box-sizing:border-box;
            margin-bottom:$margin;
            .refresh{
                position: absolute;
                top:0;
                right:0.1rem;
                width:8vh;
                height:8vh;
                text-align:center;
                font-size:0.26rem;
                color:#606266;
                cursor: pointer;
            }
            .title{
                position:relative;
                width:100%;
                border-radius:0.02rem;
                overflow:hidden;
                background:#fff;
                padding-left:0.38rem;
                box-sizing:border-box;
                font-size:0.15rem;
                color:$fontColor;
                .equipment-icon{
                    position:absolute;
                    top:50%;
                    left:0.12rem;
                    transform:translate(0,-50%);
                    font-size:0.20rem;
                }
            }
        }
        .carousel-box{
            width:100%;
            .icon-flex{
                position: relative;
                height:39vh;
                box-sizing:border-box;
                background:#fff;
                margin-bottom:1vh;
                &:last-child{
                    margin-right:0;
                }
                .oxygen-box{
                    width:100%;
                    position: absolute;
                    top:50%;
                    left:50%;
                    transform:translate(-50%,-50%);
                    font-size:0;
                    text-align: center;
                    .name{
                        font-size:0.18rem;
                        color:#606266;
                    }
                    .val{
                        font-size:0.18rem;
                        color:#606266;
                        margin:0.12rem 0;
                    }
                }
                .oxygen-bottle{
                    position: absolute;
                    top:50%;
                    left:0.2rem;
                    transform:translate(0,-50%);
                    width:0.8rem;
                    .middle-bottle{
                        width:100%;
                        height:1.4rem;
                        background:#409EFF;
                    }
                    .cir-bottle{
                        position: absolute;
                        left:0;
                        width:0.8rem;
                        height:0.8rem;
                        border-radius:50%;
                        background:#409EFF;
                        &.bottom{
                            bottom:-0.4rem;
                        }
                        &.top{
                            top:-0.4rem;
                        }
                    }
                }
                .flex-item{
                    width:100%;
                    height:100%;
                    background:#fff;
                    position: relative;
                    border-radius:0.02rem;
                    overflow:hidden;
                }
                .pos-box{
                    width:100%;
                    height:28vh;
                    // position: absolute;
                    // top:50%;
                    // left:50%;
                    text-align: center;
                    font-size:0.18rem;
                    margin-top:0.7rem;
                    // margin-left:-50%;
                    // margin-top:-50%;
                    //transform:translate(-50%,-50%);
                    .icon-box{
                        position: relative;
                        width:0.6rem;
                        height:0.6rem;
                        margin:0 auto;
                        .car-svg{
                            position: absolute;
                            top:50%;
                            left:50%;
                            transform:translate(-50%,-50%);
                            font-size:0.8rem;
                            //color:$mainColor;
                        }
                    }
                    .flex-item-detail{
                        position:absolute;
                        bottom: 0;
                        margin-bottom: 0.1rem;
                        width: 100%;
                    }
                    p{
                        color:$mainColor;
                        margin:0.12rem 0;
                    }
                    .name{
                        margin-bottom:0.06rem;
                        margin-top:0.06rem;
                        color:#606266;
                    }
                }
                .pos-box-blue{
                    color:$mainColor;
                }
                .pos-box-gray{
                    color:#bbb !important;
                }
                .pos-box-red{
                    color:#FA7663 !important;
                }
                // &.active{
                //     p{
                //         color:#FA7663
                //     }
                // }
                // &.none{
                //     p{
                //         color:#bbb
                //     }
                // }
            }
        }
    }
    .battery-box{
        width:100%;
        margin-top:$margin;
        .battery-item{
            height:31vh;
            padding-right:0.12rem;
            box-sizing:border-box;
            .flex-item{
                width:100%;
                height:100%;
                position: relative;
                border-radius:0.02rem;
                overflow:hidden;
                .battery-img{
                    width: 1rem;
                    position: absolute;
                    right: 0;
                }
                .battery-title{
                    font-size: 0.21rem;
                    padding-top: 0.65rem;
                    padding-bottom: 0.1rem;
                    margin-left: 0.35rem;
                    font-weight:400;
                    color:rgba(255,255,255,1);
                    //opacity:0.5;
                }
                .battery-del{
                    font-size:0.15rem;
                    font-weight:400;
                    color:rgba(255,255,255,1);
                    line-height:0.2rem;
                    margin-left: 0.35rem;
                    .battery-red{
                        //color: #F93F60
                    }
                }
                .battery-svg{
                    position: absolute;
                    right: 0;
                    font-size:1rem;
                    color:#fff;
                    opacity: 0.3;
                    bottom: 0;
                    padding-right: 0.35rem;
                }
            }
            .battery-bottom-img{
                position: absolute;
                bottom: 0;
                margin-bottom: 0.3rem;
                width: 100%;
                padding:0 0.35rem;
            }
            .battery-bottom-img1{
                position: absolute;
                bottom: 0;
                margin-bottom: 0.3rem;
                width: 100%;
                padding:0 0.35rem 0 1.5rem;
            }
            .battery-bottom-warning{
                position: absolute;
                right: 0;
                bottom: 0;
                margin-right: 0.2rem;
                background: #f85e79;
                width: 0.15rem;
                height: 0.15rem;
                line-height: 0.15rem;
                text-align: center;
                color: #fff;
                border-radius: 15px;
                margin-bottom: 0.5rem;
                font-size: 0.12rem;
            }
            .flex-item-red{
                background: linear-gradient(to right, #f7657c , #fd9ab1);
            }
            .flex-item-green{
                background: linear-gradient(to right, #54d595 , #97f8c1);
            }
            .flex-item-blue{
                background: linear-gradient(to right, #69aff4 , #6bccfa);
            }
            .flex-item-orange{
                background: linear-gradient(to right, #ee837b , #f6b076);
            }
        }
    }
    .display_none{display: none;}
}
</style>
