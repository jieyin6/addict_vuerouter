<template>
 
  <div to="/product" class='product'>{{product}}</div>

</template>

<script>
export default {
    name:'product',
  data:function(){
      return{
          product:'商品'
      }
  }
}
</script>

<style>
.product{
    
    width: 30%
}
</style>
