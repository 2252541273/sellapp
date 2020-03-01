import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children:[{
      path:'/goods',
      name:'goods',
      component:() => import('../views/Goods'),
    },{
      path:'/evaluate',
      name:'evaluate',
      component:() => import('../views/Evaluate'),
    },{
      path:'/merchant',
      name:'merchant',
      component:() => import('../views/Merchant'),
    },]
  }
]

const router = new VueRouter({
  routes
})

export default router
