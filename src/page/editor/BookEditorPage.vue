<template>
  <div class="border">

    <div>
      <!-- 书名 -->
      <el-select v-model="value" placeholder="请选择" style="width: 150px" filterable allow-create>
        <el-option
            v-for="(item,index) of options"
            :key="index"
            :label="item.bookName"
            :value="item.bookName">
        </el-option>
      </el-select>

      <!-- 作者名 -->
      <el-select v-model="authName" placeholder="请选择" style="width: 150px" filterable allow-create>
        <el-option
            v-for="(item,index) of options"
            :key="index"
            :label="item.authName"
            :value="item.authName">
        </el-option>
      </el-select>

      <input type="text" v-model="insertSentence"/><button @click="insertOneSentence">添加</button>
      <br/>
      <!-- 展示框 -->
      <div class="sentence">
        <i v-for="(item,index) of sentences" :key="index">
          {{index+1}}&nbsp;&nbsp;&nbsp;{{item}}<br/><br/>
        </i>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "BookEditorPage",
  data(){
    return{
      options:[],
      label:'',
      value:'',
      sentences:[],
      insertSentence:'',
      authName:''
    }
  },
  methods:{
    getBookNames(){
      this.axios.get("/goodBook/findBookNameAndAuthNameAndDistinct").
      then(res=>{
        this.options = res.data.result
      })
    },
    insertOneSentence(){
      this.$confirm("是否确认添加","提示").
      then(()=>{
        this.insertNewSentence();
      }).
      catch(function (err){
        console.log(err)
      })
    },
    insertNewSentence(){
      this.axios.get("/goodBook/insertNewSentence",{
        params:{
          bookName:this.value,
          authName:this.authName,
          sentence:this.insertSentence
        }
      }).then(res=>{
        if (res.data.code === 200){
          alert("添加成功")
        }else {
          alert("添加失败")
        }
      })
    }
  },
  created() {
    this.getBookNames()
  },
  watch:{
    value:{
      handler(newValue){
        this.axios.get("/goodBook/findSentenceByBookName",{
          params:{bookName:newValue}
        }).then(res=>{
          this.sentences = res.data.result
        })
      }
    }
  }
}
</script>

<style scoped>
.sentence{
  width: 800px;
  height: auto;
  padding-top: 10px;
}
input{
  width: 400px;
  height: 30px;
  color: black;
  border-radius: 15px;
  border: 2px solid black;
  margin-bottom: 30px;
  font-size: 15px;
  padding-left: 20px;
  margin-left: 10px;
  margin-right: 10px;
}
button{
  height: 40px;
  width: 80px;
  font-size: 15px;
  border-radius: 15px;
}
.border{
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 100px;
}
</style>