<template>
  <div>
    <h1>国内疫情地图</h1>
    <van-tabs v-model="active" animated @change="change">
      <van-tab title="现确诊">
        <div id="main"></div>
      </van-tab>
      <van-tab title="累计确诊">
        <div id="main2"></div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import echarts from "echarts";
import "../../plugins/vant";
import api from "../../api/index";

export default {
  data() {
    return {
      active: 0,
      arr:[]
    };
  },
  methods: {
    change(title) {
      if (title == 1) {
        this.$nextTick(() => {
          this.$myChart.chinaMap("main2",this.arr);
        });
      }
    },
    getBar() {
      //   // 基于准备好的dom，初始化echarts实例
      //   var myChart = echarts.init(document.getElementById("main"));
      //     // var myChart = this.$echarts.init(document.getElementById("main"));
      //   // 指定图表的配置项和数据
      //   var option = {
      //     title: {
      //       text: "ECharts 入门示例",
      //     },
      //     tooltip: {},
      //     xAxis: {
      //       data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
      //     },
      //     yAxis: {},
      //     series: [
      //       {
      //         name: "销量",
      //         type: "bar",
      //         data: [5, 20, 36, 10, 10, 20],
      //       },
      //     ],
      //   };
      //   // 使用刚指定的配置项和数据显示图表。
      //   myChart.setOption(option);
    },
  },
  mounted() {
    api.getChinaInfo().then((res) => {
    //   console.log(res.data.retdata);
      var cities = res.data.retdata;
      // 累计确诊
      let arr = [];
      // 当前确诊
      let newArr = [];
      for (var i = 0; i < cities.length; i++) {
        //   累计确诊数据
        var obj = {};
        obj.name = cities[i].xArea;
        obj.value = cities[i].confirm;
        arr.push(obj);

        //当前确诊数据
        var newObj = {};
        newObj.name = cities[i].xArea;
        newObj.value = cities[i].curConfirm;
        newArr.push(newObj);
      }
    //   将累计确诊数组保存
      this.arr=arr;
      //vue里面 等待延迟加载
      this.$nextTick(() => {
        this.$myChart.chinaMap("main", newArr);
      });
    });
    // this.getBar();
  },
};
</script>

<style lang="less" scoped>
#main,
#main2 {
  width: 100%;
  height: 8rem;
}
</style>