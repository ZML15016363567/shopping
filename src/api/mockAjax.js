import axios from 'axios';
//引入进度条
import nProgress from 'nprogress';
//引入进度条样式
import 'nprogress/nprogress.css'
const requests = axios.create({
    baseURL:'/mock',
    //代表请求超时时间为5秒
    timeout:5000,
});
//请求拦截器
requests.interceptors.request.use((config)=>{
    nProgress.start();
    return config;
});
//响应拦截器
requests.interceptors.response.use((res)=>{
    nProgress.done();
    return res.data;
},(error)=>{
    return Promise.reject(new Error('失败'));
});
export default requests