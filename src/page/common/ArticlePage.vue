<template>
  <div class= "test1">
    <ArticlePageHeaderImg></ArticlePageHeaderImg>
    <ArticleDetails class="articleDetails"></ArticleDetails>
  </div>
</template>

<script>
import ArticlePageHeaderImg from "@/components/ArticlePageHeaderImg";
import ArticleDetails from "@/components/ArticleDetails";
export default {
  name: "ArticlePage",
  components: {ArticleDetails, ArticlePageHeaderImg,}
}
</script>

<style scoped>
.test1{
  width: 100%;
  height: auto;
}
.articleDetails{
  position: relative;
  left: 15%;
}
</style>