<template>
    <div class="svg-container">
        <div class="item-box">
            <div class="header-title">
                <h2 class="title">车辆</h2>
            </div>
            <el-row class="carousel-box" type="flex" justify="space-between" style="margin:0">
                <el-col :span="3" class="icon-flex active">
                    <div class="flex-item">
                        <div class="pos-box">
                            <img src="../../../assets/O2@2x.png" class="img shu">
                                <p class="name">氧气瓶1</p>
                                <p class="val">余量10.0%</p>
                        </div>
                    </div>
                </el-col>
                <el-col :span="3" class="icon-flex active">
                    <div class="flex-item">
                        <div class="pos-box">
                            <img src="../../../assets/dj12@2x.png" class="img heng">
                            <p class="name">负压式骨折固定垫</p>
                            <p class="val">未在位</p>
                        </div>
                    </div>
                </el-col>
                <el-col :span="3" class="icon-flex active">
                    <div class="flex-item">
                        <div class="pos-box">
                            <img src="../../../assets/jx3@2x.png" class="img heng">
                            <p class="name">铲式担架</p>
                            <p class="val">未在位</p>
                        </div>
                    </div>
                </el-col>
                <el-col :span="3" class="icon-flex active">
                    <div class="flex-item">
                        <div class="pos-box">
                            <img src="../../../assets/rdj@2x.png" class="img heng">
                            <p class="name">软担架</p>
                            <p class="val">未在位</p>
                        </div>
                    </div>
                </el-col>
                <el-col :span="3" class="icon-flex active">
                    <div class="flex-item">
                        <div class="pos-box">
                            <img src="../../../assets/hm@2x.png" class="img shu">
                            <p class="name">急救舱后门</p>
                            <p class="val">打开</p>
                        </div>
                    </div>
                </el-col>
                <el-col :span="3" class="icon-flex active">
                    <div class="flex-item">
                        <div class="pos-box">
                            <img src="../../../assets/jx1@2x.png" class="img heng">
                            <p class="name">急救舱中门</p>
                            <p class="val">打开</p>
                        </div>
                    </div>
                </el-col>
                <el-col :span="3" class="icon-flex none">
                    <div class="flex-item">
                        <div class="pos-box">
                            <!-- <img src="../../../assets/syd@2x.png" class="img shu">
                            <img  src="../../../assets/lx@2x.png" class="img-lx"> -->
                            <div class="icon-box">  
                                <svg-icon class="car-svg" :icon-class="'oxygenBag'"></svg-icon>
                            </div>
                            <p class="name">氧气袋</p>
                            <p class="val">离线</p>
                        </div>
                    </div>
                </el-col>
                <el-col :span="3" class="icon-flex">
                    <div class="flex-item">
                        <div class="pos-box">
                            <img src="../../../assets/O12@2x.png" class="img shu">
                            <p class="name">氧气瓶2</p>
                            <p class="val">余量100.0%</p>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="item-box" style="margin-top:1vh;">
            <div class="header-title">
                <h2 class="title">器材</h2>
            </div>
            <el-row class="carousel-box" type="flex" justify="space-between" style="margin:0">
                <el-col :span="3" class="icon-flex">
                    <div class="flex-item">
                        <div class="pos-box">
                            <img src="../../../assets/jsmhq@2x.png" class="img heng">
                            <p class="name">驾驶舱灭火器</p>
                            <p class="val">在位</p>
                        </div>
                    </div>
                </el-col>
                <el-col :span="3" class="icon-flex">
                    <div class="flex-item">
                        <div class="pos-box">
                            <img src="../../../assets/mhq@2x.png" class="img heng">
                            <p class="name">急救舱灭火器</p>
                            <p class="val">在位</p>
                        </div>
                    </div>
                </el-col>
                <el-col :span="3" class="icon-flex">
                    <div class="flex-item">
                        <div class="pos-box">
                            <img src="../../../assets/gjx@2x.png" class="img heng">
                            <p class="name">随车工具</p>
                            <p class="val">在位</p>
                        </div>
                    </div>
                </el-col>
                <el-col :span="3" class="icon-flex">
                    <div class="flex-item">
                        <div class="pos-box">
                            <img src="../../../assets/jjx@2x.png" class="img heng">
                            <p class="name">急救箱</p>
                            <p class="val">在位</p>
                        </div>
                    </div>
                </el-col>
                <el-col :span="3" class="icon-flex">
                    <div class="flex-item">
                        <div class="pos-box">
                            <img src="../../../assets/1014089@2x.png" class="img shu">
                            <p class="name">心电监护除颤仪</p>
                            <p class="val">在位</p>
                        </div>
                    </div>
                </el-col>
                <el-col :span="3" class="icon-flex">
                    <div class="flex-item">
                        <div class="pos-box">
                            <img src="../../../assets/dj@2x.png" class="img heng">
                            <p class="name">上下担架车</p>
                            <p class="val">在位</p>
                        </div>
                    </div>
                </el-col>
                <el-col :span="3" class="icon-flex">
                    <div class="flex-item">
                        <div class="pos-box">
                            <img src="../../../assets/zsq@2x.png" class="img heng">
                            <p class="name">双道注射泵</p>
                            <p class="val">在位</p>
                        </div>
                    </div>
                </el-col>
                <el-col :span="3" class="icon-flex">
                    <div class="flex-item">
                        <div class="pos-box">
                            <img src="../../../assets/huxiji@2x.png" class="img shu">
                            <p class="name">呼吸机</p>
                            <p class="val">在位</p>
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
                        <div class="battery-title">病人在位情况</div>
                        <div class="battery-del">在位<span class="battery-red">未系好安全带</span></div>
                        <img src="../../../assets/people@2x.png" class="battery-bottom-img">
                        <span class="battery-bottom-warning">!</span>
                    </div>
                </el-col>
                <el-col :span="6" class="battery-item">
                    <div class="flex-item flex-item-green">
                        <img src="../../../assets/ty02@2x.png" class="battery-img">
                        <div class="battery-title">原车蓄电池情况</div>
                        <div class="battery-del">余量 90%</div>
                        <div class="battery-del">健康度 90%</div>
                        <img src="../../../assets/xdc@2x.png" class="battery-bottom-img1">
                    </div>
                </el-col>
                <el-col :span="6" class="battery-item">
                    <div class="flex-item flex-item-blue">
                        <img src="../../../assets/ty03@2x.png" class="battery-img">
                        <div class="battery-title">锂电池情况</div>
                        <div class="battery-del">余量 90%</div>
                        <div class="battery-del">健康度 90%</div>
                        <img src="../../../assets/ldc@2x.png" class="battery-bottom-img1">
                    </div>
                </el-col>
                <el-col :span="6" class="battery-item">
                    <div class="flex-item flex-item-orange">
                        <img src="../../../assets/ty04@2x.png" class="battery-img">
                        <div class="battery-title">后备蓄电池情况</div>
                        <div class="battery-del">余量 90%</div>
                        <div class="battery-del">健康度 90%</div>
                        <img src="../../../assets/xdc@2x.png" class="battery-bottom-img1">
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
            carOptions:[{
                name:'氧气瓶1',
                val:'余量10.0%',
                icon:'../../../assets/O2@2x.png'
            }]
        }
    },
    created() {}
}
</script>
<style lang="scss" scoped>
$margin:1vh;
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
                width:100%;
                background:#fff;
                padding-left:0.12rem;
                box-sizing:border-box;
                font-size:0.14rem;
                color:#6A7F95;
            }
            
        }
        .carousel-box{
            width:100%;
            height:25vh;
            margin:0;
            .icon-flex{
                height:100%;
                padding-right:0.12rem;
                box-sizing:border-box;
                .flex-item{
                    width:100%;
                    height:100%;
                    background:#fff;
                    position: relative;
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
                            color:#60ACF6;
                            // background-image: -webkit-gradient(linear, left 0, right 0, from(rgb(4, 94, 170)), to(rgb(1, 152, 216)));
                            // -webkit-background-clip: text; /*必需加前缀 -webkit- 才支持这个text值 */
                            // -webkit-text-fill-color: transparent; /*text-fill-color会覆盖color所定义的字体颜色： */
                        }
                    }
                    .img{
                        display:block;
                        margin:0 auto 0.1rem auto;
                        position: relative;
                    }
                    .heng{
                        width:0.45rem;
                    }
                    .shu{
                        height:0.45rem;
                    }
                    .img-lx{
                        position: absolute;
                        top: -0.2rem;
                        left: 0;
                        padding: 0 0.28rem;
                        width: 100%;
                    }
                    .flex-item-detail{
                        position:absolute;
                        bottom: 0;
                        margin-bottom: 0.1rem;
                        width: 100%;
                    }
                    p{
                        color:#7DCCF8;
                    }
                    .name{
                        margin-bottom:0.06rem;
                    }
                }
                &.active{
                    p{
                        color:#FA7663
                    }
                }
                &.none{
                    p{
                        color:#bbb
                    }
                }
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
                    opacity:0.5;
                }
                .battery-del{
                    font-size:0.15rem;
                    font-weight:400;
                    color:rgba(255,255,255,1);
                    line-height:0.2rem;
                    margin-left: 0.35rem;
                    .battery-red{
                        color: #F93F60
                    }
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
}
</style>
