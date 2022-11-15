<template>
<div class="border">
  <img src="../../assets/(10).jpg">
  <div class="frame">
    <!--图片展示框-->
    <div class="showImg">
      <img src="../../assets/loginBg.png">
    </div>
    <div class="login" >
      账号：<input class="input" type="text" v-model="name1"/><br>
      密码：<input class="input" type="password" v-model="password"/><br>
      <button @click="login">登录</button>
    </div>
  </div>
</div>
</template>

<script>
import axios from "axios";
export default {
  name: "LoginPage",
  data(){
    return{
      name1:'',
      password:'',
      encryptPassword:''
    }
  },
  methods:{
    login(){
      this.encryptPassword = this.$md5(this.password)
      this.axios.post('/myController/myLogin', {
          userName:this.name1,
          userPassword:this.encryptPassword
      }, {
          headers: {"Content-Type": 'application/x-www-form-urlencoded'}
      }).then(res=>{
        if (res.data===1){
          this.$store.commit("LOGIN",res.data);
          this.$router.push({
            name:'jumpPage'
          })
        }else {
          alert("登录失败")
        }
      })
    }
  },
  // watch:{
  //   password:{
  //     handler(newValue){
  //       this.encryptPassword = this.$md5(newValue)
  //       console.log(this.encryptPassword)
  //     }
  //   }
  // }
}
</script>

<style scoped>
.border{
  height: auto;
  width: auto;
}
/*图片展示框*/
.showImg{
  width: 350px;
  height: 350px;
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
.frame{
  height: 350px;
  width: 900px;
  border-radius: 20px;
  background-color: #666666;
  box-shadow:0px 0px 10px #00CED1;
  /*box-shadow:0px 0px 10px #888888;*/
  position: relative;
  left: 20%;
  margin-top: -80vh;
}
img{
  /*position: absolute;*/
  /*left: 0;*/
  /*top: 0;*/
  height: 99.5vh;
  width: 100%;
}
.login{
  float: left;
  height: 350px;
  width: 550px;
  text-align: center;
  font-size: 30px;
  color: white;
  padding-top: 60px;
}
button{
  height: 40px;
  width: 80px;
  font-size: 15px;
  border-radius: 15px;
}
.input{
  height: 30px;
  color: black;
  border-radius: 15px;
  border: 0px;
  margin-bottom: 30px;
  font-size: 20px;
  padding-left: 20px;
}
</style>