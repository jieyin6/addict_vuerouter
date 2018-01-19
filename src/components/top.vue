<template>
  <div class='top'>i am header and my name is{{name}}</div>
</template>

<script>
export default {
    data:function(){
      return{
          name:''
      }
  },
  methods:{
      created:function(){
          this.$http.get('/mag').then(function(res){
              this.name = res.data.name;
          }).catch(function(err){
              console.log(err)
          })
      }

}
}
</script>
 
 <style>
 .top{
     width: 100%;
     height: 200px;
     background-color:skyblue;
     color:red;
     line-height: 200px;
     text-align: center

 }
 </style>
 
