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
            <!--病人在位-->
            <div class="patient-box">
                <div class="img-box">
                    <img width="100%" height="100%" :src="patientStatusImg">
                </div>
                <p class="status-text">病人未系好安全带</p>
            </div>
            <div class="set-content">
                <div class="set-box">
                    <div class="bg-box set-bg">
                        <img class="img" :src="require('../../../assets/set.png')">
                    </div>
                    <p class="text">设置</p>
                </div>
                <div class="set-box">
                    <div class="bg-box internet-bg">
                        <img class="img" :src="require('../../../assets/Internet.png')">
                    </div>
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
            patientStatusImg:require('../../../assets/people_no.png')
        }
    },
    created() {

    }    
}
</script>
<style lang="scss" scoped>
$boxShadow:5px 0px 20px rgba(100,100,100,0.2);
.left-container{
    position:fixed;
    top:0;
    left:0;
    width:2rem;
    height:100%;
    background:#fff;
    box-shadow:4px 0px 8px rgba(100,100,100,0.1);
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
            &:first-child{
                margin-right:0.31rem;
            }
            .bg-box{
                position:relative;
                width:100%;
                height:0.54rem;
                font-size:0;
                border-radius:0.06rem;
                overflow:hidden;
                .img{
                    position:absolute;
                    top:50%;
                    left:50%;
                    transform:translate(-50%,-50%);
                    display:block;
                    width:0.33rem;
                    height:0.33rem;
                }
                &.internet-bg{
                    background:#172a88;
                }
                &.set-bg{
                    background:#626262;
                }
            }
            .text{
                width:100%;
                font-size:0.15rem;
                color:#333;
                text-align:center;
                margin-top:0.12rem;
            }
        }
    }
}
</style>