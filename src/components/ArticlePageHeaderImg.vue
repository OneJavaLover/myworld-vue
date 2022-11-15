<template>
  <div class="bgImg">
<!--    <img class="fillImg" src="../../src/assets/material2.jpg">-->
    <img class="fillImg" :src="src">
    <div class="information">
      <p class="font">{{getArticleTitle}}</p>
      <div class="info">
        <p class="infoFontLeft"><img class="infoImg" src="../assets/日历1.png">发布时间: {{getCreateTime}}</p>
<!--        <p class="infoFontRight"><img class="infoImg" src="../assets/最新更新.png">最近更新2022-11-2</p>-->
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "ArticlePageHeaderImg",
  data(){
    return{
      // src:require('../../src/assets/material2.jpg'),
      src:this.getBgImg(),
      title:'书籍是人类进步的阶梯。----高尔基'
    }
  },
  computed:{
    getArticleTitle() {
      return this.$route.query.articleTitle;
    },
    getCreateTime(){
      return this.$route.query.articleCreateTime;
    },
  },
  methods:{
    getBgImg(){
      return this.$route.query.articleBgImg;
    }
  },
}
</script>

<style scoped>
.bgImg{
  width: 100%;
  height: 400px;
  text-align: center;
}
.font{
  font-size: 50px;
  color: white;
  font-family: 华文楷体;
  z-index: 5;
}
.fillImg{
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: 1;
}
.information{
  width: 100%;
  height: 200px;
  text-align: center;
  margin-top: -300px;
}
.info{
  width: auto;
  height: auto;
  text-align: center;
  margin-top: -20px;
}
.infoFontLeft{
  font-size: 15px;
  width: auto;
  color: white;
  padding-left: 10px;
  padding-right: 3px;
  display: inline-block;
  border-right: white solid 2px;
}
.infoFontRight{
  font-size: 15px;
  width: auto;
  color: white;
  padding-left: 10px;
  padding-right: 3px;
  display: inline-block;
}
.infoImg{
  width: 12px;
  height: 12px;
  margin-right: 5px;
}
</style>