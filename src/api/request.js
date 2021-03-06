import axios from "axios";
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
//利用axios对象的方法create，去创建一个axios实例
//requests就是axios，只不过稍微配置了一下
const requests=axios.create({
    //配置对象
    //基础路径，发送请求的时候，路径当中会出现api
    baseURL:'http://localhost:3000',
    timeout:5000
})
//请求拦截器，在发送请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些事情
requests.interceptors.request.use(config=>{
    nprogress.start()
    return config
})
//响应拦截器
requests.interceptors.response.use(res=>{
    nprogress.done()
    //成功的回调
    return res.data
},err=>{
    //失败的回调
    return Promise.reject(new Error('faile'))
})
export default requests