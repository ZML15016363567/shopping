import {
    reqGetCode,
    reqUserRegister,
    reqUserLogin,
    reqUserInfon,
    reqLogout
} from "@/api";
import {
    setToken,
    removeToken,
    getToken
} from "@/utils/token";
//登陆与注册模块
const state = {
    code: '',
    token: getToken(),
    userInfo: {},
};
const mutations = {
    GETCODE(state, code) {
        state.code = code
    },
    USERLOGIN(state, token) {
        state.token = token
    },
    GETUSERINFO(state, userInfo) {
        state.userInfo = userInfo;
    },
    CLEAR(state){
        state.token ='',
        state.userInfo={},
        removeToken()
    }
};
const actions = {
    //获取验证码
    async getCode({
        commit
    }, phone) {
        let result = await reqGetCode(phone);
        if (result.code == 200) {
            commit('GETCODE', result.data);
            return 'OK'
        } else {
            return Promise.reject(new Error('fail'))
        }
    },
    //用户注册
    async userRegister({
        commit
    }, user) {
        let result = await reqUserRegister(user);
        if (result.code == 200) {
            return 'OK'
        } else {
            return Promise.reject(new Error('注册失败'))
        }
    },
    //登录
    async userLogin({
        commit
    }, data) {
        let result = await reqUserLogin(data);
        if (result.code == 200) {
            commit("USERLOGIN", result.data.token);
            setToken(result.data.token)
            return 'Ok';
        } else {
            return Promise.reject(new Error('登录失败'))
        }
    },
    //获取用户信息
    async getUserInfo({
        commit
    }) {
        let result = await reqUserInfon();
        if (result.code == 200) {
            commit("GETUSERINFO", result.data);
             return 'OK';
            }else
            {
            return Promise.reject(new Error('faile'));
        }
    },
    //退出登录
    async userLogout({commit}) {
        let result = await reqLogout();
        if (result.code == 200) {
            commit("CLEAR");
            return '退出成功'
        }else{
            return Promise.reject( new Error('退出失败'))
        }
    },  
};
const getters = {}
export default {
    state,
    actions,
    mutations,
    getters
}