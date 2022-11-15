import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        content_first:'',
        result:window.localStorage.getItem('result'||'[]')==null ? '':window.localStorage.getItem('result'||'[]'),
        QQShow:false,
        WeChat:false
    },
    mutations:{
        GETTEXT(state,value){
            state.content_first = value;
        },
        LOGIN(state,value1){
            // state.result = value1;
            window.localStorage.setItem('result',value1)
        },
        CHANGEQQ(state){
            state.WeChat = false
            state.QQShow = !this.state.QQShow
        },
        CHANGEWEXIN(state){
            state.QQShow = false
            state.WeChat = !this.state.WeChat
        }
    }
})
export default store