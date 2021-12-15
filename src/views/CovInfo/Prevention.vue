<template>
  <div>
    <img src="../../assets/images/防护物资.png" alt="" width="100%" />
    <div class="wrap">
      <van-tabs v-model="active" animated>
        <van-tab v-for="(item, index) in arr" :title="item.title" :key="index">
          <van-image
            :src="item.img"
          />
     
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import "../../plugins/vant";
import img1 from "../../assets/images/酒精.png";
import img2 from "../../assets/images/口罩.png";
import img3 from "../../assets/images/洗手液.png";
import img4 from "../../assets/images/温度计.png";
export default {
  data() {
    return {
      active: 2,
      arr: [
        {
          img: img1,
          title: "消毒剂",
        },
        {
          img: img2,
          title: "口罩",
        },
        {
          img: img3,
          title: "洗手液",
        },
        {
          img: img4,
          title: "温度计",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.wrap {
  background-color: blue;
}
</style>