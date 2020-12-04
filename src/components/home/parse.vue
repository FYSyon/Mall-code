<template>
    <div class="parse">
     <div class="a1">
    <span 
    :class="[{'from-color':isactiov},{'span1':true}]">
         <router-link  :to="'/home/'+this.index" >   
            {{this.arr}}
         </router-link>
    </span>
      </div>
    </div>
</template>

<script>

export default {
    name:'parse',
    
 props:{
     arr:String,
     index:Number
 },
computed:{
         isactiov(){
       return this.$route.path.lastIndexOf('/home/'+this.index)!==-1
         }
     },
}
</script>

<style scope>
  .parse{
      width: 100vw;
      text-align: center;
  }

    .a1{
        width: 33.3%;
        background-color: aliceblue;
        padding: 10px;
        padding-left: 2px;
        font-size: 20px;
        display:inline;
        float: left;
    }
    .span1{
    }
  
  .from-color a{
    color: red;
}
</style>
