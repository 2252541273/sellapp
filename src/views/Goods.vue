<template>
    <div class="goods">
        <div class="left">
            <ul class="center">
                <div @click="clickLeftTitle(index)" :class="{leftGoods:true,selected:index==curSelected}" v-for="(item,index) in list" :key="item.name">{{item.name}}</div>
            </ul>
        </div>
        <div class="right">
            <ul class="center">
                <div :id="index" class="right_list" v-for="(item,index) in list" :key="item.id">
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
                                    <Icon type="md-remove-circle" @click="sub"/>
                                    <span>1</span>
                                    <Icon type="md-add-circle" @click="add"/>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </ul>
        </div>
    </div>
</template>

<script>
    import {getGoods} from '../api/apis'
    import BScroll from "better-scroll";
    export default {
        data() {
            return {
                list:[],//食品数组
                curSelected:0,//新的索引，0默认索引
            }
        },
        created() {
            getGoods().then((res) => {
                //设置食品数组
                this.list = res.data.data;
                // console.log(res.data.data)
            })
        },
        mounted(){
            // 左边
            new BScroll(document.querySelector(".left"),{click:true});
            // 右边
            this.rightDiv=new BScroll(document.querySelector(".right"),{click:true});
        },
        methods:{
            clickLeftTitle(index){
                this.curSelected=index;
                // console.log(index)
                this.rightDiv.scrollToElement(document.getElementById(index),600);
            },
            sub(){
                console.log(111)
            },
            add(){
                console.log(222)
            }
        }
    }
</script>

<style lang="less" scoped>
    .selected{
        background-color: #fff;
    }
    .goods{
        height: 100%;
        display: flex;
        .left{
            width: 80px;
            height: 500px;
            border-right: 2px solid #dcdfdf;
            background-color: #f4f5f7;
            overflow: scroll;
            .leftGoods{
                height: 60px;
                text-align: center;
                padding: 0 8px;
                display: flex;
                align-items: center;
                border-bottom: 1px solid #dcdfdf;
            }
        }
        .right{
            flex: 1;
            height: 400px;
            overflow: scroll;
            .right_list{
                height: 100%;
                h5{
                    color: #979ea3;
                    background-color: #f3f6f6;
                    padding-left: 10px;
                    font-size: 16px;
                }
                .list_foods{
                    background-color: #fff;
                    display: flex;
                    justify-content: flex-start;
                    padding: 10px;
                    border-bottom: 1px solid #dcdfdf;
                    img{
                        width: 75px;
                        height: 75px;
                        margin-right: 10px;
                    }
                    div{
                        p:nth-child(1){
                            color: #0e151b;
                            font-size: 18px
                        }
                        div:nth-child(4){
                            display: flex;
                            span:nth-child(1){
                                font-size: 12px;
                                color: red;
                                font-weight: bold;
                            }
                            span:nth-child(2){
                                font-size: 16px;
                                color: red;
                                font-weight: bold;
                                margin-right: 5px;
                            }
                            span:nth-child(3){
                                color: #939ba1;
                                font-weight: bold;
                                text-decoration:line-through;
                            }
                            p{

                            }
                        }
                    }
                }
            }
        }
    }
</style>