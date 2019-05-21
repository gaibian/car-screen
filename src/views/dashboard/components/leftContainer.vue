<template>
    <div class="left-container">
        <div class="header-logo-box">
            <div class="logo-box">
                <img width="100%" height="100%" :src="logoImg">
            </div>
            <div class="title-box">急救信息系统</div>
            <p class="name">欢迎您, 张三</p>
        </div>
        <div class="bottom-set-box">
            <div class="set-content">
                <div class="set-box">
                    <p class="text">设置</p>
                </div>
                <div class="set-box">
                    <p class="text">物联网</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'leftContainer',
    data() {
        return {
            logoImg:require('../../../assets/logo.png'),
        }
    },
    created() {
    }    
}
</script>
<style lang="scss" scoped>
.left-container{
    position:fixed;
    top:0;
    left:0;
    width:2.5rem;
    height:100%;
    background:#fff;
    padding-top:0.51rem;
    box-sizing:border-box;
    .header-logo-box{
        width:1.4rem;
        margin:0 auto;
        .logo-box{
            width:1.23rem;
            height:0.99rem;
            font-size:0;
            margin:0 auto;
        }
        .title-box{
            width:100%;
            text-align:center;
            font-size:0.22rem;
            color:#333;
            margin:0.21rem auto 0 auto;
            padding-bottom:0.23rem;
            box-sizing:border-box;
            border-bottom:#C5C5C5 1px solid;
        }
        .name{
            width:100%;
            text-align:center;
            font-size:0.15rem;
            color:#333;
            margin-top:0.23rem;
        }
    }
    .bottom-set-box{
        position:absolute;
        left:0;
        bottom:0.73rem;
        width:100%;
        .patient-box{
            width:100%;
            margin-bottom:0.34rem;
            .img-box{
                width:1.56rem;
                height:0.42rem;
                font-size:0;
                margin:0 auto;
            }
            .status-text{
                width:100%;
                text-align:center;
                font-size:0.15rem;
                color:#D05050;
                margin-top:0.2rem;
            }
        }
        .set-content{
            width:100%;
            display:flex;
            justify-content:center;
        }
        .set-box{
            width:0.54rem;
            background:#60ACF6;
            height:0.35rem;
            line-height:0.35rem;
            border-radius:0.05rem;
            &:first-child{
                margin-right:0.31rem;
            }
            .text{
                width:100%;
                font-size:0.15rem;
                color:#fff;
                text-align:center;
            }
        }
    }
}
</style>