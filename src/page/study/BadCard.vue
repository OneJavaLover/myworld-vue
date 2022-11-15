<template>
  <div class="border2">
    <div class="insideCircle2"><i class="colorName2">忌</i></div>
    <i class="couldDo2">今日忌 偷懒摸鱼<br/>&nbsp;&nbsp;意志消沉 妄自菲薄</i>
    <img class="flower2" src="../../../src/assets/branch.png">
  </div>
</template>

<script>
export default {
  name: "BadCard"
}
</script>

<style scoped>
.border2{
  /*position: absolute;*/
  width: 130px;
  height: 400px;
  margin-left: 50px;
  margin-top: 100px;
  padding-top: 5px;
  box-shadow: 5px 5px 5px gray;
  border-radius: 20px;
  background-color: #ce5777;
  float: left;
}
.insideCircle2{
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: white;
  margin-left: 25px;
  margin-top: 45px;
  text-align: center;
}
.flower2{
  margin-top:-120px;
}
.colorName2{
  width: 60px;
  height: 80px;
  font-size: 40px;
  position: relative;
  color: red;
  top: 20%;
  font-family: 楷体;
  font-style: normal;
}
.couldDo2{
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