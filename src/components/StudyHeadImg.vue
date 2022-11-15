<template>
  <div>
    <div class="bgImg">
      <img class="fillImg" src="../../src/assets/studyHeadImg.png">
      <p class="font">所有改变从现在开始</p>
    </div>
  </div>

</template>

<script>
export default {
  name: "StudyHeadImg",
}
</script>

<style scoped>
.bgImg{
  width: 100%;
  height: 200px;
  /*background-image: url("../../src/assets/书架.jpg");*/
  text-align: center;
}
.font{
  font-size: 50px;
  color: white;
  margin-top: -100px;
  font-family: 华文楷体;
  z-index: 3;
}
.fillImg{
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: 1;
}
</style>