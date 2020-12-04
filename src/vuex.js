import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
let store = new Vuex.Store({
    state:{
        date1:[]
    },
    mutations:{
        idadd(state,pas){
            state.date1[pas].count+=1
			Vue.$set(state.date1,pas,state.date1.count+1)
			state.date1.splice(pas,1,newvale)
         },
         readm(state,pas){
            state.date1[pas].count-=1
         },
         reamde(state,pas){
             state.date1.splice(pas,1)
         }
    },
    actions:{
        add(context,pas){
            return new Promise((res,rej)=>{
                let pid = context.state.date1.findIndex((a)=>{
                    return a.id === pas.id
                 })
                 if(pid !== -1){
                     console.log(pid)           
                     context.commit('idadd',pid)
                     res('数量加一')
                 }
                 else{
                     context.state.date1.push(pas)
                     res('购买成功')
                 }
            })
            
        },
    },
    getters:{
        length(state){
            return state.date1.length
        },
    }
})
export default store