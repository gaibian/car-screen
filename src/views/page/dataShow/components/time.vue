<template>
    <div class="current-time-box">{{myDate}}</div>
</template>
<script>
export default {
    name:'currentTime',
    data() {
        return {
            myDate:'',
        }
    },
    created() {
        setInterval(this.showTime,1000)
    },
    methods:{
        showTime() {
            let date = new Date();
            let year = date.getFullYear();
            let month = date.getMonth()+1;
            let day = date.getDate();
            let hours = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();
                if(day == 0){
                    day == '日';
                }
                if(seconds < 10){
                seconds = `0${seconds}`
            }
            if (minutes < 10) {
                minutes = `0${minutes}`
            }
            if (hours < 10) {
                hours = `0${hours}`
            }
            let time = `${year}年${month}月${day}日${hours}时${minutes}分${seconds}秒`
            this.myDate = time;
        }
    }    
}
</script>
<style lang="scss" scoped>
.current-time-box{
    width:100%;
    font-size:1.3vw;
    color:#37abe2;
}
</style>