<template>
<div class="coutent">

<scroll>
   <himg/>
   <hzclass/>
   <parse v-for="(v,i) in arr" :arr=v.v :key="i" :index=i />
     <router-view ></router-view>
</scroll>

</div>
</template>

<script>
import scroll from '../Public/better-scroll.vue'

import himg from '@/components/home/himg.vue'
import hzclass from '@/components/home/hzclass.vue'
import parse from '@/components/home/parse.vue'

export default {
    name:"matter",
    components:{
        himg,
        hzclass,
        parse,
        scroll
    },
    data(){
        return{
            arr:[
                {v:'推荐',i:0},
                {v:'评论',i:1},
                {v:'详情',i:2},
            ],
        }
    },
    methods:{
        
    },
}
</script>

<style>
.coutent{
    height:85vh;
    padding-top: 40px;
}
</style>
