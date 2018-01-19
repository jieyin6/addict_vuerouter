<template>
  <div class="btn">
      <button @click="go">前进</button>
      <button @click="goback">后退</button>
      <button @click="goGoods">跳转</button>
  </div>
</template>
 
 <script>
 export default {
     methods:{
         go:function(){
             this.$router.go(1)
         },
         goback:function(){
             this.$router.go(-1)
         },
         goGoods:function(){
             this.$router.push('/product')
         }
     }
   
 }
 </script>
 
 <style>
 .btn{
     display: flex;
     justify-content: space-around
 }
 button{
     width: 300px;
     height: 50px;
     background-color: aqua;
     border:none;
     outline: none;
     border-radius: 10px
 }
 </style>
 