<template>
  <div id="app">
    <top></top>
    <center></center>
    <bottom></bottom>
    
  </div>
</template>

<script>
import top from './components/top'
import center from './components/center'
import bottom from './components/bottom'
export default {
  name: 'App',
  components:{
    top:top,
    center:center,
    bottom:bottom
  },
  methods:{
    created:function(){
      router.afterEach((to,from) => {
        (<a></a>).style.color = yellow;
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
</style>
