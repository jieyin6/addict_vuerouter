<template>
 <transition name='fade'>
  <div to="/product" class='product'>{{product}}</div>
  </transition>
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
    float: left;
    width: 30%
}
</style>
