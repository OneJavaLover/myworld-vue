<template>
  <div>
    <img src="../../../src/assets/colorBgImg.png">
    <i>敬请期待</i>
  </div>
</template>

<script>
export default {
  name: "IsReadying"
}
</script>

<style scoped>
img{
  width: 100%;
  height: 99.5vh;
  position: sticky;
  left: 0;
  top: 0;
  z-index: 1;
}
i{
  font-size: 80px;
  color: #FFB90F;
  z-index: 2;
  position: absolute;
  left: 40%;
  top: 40%;
}
</style>