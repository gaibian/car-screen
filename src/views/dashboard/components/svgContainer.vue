<template>
    <div class="svg-container">
        <div class="item-box">
            <div class="header-title">
                <h2 class="title">器材</h2>
            </div>
            <el-row class="carousel-box" type="flex" justify="space-between" style="margin:0">
                <el-col :span="3" class="icon-flex" v-for="index in 8" :key="index">
                    <div class="flex-item">
                        <div class="pos-box">
                            <img class="img">
                            <p class="name">氧气瓶1</p>
                            <p class="val">余量10.0%</p>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="item-box" style="margin-top:0.12rem;">
            <div class="header-title">
                <h2 class="title">器材</h2>
            </div>
            <el-row class="carousel-box" type="flex" justify="space-between" style="margin:0">
                <el-col :span="3" class="icon-flex" v-for="index in 8" :key="index">
                    <div class="flex-item">
                        <div class="pos-box">
                            <img class="img">
                            <p class="name">氧气瓶1</p>
                            <p class="val">余量10.0%</p>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
        <!--电池-->
        <div class="battery-box">
            <el-row type="flex" justify="space-between" style="margin:0">
                <el-col :span="6" class="battery-item">
                    <div class="flex-item">
                        病人
                    </div>
                </el-col>
                <el-col :span="6" class="battery-item">
                    <div class="flex-item">
                        病人
                    </div>
                </el-col>
                <el-col :span="6" class="battery-item">
                    <div class="flex-item">
                        病人
                    </div>
                </el-col>
                <el-col :span="6" class="battery-item">
                    <div class="flex-item">
                        病人
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
        return {}
    },
    created() {}
}
</script>
<style lang="scss" scoped>
.svg-container{
    width:100%;
    height:100%;
    box-sizing:border-box;
    padding:0.12rem 0rem 0.12rem 2.62rem;
    .item-box{
        width:100%;
        .header-title{
            width:100%;
            height:0.32rem;
            line-height:0.32rem;
            padding-right:0.12rem;
            box-sizing:border-box;
            margin-bottom:0.12rem;
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
            height:1.5rem;
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
                    .img{
                        display:block;
                        width:0.4rem;
                        height:0.4rem;
                        background:#ccc;
                        margin:0 auto 0.1rem auto;
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
            }
        }
    }
    .battery-box{
        width:100%;
        margin-top:0.12rem;
        .battery-item{
            height:2.2rem;
            padding-right:0.12rem;
            box-sizing:border-box;
            .flex-item{
                width:100%;
                height:100%;
                background:#ccc;
            }
        }
    }
}
</style>
