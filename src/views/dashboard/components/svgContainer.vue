<template>
    <div class="svg-container">
        <div class="item-box" ref="box">
            <div class="header-title">
                <h2 class="title">
                    <svg-icon class="equipment-icon" :icon-class="'equipmentAdmin'"></svg-icon>
                    相关设备
                </h2>
            </div>
            <el-row class="carousel-box" type="flex" justify="space-between" style="margin:0">
                <el-col :span="3" class="icon-flex" v-for="(item,index) in carOptions" :key="index">
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
        </div>
        <div class="item-box" style="margin-top:1vh;">
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
        </div>
        <!--电池-->
        <div class="battery-box">
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
        </div>
    </div>
</template>
<script>
export default {
    name:'svgContainer',
    data() {
        return {
            carOptions:[],
            carOptions:[{
                name:'氧气瓶1',
                val:'余量10.0%',
                icon:'oxygenBag',
                status:0
            },{
                name:'负压式骨折固定垫',
                val:'未在位',
                icon:'fixedPad',
                status:0
            },{
                name:'铲式担架',
                val:'未在位',
                icon:'shovelStretcher',
                status:1
            },{
                name:'软担架',
                val:'未在位',
                icon:'softStretcher',
                status:2
            },{
                name:'急救仓后门',
                val:'打开',
                icon:'airBackDoor',
                status:2
            },{
                name:'急救仓中门',
                val:'打开',
                icon:'airInDoor',
                status:2
            },{
                name:'氧气袋',
                val:'离线',
                icon:'oxygenBag',
                status:2
            },{
                name:'氧气瓶2',
                val:'余量89.0%',
                icon:'oxygenBomb',
                status:2
            }],
            equipmentOptions:[{
                name:'驾驶舱灭火器',
                val:'在位',
                icon:'cabFire',
                status:2
            },{
                name:'急救舱灭火器',
                val:'在位',
                icon:'airFire',
                status:2
            },{
                name:'随车工具',
                val:'在位',
                icon:'carTool',
                status:2
            },{
                name:'急救箱',
                val:'在位',
                icon:'aidKit',
                status:2
            },{
                name:'心电监护除颤仪',
                val:'在位',
                icon:'heartAll',
                status:2
            },{
                name:'上下担架车',
                val:'在位',
                icon:'upDownStretcher',
                status:2
            },{
                name:'双道注射泵',
                val:'在位',
                icon:'injection',
                status:2
            },{
                name:'呼吸机',
                val:'在位',
                icon:'breathingMachine',
                status:2
            }],
            brmodule:{
                name:'病人在位情况',
                val:'在位',
                aqd:'未系好安全带',
            },
            bottommodule:[{
                name:'原车蓄电池情况',
                yl:'90%',
                jkd:'100%',
                icon:'xudianchi',
                status:0
            },{
                name:'锂电池情况',
                yl:'90%',
                jkd:'100%',
                icon:'lidianchi',
                status:1
            },{
                name:'后备蓄电池情况',
                yl:'90%',
                jkd:'100%',
                icon:'xudianchi',
                status:2
            }]
        }
    },
    methods:{
        classHandle(val) {
            switch(val) {
                case 0:
                    return 'flex-item-green';
                    break;
                case 1:
                    return 'flex-item-blue';
                    break;
                case 2:
                    return 'flex-item-orange';
                    break;
            }
        },
        classChange(val) {
            switch(val) {
                case 0:
                    return 'pos-box-red';
                    break;
                case 1:
                    return 'pos-box-gray';
                    break;
                case 2:
                    return 'pos-box-blue';
                    break;
            }
        },
    },
    created() {
<<<<<<< HEAD
        console.log(this)
        // 1.声明 var let const
        // 2.数据类型 [] {} 1 'q' true ...
        // 3.作用域链 
        // 4.函数块 =》 柯里化 高阶函数 this

     

        
    },
 
=======
      
    },
    mounted() {
        let svg = document.getElementById('icon-oxygenBomb_xiaojun')
        //console.log(svg)
        // 获取到的svg图标的位置不对，获取到的宽高也是不对的
        let rect = svg.getBoundingClientRect();
        //console.log(rect)
    }
>>>>>>> 8b6fcff826b0df34e9fc8977fb2394afdf3b664d
}
</script>
<style lang="scss" scoped>
$margin:2vh;
.svg-container{
    width:100%;
    height:100%;
    box-sizing:border-box;
    padding:$margin 0rem $margin 2.62rem;
    .item-box{
        width:100%;
        .header-title{
            width:100%;
            height:5vh;
            line-height:5vh;
            padding-right:0.12rem;
            box-sizing:border-box;
            margin-bottom:$margin;
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
            height:26vh;
            margin:0;
            .icon-flex{
                height:100%;
                padding-right:0.1rem;
                box-sizing:border-box;
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
                    position: absolute;
                    top:50%;
                    left:50%;
                    text-align: center;
                    font-size:0.14rem;
                    transform:translate(-50%,-50%);
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
                            font-size:0.5rem;
                        }
                    }
                    .flex-item-detail{
                        position:absolute;
                        bottom: 0;
                        margin-bottom: 0.1rem;
                        width: 100%;
                    }
                    // p{
                    //     color:$mainColor;
                    // }
                    .name{
                        margin-bottom:0.06rem;
                        margin-top:0.06rem
                    }
                }
<<<<<<< HEAD
                .pos-box-blue{
                    color:$mainColor;
                }
                .pos-box-gray{
                    color:#bbb !important;
                }
                .pos-box-red{
                    color:#FA7663 !important;
=======
                &.active{
                    p{
                        //设备异常
                        color:#FA7663
                    }
                }
                &.none{
                    p{
                        //设备离线
                        color:#bbb
                    }
>>>>>>> 8b6fcff826b0df34e9fc8977fb2394afdf3b664d
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
            height:27vh;
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
