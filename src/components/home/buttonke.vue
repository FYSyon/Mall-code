<template>
    <div class="button-fomt" @click="path">
    <div class="buttomimg"> <slot name="img"></slot> </div>
   <div :class="[{'from-color':isactiov} ,{'a':true}] "> <slot name="fomt"></slot></div>

  
    </div>
</template>
<script>
export default {
    name:'buttonke',
  // props:['path2'],
  props:{
      path2:{
          type:String
      }
  },
     computed:{
         isactiov(){
   //          console.log(this.$route.path.indexOf(this.path2)!==-1)
       return this.$route.path.indexOf(this.path2)!==-1
         }
     },
    methods:{
        path(){
            this.$router.push(this.path2)
        },
        active(){
     //       console.log('ac')
    //        if(this.isactiov){return 'from-color'}
        }
    }
}
</script>
<style>
.button-fomt{
     display:flex;
        flex:1;
       text-align: center;
       display: block;
  
    }
.from-color{
    color: red;
 
}
.a{ font-size: 15px;
    margin-top: -5px;
}
.buttomimg img{
    width: 40px;
    height: 40px;

}
</style>
