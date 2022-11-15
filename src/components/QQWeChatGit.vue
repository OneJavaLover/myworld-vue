<template>
  <ul>
    <li @click="changeQQState"><i class="iconfont icon-QQ" style="font-size: 25px" ></i> </li>
    <li @click="changeWeXinState"><i class="iconfont icon-weixin1" style="font-size: 25px" ></i></li>
    <li ><a class="iconfont icon-github" style="font-size: 25px" href="https://github.com" target="_blank"></a></li>
  </ul>
</template>

<script>
export default {
  name: "QQWeChatGit",
  methods:{
    changeQQState(){
      this.$store.commit("CHANGEQQ");
    },
    changeWeXinState(){
      this.$store.commit("CHANGEWEXIN")
    },
    toGitHub(){
      let routeUrl = this.$router.resolve({
        path: 'https://github.com/OneJavaLover',
      })
      window.open(routeUrl.href, '_blank')
    }
  }
}
</script>

<style scoped>
@import "../../src/css/font/iconfont.css";
*{
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: center;
}
ul{
  display: flex;
}
ul li{
  position: relative;
  display: block;
  height: 40px;
  width: 40px;
  font-size: 20px;
  line-height: 40px;
  color: #666;
  background-color: #171515;
  cursor: pointer;
  border-radius: 50%;
  margin: 0 10px;
}
ul li::before{
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  background-color: #0A82ED;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  z-index: -1;
  transform: scale(0.9);
  transition: 0.5s;
}
ul li:nth-child(1):before{
  background-color: #0A82ED;
}
ul li:nth-child(2):before{
  background-color: pink;
}
ul li:nth-child(3):before{
  background-color: green;
}
ul li:hover:before{
  filter: blur(4px);
  box-shadow: 0 0 15px #0A82ED;
  transform: scale(1.2);
}
ul li:nth-child(1):hover:before{
  filter: blur(4px);
  box-shadow: 0 0 15px #0A82ED;
  transform: scale(1.2);
}
ul li:nth-child(2):hover:before{
  filter: blur(4px);
  box-shadow: 0 0 15px pink;
  transform: scale(1.2);
}
ul li:nth-child(3):hover:before{
  filter: blur(4px);
  box-shadow: 0 0 15px green;
  transform: scale(1.2);
}
ul li:nth-child(1):hover{
  color: #0A82ED;
  box-shadow: 0 0 15px #0A82ED;
  text-shadow: 0 0 15px #0A82ED;
}
ul li:nth-child(2):hover{
  color: pink;
  box-shadow: 0 0 15px pink;
  text-shadow: 0 0 15px pink;
}
ul li:nth-child(3):hover{
  color: green;
  box-shadow: 0 0 15px green;
  text-shadow: 0 0 15px green;
}
/*包含以下五种的链接*/
a {
  text-decoration: none;
  color: #666666;
}
/*正常的未被访问过的链接*/
a:link {
  text-decoration: none;
}
/*已经访问过的链接*/
a:visited {
  text-decoration: none;
}
/*鼠标划过(停留)的链接*/
a:hover {
  text-decoration: none;
  color: green;
}
/* 正在点击的链接，鼠标在元素上按下还没有松开*/
a:active {
  text-decoration: none;
  color: green;
}
/* 获得焦点的时候 鼠标松开时显示的颜色*/
a:focus {
  text-decoration: none;
}
</style>