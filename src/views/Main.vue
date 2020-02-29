<template>
    <div class="main">
        <div class="header" :style="{backgroundImage:'url('+data.avatar+')'}">
            <div class="content">
                <div class="top">
                    <img :src="data.avatar" alt="">
                    <div>
                        <p><img src="../assets/images/brand@2x.png" alt="">{{data.name}}</p>
                        <p>{{data.description}}/{{data.deliveryTime}}分钟送达</p>
                        <p><img src="../assets/images/decrease_1@2x.png" alt="">{{data.supports[0].description}}</p>
                    </div>
                </div>
                <div class="bottom">
                    <div>
                        <img src="../assets/images/bulletin@2x.png" alt="">
                        <span>{{data.bulletin}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="router-link-div">
            <router-link to="/goods">商品</router-link>
            <router-link to="/evaluate">评价</router-link>
            <router-link to="/merchant">商家</router-link>
        </div>
        <!-- 二级路由出口 -->
        <router-view></router-view>
        <div class="shopCar">
            <div class="left">
                <div>
                    <img src="../assets/images/car.png" alt="">
                </div>
                <p><span>￥0</span><span>|</span><span>另需配送费{{data.deliveryPrice}}元</span></p>
            </div>
            <div class="right">￥{{data.minPrice}}起送</div>
        </div>
    </div>
</template>

<script>
import{getSeller}from'../api/apis'
    export default {
        data(){
            return{
                data:{supports:[{description:''}]}
            }
        },
        created(){
            // 发送出事请求
            getSeller().then((res)=>{
                console.log(res.data.data)
                this.data=res.data.data//保存数据
            })
        }
    }
</script>

<style lang="less" scoped>
    html,body{
        height: 100%;
    }
    .main{
        height: 100%;
        display: flex;
        flex-direction: column;
        .header{
            height: 140px;
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            .content{
                height: 100%;
                background-color: rgba(0,0,0,0.5);
                // filter: blur(1px);
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                .top{
                    display: flex;
                    padding: 10px 20px;
                    img{
                        width: 72px;
                        height: 72px;
                    }
                    div{
                        color: #fff;
                        margin-left: 20px;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-around;
                        p:nth-child(1){
                            height: 30px;
                            line-height: 30px;
                            font-size: 20px;
                            font-weight: 900;
                            display: flex;
                            justify-content: space-around;
                            img{
                                width: 38px;
                                height: 24px;
                                margin-top: 5px;
                                margin-right: 5px;
                            }
                        }
                        p:nth-child(2){
                            font-size: 16px;
                        }
                        p:nth-child(3){
                            height: 30px;
                            line-height: 30px;
                            display: flex;
                            justify-content: flex-start;
                            img{
                                width: 15px;
                                height: 15px;
                                margin-top: 7px;
                                margin-right: 5px;
                            }
                        }
                    }
                }
                .bottom{
                    background-color: rgba(0,0,0,0.6);
                    div{
                        font-size: 16px;
                        color: #fff;
                        width: 100%;
                        overflow:hidden;
                        white-space:nowrap;
                        text-overflow:ellipsis;
                        padding: 0 10px;
                        img{
                            width: 32px;
                            height: 16px;
                            margin-right: 5px;
                        }
                    }
                }
            }
        }
        .router-link-div{
            height: 30px;
            line-height: 30px;
            display: flex;
            justify-content: space-around;
            flex: 1;
        }
        .router-link-active {
            color: red;
        }
    }
    .shopCar{
        width: 100%;
        height: 60px;
        line-height: 60px;
        position: fixed;//脱离文档流-相对浏览器定位
        bottom: 0;
        background-color: #141c27;
        display: flex;
        justify-content: space-between;
        .left{
            width: 70%;
            div{
                width: 60px;
                height: 60px;
                background-color: #141c27;
                border-radius:50%;
                position: absolute;
                bottom: 16px;
                left: 16px;
                text-align: center;
                img{
                    width: 50px;
                    height: 50px;
                    vertical-align: middle;
                }
            }
            p{
                margin-left: 80px;
                span:nth-child(1){
                    color: #929597;
                    font-size: 18px;
                    font-weight: bold;
                    margin-right: 10px;
                }
                span:nth-child(2){
                    color: #2b3a3f;
                    font-size: 18px;
                    margin-right: 10px;
                }
                span:nth-child(3){
                    color: #8c949a;
                    font-size: 16px;
                    margin-right: 10px;
                }
            }
        }
        .right{
            width: 30%;
            text-align: center;
            font-size: 16px;
            font-weight: bold;
            color: #929597;
            background-color: #2a353a;
        }
    }
</style>