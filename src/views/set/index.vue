<template>
    <div class="set-container">
        <el-button type="primary" @touchstart="handleSure">确认</el-button>
    </div>
</template>
<script>
export default {
    name:'setContainer',
    data() {
        return {}
    },
    created() {},
    methods:{
        handleSure() {
            // 跳转页面
            console.log(this.$router)
            this.$router.push({name:'Dashboard'})
        }
    }
}
</script>
<style lang="scss" scoped>
.set-container{
    width:100%;
    height:100%;
    padding:0.2rem;
    box-sizing: border-box;
}
</style>