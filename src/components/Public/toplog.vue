<template>
    <div class="top">
       <div name="left" v-for="(i,k) in da" :key="k"> 
           <div class="cursor" @click="calinde(k)"> {{i}} </div>
        </div>
    </div>    
</template>
<script>
export default {
    name:'toplog',
    props:{
        da:Array
    },
    methods:{
        calinde(a){
            switch(a){
                case 0:
                this.$router.go(-1)
                break;
                case 1:
                if(this.$route.path === gwc)return
                this.$router.replace('/home/0')
                break;
                case 2:
                this.$emit('offset')
            }
        }
    }
}
</script>
<style>
.top{
    width: 100%;
    height: 45px;
    background-color: pink;
    display: flex;
    position: fixed;
    z-index: 1;
    color:rgb(255, 255, 255);

}
.top div{
  flex: initial;
    margin: auto;
   
}
 .cursor{
     cursor:pointer;
 }
</style>
