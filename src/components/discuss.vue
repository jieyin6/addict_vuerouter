<template>
<div>
  <div to="/discuss" class='discuss'>{{discuss}}</div>
  <div class="children">
  <router-link to='/child1'>child1</router-link>
  <router-link to='/child2'>child2</router-link>
  </div>
  <transition name='fadeInRight'>
  <router-view></router-view>
  </transition>
  </div>
</template>

<script>
import child1 from '../components/child1'
import child2 from '../components/child2'
export default {
    name:'discuss',
    components:{
        child1:child1,
        child2:child2
    },
  data:function(){
      return{
          discuss:'discuss'
      }
  }
}
</script>

<style>
.children{
    display: flex;
    justify-content: space-around;
    line-height: 200px;
    color:gray
    
}
</style>
