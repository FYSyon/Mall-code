<template>
    <div class="buttomlog">
        <input type="checkbox" class="radio" :checked="this.checked1" @click="check">
        <span>全选</span>
      <span>{{this.checked1}}</span>        
         <span style="margin-left: 50%;">总记：{{this.sum}}</span>
    </div>
</template>

<script>
export default {
    name:'bu',
    props:{
        sum:Number,
        checked1:Boolean
    },
    methods:{
        check(){
            console.log('aa')
        //  取反  this.$store.state.date1.filter(a=>{a.checked = !a.checked})
        if(this.checked1){
            //全不选
            this.$store.state.date1.filter(a=>a.checked=false)
        }else{
            //全选
            this.$store.state.date1.filter(a=>a.checked=true)   
        }
        }
    }
}
</script>

<style>

    .buttomlog{
        position: fixed;
        bottom: 0px;
        width: 100%;
        height: 44px;
        background-color:red;
    }
    .hsum{
        margin-left: 50%;
    }
</style>
