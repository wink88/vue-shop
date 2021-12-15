<template>
  <div>
    <img src="../../assets/images/area.png" alt="" class="image" />
    <div class="content">
      <div class="title">全国风险地区汇总</div>
      <div class="high" v-if="high.length>0">
        <div>
            <img src="../../assets/images/high.png" alt="">
            <span>高风险地区{{high.length}}个</span>
        </div>
        <ul class="list">
          <li v-for="(item,index) in high" :key="index">{{item}}</li>
        </ul>
      </div>
      <div class="mid" v-if="mid.length>0">
        <div>
            <img src="../../assets/images/mid.png" alt="">
             <span>中风险地区{{mid.length}}个</span>
            </div>
        <ul class="list">
           <li v-for="(item,index) in mid" :key="index">{{item}}</li>
        </ul>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import api from "../../api/index";
export default {
  data() {
    return {
      high: [],
      mid: [],
    };
  },
  created() {
    api.getCovInfo().then((res) => {
      console.log(res.data.newslist[0].riskarea);
      this.high = res.data.newslist[0].riskarea.high;
      this.mid = res.data.newslist[0].riskarea.mid;
    });
  },
};
</script>

<style lang="less" scoped>
.image {
  width: 100%;
}
.content {
  position: absolute;
  top: 2.5rem;
  left: 0;
  width: 90%;
  margin: 0 5%;
  background-color: #fff;
  border-radius: 18px;
  .title {
    margin: 0.2rem;
    margin-top: 0.4rem;
    padding-left: 0.2rem;
    text-align: left;
    border-left: 8px solid rgb(94, 102, 204);
    font-size: 16px;
  }
  .high,
  .mid {
    padding: 0.2rem;
    text-align: left;
    div {
        
      img{
          width: 0.5rem;
          height: 0.5rem;
      }
      span{
          vertical-align: bottom;
          margin-left: 0.1rem;
      }
    }
    .list{
        li{
           
            margin:0.2rem 0;
            padding:0 0.2rem;
            color: rgb(95, 94, 94);
            line-height: 0.5rem;
            background-color: #eee;
            border-radius: 0.1rem;
            
        }
    }
  }
}
</style>