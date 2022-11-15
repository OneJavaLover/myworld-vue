<template>
  <div >
    <div v-for="(item,index) of allArticle" :key="index" style="padding-bottom: 15px">
      <div class="frame">
        <!--图片展示框-->
        <div class="showImg">
          <img src="src/assets/moon.jpg">
        </div>
        <p @click="toArticle" class="title">{{item.title}}</p>
        <p class="message">
          <img style="height: 15px;width: 15px;" src="../../src/assets/日历.png">{{item.publishTime}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleDisplayBox",
  data(){
    return{
      showFrame:[{scr:require("../assets/colorDeer.jpg"),title:"SpringBoot+Vue实践",publishTime:"发布于2022年10月30日"},
        {scr:require("../assets/moon.jpg"),title:"Ajax初步学习",publishTime:"发布于2022年10月30日"},
        {scr:require("../assets/门.jpg"),title:"MyBatis学习资料",publishTime:"发布于2022年10月30日"},
        {scr:require("../assets/colorDeer.jpg"),title:"Linux进阶学习",publishTime:"发布于2022年10月30日"}],
      allArticle:[]
    }
  },
  methods:{
    toArticle(){
      this.$router.push({
        name:'article'
      })
    },
    getAllArticle(){
      this.axios.post('/getAllArticle'
      ).then(res=>{
        this.allArticle = res;
        console.log(this.allArticle)
      })
    }
  },
  created() {
    this.getAllArticle();
  }
}
</script>

<style scoped>
.frame{
  height: 250px;
  width: 700px;
  box-shadow:0px 0px 10px #888888;
}
.frame:hover{
  box-shadow:0px 0px 30px #888888;
}

/*图片展示框*/
.showImg{
  width: 300px;
  height: 250px;
  max-width: 300px;
  max-height: 250px;
  overflow: hidden;
  float: left;
}
.showImg img{
  height:100%;
  width:100.4%;
  transition:all 1s ease;
}
.showImg:hover img{
  transform:scale(1.2,1.2);
  transition:all 1s ease;
}

.title{
  height: 30px;
  width: 360px;
  margin-left: 30px;
  margin-top: 60px;
  font-size: 35px;
  font-family: 楷体;
  float: left;
}
.message{
  font-family: 楷体;
  font-size: 15px;
  margin-left: 30px;
  margin-top: -10px;
  float: left;
}
</style>