<template>
    <div class="count">

        <h4>
        夏日冰纷纯真果汁无添加限量抢购
        </h4>
        <slot name="mani" v-for="(i) in date1" >
            <h5>{{i.hyd}}</h5>
            <h5>{{i.yj}}</h5>
            <span>快递:{{i.kdj}}</span>
        </slot>
    <!--
        <tosi :show='this.show' :margin='this.margin'></tosi>
    -->
        
        <div class="boss">
            <div class="delogin">
              
                <img src="~@/assets/img/homeimg/yh1.jpg" alt="">
                <span>饮料旗舰店</span>
               
            </div>
            <div class="coubut">
                  
            <button type="button" class=" btn btn-default">全部商品</button>
            <button type="button" class="btn btn-default" @click="replace">进店看看</button>
            <button  type="button" class="btn btn-default gm" @click="submit2" >购买</button>
            </div>
            
        </div>
    </div>
</template>

<script>
import tosi from'@/components/Public/tosi.vue'

export default {
    name:'decount',
    data(){
        return{
            date1:[
                {hyd:'14.90',yj:'20.9',kdj:'00'}
            ],
            show:false,
            margin:null,
            
        }
    },
    components:{
         tosi
    },
    props:{
        bosssrc:String,
        bosscou:String,
    //    params1:Number,
    },
    computed:{
        params1(){
           return 1*this.$route.params.id
        }
    },
    methods:{
        replace(){
            this.$router.replace('/home/0')
        },
        submit2(){
            let obj2 = {
                id:this.params1,
                mani:'16',
                count:1,
                 checked:true
            }
           this.$store.dispatch('add',obj2).then(a=>{console.log(a)})
            this.show = true
            setTimeout(() => {
                this.show=false
            }, 1000);
        },
      
    }
}
</script>

<style>
    .count{
        box-shadow: 0 5px 5px rgb(204, 203, 203)
    }
    .count span,h5{
        display: inline;
    }
    .count h5:nth-child(3){
        margin-left: 20px;
        text-decoration:line-through;
        color: red;
    }
    .count>span{
        margin-left: 40%;
    }
    .boss{
        position: relative;
    }
    .delogin{
        width: 60%;
        height: 10%;
        padding-top: 5%;
        display: inline-block;
    }
     .delogin img{
        width:40%;
        height: 100%;
        border-radius: 50%;
    }
    .delogin>span{
        margin-left: 10px;
    }
    .coubut{
        width: 40%;
        position: absolute;
        top: 15%;
        left: 60%;
    }
    .coubut>button:nth-child(1){
        background-color: red;
        color: aliceblue;
    }
    .coubut>button:nth-child(2){
        background-color: rgb(136, 132, 132);
        color: aliceblue;
    }
    .gm{
        position: relative;
        width: 10vw;
        height: 10vh;
    }
</style>
