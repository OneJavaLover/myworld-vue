<template>
<div class="border">
  <OnlyHead></OnlyHead>
  <StudyHeadImg></StudyHeadImg>
<!--  <div class="border">-->
<!--    <PersonalLabel class="personalLabel"></PersonalLabel>-->
<!--    <ArticleDetails class="articleDetails"></ArticleDetails>-->
<!--  </div>-->
  <div class="makeCenter">
    <div class="books" >
      <GoodCard class="good"></GoodCard>
      <ReadNote class="note"></ReadNote>
      <BadCard class="bad"></BadCard>
    </div>
  </div>



</div>
</template>

<script>
import OnlyHead from "@/components/OnlyHead";
import StudyHeadImg from "@/components/StudyHeadImg";
import PersonalLabel from "@/components/PersonalLabel";
import ArticleDetails from "@/components/ArticleDetails";
import GoodCard from "@/page/study/GoodCard";
import BadCard from "@/page/study/BadCard";
import ReadNote from "@/page/study/ReadNote";
export default {
  name: "StudyPage",
  components: {ReadNote, BadCard, GoodCard, ArticleDetails, StudyHeadImg, OnlyHead,PersonalLabel}
}
</script>

<style scoped>
.border{
  background-color: white;
  width: 100%;
  height: auto;
  position: relative;
  /*background-color: #b2bbbe;*/
}
.books{
  width: auto;
  height: 2000px;
  position: relative;
  /*background-color: #b2bbbe;*/
}
.personalLabel{
  margin-left: 230px;
  float: left;
}
.articleDetails{
  margin-left: 10px;
  float: left;
  width: 50%;
  height: auto;
}

.good{
  float: left;
  margin-top: 10px;
  position: sticky;
  top: 60px;
}
.note{
  float: left;
  margin-left: 20px;
}
.bad{
  float: left;
  margin-left: 20px;
  margin-top: 10px;
  position: sticky;
  top: 60px;
}
.makeCenter{
  width: 100%;
  /*height: auto;*/
  display: flex;
  justify-content: center;
  /*align-items: center;*/
  /*background-color: #b2bbbe;*/
}
</style>