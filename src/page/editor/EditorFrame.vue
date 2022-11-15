<template>
  <div>
    <!-- 文章顶部图片 -->
    <div class="bgImg">
      <img class="fillImg" src="../../assets/(9).jpg">
      <div class="information">
        <p class="font">{{title}}</p>
        <div class="info">
          <p class="infoFontLeft"><img class="infoImg" src="../../assets/日历1.png">发布时间: xxxx年xx月xx日</p>
        </div>
      </div>
    </div>
    <!-- 文章摘要展示框 -->
    <el-scrollbar class="frame1">
      <div v-for="(item,index) of content" :key="index">
        <div class="frame2" @click="changeEditorFrame(item)">
          <p style="font-size: 25px">{{ item.editorId }} {{ item.editorTitle }}</p>
          <p style="font-size: 10px;margin-top: -20px">开始时间： {{ item.startTime }}</p>
          <p style="font-size: 10px">最近更新： {{ item.updateTime }}</p>
        </div>
      </div>
    </el-scrollbar>
    <!-- 富文本编辑器 -->
    <div style="float: left;margin-left: 35px;position: relative;width: 70%;margin-top: 20px">
      <div >
        <el-input v-model="title" placeholder="请输入标题"></el-input>
        <tinymce v-model="content_first" :height="800"/>
      </div>
<!--      <button @click="save(content_first)">保存文本</button>-->
      <div>{{content_first}}</div>
    </div>

    <div class="rightButton">
      bgImgAddress:<input class="button2" v-model="bgImg"/>
      coverImgAddress:<input class="button2" v-model="coverImg"/>
      <button class="button1" @click="publishArticle">发布</button>
      <button class="button1" @click="updateArticle">更新</button>
      <button class="button1" @click="saveContent">保存</button>
    </div>
  </div>


</template>

<script>
import Tinymce from "@/components/Tinymce";
import {mapMutations,mapState} from "vuex";
export default {
  name:"EditorFrame",
  components: {
    //富文本组件
    Tinymce,
  },
  data() {
    return {
      //内容
      content_first: '',
      //标题
      title:"",
      contentId:0,
      content:[],
      bgImg:'',
      coverImg:'',
      state:0,
      flag:0
    };
  },
  computed:{
    ...mapState([])
  },
  methods:{
    ...mapMutations({save:'GETTEXT'}),
    saveContent(){
      this.$confirm("是否确认保存","提示").
      then(()=>{
       this.saveArticle();
      }).
      catch(function (err){
        console.log(err)
      })
    },
    saveArticle(){
      this.axios.get('/Editor/saveContent',{
        params:{
          editorTitle:this.title,
          editorInfo:this.content_first,
          state:0,
          bgImg:this.bgImg,
          coverImg:this.coverImg
        }
      }).then(res =>{
        if (res.data.code === 200){
          alert(res.data.message)
        }else {
          alert("失败")
        }
      })
    },
    updateArticle(){
      this.$confirm("是否确认更新","提示").
      then(()=>{
        this.updateEditorContent()
      }).catch(function (err){
        console.log(err)
      })
    },
    publishArticle(){
      this.$confirm("是否确认发布","提示").
      then(()=>{
        this.publishContent()
      }).catch(function (err){
        console.log(err)
      })
    },
    //发布文章
    publishContent(){
      this.axios.get('/Editor/publishContent',{
        params:{
          editorTitle:this.title,
          editorInfo:this.content_first,
          bgImg:this.bgImg,
          coverImg:this.coverImg
        }
      }).then(res =>{
        if (res.data.code === 200){
          alert(res.data.message)
        }else {
          alert("发布失败")
        }
      })
    },
    //获取所有正在编辑的文章
    getContentList(){
      this.axios.post('/Editor/getAllContent')
          .then(res=>{
            this.content = res.data
          })
    },
    //更新正在编辑的文章的内容
    updateEditorContent(){
      this.axios.get('/Editor/updateEditorContent',{
        params:{
          editorTitle:this.title,
          editorInfo:this.content_first,
          editorId:this.contentId,
          bgImg:this.bgImg,
          coverImg:this.coverImg
        }
      }).then(res =>{
          if (res.data.code === 200){
            alert(res.data.message)
          }else {
            alert("失败")
          }
      })
    },
    changeEditorFrame(item){
      if (this.title != ''){
        this.updateArticle();
      }
      this.content_first = item.editorInfo;
      this.title = item.editorTitle
      this.contentId = item.editorId
      this.bgImg = item.bgImg
      this.coverImg = item.coverImg
    }
  },
  created() {
    this.getContentList()
  },
  activated() {
    this.tinymceFlag=this.tinymceFlag===0?1 : 0 ;
  }
};
</script>
<style>
.frame1{
  float: left;
  /*margin-top: 10px;*/
  height:500px;
  width:210px;
}
.frame2{
  height: auto;
  width: 200px;
  margin-left: 5px;
  box-shadow:0px 0px 5px #2E8B57;
}
.frame2:hover{
  box-shadow:0px 0px 10px #2E8B57;
}
.el-scrollbar__wrap{
  overflow-x: hidden;
}
.el-scrollbar__bar.is-horizontal {
  display: none;
}
.button1{
  width: 80px;
  height: 50px;
  margin-bottom: 15px;
}
.button2{
  width: 160px;
  height: 25px;
  margin-bottom: 15px;
}
.rightButton{
  width: 90px;
  height: auto;
  float: left;
  margin-left: 20px;
  margin-top: 20px;
}
.bgImg{
  width: 100%;
  height: 400px;
  text-align: center;
}
.fillImg{
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: 1;
}
.font{
  font-size: 50px;
  color: white;
  font-family: 华文楷体;
  z-index: 5;
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
.infoImg{
  width: 12px;
  height: 12px;
  margin-right: 5px;
}
</style>