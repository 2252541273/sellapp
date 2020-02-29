// 所有请求封装接口文件
import axios from 'axios'
// var axios=require('axios)

// 创建一个请求对象   axios.defaults.baseURL='http://127.0.0.1:3000'
let req=axios.create({
    baseURL: 'http://127.0.0.1:3000',//基本路径
    timeout: 10000//单位毫秒ms  请求时间，8-12秒。10秒没有请求到则请求超时
})
// 商家详情
export function getSeller(){
    return req.get('/api/seller')
}
// 商品列表
export function getGoods(){
    return req.get('/api/goods')
}
// 评论列表
export function getRatings(){
    return req.get('/api/ratings')
}