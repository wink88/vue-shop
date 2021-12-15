<template>
  <div>
    <div class="list">
      <div class="title">国内疫情列表数据</div>
      <div class="info">
        <van-row gutter="5" class="header">
          <van-col span="4">地区</van-col>
          <van-col span="4">现存确诊</van-col>
          <van-col span="4"> 累计确诊</van-col>
          <van-col span="4">死亡</van-col>
          <van-col span="4">治愈</van-col>
          <van-col span="4">疫情</van-col>
        </van-row>
        <van-row
          gutter="5"
          class="content"
          v-for="(item, index) in cityList"
          :key="index"
        >
          <van-col span="4">{{ item.xArea }}</van-col>
          <van-col span="4">{{ item.curConfirm }}</van-col>
          <van-col span="4">{{ item.confirm }}</van-col>
          <van-col span="4">{{ item.died }}</van-col>
          <van-col span="4">{{ item.heal }}</van-col>
          <van-col span="4"><a href="#">详情</a></van-col>
        </van-row>
      </div>
    </div>
  </div>
</template>

<script>
import "./../../plugins/vant";
import api from "../../api/index";
export default {
  data() {
    return {
      cityList: [],
    };
  },
  created() {
    api.getListInfo().then((res) => {
      console.log(res.data.retdata.caseList);
      this.cityList = res.data.retdata.caseList;
    });
  },
};
</script>

<style lang="less" scoped>
.list {
  margin: 0.1rem;
  .title {
    margin: 2px 0;
    padding-left: 4px;
    border-left: 4px solid #416fc5;
    height: 0.5rem;
    line-height: 0.5rem;
    font-size: 16px;
    text-align: left;
  }
  .info {
    .header,
    .content {
      height: 0.7rem;
      line-height: 0.7rem;
    }
    .header {
      .van-col:nth-child(1) {
        background-color: #c5e6f3;
      }
      .van-col:nth-child(2) {
        background-color: rgb(235, 162, 102);
      }
      .van-col:nth-child(3) {
        background-color: rgb(223, 200, 181);
      }
      .van-col:nth-child(4) {
        background-color: rgb(250, 3, 36);
      }
      .van-col:nth-child(5) {
        background-color: rgb(60, 247, 3);
      }
      .van-col:nth-child(6) {
        background-color: rgb(187, 187, 231);
      }
    }
    .content {
      .van-col {
        background-color: #f5f5f5;
      }
    }
  }
}
</style>