<template>
    <div>
        <toplog :da="['首页','购物车'+length]"></toplog>
        <better>
        <gimg v-for="(tin,index) in date1" :key="index" :date1="tin" :index="index" ></gimg>
        </better>
        <buttonlog :sum='sum' :checked1="checked1"></buttonlog>
    </div>
</template>

<script>
import toplog from'@/components/Public/toplog.vue'

import gimg from './gimg.vue'
import  buttonlog from './buttonlog.vue'
import {mapGetters} from 'vuex'
import better from'@/components/Public/better-scroll.vue' 

//import {debounce} from './debounce.js'
export default {
    name:'gwc',
    data(){
        return{
            date1:[],
            hsum:0
        }
    },
    computed:{
        ...mapGetters([
            'length',
            
        ]),
     sum(){
                  
               /*    for(i in this.date){
                        sumprice+=this.date[i].price * this.date[i].count
                   }
                */  let sumprice=0;
                   for(let i of this.date1){
                    sumprice+=i.mani * i.count
                   }
                   return sumprice
                },
        checked1(){
            if(this.date1.length === 0) return
            return !this.date1.find(a=>!a.checked)
        }
    },
    methods:{
        
    },
    components:{
        gimg,
        toplog,
        better,
        buttonlog
    },
    activated(){
        console.log('activegewc')
        this.date1 = this.$store.state.date1
   
    },
    deactivated(){
        console.log('deactvie')
    }
}
</script>

<style>
    .gli{
          overflow: hidden;
    }
    .gli img{
        width: 40%;
        height: 100%;
    }
</style>
