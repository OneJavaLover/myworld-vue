<template>
  <div class="card">
    <div class="circle">
      <div class="imgBx">
        <img src="../../src/assets/IMG_0268(20220719-211745).jpg" alt="">
      </div>
    </div>

    <div class="frame">
      <p class="name">Nothing But Love</p>
      <p class="signature">路漫漫其修远兮</p>
      <div class="category">
        <div class="item"><p class="kind">学习</p><p class="num">20</p></div>
        <div class="item"><p class="kind">游戏</p><p class="num">18</p></div>
        <div class="item"><p class="kind">日常</p><p class="num">36</p></div>
      </div>

      <QQWeChatGit class="qqWeChatGit"></QQWeChatGit>
    </div>
  </div>
</template>

<script>
import QQWeChatGit from "@/components/QQWeChatGit";
export default {
  name: "PersonalLabel2",
  components: {QQWeChatGit}
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 华文楷体;
}
.card {
  position: relative;
  width: 250px;
  height: 450px;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow:0px 0px 5px #888888;
}
.circle {
  position: absolute;
  top: -190px;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: 435px;
  background: #333;
  clip-path: circle();
}
.circle:before{
  content: "";
  position: absolute;
  top: -8px;
  left: -16px;
  width: 100%;
  height: 100%;
  background: transparent;
  box-shadow: 0 0 0 20px rgba(255, 0, 0, 0.5);
  border-radius: 50%;
  z-index: 100;
  pointer-events: none;
}
.circle .imgBx{
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: 340px;
  height: 310px;
  background: #ff0;
}
.circle .imgBx img{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.5s;
  transform-origin: bottom;
}
.circle .imgBx:hover img{
  transform: scale(1.25);
}
.content h3{
  font-size: 1.4em;
  color: #333;
  margin-top: 7px;
}
.textIcon h4{
  color: #e91e63;
  font-weight: 400;
}
.textIcon a{
  color: #e91e63;
}

.frame{
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 205px;
  padding: 0px 30px;
}
.profilePhoto img{
  height: 100%;
  width: 100%;
  border-radius: 50%;
}
.name{
  margin: 0 auto;
  margin-top: 10px;
  font-family: 微软雅黑;
  font-size: 20px;
  width: 200px;
  height: 40px;
  text-align: center;
}
.signature{
  margin: 0 auto;
  font-size: 16px;
  font-family: 楷体;
  width: 150px;
  height: 25px;
  text-align: center;
}
.category{
  width: 195px;
  height: 80px;
  margin: 0 auto;
  text-align: center;
}
.item{
  width: 65px;
  height: 75px;
  float: left;
  /*border: black 1px solid;*/
  text-align: center;
  margin-top: 5px;
}
.kind{
  width: 60px;
  height: 30px;
  text-align: center;
  font-size: 20px;
  font-family: 楷体;
  color: 	DimGrey;
}
.num{
  width: 60px;
  height: 30px;
  text-align: center;
  font-size: 20px;
  font-family: 楷体;
  color: 	DimGrey;
}
.git{
  width: 150px;
  height: 30px;
  font-size: 15px;
  margin-left: 45px;
  background-color: black;
  border-radius: 15px;
}
.follow{
  width: 60px;
  height: 20px;
  font-size: 10px;
  float: left;
  margin-top: 5px;
  color: white;
}
.github{
  width: 20px;
  height: 20px;
  float: left;
  margin-left: 25px;
  margin-top: 2px;
}
.qqWeChatGit{
  margin-left: 0px;
}
</style>