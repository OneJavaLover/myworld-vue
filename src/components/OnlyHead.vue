<template>
<div>
  <!-- 头部栏模块分类 -->
  <div :class="isShow ? 'frameOn' : 'frameOff'">
    <button class="title">曲径通幽</button>
    <button class="navigation" @click="toPage('test')"><img class="icon" src="../../src/assets/关于.png">测试</button>
    <button class="navigation" @click="toPage('isReadying')"><img class="icon" src="../../src/assets/游戏.png">游戏</button>
    <button class="navigation" @click="toPage('study')"><img class="icon" src="../../src/assets/学习.png">摘记</button>
    <button class="navigation" @click="toPage('home')"><img class="icon" src="../../src/assets/首页.png">首页</button>
  </div>
</div>
</template>

<script>
export default {
  name: "OnlyHead",
  data(){
    return{
      isShow:true,
      top:''
    }
  },
  methods:{
    toPage(page){
      this.$router.replace({
        name:page
      })
    }
  },
  mounted() {
    window.addEventListener('scroll', () => {
      this.top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
    });
  },
  watch:{
    top(newValue,oldValue){
      // 等新值大于100的时候再做变化（优化一下）
      if(newValue > 100){
        if(newValue > oldValue){
          this.isShow = false
        }else{
          this.isShow = true
        }
      }
    }
  }
}
</script>

<style scoped>
.frameOn{
  height: 100px;
  width: 100%;
  background:linear-gradient(to bottom,rgba(138,171,202,0.85),rgba(138,171,202,0));
  z-index: 7;
  line-height: 75px;
  position: fixed;
  transition: all 0.4s ease-in-out 0.2s;
  transform: translateZ(0);
}
.frameOff{
  height: 100px;
  width: 100%;
  background:linear-gradient(to bottom,rgba(138,171,202,0.85),rgba(138,171,202,0));
  z-index: 7;
  line-height: 75px;
  position: fixed;
  transition: all 0.4s ease-in-out 0.2s;
  transform: translate3d(0,-100%,0);
}
/*导航栏标题*/
.navigation{
  width: 80px;
  height: 60px;
  font-family: 楷体;
  font-size: 20px;
  text-align: center;
  color: white;
  vertical-align: middle;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  float: right;
}
/*导航栏标题悬浮*/
.navigation:hover{
  font-size: 22px;
  background-color: rgba(17,64,108,0.2);
}
.title{
  width: 180px;
  height: 60px;
  font-family: 华文行楷;
  font-size: 40px;
  text-align: center;
  color: white;
  margin-left: 20px;
  vertical-align: middle;
  background-color: transparent;
  border: none;
}
.icon{
  width: 15px;
  height: 15px;
  margin-right: 5px;
}
</style>