<template>
<div class="frame">
  <img @click="changeQQState" class="close" src="../../src/assets/close.png">
  <p>QQ二维码</p>
  <img class="erWeiMa" src="../../src/assets/QQerwerma.jpg">
</div>
</template>

<script>
export default {
  name: "QQCode",
  methods:{
    changeQQState(){
      this.$store.commit("CHANGEQQ");
    },
  }
}
</script>

<style scoped>
.frame{
  position: fixed;
  background-color: #666666;
  top: 20%;
  left: 40%;
  width: 300px;
  height: 400px;
  text-align: center;
  z-index: 10;
  border-radius: 20px;
  background-image: url("../../src/assets/moon.jpg");
}
.frame p{
  font-size: 50px;
  color: white;
  font-family: 微软雅黑;
}
.bgImg{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
}
.erWeiMa{
  width: 200px;
  height: 200px;
  margin-top: -10px;
  z-index: 3;
  border-radius: 10px;
}
.close{
  float: right;
  margin-top: 5px;
  margin-right: 5px;
}
</style>