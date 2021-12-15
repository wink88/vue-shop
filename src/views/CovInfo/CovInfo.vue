<template>
  <div>
    <div>
      <img src="../../assets/images/1.jpg" alt="" class="image" />
      <router-link to="/city">
        <van-button type="info" plain hairline class="city"
          >{{ city }}疫情</van-button
        >
      </router-link>
    </div>
    <div class="covInfo">
      <div class="title">病毒信息</div>
      <div class="info">
        <p>{{ covDesc.note1 }}</p>
        <p>{{ covDesc.note2 }}</p>
        <p>{{ covDesc.note3 }}</p>
        <p>{{ covDesc.remark1 }}</p>
        <p>{{ covDesc.remark2 }}</p>
        <p>{{ covDesc.remark3 }}</p>
      </div>
    </div>
    <div class="hot">
      <div class="title">
        <img src="../../assets/images/hot.png" alt="" />
      </div>
      <ul class="list">
        <li v-for="item in covNews" :key="item.id">
          <span>最新</span>
          {{ item.title }}
        </li>
      </ul>
    </div>
    <div class="tab">
      <div class="item">
        <router-link to="/area">
          <img src="../../assets/images/icon1.png" alt="" />
        </router-link>
        <p>风险地区</p>
      </div>
      <div class="item">
        <router-link to="/check">
          <img src="../../assets/images/icon2.png" alt="" />
        </router-link>
        <p>核酸检测</p>
      </div>
      <div class="item">
        <router-link to="/prevention">
          <img src="../../assets/images/icon3.png" alt="" />
        </router-link>

        <p>防疫物资</p>
      </div>
      <div class="item">
        <router-link to="/travel">
          <img src="../../assets/images/icon4.png" alt="" />
        </router-link>

        <p>出行政策</p>
      </div>
    </div>
    <div class="num">
      <div class="content">
        <div class="title">截至{{ covDesc.modifyTime | time }}全国数据统计</div>
        <ul class="wrap">
          <li>
            <div class="number">
              <span>较昨日</span>{{ covDesc.currentConfirmedIncr | num }}
            </div>
            <div class="bold">{{ covDesc.currentConfirmedCount | count }}</div>
            <strong>现存确诊</strong>
          </li>
          <li>
            <div class="number">
              <span>较昨日</span>{{ covDesc.suspectedIncr | num }}
            </div>
            <div class="bold">{{ covDesc.suspectedCount | count }}</div>
            <strong>境外输入</strong>
          </li>
          <li>
            <div class="number">
              <span>较昨日</span>{{ covDesc.seriousIncr | num }}
            </div>
            <div class="bold">{{ covDesc.seriousCount | count }}</div>
            <strong>现存无症状</strong>
          </li>
          <li>
            <div class="number">
              <span>较昨日</span>{{ covDesc.confirmedIncr | num }}
            </div>
            <div class="bold">{{ covDesc.confirmedCount | count }}</div>
            <strong>累计确诊</strong>
          </li>
          <li>
            <div class="number">
              <span>较昨日</span>{{ covDesc.deadIncr | num }}
            </div>
            <div class="bold">{{ covDesc.deadCount | count }}</div>
            <strong>累计死亡</strong>
          </li>
          <li>
            <div class="number">
              <span>较昨日</span>{{ covDesc.curedIncr | num }}
            </div>
            <div class="bold">{{ covDesc.curedCount | count }}</div>
            <strong>累计治愈</strong>
          </li>
        </ul>
      </div>
    </div>
    <Map/>
    <WorldMap/>
    <VueSwiper />
    <List/>
  </div>
</template>

<script>
import "../../plugins/vant";
import api from "../../api/index";
import Map from "./Map.vue";
import WorldMap from "./WorldMap.vue";
import VueSwiper from "./VueSwiper.vue";
import List from './List.vue'
export default {
  components: {
    Map,
    WorldMap,
    VueSwiper,
    List
  },
  data() {
    return {
      city: "",
      covDesc: {},
      covNews: [],
    };
  },
  filters: {
    num(val) {
      return val > 0 ? "+" + val : val;
    },
    count(val) {
      return Number(val).toLocaleString();
    },
    time(val) {
      var data = new Date();
      var y = data.getFullYear();
      var m = data.getMonth() + 1;
      var d = data.getDate();
      //   return y+"-"+m+"-"+d;
      return new Date(val).toLocaleString("chinese", { hour12: false });
    },
  },
  created() {

    // 读取本地存储数据
    // this.city = localStorage.getItem("city");

    // 使用eventBus接收数据：
        this.$bus.$on("city", (val) => {
        this.city=val;
        console.log(this.city);
      });
   
    api.getCovInfo().then((res) => {
      //   console.log(res.data.newslist[0]);
      this.covDesc = res.data.newslist[0].desc;
      this.covNews = res.data.newslist[0].news;
    });
  },
    beforeDestroy() {
    // 解绑eventBus：
    this.$bus.$off("city");
  },
};
</script>

<style lang="less" scoped>
.image {
  width: 7.5rem;
}
.city {
  position: absolute;
  top: 0.3rem;
  right: 0.3rem;
  z-index: 1;
  height: 0.5rem;
}
.covInfo {
  padding: 4px;
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
    p {
      padding-left: 4px;
      font-size: 12px;
      line-height: 0.5rem;
      text-align: left;
      color: #666;
    }
  }
}
.hot {
  padding: 4px;
  .title {
    margin-bottom: 4px;
    padding-left: 4px;
    border-left: 4px solid #416fc5;
    height: 0.5rem;
    line-height: 0.5rem;

    img {
      height: 0.5rem;
      float: left;
    }
  }
  .list {
    height: 0.6rem;
    line-height: 0.6rem;
    text-align: left;
    li {
      span {
        background-color: red;
        color: #fff;
        font-size: 12px;
        padding: 2px;
        margin: 0 2px;
        border-radius: 4px;
      }
    }
  }
}
.tab {
  border-top: 1px solid #eee;
  border-bottom: 16px solid #eee;
  padding-bottom: 20px;
  padding-top: 10px;
  margin-top: 2.6rem;
  display: flex;
  flex-wrap: wrap;
  .item {
    width: 25%;
    img {
      width: 1rem;
      height: 1rem;
    }
    p {
      font-size: 10px;
    }
  }
}
.num {
  .content {
    .title {
      margin-left: 10px;
      text-align: left;
      line-height: 0.7rem;
      height: 0.5rem;
    }
    .wrap {
      display: flex;
      flex-wrap: wrap;
      margin: 10px;
      border: solid 2px #eee;
      li {
        width: 33.3%;
        padding: 5px 0;
        .number {
          font-size: 10px;
          span {
            font-size: 12px;
            color: #000;
          }
        }
        .bold {
          font-weight: 600;
        }
        strong {
          color: #000;
        }
      }
      li:nth-child(1) {
        color: red;
      }
      li:nth-child(2) {
        color: rgb(235, 235, 142);
      }
      li:nth-child(3) {
        color: green;
      }
      li:nth-child(4) {
        color: blue;
      }
      li:nth-child(5) {
        color: pink;
      }
      li:nth-child(6) {
        color: rgb(156, 231, 106);
      }
    }
  }
}


</style>