<template>
    <div class="locus-box">
        <div id="container-locus" style="width:100vw;height:100vh"></div>
    </div>
</template>
<script>
export default {
    name:'locus',
    data() {
        return {
            map: null,
        }
    },
    mounted() {
        var marker, lineArr = [[116.478935,39.997761],[116.478939,39.997825],[116.478912,39.998549],[116.478912,39.998549],[116.478998,39.998555],[116.478998,39.998555],[116.479282,39.99856],[116.479658,39.998528],[116.480151,39.998453],[116.480784,39.998302],[116.480784,39.998302],[116.481149,39.998184],[116.481573,39.997997],[116.481863,39.997846],[116.482072,39.997718],[116.482362,39.997718],[116.483633,39.998935],[116.48367,39.998968],[116.484648,39.999861]];
        this.map = new AMap.Map('container-locus',{
            resizeEnable: true,
            center: [116.397428, 39.90923],
            zoom: 17
        })
        // 自定义模板
        var content = '<div class="custom-content-marker"><p>sss</p><p>qqq</p></div>'
        marker = new AMap.Marker({
            position: [116.478935,39.997761],
            icon: "https://webapi.amap.com/images/car.png",
            offset: new AMap.Pixel(-26, -13),
            autoRotation: true,
            angle:-90,
        })
        this.map.add(marker)

        //绘制轨迹  是折线的话，车辆会抖动
        var polyline = new AMap.Polyline({
            map: this.map,
            path: lineArr,
            showDir:true,
            strokeColor: "#28F",  //线颜色
            // strokeOpacity: 1,     //线透明度
            strokeWeight: 6,      //线宽
            // strokeStyle: "solid"  //线样式
        });

        var passedPolyline = new AMap.Polyline({
            map: this.map,
            // path: lineArr,
            strokeColor: "#AF5",  //线颜色
            // strokeOpacity: 1,     //线透明度
            strokeWeight: 6,      //线宽
            // strokeStyle: "solid"  //线样式
        });

        marker.on('moving', function (e) {
            console.log(e)
            //passedPolyline.setPath(e.passedPath);
        });

        this.map.setFitView();

        function startAnimation () {
            marker.moveAlong(lineArr, 50);
        }
        startAnimation()
        function pauseAnimation () {
            marker.pauseMove();
        }

        function resumeAnimation () {
            marker.resumeMove();
        }

        function stopAnimation () {
            marker.stopMove();
        }

    },
}
</script>
<style lang="scss" scoped>

</style>