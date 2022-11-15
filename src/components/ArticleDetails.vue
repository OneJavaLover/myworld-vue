<template>
  <div class="border" >
    <el-card class="release_card">
      <div v-html="content"></div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "ArticleDetails",
  data(){
    return{
      title:'',
      content:'',
      articleTitle: ''
    }
  },
  computed:{
    // otherText(){return this.$store.state.content_first},
    getArticleTitle(){
      return this.$route.query.articleTitle
    }
  },
  created(){
    this.searchHtml()
  },
  methods: {
    //请求后台，搜索信息拿到文章的数据
    searchHtml(){
      this.axios.get("/Content/getContentInfoByContentTitle",{
        // params:{id:1}
        params:{contentTitle:this.getArticleTitle}
        // id:this.articleIndex2
      }).then(res=>{
        // this.title=res.data.contentTitle
        this.content=res.data
      })
    }
  },
}
</script>

<style scoped>
.border{
  width: 70%;
  height: auto;
  margin-bottom: 10px;
  box-shadow:0px 0px 5px #888888;
}
</style>