<template>
    <div :key="$route.fullPath">
      <toplog :da="['<','首页','推荐']" @offset='offset'/>
    <div class="x_wrap2">
    <scroll ref="scroll" @height='height'>
      <deimg :params1='this.id'/>
      <decount/>
      <tj ref='tj' />
    </scroll>
    </div>
    <h_buttom/>
    </div>
</template>

<script>
import toplog from'@/components/Public/toplog.vue'
import deimg from './deimg.vue'
import decount from './decount.vue'
import tj from '@/classhome/classhome.vue'
import scroll from '@/components/Public/better-scroll.vue'

import h_buttom from '@/components/home/hbuttom.vue'

export default {
    name:'destils',
    data(){
        return{
            imgheigft:0,
        }
    },
    components:{
        toplog,
        deimg,
        decount,
        tj,
        scroll,
        h_buttom
    },
    mounted(){
        this.$nextTick(
            ()=>{
            this.$refs.scroll.refresh()
            }
        )
    
    },
    computed:{
        id(){
         return 1*this.$route.params.id
        }
    },
    methods:{
        offset(){
            this.$refs.scroll.scrolltop(0,-this.imgheigft)
        },
        height(){
        this.imgheigft=this.$refs.tj.$el.offsetTop
        console.log(this.$refs.tj.$el.offsetTop)
        }
    }
}
</script>

<style>
    .x_wrap2{
        height: 100vh;
        padding-top: 40px;
    }
</style>
