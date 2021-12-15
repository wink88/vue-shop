<template>
  <div>
    <h1>{{ cityName }}城市地图</h1>
    <div id="main4"></div>
  </div>
</template>

<script>
import api from "../../api/index";
export default {
  props: ["cityName"],
  mounted() {
    api.getCityInfo(this.cityName).then((res) => {
      console.log(res);
      let arr = res.data.retdata.subList;
      let newArr = [];
      for (var i = 0; i < arr.length; i++) {
        let obj = {};
        // 处理地区名称
        if (
          arr[i].city.endsWith("区") ||
          arr[i].city.endsWith("州") ||
          arr[i].city.endsWith("盟")
        ) {
          obj.name = arr[i].city;
        } else {
          obj.name = arr[i].city + "市";
        }
        obj.value = arr[i].confirm;
        newArr.push(obj);
      }
      this.$myChart.cityMap("main4", this.cityName, newArr);
    });
  },
};
</script>

<style lang="less" scoped>
#main4 {
  width: 100%;
  height: 8rem;
}
</style>>

