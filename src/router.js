import   VueRouter  from "vue-router"
import vue from 'vue'
vue.use(VueRouter)

 import aaa from './components/home/aaa.vue'
 import bbb from './components/home/couent.vue'
 import pl from './classhome/pclass.vue'
 import tj from './classhome/classhome.vue'
 import xx from './classhome/xx.vue'
//destils
import destils from './components/destils/destils.vue'

import gwc from '@/gwc/gwc.vue'
let router = new VueRouter({
    routes:[
        {path:'',redirect:'/home'},
        {path:'/home',component:aaa,
        children:[
            {path:'',redirect:'./0'},
            { path:'0',component:tj },
            { path:'1',component:pl },
            { path:'2',component:xx },
        ]
    },
        {path:'/gwc',component:gwc},
        {path:'/destils/:id',component:destils},

    /*    {path:'',redirect:'/home'},
        {path:'/home',component:Home,
        children:[
           
            { path:'0',component:hchome },
            { path:'1',component:pclass },
            { path:'2',component:tuiclass },
         ]
    },
        {path:'/gwc',component:gwc},
        {path:'/my',component:my,
        children:[
            
        ]
    },
    {path:'/login',component:login},
    {path:'/update',component:update},
    {path:'/destils/:id',component:destils},

       */
    ],
 mode:'hash',
 
})
export default router