<template>
    <div class="tosi" v-show="this.show">
        <h6>{{this.margin}}</h6>
    </div>
</template>

<script>
export default {
    name:'tosi',
    props:{
        show:{
            type:Boolean,
            default:false
        },
        margin:{
            type:String,
            default:'这都是自己的努力'
        }
    }
}
</script>

<style>
    .tosi{
        width: 150px;
        height: 40px;
        background-color: rgba(151, 138, 138, 0.5);
        position: absolute; 
        left: 20%;
        z-index: 55;
    }
    .tosi h6{
        line-height: 40px;
        text-align: center;
    }
</style>
