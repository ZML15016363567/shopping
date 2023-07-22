import { reqGoodInfo,reqAddOrUpdateShopCra} from "@/api";
import {getUUID} from '@/utils/uuid_token'
const state ={
    goodInfo:{},
    uuid_token: getUUID(),
};
const mutations= {
    GETGODINFON(state,goodInfo){
        state.goodInfo = goodInfo
    }
};
const actions = {
   async getGoodInfo({commit},skuId){
         let result= await reqGoodInfo(skuId);
         if(result.code==200){
            commit('GETGODINFON',result.data)
         }
    },
    async addOrupdateShopCar({commit},{skuId,skuNum}){
        let result= await reqAddOrUpdateShopCra(skuId,skuNum);
        if(result.code==200){
            return 'ok'
        }else{
            return Promise.reject(new Error('fail'))
        }
   }
};
const getters = {
    categoryView(state){
        return state.goodInfo.categoryView||{}
    },
    skuInfo(state){
        return state.goodInfo.skuInfo||{}
    },
    spuSaleAttrList(state){
        return state.goodInfo.spuSaleAttrList||[]
    }
}
export default {
    state,
    actions,
    mutations,
    getters
}