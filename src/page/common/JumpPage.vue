<template>
  <div>
    <img src="../../../src/assets/colorBgImg.png">
    <i class="i1" @click="toArticlePage">文章编辑</i><i class="i2" @click="toNotesPage">摘记编辑</i>
  </div>
</template>

<script>
export default {
  name: "JumpPage",
  methods:{
    toArticlePage(){
      this.$router.push({
        name:'editor'
      })
    },
    toNotesPage(){
      this.$router.push({
        name:'bookEditorPage'
      })
    }
  }
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
.i1{
  font-size: 80px;
  color: #FFB90F;
  z-index: 2;
  position: absolute;
  left: 20%;
  top: 40%;
}
.i2{
  font-size: 80px;
  color: #FFB90F;
  z-index: 2;
  position: absolute;
  left: 60%;
  top: 40%;
}
</style>