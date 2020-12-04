<template>
<div class="wrap2">
    <div class="chome">
        <div class="cimg1">
        <img v-for="(i,k) in arr" alt="" v-lazy='require("@/assets/img/homeimg/"+i.name+".jpg")' @load="shuax2" @click="submit(k+1)" :key="k">
       <button :disabled="ifindex"  @click="shuax" type="button" class="btn btn-primary btn-lg btn-block">下一页</button>
        </div>
    </div>
</div>
</template>

<script>
//import Better from 'Better-scroll'

export default {
    name:"classhome",
    data(){
        return{
            ifindex:null,
            buif:'flase',
            date:null,
            arr:[
				{ name:'y1', "index":"1" },
				{ name:'y2', "index":"2"},
				{ name:'y3', "index":"3" },
				{ name:'y4', "index":"4" },
				{ name:'y5', "index":"5"},
                { name:'y6', "index":"6" },
             
				]
        }
    },
    methods:{
     
        shuax(){
            this.arr.push(...[{ name:'y7', "index":"7" },
				{ name:'y8', "index":"8"},
                { name:'y9', "index":"9" },
                { name:'y10', "index":"10" }])
                this.ifindex++
                if(this.ifindex==2){
                    this.ifindex=true
                    console.log(this.ifindex)
                }
        },
        shuax2(){
   
      //        this.$bus.$emit('shuax2')
       //       this.$bus.$emit('shuax4')
   
        },
        submit(a){
        
           this.$router.replace('/destils/'+a)
            //this.$emit('shuax',a)
        },

        
    },
    
}
</script>

<style>
.cimg1 img{
   margin-left: 10px;
    width: 45%;
   border-radius: 10%;
   cursor: pointer;
}
</style>
