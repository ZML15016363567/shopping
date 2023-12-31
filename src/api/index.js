import requests from "./ajax";
import mockRequests from './mockAjax'

export const reqgetCategoryList =()=> requests.get(`/product/getBaseCategoryList`);
// 获取广告轮播列表
export const reqGetBannerList = ()=> mockRequests.get('/banner')
//获取floor数据
export const reqFloorList =()=> mockRequests.get('/floor')
//获取搜索模块数据
export const reqGetSearchInfo =(params)=> requests({url:"/list",method:"post",data:params})
//商品详情
export const reqGoodInfo =(skuId)=>requests({url:`/item/${skuId}`,method:"get"})
//将产品添加到购物车中
export const reqAddOrUpdateShopCra =(skuId,skuNum)=> requests({url:`/cart/addToCart/${skuId}/${skuNum}`,method:"post"})
//获取购物车列表数据接口
export const reqCartList =()=>requests({url:'/cart/cartList',method:"get"})
//删除购物车
export const reqDeleteCartById =(skuId)=> requests({url:`/cart/deleteCart/${skuId}`,method:"delete"})
//修改商品选中的状态
export const reqUpateCheckedByid =(skuId,isChecked)=>requests({url:`/cart/checkCart/${skuId}/${isChecked}`,method:"get"})
//获取验证码
export const reqGetCode =(phone)=>requests({url:`/user/passport/sendCode/${phone}`,method:"get"});
//注册
export const reqUserRegister =(data)=>requests({url:'/user/passport/register',data, method:"post"});
//登录
export const reqUserLogin =(data)=>requests({url:'/user/passport/login',data, method:"post"});
//获取用户信息
export const reqUserInfon =()=>requests({url:'/user/passport/auth/getUserInfo', method:"get"});
//退出登录
export const reqLogout =()=>requests({url:'/user/passport/logout',method:"get"});
//获取用户地址信息
export const reqAddressInfo =()=>requests({url:'/user/userAddress/auth/findUserAddressList',method:"get"})
//获取商品清单
export const reqOrderInfo =()=>requests({url:'/order/auth/trade',method:"get"})
///order/auth/submitOrder?tradeNo={tradeNo}
//提交订单接口
export const reqSubmitOrder =(tradeNo,data)=>requests({url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,data,method:"post"});
///payment/weixin/createNative/{orderId}
//获取支付信息
export const reqPayInfo =(orderId)=>requests({url: `/payment/weixin/createNative/${orderId}`,method:"get"})
//获取支付订单状态
///payment/weixin/queryPayStatus/{orderId}
export const reqPayStatus =(orderId)=>requests({url: `/payment/weixin/queryPayStatus/${orderId}`,method:"get"})
///order/auth/{page}/{limit}
//获取订单列表
export const reqMyOrderList=(page,limit)=>requests({url: `/order/auth/${page}/${limit}`,method:"get"})












