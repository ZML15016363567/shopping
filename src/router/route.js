export default [
    {  
        path:'/center',
        //路由懒加载
        component:()=> import("@/pages/Center"),
        meta:{
            show:true
        },
        children:[
            {
                path:"myorder",
                component:()=> import("@/pages/Center/myOrder"),
            },
            {
                path:'grouporder',
                component:()=> import("@/pages/Center/groupOrder"),
            },
            {
                path:'/center',
                redirect:'/center/myorder'  
            }
        ]
    },
    {  
        path:'/paysuccess',
        component:()=> import("@/pages/PaySuccess"),
        meta:{
            show:true
        }
    },
    {  
        path:'/pay',
        component:()=> import("@/pages/Pay"),
        meta:{
            show:true
        },
        //路由独享守卫
        beforeEnter: (to, from, next) => {
            if(from.path=='/trade'){
                next();
            }else{
                next(false)
            }
        }
    },
    {  
        path:'/trade',
        component:()=> import("@/pages/Trade"),
        meta:{
            show:true
        },
        // 路由独享守卫
        beforeEnter: (to, from, next) => {
            if(from.path=='/shopcart'){
                next()
            }else{
                next(false)
            }
        }
    },
    {  
        path:'/shopcart',
        component:()=> import("@/pages/ShopCart"),
        name:'shopcart',
        meta:{
            show:true
        }
    },
    {
        path:'/addcartsuccess',
        component:()=> import("@/pages/AddCartSuccess"),
        name:'addcartsuccess',
        meta:{
            show:true
        }
    },
    {
        path:'/detail/:skuid',
        component:()=> import("@/pages/Detail"),
        meta:{
            show:true
        }
    },
    {
        path:'/home',
        component:()=> import("@/pages/Home"),
        meta:{
            show:true
        }
    },{
        path:'/search/:keyword?',
        component:()=> import("@/pages/Search"),
        meta:{
            show:true
        },
        name:"search"
    },{
        path:'/login',
        component:()=> import("@/pages/Login"),
        meta:{
            show:false
        }
    },{
        path:'/register',
        component:()=> import("@/pages/Register"),
        meta:{
            show:false
        }
    },
    //项目一开始运行就到指定页面
    {
        path:'*',
        redirect:"/home"
    }
]