<template>
    <div class="nav">
      <span>听听</span>
      <svg t="1645181097315" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="31828" width="16" height="16"><path d="M761.6 489.6l-432-435.2c-9.6-9.6-25.6-9.6-35.2 0-9.6 9.6-9.6 25.6 0 35.2l416 416-416 425.6c-9.6 9.6-9.6 25.6 0 35.2s25.6 9.6 35.2 0l432-441.6C771.2 515.2 771.2 499.2 761.6 489.6z" p-id="31829" fill="#2c2c2c"></path></svg>
  </div>
    <div class="playlist">
      <div class="playlist_item">
          <div class="label">直播中</div>
              <img src="http://p1.music.126.net/H_LWDRTTs7nz5-Frp58_OQ==/109951165815042307.jpg?param=140y140">
              <div>“终是惊鸿难抵梦重重”</div>
              <div class="user">
                  <img src="@/assets/head.png">
                  <span>小啦啦哈</span>
              </div>
      </div>
      <div class="playlist_item">
          <div class="label">直播中</div>
              <img src="http://p1.music.126.net/H_LWDRTTs7nz5-Frp58_OQ==/109951165815042307.jpg?param=140y140">
              <div>“终是惊鸿难抵梦重重”</div>
              <div class="user">
                  <img src="@/assets/head.png">
                  <span>小啦啦哈</span>
              </div>
      </div>
      <div class="playlist_item">
          <div class="label">直播中</div>
              <img src="http://p1.music.126.net/H_LWDRTTs7nz5-Frp58_OQ==/109951165815042307.jpg?param=140y140">
              <div>“终是惊鸿难抵梦重重”</div>
              <div class="user">
                  <img src="@/assets/head.png">
                  <span>小啦啦哈</span>
              </div>
      </div>
      <div class="playlist_item">
          <div class="label">直播中</div>
              <img src="http://p1.music.126.net/H_LWDRTTs7nz5-Frp58_OQ==/109951165815042307.jpg?param=140y140">
              <div>“终是惊鸿难抵梦重重”</div>
              <div class="user">
                  <img src="@/assets/head.png">
                  <span>小啦啦哈</span>
              </div>
      </div>
      <div class="playlist_item">
          <div class="label">直播中</div>
              <img src="http://p1.music.126.net/H_LWDRTTs7nz5-Frp58_OQ==/109951165815042307.jpg?param=140y140">
              <div>“终是惊鸿难抵梦重重”</div>
              <div class="user">
                  <img src="@/assets/head.png">
                  <span>小啦啦哈</span>
              </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'Listen'
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
.playlist{
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
.playlist_item{
    width: 18%;
    height: 260px;
    position: relative;
    .label{
       position: absolute;
       top: -5px;
       left: 0px;
       background-color: #ff2c55;
       width: 50px;
       height: 22px;
       color: white;
       text-align: center;
    }
    img{
        width: 200px;
        height: 200px;
        border-radius: 10px;
    }
    div{
        font-size: 14px;
        margin-top: 6px;
    }
    .user{
        display: flex;
        img{
            width: 20px;
            height: 20px;
            border-radius: 50%;
        }
        span{
            margin-left: 5px;
            margin-top: 2px;
            font-size: 12px;
            color: rgb(173, 173, 173) ;
        }
    }
}
}
</style>