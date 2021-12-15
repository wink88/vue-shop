<template>
  <div>
    <img src="../../assets/images/travel.png" alt="" width="100%" />
    <div class="box">
        <!-- 出发城市 -->
      <van-field
        v-model="fieldValue"
        is-link
        readonly
        label="地区"
        placeholder="请选择出发城市"
        @click="show = true"
      />
      <van-popup v-model="show" round position="bottom">
        <van-cascader
          v-model="cascaderValue"
          title="请选择出发城市"
          :options="options"
          @close="show = false"
          @finish="onFinish"
        />
      </van-popup>

      <!-- 到达城市 -->
      <van-field
        v-model="fieldValue2"
        is-link
        readonly
        label="地区"
        placeholder="请选择到达城市"
        @click="show2 = true"
      />
      <van-popup v-model="show2" round position="bottom">
        <van-cascader
          v-model="cascaderValue2"
          title="请选择到达城市"
          :options="options"
          @close="show2 = false"
          @finish="onFinish2"
        />
      </van-popup>
      <div class="button">
        <van-button type="primary" size="large" @click="search"
          >查询信息</van-button
        >
      </div>
    </div>
 

    <!-- 出发城市疫情信息 -->
    <div class="from">
      <div class="city">
        {{ from_info.province_name }}{{ from_info.city_name }}
      </div>
      <div class="high_in_desc">
        {{ from_info.high_in_desc }}
      </div>
      <div class="low_in_desc">
        {{ from_info.low_in_desc }}
      </div>
      <div class="out_desc">
        {{ from_info.out_desc }}
      </div>
    </div>
    <!-- 到达城市疫情信息 -->
    <div class="to">
      <div class="city">{{ to_info.province_name }}{{ to_info.city_name }}</div>
      <div class="high_in_desc">
        {{ to_info.high_in_desc }}
      </div>
      <div class="low_in_desc">
        {{ to_info.low_in_desc }}
      </div>
      <div class="out_desc">
        {{ to_info.out_desc }}
      </div>
    </div>
  </div>
</template>

<script>
import "../../plugins/vant";
import api from "../../api/index";
export default {
  data() {
    return {
      show: false,
      show2: false,
      fieldValue: "", //出发的值
      fieldValue2: "", //到达的值
      from: "", //出发的id值
      to: "",
      from_info: "",
      to_info: "",
      cascaderValue: "",
      cascaderValue2: "",
      // 选项列表，children 代表子选项，支持多级嵌套
      options: [
        {
          text: "浙江省",
          value: "330000",
          children: [{ text: "杭州市", value: "330100" }],
        },
        {
          text: "江苏省",
          value: "320000",
          children: [{ text: "南京市", value: "320100" }],
        },
      ],
    };
  },
  methods: {
    search() {
      console.log("查询城市疫情", this.from, this.to);
      api
        .getTravelQuery({
          from: this.from,
          to: this.to,
        })
        .then((res) => {
          console.log(res.data.result);
          this.from_info = res.data.result.from_info;
          this.to_info = res.data.result.to_info;
        });
    },
    // 全部选项选择完毕后，会触发 finish 事件
    onFinish({ value, selectedOptions, tabIndex }) {
      this.from = value;
      this.show = false;
      this.fieldValue = selectedOptions.map((option) => option.text).join("/");
    },
    onFinish2({ value, selectedOptions, tabIndex }) {
      this.to = value;
      this.show2 = false;
      this.fieldValue2 = selectedOptions.map((option) => option.text).join("/");
    },
  },
  created() {
    api.getTravel().then((res) => {
      console.log(res);
      var result = res.data.result;
      var arr = [];
      result.forEach((item) => {
        var obj = {};
        obj.text = item.province; //省份名称
        obj.value = item.province_id; //省份标识
        obj.children = [];
        item.citys.forEach((ele) => {
          var city = {};
          city.text = ele.city;
          city.value = ele.city_id;
          obj.children.push(city);
        });
        arr.push(obj);
      });
      console.log(arr);
      this.options = arr;
    });
  },
};
</script>

<style lang="less" scoped>
// .box{
//     position: absolute;
//     top: 2.5rem;
//     left: auto;
// }
.button {
  margin: 0.2rem;
}
.from,
.to {
  margin: 0.2rem;
  div {
    margin: 0.1rem;
    background-color: #f5f5f5;
    // color: #eee;
  }
}
</style>