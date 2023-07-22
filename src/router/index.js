// //引入路由器
import  VueRouter  from 'vue-router';
import route from './route';
import store from '@/store';
//备份VueRouter原型对象的push
let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace
//重写push|replace
VueRouter.prototype.push = function (location,resolve,reject) {
    if(resolve&&reject){
        originPush.call(this,location,resolve,reject);
    }else {
        originPush.call(this,location,()=>{},()=>{})
    }
}
VueRouter.prototype.replace = function (location,resolve,reject) {
    if(resolve&&reject){
        originReplace.call(this,location,resolve,reject);
    }else {
        originReplace.call(this,location,()=>{},()=>{})
    }
}
//配置路由
const router= new VueRouter({
    routes:route,
    scrollBehavior(to,from,savedPosition){
        return{y:0}
    }
});
router.beforeEach(async(to,from,next)=>{
    let token = store.state.user.token;
    let name =store.state.user.userInfo.name;
    //登录时
    if(token){
        if(to.path=='/login'||to.path=='/register'){
            next('/home')
        }else{
            if(name){
            next();
            }else{
       try {
        await store.dispatch("getUserInfo");
        next();
       } catch (error) {
       await store.dispatch('userLogout');
       next('/login');
       }
            }
        }
    }else{
        //未登录时
        let topath=to.path;
        if(topath.indexOf('/trade')!=-1||topath.indexOf('/pay')!=-1||topath.indexOf('/center')!=-1){
            next('/login?redirect='+topath)
        }else{
            next();
        }
    }
})

export default router;