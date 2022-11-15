<template>
  <div class="block">
    <el-timeline>
      <el-timeline-item v-for="(item,index) of allArticle" :key="index" :timestamp="item.createTime"
                        placement="top" size="large" color="#7FFFD4" :icon="item.icon">
        <div @click="toArticle(item)" class="frame">
          <!--图片展示框-->
          <div class="showImg">
            <img :src="item.coverImg">
          </div>
          <p class="title">{{item.contentTitle}}</p>
          <p class="message">
            <img style="height: 15px;width: 15px;" src="../../src/assets/日历.png">发布于 {{item.createTime}}
          </p>
        </div>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
export default {
  name: "TimeLine",
  data(){
    return{ allArticle:[] }
  },
  methods:{
    toArticle(item){
      this.$router.push({
        name:'article',
        query:{articleTitle:item.contentTitle,
          articleCreateTime:item.createTime,
          articleBgImg:item.bgImg}
      })
    },
    getAllArticle(){
      this.axios.get('/Content/getAllArticle'
      ).then(res=>{
        this.allArticle = res.data;
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
  height: 200px;
  width: 600px;
  border-radius: 20px;
  background-color: white;
  box-shadow:0px 0px 10px #00CED1;
  /*box-shadow:0px 0px 10px #888888;*/
}
.frame:hover{
  /*#2E8B57*/
  box-shadow:0px 0px 30px #00CED1;
}

/*图片展示框*/
.showImg{
  width: 230px;
  height: 200px;
  max-width: 230px;
  max-height: 200px;
  overflow: hidden;
  float: left;
  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;
}
.showImg img{
  height:100%;
  width:100.4%;
  transition:all 1s ease;
  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;
}
.showImg:hover img{
  transform:scale(1.2,1.2);
  transition:all 1s ease;
  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;
}

.title{
  height: 30px;
  width: 300px;
  margin-left: 30px;
  margin-top: 60px;
  font-size: 30px;
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