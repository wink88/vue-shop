<template>
  <div>
    <h3>城市选择</h3>
    <div>
      <van-index-bar :index-list="indexList">
        <template v-for="(city, name) in cityList">
          <van-index-anchor :index="name" :key="name" />
          <van-cell
            v-for="item in city"
            :key="item.id"
            :title="item.name"
            @click="change"
          />
        </template>

        <!-- <van-index-anchor index="B" />
        <van-cell
          v-for="item in cityList.B"
          :key="item.id"
          :title="item.name"
        /> -->
      </van-index-bar>
    </div>
  </div>
</template>

<script>
import api from "../../api/index";
export default {
  data() {
    return {
      indexList: [],
      cityList: [],
      city: "",
    };
  },
  created() {
    api.getCity().then((res) => {
      console.log(res.data.result);
      this.cityList = res.data.result.citylist;
      this.indexList = Object.keys(res.data.result.citylist);
      console.log(this.cityList);
    });
  },
  beforeDestroy() {
    // 使用eventBus传递数据：
    this.$bus.$emit("city", this.city);
  },
  methods: {
    change(event) {
      //   console.log(event.target.innerText);
      // 本地存储
      // localStorage.setItem("city",event.target.innerText);

      this.city = event.target.innerText;
      // this.$router.push("/");
      this.$router.go(-1);
    },
  },
};
</script>

<style>
</style>