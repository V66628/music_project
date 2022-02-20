<template>
    <div class="nav">
      <span>热门播客</span>
      <svg t="1645181097315" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="31828" width="16" height="16"><path d="M761.6 489.6l-432-435.2c-9.6-9.6-25.6-9.6-35.2 0-9.6 9.6-9.6 25.6 0 35.2l416 416-416 425.6c-9.6 9.6-9.6 25.6 0 35.2s25.6 9.6 35.2 0l432-441.6C771.2 515.2 771.2 499.2 761.6 489.6z" p-id="31829" fill="#2c2c2c"></path></svg>
  </div>
  <div class="blog">
      <div class="blog_item" v-for="h in hotPodcastList" :key="h.id">
          <img :src="h.picUrl" >
          <div class="introduction">
            <div>{{h.name}}</div>
            <div class="info">{{h.category}}</div>
            <div>
                <span>{{h.rcmdtext}}</span>
                <svg t="1645183970384" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="33789" width="16" height="16"><path d="M864.5 516.2c-2.4-4.1-6.2-6.9-10.4-8.3L286.4 159c-8.9-5-20.3-2-25.5 6.6-2.1 3.6-2.8 7.5-2.3 11.3v697.5c-0.5 3.8 0.2 7.8 2.3 11.3 5.2 8.7 16.6 11.6 25.5 6.6l567.7-349c4.2-1.3 8-4.2 10.4-8.3 1.7-3 2.5-6.3 2.4-9.5 0.1-3-0.7-6.3-2.4-9.3z m-569-308.8l517.6 318.3L295.5 844V207.4z" p-id="33790" fill="#bfbfbf"></path></svg>
                <span> {{(h.subCount/10000).toFixed(0)}}万</span>
                <svg t="1645184176313" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="36089" width="16" height="16"><path d="M512 64C264.8 64 64 264.8 64 512s200.8 448 448 448 448-200.8 448-448S759.2 64 512 64z m0 832c-212 0-384-172-384-384s172-384 384-384 384 172 384 384-172 384-384 384z m32-393.6l191.2 110.4-32 55.2L488.8 544H480V256h64v246.4z" p-id="36090" fill="#bfbfbf"></path></svg>
                <span>&nbsp;{{(h.programCount/60).toFixed(2)}}</span>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import { computed} from "vue";
import { useStore } from "vuex";
export default {
name:'Blog',//getHotPodcast
setup(){
        const store = useStore();
         store.dispatch("findMusic/getHotPodcast");
        const hotPodcastList=computed(()=>store.state.findMusic.hotPodcastList)
        return {
            hotPodcastList
        }
}
}
</script>

<style lang='less' scoped>
.nav{
    height: 30px;
    margin-top: 30px;
    span{
    line-height: 30px;
    font-size: 20px;
    font-weight: bold;
    }
    svg{
        margin-left: 2px;
    }
}
.blog{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 30px;
    .blog_item{
        width: 50%;
        height: 100px;
        display: flex;
        margin-bottom: 20px;
        img{
            width: 100px;
            height: 100px;
            border-radius: 10px;
        }
        .introduction{
            margin-left: 10px;
            margin-top: 10px;
               .info{
            width: 55px;
            text-align: center;
            color: #bfbfbf;
            border: 1px #bfbfbf solid;
        }
        div{
            margin-bottom: 10px;
        }
        div:nth-child(1){
            font-size: 16px;
        }
         div:nth-child(3){
             color: #bfbfbf;
             span{
                 margin-right: 10px;
             }
              svg{
                     margin-bottom: -3px;
                 }
         }
        }
    }
}
</style>