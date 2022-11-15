<template>
  <div>
    <HeadBar></HeadBar>
    <div class="border">
      <img class="bgimg" src="../../../src/assets/colorBgImg.png">
      <PersonalLabel2 class="personalLabel"></PersonalLabel2>
      <div class="test">
        <TimeLine></TimeLine>
      </div>
<!--      <div class="weather">-->
<!--        <WeatherFrame></WeatherFrame>-->
<!--      </div>-->
      <WeChatCode v-if="this.$store.state.WeChat"></WeChatCode>
      <QQCode v-if="this.$store.state.QQShow"></QQCode>
<!--      <QRCode></QRCode>-->
    </div>
  </div>

</template>

<script>
import HeadBar from "@/components/HeadBar";
import TimeLine from "@/components/TimeLine";
import PersonalLabel2 from "@/components/PersonalLabel2";
import WeChatCode from "@/components/WeChatCode";
import QQCode from "@/components/QQCode";
import WeatherFrame from "@/components/WeatherFrame";
export default {
  name: "homePage",
  components: {WeatherFrame, QQCode, WeChatCode, PersonalLabel2, TimeLine, HeadBar,},
  data(){
    return{
      QQShow:false
    }
  },
  methods:{
    toArticle(){
      this.$router.push({
        name:'article'
      })
    }
  }
}
</script>

<style scoped>
.border{
  background-color: rgb(241 242 249);
  width: auto;
  height: 1500px;
  position: relative;
}
.personalLabel{
  margin-left: 130px;
  float: left;
  position: sticky;
  top: 15px;
  margin-top: -98vh;
}
.articleDisplayBox{
  margin-left: 40px;
  float: left;
  margin-top: 10px;
}
.test{
  margin-left: 400px;
  float: left;
  margin-top: -100vh;
}
button{
  height: 200px;
  width: 200px;
  background-color: black;
}
.bgimg{
  height: 100vh;
  width: 100%;
  position: sticky;
  top: 0px;
}
.content{
  width: 100%;
  height: auto;
  margin-top: -100vh;
}
.weather{
  float: left;
  margin-left: 30px;
}
</style>