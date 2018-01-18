<template>
  <div class="center">
      <router-link to="/product">商品</router-link>
      <router-link to="/seller">卖家</router-link>
      <router-link to="/discuss">评论</router-link>
      <transition>
       <router-view/>
       </transition>
  </div>
 
</template>

<script>
import product from './product'
import seller from './seller'
import discuss from './discuss'
export default {
  components:{
      product:product,
      seller:seller,
      discuss:discuss
  }
}
</script>

<style>
.center{
    width: 100%;
    height: 100px;
    line-height: 100px;
    color: green
}
a{
    
    text-decoration: none;
    color: green;

}
</style>
