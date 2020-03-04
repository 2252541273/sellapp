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
        },
        // 改变商品数量
        changeGoodsNum(state,obj){
            for(let tpobj of state.goodslist){
                for(let food of tpobj.foods){
                    if(food.name==obj.name){
                        food.num+=obj.val
                    }
                }
            }
        }
    },
    // vuex版计算属性
    getters:{
        getShopCarGoods(state){
            var arr=[];
            var names=[];
            for (let tpobj of state.goodslist) {
                for (let food of tpobj.foods) {
                    if (food.num > 0) {
                        if (!names.includes(food.name)) {
                            arr.push(food)
                            names.push(food.name)
                        }
                    }
                }
            }
            return arr
        }
    },
})