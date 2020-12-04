<template >
    <div :key="$route.fullPath" >
        <div class="back">
            <span @click="back"> < </span>
        </div>
       <toplog @beto="beto" :da="['商品','推荐','详情']" ></toplog>

        <better ref="better"   @scroll="scroll" :probeType='3' :pullUpLoad='true' class="bet2">
     
        <div class="">
            <deimg :params1="params1"  ></deimg>
        </div>

        <decount :params1="params1"></decount>

        <parse/>
        </better>
        
    </div>
</template>

<script>
import toplog from'@/components/Public/toplog.vue'
import deimg from './deimg.vue'
import decount from './decount.vue'
//import  dehchome from '@/components/vue/home/classhome/classhome.vue'          <dehchome ref="dehimg" @shuax='shuax'></dehchome>
import better from'@/components/Public/better-scroll.vue' 
import parse from '@/components/home/parse.vue'

//import vuebass from '@/views/uvebassviews/vuebassapp.vue'
export default {
    name:'details',
    components:{
        toplog,
        deimg,
        decount,
  //      dehchome,
        better,
      parse
    },
    data(){
        return{
            params1:0,
            probeshow:null,
            loadKey1:0,
            de:null,
           update:true,
           toparr:[0,],
        }
    },

    created(){
        
      console.log('creta'+this.$route.params.id)
     this.params1 =  parseInt(this.$route.params.id)
    },
    mounted(){
       this.de = this.debounce(this.$refs.better.refresh,200)
        this.$bus.$on('shuax4',()=>{
         this.de()
  
        })
    console.log('++++')
    this.$nextTick(()=>{
     //   console.log( this.$refs.dehimg.$el.offsetTop)取值错误
    })
        
    },
    methods:{
        beto(a){
            this.$refs.better.scrolltop(0,-this.toparr[a],100)
        },
        loadKey(){
  	   this.loadKey1 = new Date().getTime() // 获取当前时间戳
    },
        back(){
            this.$router.back()
        },
        scroll(conter){
            (-conter.y) >400 ? this.probeshow=true : this.probeshow=false
         //   console.log(conter.y)
        },
       debounce(fun,date){
            let timment;
           
            return (arg)=>{
                let rethis = this
                 
                if(timment) clearTimeout(timment)
                timment=setTimeout((...arg)=>{
                    console.log('hfjfhj')
                 //   console.log( this.$refs.dehimg.$el.offsetTop)
                 this.toparr[1]=this.$refs.dehimg.$el.offsetTop
                    fun.apply(rethis,arg)
                },date)
            }
        },
         updatehe(){
            this.de = this.debounce(this.$refs.better.refresh,200)
     
         this.de()
        console.log('dad')
   
        },
         shuax(a){
               this.$router.replace('/destils/'+a)
                  this.params1 =  parseInt(this.$route.params.id)
                 setTimeout(()=>{
                     this.$refs.better.refresh()
                     
                 },1100)
        },
    
       
    },
    

}
</script>

<style>
  .back{
      position: absolute;
      top: 10px;
      left: 30px;
      z-index: 6555;
  }
 
 
</style>
