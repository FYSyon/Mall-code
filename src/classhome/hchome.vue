<template>
    <div class="hchome">
        <homeclass>
            <!--
 <img  v-for="i in dataarr1" :src='require("@/assets/img/homeimg/"+i.name+".jpg"  )' :slot='"cimg"+i.index' alt=""> 
           -->
       
        <!--
            <img  v-for="i in dataarr1" :src="require('@/assets/img/homeimg/y2.jpg')" :slot='"cimg"+i.index' alt="">
             <img  v-for="i in dataarr1" :src='i.src' :slot='"cimg"+i.index' alt=""> 
           <img   src="~@/assets/img/homeimg/y2.jpg" slot="cimg1" alt="">
             <span slot="cspan2"> aa</span>
        -->
        </homeclass>
        <div class="but">
        <button @click="shuax" type="button" class="btn btn-primary btn-lg btn-block">下一页</button>
        </div>
    </div>
</template>

<script>
import homeclass from '@/components/vue/home/classhome/classhome.vue'
export default {
    name:"hchome",
    components:{
        homeclass
    },
    data(){
        return{
            a:'aaa',
            dataarr1:null,
             dataarr2:[{name:'y4'}]
          /*  dataarr2:[
                {src:require('@/assets/img/homeimg/y2.jpg')}
          ]*/

        }
    },
   /* mounted(){
        this.dataarr1=this.$parent.$data.reqdata
       // console.log(this.$parent.$data.reqdata[0].src)
    },*/
    methods:{
        sx(){
             this.dataarr1=this.$parent.$data.reqdata
             console.log(this.dataarr1[0].src)
             return this.dataarr1
        },
    /*   shuax(){
            this.$parent.huoqu2()
        }
    */
    }
    
}
</script>

<style>
    .hchome{
        margin-top: -50px;
    }
    .but{
        position: relative;
    }
    .but button{
        position: absolute;
        top: -80px;
    }
</style>
