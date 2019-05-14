<template>
    <div class="page">
        <p class="p">业务模块</p>
        <svg-icon :icon-class="'example'"></svg-icon>
    </div>
</template>
<script>
import { Message } from 'element-ui'
export default {
    name:'order',
    data() {
        return {}
    },
    created() {
        function parent() {
            var name = 'xiaojun' // name的变量会一直存在内存里
            function child() {
                return name
            }
            return child
        }
        var myFunc = parent();
        console.log(myFunc())
        try{
            let n = 0;
            n = m + 1;
        }catch(error){
            console.log(error)
            // 错误的处理
        }finally{
            console.log('执行完成...')
        }
    },
    mounted() {
        this.$message({
            message:'弹窗成功',
            type:'success',
            duration: 5 * 1000
        })
    },
    methods:{
        
    }
}
</script>
<style lang="scss" scoped>
.p{
    color:subMenuHover;
    font-size:17px;
}
</style>