import { createStore } from "vuex";
import menuList from "./menuList";

export const store = createStore({
    state : {
        menuList,
        isLogin : false,
    },
    getters : {
        getMenuList(state){
            return state.menuList
        },
        getIsLogin(state){
            return state.isLogin
        },
    },
    mutations : {
        setIsLogin(state,payload){
            state.isLogin = payload
        },
    },
    
})
