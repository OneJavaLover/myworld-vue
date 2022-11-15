import Vue from 'vue'
import Router from 'vue-router'
// import App from "@/App";
import homePage from "@/page/home/homePage";
import StudyPage from "@/page/study/StudyPage";
import ArticlePage from "@/page/common/ArticlePage";
import LoginPage from "@/page/login/LoginPage";
import EditorPage from "@/page/editor/EditorPage";
import store from "@/store";
import axios from "axios";
import FileUpload from "@/components/FileUpload";
import BookEditorPage from "@/page/editor/BookEditorPage";
import IsReadying from "@/page/common/IsReadying";
import JumpPage from "@/page/common/JumpPage";

Vue.use(Router)
Vue.prototype.$axios=axios
const router = new Router({
    mode:"history",
    routes:[
        {
            path:'/',
            component:homePage
        },
        {
            path:'/study',
            name:"study",
            component:StudyPage
        },
        {
            path:'/home',
            name:'home',
            component:homePage
        },
        {
            path:'/article',
            name:'article',
            component:ArticlePage
        },
        {
            path:'/test',
            name:'test',
            component:LoginPage
        },
        {
            path:'/editor',
            name:'editor',
            component:EditorPage,
            meta:{
                needLogin:true
            }
        },
        {
            path:'/fileUpload',
            name:'fileUpload',
            component:FileUpload
        },
        {
            path:'/bookEditorPage',
            name:'bookEditorPage',
            component:BookEditorPage,
            meta:{
                needLogin:true
            }
        },
        {
            path:'/isReadying',
            name:'isReadying',
            component:IsReadying
        },
        {
            path:'/jumpPage',
            name:'jumpPage',
            component:JumpPage,
            meta:{
                needLogin: true
            }
        }
    ]
})

router.beforeEach((to,from,next) => {
    if (to.meta.needLogin){
        // if (store.state.result==='1'){
        //     axios.get("/authentication").then(res=>{
        //         if (res){
        //             next()
        //         }else {
        //             next('/test')
        //             alert("请先登录")
        //         }
        //     })
        // }else{
        //     next('/test')
        //     alert("请先登录")
        // }
        axios.get("/authentication").then(res=>{
            if (res){
                next()
            }else {
                next('/test')
                alert("请先登录")
            }
        })
    }else{
        next()
    }
})
export default router