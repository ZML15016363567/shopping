import Vue from 'vue'
import App from './App.vue'
//注册三级联动组件为全局组件
import  TypeNav from '@/components/TypeNav'
Vue.component(TypeNav.name,TypeNav)
import Pagination from '@/components/Pagination'
Vue.component(Pagination.name,Pagination)
import {MessageBox} from 'element-ui'
//引入路由器
import  VueRouter  from 'vue-router'
//引入路由
import  router from './router'
// import { reqgetCategoryList } from '@/api'
//引入仓库
import store from './store'
//引入模拟数据
import '@/mock/mochServe'
//引入swiper样式
import 'swiper/css/swiper.css'
// reqgetCategoryList();
Vue.config.productionTip = false
//统一接口api文件夹里面的全部请求函数
import * as API from '@/api'
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
import VueLazyload from 'vue-lazyload';
import TP from '@/assets/1.png'
import '@/plugins/validate'
Vue.use(VueLazyload,{
  loading:TP
})
Vue.use(VueRouter)
new Vue({
  el:"#app",
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus=this;
    Vue.prototype.$bus = this;
    Vue.prototype.$API =API;
  },
  //注册路由
  router,
  store
})
