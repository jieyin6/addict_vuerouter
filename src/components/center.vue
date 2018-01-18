<template>
  <div class="center">
      <router-link to="/product"></router-link>
      <router-link to="/seller"></router-link>
      <router-link to="discuss"></router-link>
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
</style>
