<template>
  <div class="outside">
    <!--古诗-->
    <el-carousel :interval="4000" type="card" height="200px" >
      <el-carousel-item v-for="(item,index) of poetry" :key="index" >
        <div class="border1">
          <i class="sentence">
            &nbsp; &nbsp;&nbsp;{{item.sentence}}
          </i>
           <i class="from">----{{item.comeFrom}}</i>
        </div>
        <img class="bgImg" src="../../../src/assets/780.png">
      </el-carousel-item>
    </el-carousel>
    <!--好书-->
    <div class="book" v-for="(allItem,index1) of goodBook" :key="index1">
      <i class="nameAndFrom">----《{{allItem.bookName}}》·{{allItem.authName}} ----</i>
      <el-carousel :interval="1000" height="250px" :autoplay="false">
        <el-carousel-item style="height: 250px" v-for="(item,index) of goodBook[index1].sentenceList" :key="index">
          <div class="border">
            <i class="sentence">
              &nbsp; &nbsp;&nbsp;{{item}}
            </i>
          </div>
          <img class="bgImg" src="../../../src/assets/780.png">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReadNote",
  data(){
    return{
      goodBook:[],
      poetry:[],
      num:0
    }
  },
  methods:{
    getAllPoetry(){
      this.axios.get("/poetry/findAllPoetry").
      then(res=>{
        this.poetry = res.data.result
      })
    },
    findBookInfoAndGroup(){
      this.axios.get("/goodBook/findBookInfoAndGroup").
      then(res=>{
        this.goodBook = res.data.result
        console.log(this.goodBook)
      })
    }
  },
  mounted() {
    this.getAllPoetry()
    this.findBookInfoAndGroup()
  }
}
</script>

<style scoped>
.excerpt{
  width: 550px;
  height: 250px;
  text-align: left;
}
.bgImg{
  width: 100%;
  height: 100%;
  position: sticky;
  left: 0;
  top: 0;
}
.sentence{
  margin-top: 10px;
  display: flex;
  justify-content: left;
  font-family: 楷体;
}
.border{
  width: 355px;
  height: 200px;
  position: absolute;
  vertical-align: middle;
  margin-top: 60px;
  margin-left: 100px;
  z-index: 10;
  text-align: left;
}
.border1{
  width: 280px;
  height: 200px;
  position: absolute;
  vertical-align: middle;
  margin-top: 60px;
  margin-left: 30px;
  z-index: 10;
  text-align: left;
}
.from{
  vertical-align: center;
  margin-top: 10px;
  display: flex;
  justify-content: right;
}
.outside{
  /*width: 550px;*/
  width: 700px;
  height: 200px;
  text-align: center;
  margin-top: 10px;
}
.book{
  width: 550px;
  height: 200px;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 100px;
  margin-left: 80px;
}
.nameAndFrom{
  font-style: normal;
  font-family: 华文行楷;
  font-size: 20px;
}
</style>