<template>
    <div class="nav">
      <span>推荐MV</span>
      <svg t="1645181097315" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="31828" width="16" height="16"><path d="M761.6 489.6l-432-435.2c-9.6-9.6-25.6-9.6-35.2 0-9.6 9.6-9.6 25.6 0 35.2l416 416-416 425.6c-9.6 9.6-9.6 25.6 0 35.2s25.6 9.6 35.2 0l432-441.6C771.2 515.2 771.2 499.2 761.6 489.6z" p-id="31829" fill="#2c2c2c"></path></svg>
  </div>
    <div class="exclusive">
        <div class="exclusive_item">
                <img src="http://p2.music.126.net/ff-dU7NA8sAg_KmDYLEL9A==/109951165643846636.jpg?param=159y90"/>
                <div>
                    Trouble(Audio)
                </div>
                <div class="subtitle">
                    Troye Sivan / Jay Son
                </div>
        </div>
        <div class="exclusive_item">
                <img src="http://p2.music.126.net/ff-dU7NA8sAg_KmDYLEL9A==/109951165643846636.jpg?param=159y90"/>
                <div>
                    Trouble(Audio)
                </div>
                <div class="subtitle">
                    Troye Sivan / Jay Son
                </div>
        </div>
        <div class="exclusive_item">
                <img src="http://p2.music.126.net/ff-dU7NA8sAg_KmDYLEL9A==/109951165643846636.jpg?param=159y90"/>
                <div>
                    Trouble(Audio)
                </div>
                <div class="subtitle">
                    Troye Sivan / Jay Son
                </div>
        </div>
  </div>
</template>

<script>
export default {
    name:'MV'
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
.exclusive{
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    .exclusive_item{
        width: 32%;
        height: 230px;
        img{
            width: 100%;
            height: 180px;
            border-radius: 10px;
        }
        div{
            margin-top: 5px;
            font-size: 14px;
        }
        .subtitle{
            font-size:12px;
            color:rgb(173, 173, 173) ;
        }
    }
}
</style>