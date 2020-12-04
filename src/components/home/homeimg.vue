<template>
<div class="body">
    <div class="himg" >
   <slot name="img1">
       <img src="~@/assets/img/homeimg/1.png" alt="">
    </slot>
 
    </div>

</div>
</template>
<script>
export default {
 name: 'homeimg',
   
}
</script>
<style >


.himg{
  position: relative;
}
 .himg img{
    width: 100%;
    height: 100%;
}
</style>