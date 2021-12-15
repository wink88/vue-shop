<template>
  <div>
    <h1>世界疫情地图</h1>
    <div id="main3"></div>
  </div>
</template>

<script>
import api from "../../api/index";
export default {
  mounted() {
    api.getWorldInfo().then((res) => {
      // console.log(res.data);
      var countries = res.data.retdata;
      var arr = [];
      for (var i = 0; i < countries.length; i++) {
        var obj = {};
        obj.name = countries[i].xArea;
        obj.value = countries[i].confirm;
        arr.push(obj);
      }
      // console.log(arr);
      this.$myChart.worldMap("main3",arr);
    });
  },
};
</script>
<style lang="less" scoped>
#main3 {
  width: 100%;
  height: 6rem;
}
</style>