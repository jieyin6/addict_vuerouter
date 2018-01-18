<template>
  <div class='bottom'>{{bottom}}</div>
</template>

<script>
export default {
  data:function(){
      return{
          bottom:'i am good'
      }
  }
}
</script>
 
 <style>
 .bottom{
     position: fixed;
     bottom: 0;
     left: 0;
     width: 100%;
     height: 100px;
     background-color:yellow;
     color: green;
     line-height: 100px;
     text-align: left
 }
 </style>
 
