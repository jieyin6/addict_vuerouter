<template>

  <div to="/seller" class='seller'>{{seller}}</div>
  
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
    
    width: 30%
}
</style>
