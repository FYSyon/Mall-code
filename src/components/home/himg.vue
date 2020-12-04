<template>
<div class="himg">
        <homeimg>
            <img :src='imgstr' slot="img1" alt="" @load="ok">
        </homeimg>
        
     <button type="button" class="btn  btn1 btn-secondary" @click="leftimg">></button>
     <button type="button" class="btn btn2 btn-secondary" @click="rightimg"><</button>
</div>

        
</template>

<script>
import homeimg from './homeimg.vue'

import img1 from '@/assets/img/homeimg/1.png'
import img2 from '@/assets/img/homeimg/2.png'
import img3 from '@/assets/img/homeimg/3.png'
export default {
    name:"himg",
    components:{
        homeimg
    },
    data(){
        return{
              imgstr:img1
        }
      
    },
     methods:{
        leftimg(){
           this.imgstr=img2
        },
        rightimg(){
           this.imgstr=img1
        },
        ok(){
        //   this.$emit('parse')
        }
    },
   
}
</script>

<style>
.himg{
  height: 25vh;
}
    .btn1{
        position: relative;
        top:-15vh;
        left: 85vw;
        width: 30px;
    }
    .btn2{
        position: relative;
        top:-15vh;
        width: 30px;
    }
</style>
