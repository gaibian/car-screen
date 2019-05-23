<template>
    <div class="bottom-container">
        <span class="header-text">浙BG0G603（本部急救点）</span>
        <span class="img-span thermometer"></span>
        <span class="text"><count-to :startVal='0' :endVal='30' :duration='2000'></count-to>℃</span>
        <span class="img-span humidity"></span>
        <span class="text"><count-to :startVal='0' :endVal='80' :duration='2000'></count-to>%</span>
    </div>
</template>
<script>
import countTo from 'vue-count-to';
export default {
    name: 'bottomContainer',
    components: {
        countTo
    },
    data() {
        return {}
    },
    created() {
  
        
    }
}
</script>
<style lang="scss" scoped>
$boxShadow:0 -5px 20px rgba(100,100,100,0.2);
.bottom-container{
  display:flex;
  position:fixed;
  left:0;
  bottom:0;
  width:100%;
  height:0.5rem;
  background:#60ACF6;
  box-sizing:border-box;
  box-shadow:$boxShadow;
  text-align:center;
  align-items:center;
  justify-content:center;
  .header-text{
    position:absolute;
    top:50%;
    transform:translate(0,-50%);
    left:12px;
    color:#fff;
    font-size:0.18rem;
  }
  span{
    display:inline-block;
  }
  .img-span{
    font-size:0;
    margin-right:0.06rem;
    &.thermometer{
      width:0.15rem;
      height:0.26rem;
      background:url('../../../assets/wd@2x.png');
      background-size:contain;
    }
    &.humidity{
      width:0.2rem;
      height:0.26rem;
      background:url('../../../assets/sd@2x.png');
      background-size:contain;
    }
  }
  .text{
    font-size:0.18rem;
    color:#fff;
    margin-right:0.25rem;
  }
}
</style>