<template>
<transition name='fade'>
  <div to="/seller" class='seller'>{{seller}}</div>
  </transition>
</template>

<script>
export default {
    name:'seller',
  data:function(){
      return{
          seller:'卖家'
      }
  }
}
</script>

<style>
.seller{
    float: left;
    width: 30%
}
</style>
