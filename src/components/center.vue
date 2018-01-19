<template>
  <div class="center">
      <div class="a">
      <router-link to="/product">goods</router-link>
      <router-link to="/seller">sellers</router-link>
      <router-link to="/discuss">discuss</router-link>
      </div>
      <transition name="fade">
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
    height: 300px;
}
.a{
    display: flex;
    justify-content: space-around;
    line-height: 50px;
    
}
a{
    text-decoration: none;
    color: gray
}
</style>
