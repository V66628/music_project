<template>
    <div class="nav">
      <span>最新音乐</span>
      <svg t="1645181097315" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="31828" width="16" height="16"><path d="M761.6 489.6l-432-435.2c-9.6-9.6-25.6-9.6-35.2 0-9.6 9.6-9.6 25.6 0 35.2l416 416-416 425.6c-9.6 9.6-9.6 25.6 0 35.2s25.6 9.6 35.2 0l432-441.6C771.2 515.2 771.2 499.2 761.6 489.6z" p-id="31829" fill="#2c2c2c"></path></svg>
  </div>
  <div class="music">
      <div class="music_item" v-for="(a) in musicList" :key='a.id'>
          <img :src="a.picUrl">
          <div class="info">
                <div>{{a.name}}</div>
                <div>{{a.song.artists[0].name}}</div>
          </div>
      </div>
  </div>
</template>

<script>
import { computed} from "vue";
import { useStore } from "vuex";
export default {
    name:'Music',
    setup(){
        
         const store = useStore();
         store.dispatch("findMusic/getNewestMusic");
         const musicList=computed(()=>store.state.findMusic.music)
        store.dispatch("findMusic/getRealMusic");
         const realMusicList=computed(()=>store.state.findMusic.realMusic)
         return {
             musicList,
             realMusicList
         }
    }
}
</script>

<style lang='less' scoped>
.nav{
    height: 30px;
    margin-top: 20px;
    span{
    line-height: 30px;
    font-size: 20px;
    font-weight: bold;
    }
    svg{
        margin-left: 2px;
    }
}
.music{
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    .music_item{
        width: 33%;
        height: 60px;
        display: flex;
        margin-bottom: 15px;
            &:hover{
               background-color: rgba(230, 230, 230,0.5);
            }
        img{
            width: 60px;
            height: 60px;
        }
        .info{
           margin-top: 7px;
           padding-left: 7px;
           font-size: 14px;
           div:nth-child(2){
               margin-top: 14px;
               font-size: 12px;
               color: rgb(173, 173, 173);
           }
        }
    }
}
</style>