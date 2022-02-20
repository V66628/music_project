import  api from '@/api'
const state={
    banners:[],
    //独家放送
    exclusive:[],
    //真实独家放送
    mvList:[],
    //最新音乐
    music:[],
    //最新音乐的真实接口
    realMusic:[],
    //首页推荐歌单
    recommendPlaylist:[],
    //热门播客
    hotPodcastList:[]
}
const  actions={
    //首页banner
  async  getBanner({commit}){
        const result =await api.home.reqBanner()
        if(result.code==200){
            commit('GETBANNER',result.banners)
        }
    },
    //独家放送（入口列表）
    async getExclusive({commit,dispatch}){
        const data=await api.home.reqExclusive()
        if(data.code==200){
            commit('GETEXCLUSIVE',data.result)
            data.result.forEach(item => {
                dispatch('getMV',item.id)
            });
        }
    },
    //真实独家mv
    async getMV({commit},id){
        const result=await api.global.reqMV(id)
       if(result.code==200){
            commit('GETMV',result.data)
       }
    },
    //最新音乐
    async getNewestMusic({commit}){
        const data=await api.home.reqMusic()
        if(data.code==200){
            commit('GETNEWESTMUSIC',data.result)
        }
    },
    //请求音乐真实接口
    getRealMusic({commit,state}){
        let arr2=[]
     setTimeout(async () => {
        state.music.forEach(item=>{
            arr2.push(item.id)
        })
        const result=await api.global.reqRealMusic(arr2)
        if(result.code==200){
            commit('GETREALMUSIC',result.data)
        }
     }, 100);
    },
    //推荐歌单
    async getRecommendPlaylist({commit}){
        const data=await api.home.reqRecommendPlaylist()
        if(data.code==200){
            commit('GETRECOMMENDPLAYLIST',data.result)
        }
    },
    async getHotPodcast({commit}){
        const result=await api.home.reqHotPodcast()
        if(result.code==200){
                commit('GETHOTPODCAST',result.djRadios)
        }
    }
}
const mutations={
    GETBANNER(state,value){
            state.banners=value
    },
    GETEXCLUSIVE(state,value){
        state.exclusive=value
    },
    GETMV(state,value){
        state.mvList.push(value)
    },
    GETNEWESTMUSIC(state,value){
            state.music=value
    },
    GETREALMUSIC(state,value){
        state.realMusic=value
    },
    GETRECOMMENDPLAYLIST(state,value){
        state.recommendPlaylist=value
    },
    GETHOTPODCAST(state,value){
        state.hotPodcastList=value
    }
}
export default {
    namespaced:true,
    state,
    actions,
    mutations
}