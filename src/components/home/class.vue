<template>
    <div class="pad">
      <div class="bord">
        <slot name="classimg1">  <img src="~@/assets/img/homeimg/1.png" alt=""></slot>
     
        <slot name="classimg2">  <img src="~@/assets/img/homeimg/1.png" alt=""></slot>
      
        <slot name="classimg3">  <img src="~@/assets/img/homeimg/1.png" alt=""></slot>
      </div>
      
      <div class="bord">
        
        <slot name="classimg4">  <img src="~@/assets/img/homeimg/1.png" alt=""></slot>
      
        <slot name="classimg5">  <img src="~@/assets/img/homeimg/1.png" alt=""></slot>
      
        <slot name="classimg6">  <img src="~@/assets/img/homeimg/1.png" alt=""></slot>
      </div>

    </div>
    
</template>

<script>
export default {
    name:'class',
    props:{
        top:String
    },
    data(){
        return{
           
        }
    },
    methods:{
      
    }
}
</script>

<style>
     .bord{
         width: 100vw;
         display: flex;
         height: 13vh;
        margin-top: 3vw;
     }
    .bord img{
        float: left;
        width: 30%;
        height: 100%;
        border-radius: 50%;
        margin-left: 3vw;
    }

</style>
