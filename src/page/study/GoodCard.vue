<template>
  <div class="border1">
    <div class="insideCircle1"><i class="colorName1">宜</i></div>
    <i class="couldDo1">今日宜 努力学习<br/>&nbsp;&nbsp;坚持不懈 强身健体</i>
    <img class="flower1" src="../../../src/assets/flowers.png">
  </div>
</template>

<script>
export default {
  name: "GoodCard"
}
</script>

<style scoped>
.border1{
  /*position: absolute;*/
  width: 130px;
  height: 400px;
  margin-top: 100px;
  padding-top: 5px;
  box-shadow: 5px 5px 5px gray;
  border-radius: 20px;
  background-color: #de9e44;
  float: left;
}
.insideCircle1{
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: white;
  margin-left: 25px;
  margin-top: 45px;
  text-align: center;
}
.flower1{
  margin-top:0px;
  margin-left: 5px;
}
.colorName1{
  width: 60px;
  height: 80px;
  font-size: 40px;
  position: relative;
  color: red;
  top: 20%;
  font-family: 楷体;
  font-style: normal;
}
.couldDo1{
  width: 30px;
  height: auto;
  font-style: normal;
  writing-mode: vertical-lr;
  font-family: 楷体;
  font-size: 18px;
  margin-top: 5px;
  color: white;
  position: relative;
  left: 35%;
}
</style>