import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from "@/router";
import store from "@/store";
import VueAxios from "vue-axios";
import axios from "axios";
import md5 from "js-md5"

//设置反向代理，前端请求默认发到 http://localhost:8443/api
// axios.defaults.baseURL = 'http://localhost:8443/api'
axios.defaults.baseURL = 'http://localhost:8443'
// axios.defaults.baseURL = 'http://1.117.175.168:8443/api'
//允许跨域请求
axios.defaults.withCredentials = true
Vue.config.productionTip = false
Vue.prototype.$md5 = md5

Vue.use(ElementUI)
Vue.use(VueAxios,axios)
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  render: h => h(App)
})
// export default axios;
router.afterEach(() => {
  window.scrollTo(0,0);
});




