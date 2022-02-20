<template>
  <div class="nav">
    <span>个性推荐</span>
    <span>专属定制</span>
    <span>歌单</span>
    <span>排行榜</span>
    <span>歌手</span>
    <span>最新音乐</span>
  </div>
  <el-scrollbar class="main">
    <el-carousel :interval="4000" type="card" height="200px" class="carousel">
      <el-carousel-item
        class="carousel_item"
        v-for="p in banner"
        :key="p.targetId"
      >
        <img :src="p.pic" />
      </el-carousel-item>
    </el-carousel>
    <Recommend> </Recommend>
    <Blog></Blog>
    <Exclusive></Exclusive>
    <Music></Music>
    <MV></MV>
    <Listen></Listen>
    <Look></Look>
    <div class="footer">
      <div>现在可以根据个人喜好，自由调整首页栏目顺序啦~</div>
      <div>调整栏目顺序</div>
    </div>
  </el-scrollbar>
</template>

<script>
import Recommend from "./Recommend";
import Blog from "./Blog";
import Exclusive from "./Exclusive";
import Music from "./Music";
import MV from "./MV";
import Listen from "./Listen";
import Look from "./Look";
import { computed} from "vue";
import { useStore } from "vuex";
export default {
  name: "Main",
  components: {
    Recommend,
    Blog,
    Exclusive,
    Music,
    MV,
    Listen,
    Look,
  },
  setup() {
        const store = useStore();
         store.dispatch("findMusic/getBanner");
        const banner=computed(()=>store.state.findMusic.banners)
       
    return {
        //轮播图数组
        banner

    };
  },
};
</script>

<style lang="less" scoped>
.nav {
  height: 60px;
  font-size: 20px;
  line-height: 60px;

  span {
    margin-left: 40px;
  }
  span:nth-child(1) {
    margin-left: 100px;
  }
}
.main {
  width: 1100px;
  margin: 0px auto;
  .carousel {
    margin-top: 25px;
    .carousel_item {
      height: 100%;
      img {
        width: 100%;
      }
    }
  }
  .footer {
    width: 600px;
    height: 70px;
    margin: 0px auto;
    text-align: center;
    margin-top: 30px;
    div:nth-child(1) {
      color: rgb(173, 173, 173);
      font-size: 16px;
    }
    div:nth-child(2) {
      height: 30px;
      width: 100px;
      border: 1px #ec4141 solid;
      border-radius: 6px;
      color: #ec4141;
      line-height: 30px;
      margin: 15px auto;
    }
  }
}
</style>

