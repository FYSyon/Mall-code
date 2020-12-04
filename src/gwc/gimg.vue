<template>
    <div class="top2">
      
        <div class="gli">
            {{this.date1.checked}}
                 <input type="checkbox" @click="checked" :checked="this.date1.checked" class="radio">            
            <img :src='require("@/assets/img/homeimg/y"+this.date1.id+".jpg")' alt="">
            <button @click="idadd">+</button>   
            <span>数量{{idlength()}}</span>
            <button @click="idread">-</button>
            <span>金额{{fmani|filter2}}</span>
            <button @click="reamde" class="reamd">删除</button>
        </div>
    </div>
</template>

<script>
//import better from'@/pilck/better-scroll.vue' 

//import {debounce} from '@/views/uvebassviews/debounce.js'
import better from'@/components/Public/better-scroll.vue' 

import {mapGetters} from 'vuex'
export default {
    name:'gimg',
    components:{
        better
    },
    props:{
        date1:Object,
        index:Number,
       
    },
    computed:{
        ...mapGetters([
            'length'
        ]),
        fmani:function(){
            this.$emit('sum',parseInt(this.date1.mani*this.date1.count))
            return this.date1.mani*this.date1.count
                   
        },
      
    },
     filters:{
                filter2(date){
                    return '￥'+date.toFixed(2)
                }
        },
    methods:{
        idlength(){
            console.log(this.index)
            console.log(this.date1)
            return this.date1.count
        },
        idadd(){
         //   this.date1.count+=1
         
           //要通过 mutations来修改state的变量  
           //this.$store.state.date1[this.index].count+=1
           this.$store.commit('idadd',this.index)
        },
        idread(){
        //    this.date1.count-=1
         //    this.$store.state.date1[this.index].count-=1
           this.$store.commit('readm',this.index)         
            
        },
        reamde(){
           // this.$store.state.date1.splice(this.index,1)
             this.$store.commit('reamde',this.index)       
        },
        checked(){
            this.date1.checked = !this.date1.checked
        }
    }
}
</script>

<style>
    .top2{
        position: relative;
        top: 6vh
    }
    .radio{
        transform:scale(2);
        appearance: radio;
        margin-left: 5px;
        margin-right: 8px;
        margin-top: 15px;
    }
    .gli{
        width: 100%;
        height: 100px;
        box-shadow: 0 2px 5px rgb(145, 142, 142);
        overflow: hidden;
        margin-top: 5px
    }
     
    .gli img{
        width: 40%;
        height: 100%;
    }
    .reamd{
        color: red;
     
        position: relative;
        left: 280px;
        top: -30px;
    }
</style>
