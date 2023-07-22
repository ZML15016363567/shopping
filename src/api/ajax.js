import axios from 'axios';
//引入进度条
import nProgress from 'nprogress';
import store from '@/store';
//引入进度条样式
import 'nprogress/nprogress.css'
const requests = axios.create({
    baseURL:'/api',
    //代表请求超时时间为5秒
    timeout:5000,
});
//请求拦截器
requests.interceptors.request.use((config)=>{
    if(store.state.detail.uuid_token){
        config.headers.userTempId = store.state.detail.uuid_token;
    }
    //需要携带token带给服务器
    if(store.state.user.token){
        config.headers.token =store.state.user.token;
    }
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