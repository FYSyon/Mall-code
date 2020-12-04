<template>
<div>
    <top :da="['首页']"></top>
<!--滚动区域-->
    <matter></matter>

   <h_buttom/>
</div>
</template>

<script>
import top from '../Public/toplog.vue'
import matter from './couent.vue'
import h_buttom from './hbuttom.vue'
export default {
    name:"home",
    components:{
        top,
        matter,
        h_buttom
    },
 methods:{
    path2(){
      this.$router.push('/2')
    },
    path(){
      this.$router.push('/1')
    }
  }  
}
</script>

<style>

</style>
