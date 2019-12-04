import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Testing from '@/components/Testing/Testing'
import News from '@/components/News/News'
import Sign from '@/components/Sign/Sign'
import Country from '@/components/Country/Country'
import Login from '@/components/Sign/Login'
import Cart from '@/components/Cart/Cart'
import Order from '@/components/Order/Order.vue'
//import Capt from '@/components/Capt/Capt'
Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/testing',
      name:'Testing',
      component:Testing
    },
    {
      path:'/news',
      name:'News',
      component:News
    },
    {
      path:'/sign',
      name:'Sign',
      component:Sign
    },
    {
      path:'/country',
      name:'Country',
      component:Country
    },
    {
      path:'/login',
      name:"Login",
      component:Login
    },
    {
      path:'/go_shopping',
      name:'cart',
      component:Cart,
      meta:{
        keepAlive:true,
      },
      
      
      children:[
        {
          path:'/order',
          name:'order',
          component:Order,
          meta:{
            title:'订单',
            keepAlive:true,
            
          }
        },
      ]
    }
    // {
    //   path:'/capt',
    //   name:'Capt',
    //   component:Capt
    // }
  ]
})
