<template>
  <div class="frame">
    <div class="profilePhoto">
      <img src="../../src/assets/跑步.gif">
    </div>
    <p class="name">Nothing But Love</p>
    <p class="signature">君子慎独，不欺暗室</p>

    <div class="category">
      <div class="item"><p class="kind">学习</p><p class="num">20</p></div>
      <div class="item"><p class="kind">游戏</p><p class="num">18</p></div>
      <div class="item"><p class="kind">日常</p><p class="num">36</p></div>
    </div>
    <button class="git">
      <img class="github" src="../../src/assets/git.png">
      <p class="follow">FollowMe</p>
    </button>
  </div>
</template>

<script>
export default {
  name: "PersonalLabel"
}
</script>

<style scoped>
.frame{
  width: 250px;
  height: 350px;
  margin-top: 10px;
  box-shadow:0px 0px 5px #888888;
  border-radius: 10px;
}
.frame:hover{
  box-shadow:0px 0px 25px #888888;
}
.profilePhoto{
  padding-top: 10px;
  width: 100px;
  height: 100px;
  margin: 0 auto;
  border-radius: 50%;
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
  height: 100px;
  float: left;
  /*border: black 1px solid;*/
  text-align: center;
}
.kind{
  width: 60px;
  height: 15px;
  text-align: center;
  font-size: 20px;
  font-family: 楷体;
  color: 	DimGrey;
}
.num{
  width: 60px;
  height: 15px;
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
</style>