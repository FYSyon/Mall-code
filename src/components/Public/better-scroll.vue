<template>
    <div class="wrap" ref="bet" >
        <div class="home">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import better from 'better-scroll'
export default {
    name:"better",
    data(){
        return{
            obj:null
        }
    },
    props:{
        probeType:{
            type:Number,
            default:0
        },
        pullUpLoad:{
            type:Boolean,
            default:false
        }
    },

    mounted(){
            let fn= this.debounce(this.refresh,100)
 
        this.obj=new better(this.$refs.bet,{
            //probeType是否持续监听怎么监听
            //probeType:this.probeType,
            //pullUpLoad:this.pullUpLoad //监听滑动到底部
            probeType:2,
            pullUpLoad:true            
        }),
        //监听滚动的位置
        this.obj.on('scroll',(Position)=>{
            //scroll这事件我已经定义再了this,$bus中
           // this.$emit('scroll',Position)
        }),
      //  /监听滑动到底部
        this.obj.on('pullingUp',()=>{
        //    this.$emit('pullingUp','aa')
            fn()
            setTimeout(()=>{
                this.obj.finishPullUp()//重型调用pullingUp
            },500)
        })
       //  console.log(this.obj)
    },
    methods:{
debounce(fun,date){
            let timment;
            return (arg)=>{
                let rethis = this
                if(timment) clearTimeout(timment)
                timment=setTimeout((...arg)=>{
                    fun.apply(rethis,arg),
                    this.$emit('height')
                },date)
            }
        },

        scrolltop(x,y,date=300){
            return this.obj.scrollTo(x,y,date)
        },
        refresh(){  
            this.obj.refresh()
             this.obj.refresh()
             //refesh()用来重新计算高度的
             //console.log(this.obj.refresh)
        },
        getscrool(){
            return this.obj.y
        }
    }
}
</script>

<style>
    .wrap{
        height: calc(100vh - 100px);     
      overflow: hidden;
        position: relative;
        
    }
    .home{
        position: absolute;
        right: 0;
        left: 0;
    }
</style>
