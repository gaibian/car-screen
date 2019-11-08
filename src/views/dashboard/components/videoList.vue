<template>
    <div class="video-container">
        <el-row class="header-box">
            <el-col :span="12" @click.native="handleBack">
                <i class="el-icon-arrow-left"></i>
                视频列表
            </el-col>
        </el-row>
        <div  class="choice-box">
            <span class="time"><em>时间:</em><i @click="handleStartTime">{{startTime}}</i><em>至</em><i @click="handleEndTime">{{endTime}}</i></span>
            <span class="monitor"><em>摄像头:</em><i :class="monitor.isActive ? 'active' : ''" v-for="(monitor,index) in monitorOptions" :key="index" @click="handleMonitorClick(monitor)">{{monitor.name}}</i></span>
            <span class="btn" @click="handleQuery">查询</span>
        </div>
        <el-table :data="tableData" border v-loading="loading" max-height="360" element-loading-text="数据加载中...">
            <el-table-column label="文件名" prop="filename"></el-table-column>
            <el-table-column label="开始时间">
                <template slot-scope="scope">
                    <span>{{ scope.row.time | time }}</span>
                </template>
            </el-table-column>
            <el-table-column label="结束时间">
                <template slot-scope="scope">
                    <span>{{ scope.row.end | time }}</span>
                </template>
            </el-table-column>
            <el-table-column label="时长">
                <template slot-scope="scope">
                    <span>{{ fileTime(scope.row.time,scope.row.end) }}</span>
                </template>
            </el-table-column>
            <el-table-column label="文件大小">
                <template slot-scope="scope">
                    <span>{{ scope.row.size | fileSize }}</span>
                </template>
            </el-table-column>
            <el-table-column label="操作" width="150px">
                <template slot-scope="scope">
                    <el-button type="primary" size="mini" @click="handlePlay(scope)">播放</el-button>
                    <el-button type="primary" size="mini" @click="handleDownload(scope)">导出</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-row class="pag-box" type="flex" align="middle" justify="end">
            <pagination :total="total" :page.sync="queryForm.page" :limit.sync="queryForm.size" @loadingChange="loading = true" @pagination="handlePag"></pagination>
        </el-row>
        <van-popup v-model="timeActive" position="bottom">
            <van-datetime-picker
            type="datetime"
            v-model="currentDate"
            @confirm="handleConfirm"
            @cancel="handleCancel"
            :formatter="formatter"
            bind:input="onInput"
            />
        </van-popup>
        
        <!--视频播放-->
        <el-dialog
        class="video-dialog"
        :visible.sync="innerVisible"
        :destroy-on-close="true"
        :show-close="false"
        append-to-body>
        <div class="video-content">
            <video controls autoplay style="width:100%;height:100%;object-fit:fill" v-if="innerVisible" :src="videoSrc" type="video/mp4">
               
            </video>
        </div>
        
        </el-dialog>
    </div>
</template>
<script>
import axios from 'axios'
import { isArray } from '@/utils/validate'
import Pagination from '@/components/Pagination'
export default {
    name:'videoList',
    components:{
        Pagination
    },
    filters:{
        time(value) {
            let dateee = new Date(value).toJSON();
            let date = new Date(+new Date(dateee)+8*3600*1000).toISOString().replace(/T/g,' ').replace(/\.[\d]{3}Z/,'')  
            return date
        }
    },
    data() {
        return {
            monitorOptions:[],
            minHour: 10,
            maxHour: 20,
            filename:'',
            timeActive:false,
            minDate: new Date().getTime(),
            maxDate: new Date(2019, 10, 1).getTime(),
            currentDate: '',
            startTime:'',
            endTime:'',
            monitorId:'',
            monitorSrc:'',
            tableData:[],
            loading:false,
            innerVisible:false,
            total:0,
            startActive:false,
            endActive:false,
            queryForm:{
                page:1,
                size:10,
            },
            //videoAds:`http://video_dca6320c4217.nbguardian.com:9999`,
            videoAds:'http://192.168.3.254:8080'
        }
    },
    async created() {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
        this.startTime = this.timestampToTime(this.timeZ(start));
        this.endTime = this.timestampToTime(this.timeZ(end));
        this.currentDate = start;
        //picker.$emit('pick', [start, end]);
        // 先获取主机号
        //await this.dataInit();
        // 再获取监视器
        await this.monitorData();
        await this.handlePag();
        
    },
    methods:{
        handleMonitorClick(monitor) {
            this.monitorId = monitor.mid
            this.monitorOptions.forEach(item => {
                this.$set(item,'isActive',false)
            })
            this.$set(monitor,'isActive',true)
            console.log('监视器',this.monitorOptions)
        },
        handleConfirm(time) {
            let currentTime = this.timestampToTime(this.timeZ(time))
            if(this.startActive){
                this.startTime = currentTime
            }
            if(this.endActive){
                this.endTime = currentTime
            }
            this.handleCancel();
            
        },
        formatter(type, value) {
            if (type === 'year') {
                return `${value}年`;
            } else if (type === 'month') {
                return `${value}月`
            }
            return value;
        },
        handleCancel() {
            this.startActive = false;
            this.endActive = false;
            this.timeActive = false;
        },
        handleStartTime() {
            this.startActive = true;
            this.endActive = false;
            this.timeActive = !this.timeActive
        },
        handleEndTime() {
            this.startActive = false;
            this.endActive = true;
            this.timeActive = !this.timeActive
        },
        async monitorData() {
            // 127.0.0.1:8080
            await axios.get(`${this.videoAds}/${this.$token}/monitor/${this.$ke}`).then(res => {
                if(isArray(res.data)){
                    this.monitorOptions = res.data.map(item => {
                        item.isActive = false;
                        return item
                    });
                }else{
                    let data = res.data;
                    data['isActive'] = false;
                    this.monitorOptions.push(data)
                }
                this.monitorId = this.monitorOptions[0].mid
                this.monitorOptions[0].isActive = true;
                
            })
        },
        handleQuery() {  // 视频查询
            console.log('视频查询')
            this.handlePag();
        },
        onInput(event) {
            this.setData({
            currentDate: event.detail
            });
        },
        handlePlay(scope) {
            // http://${this.monitorSrc}.nbguardian.com:9999
            this.videoSrc = `${this.videoAds}/${this.$token}/videos/${this.$ke}/${this.monitorId}/${scope.row.filename}`
            this.innerVisible = true;

        },
        async handlePag() { // 调取视频列表
            this.loading = true;
            let page = 0;
            if(this.queryForm.page == 0){
                page = (this.queryForm.page) * this.queryForm.size;
            }else{
                page = (this.queryForm.page - 1) * this.queryForm.size;
            }
            
            await axios.get(`${this.videoAds}/${this.$token}/videos/${this.$ke}/${this.monitorId}?start=${this.startTime}&end=${this.endTime}&limit=${page},${this.queryForm.size}`).then(res => {
                console.log('取视频',res)
                this.tableData = res.data.videos
                this.total = res.data.total;
                this.loading = false;
                //this.buttonInit();
            })
        },
        handleDownload(scope) {
            let src = `${this.videoAds}/${this.$token}/videos/${this.$ke}/${this.monitorId}/${scope.row.filename}`
            window.srcOpen(src)
            // this.$message({
            //     message:'暂不能下载',
            //     type:'danger'
            // })
        },
        handleBack() {
            this.$router.go(-1)
        },
        timeZ(val) {
            let date = new Date(val);
            return date.getTime();
        },
        // 把时间戳转成年月日时间
        timestampToTime(timestamp) {
            let date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
            let Y = date.getFullYear() + '-';
            let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
            let D = (date.getDate() < 10 ? '0'+ date.getDate() : date.getDate()) + ' ';
            let h = (date.getHours() < 10 ? '0'+ date.getHours() : date.getHours()) + ':';
            let m = (date.getMinutes() < 10 ? '0'+ date.getMinutes() : date.getMinutes()) + ':';
            let s = date.getSeconds() < 10 ? '0'+ date.getSeconds() : date.getSeconds();
            return Y+M+D+h+m+s;
        },
        zTime(value) {
            let dateee = new Date(value).toJSON();
            let date = new Date(+new Date(dateee)+8*3600*1000).toISOString().replace(/T/g,' ').replace(/\.[\d]{3}Z/,'')  
            return date
        },
        fileTime(faultDate,completeTime) {
            let stime = new Date(this.zTime(faultDate)).getTime()
            let etime = new Date(this.zTime(completeTime)).getTime()
            let time = etime - stime;
            let days = Math.floor(time/(24*3600*1000))
            //计算出小时数
            let leave1= time%(24*3600*1000)    //计算天数后剩余的毫秒数
            let hours= Math.floor(leave1/(3600*1000))
            //计算相差分钟数
            let leave2=leave1%(3600*1000)        //计算小时数后剩余的毫秒数
            let minutes=Math.floor(leave2/(60*1000))
            //计算相差秒数
            let leave3=leave2%(60*1000)      //计算分钟数后剩余的毫秒数
            let seconds=Math.round(leave3/1000)
            let newTime = '';
            if(days == 0) {
                newTime = hours + "小时 "+minutes+"分"+seconds+"秒";
            }
            if(hours == 0) {
                newTime = minutes + "分"+seconds+"秒";
            }
            if(minutes == 0) {
                newTime = seconds +"秒";
            }
            return newTime;
        }
    }
}
</script>
<style lang="scss">
.video-container{
    // .el-table__body-wrapper{
    //     max-height:calc(79vh - 48px) !important;
    // }
}
.video-dialog{
    .el-dialog__body{
        padding:0.2rem !important;
        box-sizing:border-box;
    }
    .el-dialog__header{
        display:none !important;
    }
}
</style>
<style lang="scss" scoped>
.video-container{
    width:100%;
    padding:1vh;
    box-sizing:border-box;
    .header-box{
        width:100%;
        height:8vh;
        line-height:8vh;
        padding-left:0.12rem;
        background:#EBEEF5;
        box-sizing:border-box;
        margin-bottom:1vh;
        i{
            margin-right:0.06rem;
        }
    }
    .choice-box{
        width:100%;
        height:7vh;
        line-height:7vh;
        margin:0.12rem 0;
        font-size:0;
        overflow:hidden;
        span{
            float:left;
            display: block;
            height:100%;
            font-size:0.18rem;
            padding:0 0.12rem;
            box-sizing:border-box;
            em{
                float:left;
                height:6vh;
                line-height:6vh;
                display:block;
                font-style:normal;
            }
            i{
                float:left;
                height:6vh;
                line-height:6vh;
                border:#e5e5e5 1px solid;
                padding:0 0.12rem;
                font-style:normal;
                border-radius:0.04rem;
                margin:0 0.08rem;
                &.active{
                    border:#409EFF 1px solid;
                    color:#409EFF;
                }
            }
            &.btn{
                display:block;
                background:#409EFF;
                color:#fff;
                height:6vh;
                line-height:6vh;
                border-radius:0.04rem;
                text-align:center;
            }
        }
        
    }
    .video-content{
        width:6.8rem;
        height:3.82rem;
    }
    .time-popup{
        width:100%;
        position: absolute;
        bottom:-100%;
        left:0;
        transition:all .5s;
        &.active{
            bottom:0;
        }
    }
    .pag-box{
        width:100%;
        height:10vh;
    }
}
</style>