<template>
<div>
  <!-- 头部栏模块分类 -->
  <div :class="isShow ? 'frameOn' : 'frameOff'">
    <button class="title">曲径通幽</button>
    <button class="navigation" @click="toPage('test')"><img class="icon" src="../../src/assets/关于.png">测试</button>
    <button class="navigation" @click="toPage('isReadying')"><img class="icon" src="../../src/assets/游戏.png">日常</button>
    <button class="navigation" @click="toPage('study')"><img class="icon" src="../../src/assets/学习.png">摘记</button>
    <button class="navigation" @click="toPage('home')"><img class="icon" src="../../src/assets/首页.png">首页</button>
  </div>
  <!-- 背景图 -->
  <img class="bgimg" src="../../src/assets/(9).jpg">
  <div class="top">
    <div class="con">
      <p class="bigLine">欢迎到访</p>
      <p class="line">{{sentence}}</p>
    </div>
  </div>
  <!-- 雨滴效果 -->
  <div >
    <div class='yua'></div>
    <div class='yub'></div>
    <div class='yuc'></div>
    <div class='yud'></div>
    <div class='yue'></div>
    <div class='yuf'></div>
  </div>
</div>
</template>
<script>
export default {
  name: "HeadBar",
  data(){
    return{
      sentence:"大漠孤烟直，长河落日圆。",
      sentences:["曲径通幽处，禅房花木深。","博观而约取，厚积而薄发。"
        , "欲穷千里目，更上一层楼。","会当凌绝顶，一览众山小。",],
      i:0,
      isShow:true,
      top:''
    }
  },
  methods:{
    callback(){
      setInterval(()=>{
        this.sentence = this.sentences[this.i];
        this.i = (this.i+1)%4
      },6000);
    },
    toPage(page){
      this.$router.push({
        name:page
      })
    }
  },
  mounted(){
    this.callback();
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

.yua {
  position: absolute;
  top: 0;
  left: 10%;
  width: 1px;
  height: 100px;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.50));
  animation: xhxy .5s infinite;
}
.yub {
  position: absolute;
  top: 0;
  left: 18%;
  width: 1px;
  height: 100px;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.30));
  animation: xhxy .3s infinite;
}
.yuc {
  position: absolute;
  top: 0;
  left: 27%;
  width: 1px;
  height: 100px;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.40));
  animation: xhxy .6s infinite;
}
.yud {
  position: absolute;
  top: 0;
  left: 55%;
  width: 1px;
  height: 100px;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.30));
  animation: xhxy .4s infinite;
}
.yue {
  position: absolute;
  top: 0;
  left: 80%;
  width: 1px;
  height: 100px;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.50));
  animation: xhxy .5s infinite;
}
.yuf {
  position: absolute;
  top: 0;
  left: 90%;
  width: 1px;
  height: 100px;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.30));
  animation: xhxy .6s infinite;
}
.bgimg{
  height: 100vh;
  width: auto;
  width: 100%;
  position: fixed;
  left: 0px;
  top: 0px;
}

@keyframes xhxy {
  0% {top:5%;}
  100% {top:85%;}
}
.top{
  width: auto;
  height: 100vh;
  position: relative;
}

/*.frame{
  height: 100px;
  width: 100%;
  background:linear-gradient(to bottom,rgba(138,171,202,0.85),rgba(138,171,202,0));
  z-index: 7;
  line-height: 75px;
  position: fixed;
}*/
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

.con {
  position: absolute;
  top: 50%;
  left: 80%;
  transform: translate(-50%, -50%);
}
/*诗句打印*/
.line {
  border-right: 2px solid #ffffff;
  font-size: 300%; /* 字体大小 */
  font-family: 楷体;
  color: white;
  margin-top: -50px;
  text-align: left; /* 文字横向居中 */
  white-space: nowrap; /* 文字不换行 */
  overflow: hidden; /* 多余的文字内容隐藏 */
  /*animation: borders 0.7s infinite normal,*/
  /*widths 4s steps(12); !* 重点 steps() *!*/
  animation-name: widths,test;
  animation-timing-function: steps(12),steps(12);
  animation-duration: 3s,3s;
  animation-delay: 0s,3s;
  animation-iteration-count: infinite,infinite;
  animation-direction:alternate, alternate;
}
/*欢迎到访*/
.bigLine{
  font-size: 400%;
  font-family: 华文行楷;
  color: white;
  text-align: center;
}

/* 边框闪烁动画 模拟指针闪烁 */
@keyframes broders {
  from {border-right-color: #000;}
  to {border-right-color: #fff;}
}
/* 容器宽的改变动画 */
@keyframes widths {
  from {width: 0;}
  to {width: 100%;} /* 也可以是固定宽 */
}
@keyframes test {
  from{width: 100%}
  to{width: 0}
}
</style>