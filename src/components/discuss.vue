<template>
<transition name="fade">
  <div to="/discuss" class='discuss'>{{discuss}}</div>
  </transition>
</template>

<script>
export default {
    name:'discuss',
  data:function(){
      return{
          discuss:'评论'
      }
  }
}
</script>

<style>
.discuss{
    float: left;
    width: 30%
}
</style>
