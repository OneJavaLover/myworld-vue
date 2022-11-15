<template>
<div class= "test1">
  <EditorFrame class="editorFrame"></EditorFrame>
</div>
</template>

<script>
import EditorFrame from "@/page/editor/EditorFrame";
export default {
  name: "testView",
  components: {EditorFrame}
}
</script>

<style scoped>
.test{
  background-color: white;
  width: 100%;
  height: 5000px;
  position: relative;
}
.test1{
  width: 100%;
  height: 2000px;
}
.articleDetails{
  position: relative;
  left: 15%;
}
.editorFrame{
  left: 3%;
  width: 90%;
  margin-top: 100px;
  position: relative;
}
</style>