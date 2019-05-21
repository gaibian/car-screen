<template>
    <div class="svgName">
        <svg width="200" height="200" id="nameSvg">
            <circle id="mycircle" cx="70" cy="70" r="60">
               <animate attributeName="cx" from="60" to="100" dur="2s" repeatCount="indefinite"/>
            </circle>
            <rect x="70" y="0" width="10" height="60" rx="4" ry="4">
               <animate attributeName="height" from="0" to="60" dur="2s" repeatCount="indefinite" />
            </rect>
            <line x1="120" y1="120" x2="180" y2="180" style="stroke:red;stroke-width:5"></line>
        </svg>
        <el-button @click="handleClick">dianji</el-button>
    </div>
</template>
<script>
import variables from '@/styles/var.scss'
export default {
    name: 'svgName',
    inheritAttrs: false,
    inject:['title'],
    props:{
        age:{
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            form:{
                num:0
            },
            imgList:{
                license_image:[]
            }
        }
    },
    watch:{
        imgList:{
            deep:true,
            handler() {
                console.log('监控到')
            }
            
        }
    },
    computed:{
        num:{
            get() {
                return this.form.num + 1
            },
            set(val) {
                this.form.num = val
            }
        }
    },
    created() {
        //$attrs 可以无限一直往下面的子组件传递数据 => 传递数据不是响应式的 provide也是一样
        
        this.$attrs.name = 'xiaonan'
        console.log(this.$attrs)
        console.log(this.title)
    },
    methods:{
        handleClick() {
            this.imgList['license_image'].push({
                    type: 'web',
                    id: '1',
                    url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
            })
        }
    },
    mounted() {
        // 插入html 获取到svg的节点dom
        let nameSvg = document.getElementById('nameSvg')
        this.num = 2
        console.log(this.num)
        console.log(variables.theme)
        
        // circle 代表圆
        // path 使用标签绘制路径
    },  
}
</script>
<style lang="scss" scoped>
.svgName{
    width:100%;
    height:100%;
    padding:20px;
    box-sizing:border-box;
}
#mycircle{
    fill:red;
    stroke:blue;
    stroke-width:6px;
}
</style>