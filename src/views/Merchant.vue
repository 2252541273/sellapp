<template>
    <div class="merchant">
        <div class="top">
            <div class="topLeft">
                <p>{{data.name}}</p>
                <p>
                    <span>
                        <Icon type="md-star" />
                        <Icon type="md-star" />
                        <Icon type="md-star" />
                        <Icon type="md-star" />
                        <span><Icon type="md-star" /></span>
                    </span>
                    <span>(661)</span>
                    <span>月售{{data.sellCount}}单</span>
                </p>
            </div>
            <div class="topRight">
                <Icon type="md-heart" />
                <p>已收藏</p>
            </div>
        </div>
        <div class="bottom">
            <div>
                <p>起送价</p>
                <p><span>{{data.minPrice}}</span>元</p>
            </div>
            <div>
                <p>商家配送</p>
                <p><span>{{data.deliveryPrice}}</span>元</p>
            </div>
            <div>
                <p>平均配送时间</p>
                <p><span>{{data.deliveryTime}}</span>分钟</p>
            </div>
        </div>
        <div class="box"></div>
        <div class="activity">
            <h4>公告与活动</h4>
            <p>{{data.bulletin}}</p>
            <p>
                 <img style="width: 12px" v-show="data.supports[0].type == 0" src="../assets/images/decrease_3@2x.png" />
                <span>{{data.supports[0].description}}</span>
            </p>
            <p>
                <img style="width: 12px" v-show="data.supports[1].type == 1" src="../assets/images/discount_3@2x.png" />
                <span>{{data.supports[1].description}}</span>
            </p>
            <p>
                <img style="width: 12px" v-show="data.supports[2].type == 2" src="../assets/images/special_3@2x.png" />
                <span>{{data.supports[2].description}}</span>
            </p>
            <p>
                <img style="width: 12px" src="../assets/images/invoice_3@2x.png" />
                <span>{{data.infos[0]}}</span>
            </p>
        </div>
        <div class="box"></div>
        <div class="pic">
            <h4>商家实景</h4>
            <div>
                <img :src="data.pics[0]" alt="">
                <img :src="data.pics[1]" alt="">
                <img :src="data.pics[2]" alt="">
            </div>
        </div>
        <div class="box"></div>
        <div class="infos">
            <h4>商家信息</h4>
            <p>{{data.infos[0]}}</p>
            <p>{{data.infos[1]}}</p>
            <p>{{data.infos[2]}}</p>
            <p>{{data.infos[3]}}</p>
        </div>
    </div>
</template>

<script>
    import{getSeller}from'../api/apis'
    export default {
        data(){
            return{
                data:{
                    data:{
                        supports:[{description:''}],
                        pics:[],
                        infos:[]
                    }
                }
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
    .merchant{
        height: 100%;
        overflow: scroll;
        .top{
            width: 100%;
            display: flex;
            padding: 20px;
            .topLeft{
                border-bottom: 1px solid #e4e4e4;
                width: 85%;
                p:nth-child(1){
                    font-size: 18px;
                    color:#0a1218;
                }
                p:nth-child(2){
                    margin-bottom: 20px;
                    span:nth-child(1){
                        color: #fe9b00;
                        font-size: 18px;
                        span{
                            color: #d4d7d9;
                            margin-right: 5px;
                        }
                    }
                    span:nth-child(2){
                        margin-right: 10px;
                        color: #484d4e;
                    }
                    span:nth-child(3){
                        color: #484d4e;
                    }
                }
            }
            .topRight{
                border-bottom: 1px solid #e4e4e4;
                width: 15%;
                display: flex;
                flex-direction: column;
                text-align: center;
                .ivu-icon{
                    color: red;
                    font-size: 30px;
                }
                p{
                    margin-bottom: 20px;
                }
            }
        }
        .bottom{
            display: flex;
            justify-content: space-around;
            padding-bottom: 20px;
            div:nth-child(1){
                padding: 0 30px;
                border-right: 1px solid #e4e4e4;
                text-align: center;
                p:nth-child(1){
                    color: 8a9196;
                }
                p:nth-child(2){
                    color: #0a1218;
                    span{
                        font-size: 30px;
                    }
                }
            }
            div:nth-child(2){
                padding: 0 30px;
                border-right: 1px solid #e4e4e4;
                text-align: center;
                p:nth-child(1){
                    color: 8a9196;
                }
                p:nth-child(2){
                    color: #0a1218;
                    span{
                        font-size: 30px;
                    }
                }
            }
            div:nth-child(3){
                padding: 0 30px;
                border-right: 1px solid #e4e4e4;
                text-align: center;
                p:nth-child(1){
                    color: 8a9196;
                }
                p:nth-child(2){
                    color: #0a1218;
                    span{
                        font-size: 30px;
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
        .activity{
            padding: 20px;
            h4{
                font-size: 20px;
                color:#000811;
            }
            p{
                padding: 10px;
            }
            p:nth-child(2){
                padding: 10px;
                color: red;
                line-height: 25px;
            }
            p:nth-child(3){
                border-top: 1px solid #e4e4e4;
            }
            p:nth-child(4){
                border-top: 1px solid #e4e4e4;
            }
            p:nth-child(5){
                border-top: 1px solid #e4e4e4;
            }
            p:nth-child(6){
                border-top: 1px solid #e4e4e4;
                padding-bottom: 0;
            }
        }
        .pic{
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            padding: 20px;
            h4{
                font-size: 20px;
                color:#000811;
            }
            div{
                display: flex;
                justify-content: space-around;
                img:nth-child(1){
                    width: 35%;
                    height: 35%;
                }
                img:nth-child(2),img:nth-child(3){
                    width: 30%;
                    height: 30%;
                }
            }
        }
        .infos{
            padding: 20px;
            h4{
                font-size: 20px;
                color:#000811;
            }
            p{
                padding: 10px 10px 0 10px;
                margin-top: 10px;
                border-top: 1px solid #e4e4e4;
                color: #0a1116;
            }
        }
    }
</style>