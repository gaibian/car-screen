<template>
    <div class="bottom-container">
        <span class="img-span thermometer"></span>
        <span class="text">30℃</span>
        <span class="img-span humidity"></span>
        <span class="text">80%</span>
    </div>
</template>
<script>
export default {
    name: 'bottomContainer',
    data() {
        return {

        }
    },
    created() {}
}
</script>
<style lang="scss" scoped>
$boxShadow:0 -4px 8px rgba(100,100,100,0.1);
.bottom-container{
  display:flex;
  position:fixed;
  left:0;
  bottom:0;
  width:100%;
  height:0.51rem;
  background:#fff;
  box-shadow:$boxShadow;
  text-align:center;
  align-items:center;
  justify-content:center;
  span{
    display:inline-block;
  }
  .img-span{
    font-size:0;
    margin-right:0.06rem;
    &.thermometer{
      width:0.15rem;
      height:0.26rem;
      background:url('../../../assets/Thermometer.png');
      background-size:contain;
    }
    &.humidity{
      width:0.2rem;
      height:0.26rem;
      background:url('../../../assets/humidity.png');
      background-size:contain;
    }
  }
  .text{
    font-size:0.18rem;
    color:#333;
    margin-right:0.25rem;
  }
}
</style>