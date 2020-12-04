<template>
    <div class="backgroun">
    <slot></slot>
    </div>
</template>
<script>
export default {
    name:'buttom-list'    
}
</script>
<style>
    .backgroun{
        background-color:rgb(247, 243, 239);
        height: 60px;
        display:flex;
        position: fixed;
       right: 0px;
       left: 0px;
        bottom: 0px;
        box-shadow: 0 -2px 2px rgb(197, 194, 194);
    }
    
</style>
