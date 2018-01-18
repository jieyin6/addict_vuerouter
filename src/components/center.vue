<template>
  <div class="center">
      <router-link to="/product">商品</router-link>
      <router-link to="/seller">卖家</router-link>
      <router-link to="/discuss">评论</router-link>
       <router-view/>
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
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100px;
    line-height: 100px;
    color: green
}
a{
    display: inline-block;
    width: 30%;
    text-decoration: none;
    color: green;

}
</style>
