import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 1.创建一个vuex的数据仓库，用来存放所有需要交互的数据
// store每个vuex最核心的部分，数据仓库
export default new Vuex.Store({
    //  存放所有交互数据
    state:{
       goodslist:[],
       foodsList:[]
    },
    // 改变，是改变state唯一的方式
    mutations:{
        initGoodsList(state,newArr){
            state.goodslist=newArr
        },
        subNum(state,newArr){
            state.foodsList=newArr
        },
        addNum(state,newArr){
            state.foodsList=newArr
        },
    },
    // vuex版计算属性
    getters:{
        getGoods(state){
            var arr=[];
            for (let obj of state.goodslist) {
                obj.foods.map(v=>{
                    if(v.num>0){
                        arr.push(v);
                    }
                })
            }
            console.log(arr)
            return arr
        }
    },
})