<template>
  <div class="nav">
    <span>独家放送</span>
    <svg
      t="1645181097315"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="31828"
      width="16"
      height="16"
    >
      <path
        d="M761.6 489.6l-432-435.2c-9.6-9.6-25.6-9.6-35.2 0-9.6 9.6-9.6 25.6 0 35.2l416 416-416 425.6c-9.6 9.6-9.6 25.6 0 35.2s25.6 9.6 35.2 0l432-441.6C771.2 515.2 771.2 499.2 761.6 489.6z"
        p-id="31829"
        fill="#2c2c2c"
      ></path>
    </svg>
  </div>
  <div class="exclusive">
    <div class="exclusive_item" v-for="(p,index) in exclusive" :key="p.id">
      <video :src='exclusiveList[index]?exclusiveList[index].url:{}.url'  :poster='p.picUrl' preload></video>
      <div>
        {{ p.name }}
      </div>
    </div>
  </div>
</template>

<script>
import { computed} from "vue";
import { useStore} from "vuex";
export default {
  name: "Exclusive",
  setup() {
    const store = useStore();
    store.dispatch("findMusic/getExclusive");
    const exclusive = computed(() => store.state.findMusic.exclusive);
    const exclusiveList=computed(()=>store.state.findMusic.mvList)
    return {
      exclusive,
      exclusiveList,
  
    };
  },
};
</script>

<style lang='less' scoped>
.nav {
  height: 30px;
  margin-top: 20px;
  span {
    line-height: 30px;
    font-size: 20px;
    font-weight: bold;
  }
  svg {
    margin-left: 2px;
  }
}
.exclusive {
  display: flex;
  justify-content: space-between;
  .exclusive_item {
    width: 32%;
    height: 230px;
    video {
      width: 100%;
      height: 180px;
      border-radius: 10px;
    }
    div {
      margin-top: 5px;
      font-size: 14px;
    }
  }
}
</style>