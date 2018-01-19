<template>

  <div to="/seller" class='seller'>i am seller who is {{age}} years old</div>
  
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
      var _this =this;
       this.$http.get('/msg').then(function(res){
          console.log(res);
          _this.age = res.data.age;
      }).catch(function(err){
          console.log(err)
      })
  }
}
</script>

<style>

</style>
