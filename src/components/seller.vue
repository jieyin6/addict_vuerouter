<template>

  <div to="/seller" class='seller'>i am seller who is{{age}}years old</div>
  
</template>

<script>
export default {
    name:'seller',
  data:function(){
      return{
          age:''
      }
  },
  created:function(){
      this.$http.get('/msg',function(res){
          this.age = res.data.age;
      })
  }
}
</script>

<style>

</style>
