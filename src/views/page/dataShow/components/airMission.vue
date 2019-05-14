<template>
    <!--急救任务echarts图-->
    <div class="air-mission">
        <div id="air-mission-echarts"></div>
    </div>
</template>
<script>
import echarts from 'echarts'
export default {
    name:'airMission',
    data() {
        return {

        }
    },
    mounted() {
        //当dom加载的时候 加载echarts图标实例 数据的更新
        var myChart = echarts.init(document.getElementById('air-mission-echarts'),'dark');
        //app.title = '柱状图框选';
        var xAxisData = [];
        var data1 = [];
        var data2 = [];
        var data3 = [];
        var data4 = [];

        for (var i = 0; i < 10; i++) {
            xAxisData.push('Class' + i);
            data1.push((Math.random() * 2).toFixed(2));
            data2.push(-Math.random().toFixed(2));
            data3.push((Math.random() * 5).toFixed(2));
            data4.push((Math.random() + 0.3).toFixed(2));
        }

        var itemStyle = {
            normal: {
            },
            emphasis: {
                barBorderWidth: 1,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowColor: 'rgba(0,0,0,0.5)'
            }
        };

        var option = {  //配置手册
            backgroundColor: 'rgba(0,0,0,0)',
            legend: {  //代表柱状图颜色的模块
                show: true,
                data: ['bar', 'bar2', 'bar3', 'bar4'],
                align: 'left',
                left: 10,
                textStyle:{
                    color: '#fff',
                    fontStyle: 'normal'
                }
            },
            brush: {
                toolbox: ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear'],
                xAxisIndex: 0
            },
            toolbox: {  //试图的工具栏 缩放 重置 保存图片
                show: false,
                feature: {
                    magicType: {
                        type: ['stack', 'tiled']
                    },
                    dataView: {}
                }
            },
            tooltip: {},
            xAxis: {  //代表了X轴
                data: xAxisData,
                name: 'X Axis',
                silent: false,
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                },
                axisLine: {onZero: true},
                splitLine: {show: false},
                splitArea: {show: false}
            },
            yAxis: {  //代表了Y轴
                inverse: true,
                splitArea: {show: false},
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            grid: {
                left: 100
            },
            visualMap: {
                type: 'continuous',
                dimension: 1,
                text: ['High', 'Low'],
                inverse: true,
                itemHeight: 200,
                calculable: true,
                min: -2,
                max: 6,
                top: 60,
                left: 10,
                inRange: {
                    colorLightness: [0.4, 0.8]
                },
                outOfRange: {
                    color: '#fff'
                },
                controller: {
                    inRange: {
                        color: '#2f4554'
                    }
                }
            },
            series: [  // 颜色模块
                {
                    name: 'bar',
                    type: 'bar',
                    stack: 'one',
                    itemStyle: itemStyle,
                    data: data1
                },
                {
                    name: 'bar2',
                    type: 'bar',
                    stack: 'one',
                    itemStyle: itemStyle,
                    data: data2
                },
                {
                    name: 'bar3',
                    type: 'bar',
                    stack: 'two',
                    itemStyle: itemStyle,
                    data: data3
                },
                {
                    name: 'bar4',
                    type: 'bar',
                    stack: 'two',
                    itemStyle: itemStyle,
                    data: data4
                }
            ]
        };

        myChart.setOption(option)

        myChart.on('brushSelected', renderBrushed);

        function renderBrushed(params) {
            var brushed = [];
            var brushComponent = params.batch[0];

            for (var sIdx = 0; sIdx < brushComponent.selected.length; sIdx++) {
                var rawIndices = brushComponent.selected[sIdx].dataIndex;
                brushed.push('[Series ' + sIdx + '] ' + rawIndices.join(', '));
            }

            myChart.setOption({
                title: {
                    backgroundColor: '#333',
                    text: 'SELECTED DATA INDICES: \n' + brushed.join('\n'),
                    bottom: 0,
                    right: 0,
                    width: 100,
                    textStyle: {
                        fontSize: 12,
                        color: '#fff'
                    }
                }
            });
        }
    },
}
</script>
<style lang="scss" scoped>
.air-mission{
    color:#fff;
}
#air-mission-echarts{
    width:100%;
    height:500px;
    background:rgba(0,0,0,0)
}
</style>