import request from "./request";
//首页轮播图
export const reqBanner=()=>request({url:'/banner?type=2',method:'get'})
//独家放送
export const reqExclusive=()=>request({url:'/personalized/privatecontent',method:'get'})
//最新音乐
export const reqMusic=()=>request({url:'/personalized/newsong?limit=12',method:'get'})
//推荐歌单
export const reqRecommendPlaylist=()=>request({url:'/personalized?limit=9',method:'get'})
//热门播客
export const reqHotPodcast=()=>request({url:'/dj/hot?limit=6',method:'get'})