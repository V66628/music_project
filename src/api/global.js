import request from "./request";
//获取真实mv接口
export const reqMV=(id)=>request({url:`/mv/url?id=${id}`,method:'get'})
//获取真实音乐接口
export const reqRealMusic=(arr)=>request({url:`/song/url?id=${arr.join(',')}`,method:'get'})