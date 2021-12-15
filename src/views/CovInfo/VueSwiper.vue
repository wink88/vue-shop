<template>
  <div>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="(item,index) in banner" :key="index">
          <img :src="item.image" alt=""  width="100%"/>
    </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <ul class="list">
      <li
        v-for="(item, index) in banner"
        :key="index"
        @click="changeSwiper(index)"
        :class="{ active: index == num }"
      >
           {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import api from "../../api/index";
export default {
  name: "carrousel",
  data() {
    let that = this;
    return {
      banner: [],
      arr: [1, 2, 3, 4, 5],
      num: 0,
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        autoplay: {
          delay: 2000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        loop: true,
        on: {
          //回调函数，swiper从一个slide过渡到另一个slide开始时执行
          slideChangeTransitionStart: function () {
            // console.log("轮播切换了---", this.activeIndex);

            if (this.activeIndex == that.arr.length + 1) {
              that.num = 0;
            } else {
              that.num = this.activeIndex - 1;
            }
          },
        },
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    // this.swiper.slideTo(3, 1000, false);
    api.getSwiperInfo().then((res) => {
      // console.log(res.data.result);
      this.banner=res.data.result;
    });
  },
  methods: {
    changeSwiper(index) {
      this.num = index;
      this.swiper.slideTo(index + 1, 1000, false);
    },
  },
};
</script>

<style lang="less" scoped>
.list {
  display: flex;
  margin: 0.2rem;
  li {
    margin: 0 0.1rem;
    width: 1.2rem;
    height: 0.7rem;
    vertical-align: middle;
    background-color: rgb(186, 186, 214);
    font-size: 12px;
    padding: auto 0;
  }
  .active {
    background-color: rgb(145, 145, 219);
    color: #fff;
  }
}
</style>