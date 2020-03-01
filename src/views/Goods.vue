<template>
    <div class="goods">
        <div class="goodsList">
            <div class="left">
                <ul class="center">
                    <div @click="clickLeftTitle(index)" :class="{leftGoods:true,selected:index==curSelected}"
                        v-for="(item,index) in goodslist" :key="item.name">{{item.name}}</div>
                </ul>
            </div>
            <div class="right">
                <ul class="center">
                    <div :id="index" class="right_list" v-for="(item,index) in goodslist" :key="item.id">
                        <h5>{{item.name}}</h5>
                        <div v-for="child in item.foods" :key="child.id" class="list_foods">
                            <img :src="child.icon" alt="">
                            <div>
                                <p>{{child.name}}</p>
                                <p>{{child.description}}</p>
                                <p>月售{{child.sellCount}}好评{{child.rating}}</p>
                                <div>
                                    <span>￥</span><span>{{child.price}}</span>
                                    <span>{{child.oldPrice? child.oldPrice:''}}</span>
                                    <p>
                                        <Icon type="md-remove-circle" @click="sub" />
                                        <span>{{child.num}}</span>
                                        <Icon type="md-add-circle" @click="add" />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import {getGoods} from '../api/apis'
    import BScroll from "better-scroll";
    export default {
        data() {
            return {
                curSelected: 0, //新的索引，0默认索引
            }
        },
        created() {
            getGoods().then(res => {
                console.log(res.data.data)
                //要改变vuex中的内容！！commit + mutation
                this.$store.commit('initGoodsList', res.data.data)
            })
        },
        mounted() {
            // 左边
            new BScroll(document.querySelector(".left"), {
                click: true
            });
            // 右边
            this.rightDiv = new BScroll(document.querySelector(".right"), {
                click: true,
                probeType: 3
            });
            this.rightDiv.on('scroll', ({y}) => {
                let _y = Math.abs(y)
                // console.log(_y)
                for(let divObj of this.getDivMath){
                    if(_y>=divObj.min&&_y<divObj.max){
                        this.curSelected=divObj.index
                        return
                    }
                }
            })
        },
        methods: {
            clickLeftTitle(index) {
                this.curSelected = index;
                // console.log(index)
                this.rightDiv.scrollToElement(document.getElementById(index), 600);
            },
            sub() {
                console.log(111)
            },
            add() {
                console.log(222)
            }
        },
        computed:{
            getDivMath(){
                let arr=[]
                let total=0//之前的div所有高度累加
                // 获取每一个div高度，根据数组索引获取每一个div高度
                for(let i=0;i<this.list.length;i++){
                    let curDivHeight=document.getElementById(i).offsetHeight
                    arr.push({min:total,max:total+curDivHeight,index:i})
                    total+=curDivHeight
                }
                console.log(arr)
                return arr
            },
            //获取vuex中的共享数据
            goodslist(){
                return this.$store.state.goodslist
            }
        }
    }
</script>

<style lang="less" scoped>
    html,
    body {
        height: 100%;
    }

    .selected {
        background-color: #fff;
    }

    .goods {
        height: 100%;
        display: flex;
        // flex: 1;

        .goodsList {
            height: 100%;
            display: flex;
            flex: 1;
            .left {
                width: 80px;
                height: 100%;
                border-right: 2px solid #dcdfdf;
                background-color: #f4f5f7;
                overflow: scroll;

                // display: flex;
                .leftGoods {
                    height: 80px;
                    text-align: center;
                    padding: 0 8px;
                    display: flex;
                    align-items: center;
                    border-bottom: 1px solid #dcdfdf;
                }
            }

            .right {
                flex: 1;
                height: 100%;
                overflow: scroll;

                .right_list {
                    height: 100%;

                    h5 {
                        color: #979ea3;
                        background-color: #f3f6f6;
                        padding-left: 10px;
                        font-size: 16px;
                    }

                    .list_foods {
                        background-color: #fff;
                        display: flex;
                        justify-content: flex-start;
                        padding: 10px;
                        border-bottom: 1px solid #dcdfdf;

                        img {
                            width: 75px;
                            height: 75px;
                            margin-right: 10px;
                        }

                        div {
                            p:nth-child(1) {
                                color: #0e151b;
                                font-size: 18px
                            }

                            div:nth-child(4) {
                                display: flex;

                                span:nth-child(1) {
                                    font-size: 12px;
                                    color: red;
                                    font-weight: bold;
                                }

                                span:nth-child(2) {
                                    font-size: 16px;
                                    color: red;
                                    font-weight: bold;
                                    margin-right: 5px;
                                }

                                span:nth-child(3) {
                                    color: #939ba1;
                                    font-weight: bold;
                                    text-decoration: line-through;
                                }

                                p {
                                    span {
                                        margin-left: 5px;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>