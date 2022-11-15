<template>
<div>
  <input type="file" accept="image/*" ref="selectFile"
         name="wenjian" @change="checkFile($event)" hidden/>
  <button @click="selectFile">点我上传</button>
</div>
</template>

<script>
export default {
  name: "FileUpload",
  methods:{
    selectFile(){
      this.$refs.selectFile.click()
    },
    checkFile(e){
      const file = e.target.files[0]
      // const fileName = file.name
      // const fileExt = file.name.split('.').pop().toLocaleLowerCase()
      console.log(file)
      this.axios.post('/fileUpload',{
        file:file
      },{
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
    }
  }
}
</script>

<style scoped>

</style>