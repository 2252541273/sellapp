<template>
    <div class="evaluate">
        <div class="top">
            <div class="topLeft">
                <p>3.9</p>
                <p>综合评分</p>
                <p>高于周边商家69.2%</p>
            </div>
            <div class="topright">
                <p>
                    <span>服务态度</span>
                    <span>
                        <Icon type="md-star" />
                        <Icon type="md-star" />
                        <Icon type="md-star" />
                        <Icon type="md-star" />
                        <span><Icon type="md-star" /></span>
                    </span>
                    <span>3.9</span>
                </p>
                <p>
                    <span>服务态度</span>
                    <span>
                        <Icon type="md-star" />
                        <Icon type="md-star" />
                        <Icon type="md-star" />
                        <Icon type="md-star" />
                        <span><Icon type="md-star" /></span>
                    </span>
                    <span>4.0</span>
                </p>
                <p>
                    <span>送达时间</span>
                    <span>44分钟</span>
                </p>
            </div>
        </div>
        <div class="box"></div>
        <div class="btn">
            <div>
                <Button>全部</Button>
                <Button>满意</Button>
                <Button>不满意</Button>
            </div>
        </div>
        <div class="eva">
            <Icon type="md-checkmark-circle" />
            <span>只看有内容评价</span>
        </div>
        <div class="bottom" v-for="item in list" :key="item.id">
            <img :src="item.avatar" alt="">
            <div>
                <div>
                    <p>{{item.username}}</p>
                    <p>{{item.rateTime}}</p>
                </div>
                <p>
                    <span>
                        <Icon type="md-star" />
                        <Icon type="md-star" />
                        <Icon type="md-star" />
                        <Icon type="md-star" />
                        <span><Icon type="md-star" /></span>
                    </span>
                    <span>{{item.deliveryTime}}分钟送达</span>
                </p>
                <p>{{item.text}}</p>
                <div>
                    <Icon type="md-thumbs-up" />
                    <p v-for="v in item.recommend" :key="v">{{v}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import{getRatings}from'../api/apis'
    export default {
        data(){
            return{
                list:[]
            }
        },
        created(){
            // 发送出事请求
            getRatings().then((res)=>{
                // console.log(res.data.data)
                this.list=res.data.data//保存数据
            })
        }
    }
</script>

<style lang="less" scoped>
    html,body{
        height: 100%;
    }
    .evaluate{
        // flex: 1;
        overflow: scroll;
        .top{
            display: flex;
            padding: 20px 0;
            border-top: 1px solid #e7e7e7;
            border-bottom: 1px solid #e7e7e7;
            .topLeft{
                width: 40%;
                text-align: center;
                border-right: 1px solid #e6e6e6;
                p:nth-child(1){
                    font-size: 30px;
                    color: #fe9b00;
                }
                p:nth-child(2){
                    color: #070f15;
                    font-size: 18px;
                }
                p:nth-child(3){
                    color: #959a99;
                }
            }
            .topright{
                width: 60%;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                padding: 0 10px;
                p:nth-child(1){
                    span:nth-child(1){
                        font-size: 16px;
                        color: #070f15;
                    }
                    span:nth-child(2){
                        color: #fe9b00;
                        font-size: 20px;
                        margin: 0 5px 0 5px;
                        span{
                            color: #d4d7d9;
                        }
                    }
                    span:nth-child(3){
                        color: #fe9b00;
                    }
                }
                p:nth-child(2){
                    span:nth-child(1){
                        font-size: 16px;
                        color: #070f15;
                    }
                    span:nth-child(2){
                        color: #fe9b00;
                        font-size: 20px;
                        margin: 0 5px 0 5px;
                        span{
                            color: #d4d7d9;
                        }
                    }
                    span:nth-child(3){
                        color: #fe9b00;
                    }
                }
                p:nth-child(3){
                    span:nth-child(1){
                        font-size: 16px;
                        color: #070f15;
                    }
                    span:nth-child(2){
                        color: #959a99;
                        margin-left: 8px;
                    }
                }
            }
        }
        .box{
            height: 30px;
            background-color: #f3f6f6;
            border-top: 1px solid #e7e7e7;
            border-bottom: 1px solid #e7e7e7;
        }
        .btn{
            padding: 20px;
            div{
                border-bottom: 1px solid #e7e7e7;
                .ivu-btn{
                    margin: 0 10px 20px 0;
                }
                .ivu-btn:nth-child(1){
                    color: #070f15;
                    background-color: #00a1dc;
                }
                .ivu-btn:nth-child(2){
                    color: #070f15;
                    background-color: #cceef7;
                }
                .ivu-btn:nth-child(3){
                    color: #070f15;
                    background-color: #e9ecec;
                }
            }
        }
        .eva{
            padding: 0 20px 20px 20px;
            font-size: 20px;
            border-bottom: 1px solid #e7e7e7;
        }
        .bottom{
            padding: 20px 20px 0 20px;
            display: flex;
            justify-content: flex-start;
            img{
                width: 40px;
                height: 40px;
                border-radius:50%;
            }
            div:nth-child(2){
                width: 100%;
                margin-left: 10px;
                div:nth-child(1){
                    width: 100%;
                    display: flex;
                    p:nth-child(1){
                        width: 50%;
                        text-align: left;
                        color: #070f15;
                    }
                    p:nth-child(2){
                        width: 50%;
                        text-align: right;
                        color: #8e9191;
                    }
                }
                p:nth-child(2){
                    span:nth-child(1){
                        color: #fe9b00;
                        span{
                            color: #d4d7d9;
                        }
                    }
                }
                p:nth-child(3){
                    color: #061116;
                }
                div:nth-child(4){
                    display: flex;
                    .ivu-icon{
                        color: #07a3d7;
                        margin-right: 5px;
                    }
                    p{
                        width: 50px;
                        height: 20px;
                        color: #93979d;
                        display: flex;
                        justify-content: flex-start;
                        text-align: left;
                        overflow: hidden; 
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        border: 1px solid #e8e8e8;
                        margin-right: 5px;
                    }
                }
            }
        }
    }
</style>