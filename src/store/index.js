import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 1.创建一个vuex的数据仓库，用来存放所有需要交互的数据
// store每个vuex最核心的部分，数据仓库
export default new Vuex.Store({
    //  存放所有交互数据
    state:{
       goodslist:[]
    },
    // 改变，是改变state唯一的方式
    mutations:{
        initGoodsList(state,newArr){
            state.goodslist=newArr
        }
    },
    // vuex版计算属性
    getters:{

    },
})