<template>
    <div>
        <div class="top">
            <div>
                <p>3.9</p>
                <p>综合评分</p>
                <p>高于周边商家69.2%</p>
            </div>
            <div>
                <p>
                    <span>服务态度</span>
                    <img src="../assets/images/xing.png" alt="">
                    <span>3.9</span>
                </p>
                <p>
                    <span>服务态度</span>
                    <img src="../assets/images/xing.png" alt="">
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
            <Button>全部</Button>
            <Button>满意</Button>
            <Button>不满意</Button>
        </div>
        <div class="eva">只看有内容的评价</div>
    </div>
</template>

<script>
import{getRatings}from'../api/apis'
    export default {
        data(){
            return{
                list:{}
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
    .top{
        display: flex;
        div:nth-child(1){
            width: 40%;
            padding: 10px;
            text-align: center;
            p:nth-child(1){
                color: #fe9d00;
                font-size: 25px;
            }
            p:nth-child(2){
                color: #070f15;
                font-size: 16px;
            }
            p:nth-child(3){
                color: #959a99;
            }
        }
        div:nth-child(2){
            width: 60%;
            padding: 10px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            p:nth-child(1){
                span:nth-child(1){
                    color: #070f15;
                    margin-right: 10px;
                }
                span:nth-child(3){
                    color: #fe9d00;
                }
                img{
                    width: 100px;
                    margin-right: 10px;
                }
            }
            p:nth-child(2){
                span:nth-child(1){
                    color: #070f15;
                    margin-right: 10px;
                }
                span:nth-child(3){
                    color: #fe9d00;
                }
                img{
                    width: 100px;
                    margin-right: 10px;
                }
            }
            p:nth-child(3){
                span:nth-child(1){
                    color: #070f15;
                    margin-right: 10px;
                }
                span:nth-child(2){
                    color: #959a99;
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
        display: flex;
        justify-content: space-around;
        padding: 20px 0;
        Button:nth-child(1){
            color: #fff;
            background-color: #2d8cf0;
        }
        Button:nth-child(2){
            color: #fff;
            background-color: #5cadff;
        }
        Button:nth-child(3){
            color: #fff;
            background-color: #c5c8ce;
        }
    }
    .eva{
        color: #959a99;
        border-top: 1px solid #e7e7e7;
        border-bottom: 1px solid #e7e7e7;
        font-size: 16px;
        padding: 20px 0 20px 10px;
    }
</style>