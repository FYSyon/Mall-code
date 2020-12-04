<template>
<div>
    <classimg top=100>
        <img  src="~@/assets/img/homeimg/h1.png" alt="" slot="classimg1" >
        <img  src="~@/assets/img/homeimg/h2.png" alt="" slot="classimg2" >
        <img style="" src="~@/assets/img/homeimg/h3.png" alt="" slot="classimg3" >
        <img  src="~@/assets/img/homeimg/h4.png" alt="" slot="classimg4" >
        <img  src="~@/assets/img/homeimg/h5.png" alt="" slot="classimg5" >
        <img  src="~@/assets/img/homeimg/h6.png" alt="" slot="classimg6" >
         
    </classimg>
   
</div>
</template>

<script>
import classimg from './class.vue'

export default {
    name:"hclass",
    components:{
        classimg,
    }
}
</script>

<style>

</style>
