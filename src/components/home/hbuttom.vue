<template>
    <div>

           <buttom>
  <buttomke path2="/home">
  <img src="~@/assets/img/buttomimg/menu2.png"  slot="img" alt="加载不出"  >
    <samp slot="fomt">首页</samp>
    </buttomke>

    <buttomke path2="/gwc">
     <img src="~@/assets/img/buttomimg/menu3.png"  slot="img" alt="加载不出"  >
   <samp slot="fomt">购物车</samp>
    </buttomke>

    <buttomke path2="/my">
     <img src="~@/assets/img/buttomimg/menu5.png"  slot="img" alt="加载不出"  >
    <samp slot="fomt">个人中心</samp>
    </buttomke>
    </buttom>

    </div>
</template>

<script>
import buttom from './buttom.vue'
import buttomke from './buttonke.vue'
export default {
    name:'h_buttom',
    components: {
    buttom,
    buttomke
  }
}
</script>

<style>

</style>
