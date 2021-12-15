/**
 * 开发成vue插件使用echarts 
 * javascript:
 *  Object.defineProperties(obj,props)
     方法直接在一个对象上定义新的属性或修改现有属性，并返回该对象
        obj   在其上定义或修改属性的对象
        props 要定义其可枚举属性或修改的属性描述符的对象
 */
//导入echarts 
import  echarts from "echarts";
//导入中国地图的js文件
import 'echarts/map/js/china'
// 导入世界地图的js文件
import 'echarts/map/js/world'

import country from '../utils/country'
import  '../utils/map'
const install = function (Vue, options) {
    // 添加实例方法 
    // Vue.prototype.demo=function(){}  //obj.name    
    //Vue.prototype.$myChart={demo(),fun(),...}
    Object.defineProperties(Vue.prototype, {
        $myChart: {
            get() {
                return {
                    //1. 绘制一个折线图
                    line(id) {
                        var myChart = echarts.init(document.getElementById(id));
                        // 指定图表的配置项和数据
                        var option = {
                            title: {
                                text: "ECharts 入门示例",
                            },
                            tooltip: {},
                            legend: {
                                data: ["销量"],
                            },
                            xAxis: {
                                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
                            },
                            yAxis: {},
                            series: [
                                {
                                    name: "销量",
                                    type: "line",
                                    data: [5, 20, 36, 10, 10, 20],
                                },
                            ],
                        };
                        // 使用刚指定的配置项和数据显示图表。
                        myChart.setOption(option);
                    },
                    //2. 中国地图
                    chinaMap(id,data) {
                        var myChart = echarts.init(document.getElementById(id));
                        var option = {
                            tooltip: { //悬浮弹框
                                triggerOn: 'click', //提示框触发的条件
                                enterable: true,//鼠标是否可进入提示框浮层中，默认为false
                                formatter(item) {//item=下面serves里面的data里面的每一项 //[{} ] data={} a b c d 
                                    return '<a href="/cityMap/'+item.name+'">'+item.name+'</a>'
                                }
                                // formatter:'{a}-{b}'
                            },
                            visualMap: [{ //映射高亮颜色
                                orient: "horizontal", //水平的
                                type: "piecewise", //离散
                                bottom: 0,
                                textGap:0,
                                pieces: [ // 配置颜色区间
                                    {
                                        min: 0,
                                        max: 0,
                                        color: "#FFFFFF"
                                    },
                                    {
                                        min: 1,
                                        max: 100,
                                        color: "#FDFDCF"
                                    },
                                    {
                                        min: 100,
                                        max: 1000,
                                        color: "#FE9E83"
                                    },
                                    {
                                        min: 1000,
                                        max: 5000,
                                        color: "#E55A4E"
                                    },
                                    {
                                        min: 5000,
                                        // max: 10000,
                                        color: "#4F070D"
                                    }
                                ]
                            }],
                            series: [{
                                name: "省",
                                type: "map", //地图  bar  line  map 
                                map: "china", //中国地图 需要引入地图china.js 
                                roam: false,
                                zoom: 1.2,
                                aspectScale: 0.75,
                                top: 40,
                                layoutCenter: ['5%', '5%'],
                                label: {
                                    normal: {
                                        show: true,
                                        textStyle: {
                                            fontSize: 8
                                        }
                                    }
                                },
                                itemStyle: {
                                    normal: {
                                        areaColor: 'rgba(0,255,236,0)',
                                        borderColor: 'rgba(0,0,0,0.2)',
                                    },
                                    emphasis: { // 选中的区域颜色及阴影效果等
                                        areaColor: 'rgba(255,180,0,0.8)',
                                        shadowOffsetX: 0,
                                        shadowOffsetY: 0,
                                        shadowBlur: 20,
                                        borderWidth: 0,
                                    }
                                },
                                data
                                // data: [
                                //     { name: '内蒙古', value: 200 },
                                //     { name: '北京', value: 800 },
                                // ]
                            }]
                        }
                        myChart.setOption(option);
                    },
                    //3.世界地图
                    worldMap(id,data){
                        var myChart = echarts.init(document.getElementById(id));
                        var option = {
                            tooltip: { //悬浮弹框
                                triggerOn: 'click', //提示框触发的条件
                                enterable: true,//鼠标是否可进入提示框浮层中，默认为false
                                formatter(item) {//item=下面serves里面的data里面的每一项 //[{} ] data={} a b c d 
                                    return  item.name
                                }
                                // formatter:'{a}-{b}'
                            },
                            visualMap: [{ //映射高亮颜色
                                orient: "vertical", //水平的
                                type: "piecewise", //离散
                                bottom: 0,
                                textGap:0,
                                pieces: [ // 配置颜色区间
                                    {
                                        min: 0,
                                        max: 0,
                                        color: "#FFFFFF"
                                    },
                                    {
                                        min: 1,
                                        max: 100,
                                        color: "#FDFDCF"
                                    },
                                    {
                                        min: 100,
                                        max: 1000,
                                        color: "#FE9E83"
                                    },
                                    {
                                        min: 1000,
                                        max: 5000,
                                        color: "#E55A4E"
                                    },
                                    {
                                        min: 5000,
                                        // max: 10000,
                                        color: "#4F070D"
                                    }
                                ]
                            }],
                            series: [{
                                name: "国",
                                type: "map", //地图  bar  line  map 
                                map: "world", //中国地图 需要引入地图world.js 
                                nameMap:country,
                                roam: false,
                                zoom: 1.2,
                                aspectScale: 0.75,
                                top: 40,
                                layoutCenter: ['5%', '5%'],
                                label: {
                                    normal: {
                                        show: false,
                                        textStyle: {
                                            fontSize: 8
                                        }
                                    }
                                },
                                itemStyle: {
                                    normal: {
                                        areaColor: 'rgba(0,255,236,0)',
                                        borderColor: 'rgba(0,0,0,0.2)',
                                    },
                                    emphasis: { // 选中的区域颜色及阴影效果等
                                        areaColor: 'rgba(255,180,0,0.8)',
                                        shadowOffsetX: 0,
                                        shadowOffsetY: 0,
                                        shadowBlur: 20,
                                        borderWidth: 0,
                                    }
                                },
                                data
                            }]
                        }
                        myChart.setOption(option);
                    },
                    //4.城市地图
                    cityMap(id,cityName,data){
                        var myChart = echarts.init(document.getElementById(id));
                        var option = {
                            tooltip: { //悬浮弹框
                                triggerOn: 'click', //提示框触发的条件
                                enterable: true,//鼠标是否可进入提示框浮层中，默认为false
                                formatter(item) {//item=下面serves里面的data里面的每一项 //[{} ] data={} a b c d 
                                    return  '<a href="/cityMap/item.name">'+item.name+'</a>'
                                }
                                // formatter:'{a}-{b}'
                            },
                            visualMap: [{ //映射高亮颜色
                                orient: "vertical", //水平的
                                type: "piecewise", //离散
                                bottom: 0,
                                textGap:0,
                                pieces: [ // 配置颜色区间
                                    {
                                        min: 0,
                                        max: 0,
                                        color: "#FFFFFF"
                                    },
                                    {
                                        min: 1,
                                        max: 100,
                                        color: "#FDFDCF"
                                    },
                                    {
                                        min: 100,
                                        max: 1000,
                                        color: "#FE9E83"
                                    },
                                    {
                                        min: 1000,
                                        max: 5000,
                                        color: "#E55A4E"
                                    },
                                    {
                                        min: 5000,
                                        // max: 10000,
                                        color: "#4F070D"
                                    }
                                ]
                            }],
                            series: [{
                                name: "市",
                                type: "map", //地图  bar  line  map 
                                map: cityName,  
                                nameMap:country,
                                roam: false,
                                zoom: 1.2,
                                aspectScale: 0.75,
                                top: 40,
                                layoutCenter: ['5%', '5%'],
                                label: {
                                    normal: {
                                        show: false,
                                        textStyle: {
                                            fontSize: 8
                                        }
                                    }
                                },
                                itemStyle: {
                                    normal: {
                                        areaColor: 'rgba(0,255,236,0)',
                                        borderColor: 'rgba(0,0,0,0.2)',
                                    },
                                    emphasis: { // 选中的区域颜色及阴影效果等
                                        areaColor: 'rgba(255,180,0,0.8)',
                                        shadowOffsetX: 0,
                                        shadowOffsetY: 0,
                                        shadowBlur: 20,
                                        borderWidth: 0,
                                    }
                                },
                                data
                            }]
                        }
                        myChart.setOption(option);
                    },
                }
            }
        }
    })

}

export default install
