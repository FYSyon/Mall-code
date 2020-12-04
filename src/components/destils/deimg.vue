<!--当发现点击一个图片后点击其他图片不能切换有可能是keep-alive缓存了，没有再去给给变量新的值，所以我们要给它加上一个 exclude-->

<template>
    <div class="deimg">
            <img :src='require("@/assets/img/homeimg/y"+this.id+".jpg")'  alt="">
    </div>
</template>

<script>
export default {
    name:'deimg',
    components:{
    },
    props:{
        params1:Number
    },
    data(){
        return{
            
        }
    },

    methods:{
       
    },
   computed:{
       id(){
        return 1*this.$route.params.id
       }
   }
}
</script>

<style>
    .deimg{
        width: 100%;
        height: 30vh;
    }
    .deimg img{
        width: 100%;
        height: 100%;
    }
</style>
