<template>
  <div class="pclass">

      <div class="form-group" v-for="(i,k) in list">
        <label for="input_name">用户名--{{i.user}}</label>
        <input disabled type="text" class="form-control" :value="i.content">
      </div>
      
      <div class="header container">
    <div class="page-header">
       <h4 class="font">发表评论</h4>
    </div>
  </div>

      <div class="comments container">
 
      <div class="form-group">
        <label for="input_name">你的大名</label>
        <input type="text" class="form-control" required minlength="2" maxlength="10" id="input_name" name="name" placeholder="请写入你的姓名"
        v-model="user">
      </div>
      <div class="form-group">
        <label for="textarea_message">留言内容</label>
        <textarea class="form-control" name="message" id="textarea_message" cols="30" rows="10" required minlength="5" maxlength="20"
        v-model="conter" placeholder="评论内容"></textarea>
      </div>
      <button type="submit" class="btn btn-success" @click="path">发表</button>
   
  </div>
  </div>
</template>

<script>

   
export default {
    name:'pl',
    data(){
        return{
            user:null,
            conter:null,
            list:[],    
           comments : [
  {
    name: '张三',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三2',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三3',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三4',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三5',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  }
]
        }
    },
    created(){
        this.loadComments()
    },
    methods:{
        path(){
           var comment = { id:Date.now(),user:this.user,content:this.conter };
            //从localStorage中获取所有的评论，如果获取到为空，则可以返回一个’【】‘，让JSON.parse去转换
            var list = JSON.parse(localStorage.getItem('cmts') || '[]');
            list.unshift(comment);
            //重新保存最新评论
            localStorage.setItem('cmts',JSON.stringify(list));
            this.user=this.conter='';
            this.loadComments()
        },
        loadComments(){
          var list = JSON.parse(localStorage.getItem('cmts') || '[]');
          this.list = list;
          //console.log(this.list)
       //     console.log( this.$bus.$emit('scrolltop'))
           // localStorage.clear()//删除所有数据
      }
    }
}
</script>

<style>
    .pclass{
       
    }
    .font{
       text-align: center;
    }
</style>
