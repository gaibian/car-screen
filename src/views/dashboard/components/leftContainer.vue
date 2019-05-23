<template>
    <div class="left-container">
        <div class="header-logo-box">
            <div class="logo-box">
                <img width="100%" height="100%" :src="logoImg">
            </div>
            <div class="title-box">急救信息系统</div>
            <p class="name">欢迎您, 张三</p>
            <p class="name">欢迎您, 担架员</p>
        </div>
        <div class="car-container">
            <img :src="require('../../../assets/car.png')">
            <div class="val-box top-left-box">
                <div class="delta-box"></div>
                <p>255Pa</p>
                <p>28℃</p>
            </div>
            <div class="val-box top-right-box">
                <div class="delta-box"></div>
                <p>255Pa</p>
                <p>28℃</p>
            </div>
            <div class="val-box bottom-left-box">
                <div class="delta-box"></div>
                <p>255Pa</p>
                <p>28℃</p>
            </div>
            <div class="val-box bottom-right-box">
                <div class="delta-box"></div>
                <p>255Pa</p>
                <p>28℃</p>
            </div>

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
            logoImg:require('../../../assets/logo@2x.png'),
        }
    },
    created() {
    }    
}
</script>
<style lang="scss" scoped>
$mainColor:#60ACF6;
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
            color:$mainColor;
            margin:0.21rem auto 0.21rem auto;
            padding-bottom:0.23rem;
            box-sizing:border-box;
            border-bottom:#C5C5C5 1px solid;
        }
        .name{
            width:100%;
            text-align:center;
            font-size:0.15rem;
            color:#6A7F95;
            margin-bottom:0.08rem;
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
            padding:0 0.12rem;
            background:#60ACF6;
            height:0.35rem;
            line-height:0.35rem;
            border-radius:0.05rem;
            //cursor: pointer;
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
.car-container{
    position: absolute;
    width:100%;
    left:0;
    bottom:1.5rem;
    img{
        display:block;
        width:0.78rem;
        height:1.37rem;
        margin:0 auto;
    }

    .val-box{
        position: absolute;
        font-size:0.14rem;
        color:#60ACF6;
        box-sizing:border-box;
        .delta-box{
            width:0;
            height:0;
            border-style:solid;
            position: absolute;
            top:50%;
            transform:translate(0,-50%);
        }
        &.top-left-box{
            top:0.2rem;
            left:0.24rem;
            padding-right:0.15rem;
            .delta-box{
                right:0;
                border-width:0.07rem 0.07rem 0.07rem 0;
                border-color:transparent #60ACF6 transparent transparent;/*透明 灰 透明 透明 */
            }
        }
        &.top-right-box{
            top:0.2rem;
            left:68%;
            padding-left:0.15rem;
            .delta-box{
                left:0;
                border-width:0.07rem 0 0.07rem 0.07rem;
                border-color:transparent transparent transparent #60ACF6;/*透明 透明 透明 灰*/
            }
        }
        &.bottom-left-box{
            bottom:0.2rem;
            left:0.24rem;
            padding-right:0.15rem;
            .delta-box{
                right:0;
                border-width:0.07rem 0.07rem 0.07rem 0;
                border-color:transparent #60ACF6 transparent transparent;/*透明 灰 透明 透明 */
            }
        }
        &.bottom-right-box{
            bottom:0.2rem;
            right:0.24rem;
            padding-left:0.15rem;
            .delta-box{
                left:0;
                border-width:0.07rem 0 0.07rem 0.07rem;
                border-color:transparent transparent transparent #60ACF6;/*透明 透明 透明 灰*/
            }
        }
    }
    
    
}
</style>