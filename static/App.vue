<template>
  <div id="app">
    <!-- 顶部栏区域 -->
    <mt-header fixed title="我的博客">
      <router-link to="/" slot="left">
        <mt-button icon="back">首页</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <!-- 路由组件的出口 -->
    <router-view/>
    <!-- 底部栏 -->
    <!-- <mt-tabbar fixed v-model="selected">
    <mt-tab-item id="home">
    <img slot="icon" src="./assets/index.png">
    首页
    </mt-tab-item>
    <mt-tab-item id="vip">
      <img slot="icon" src="./assets/vip.png">
      会员
    </mt-tab-item>
    <mt-tab-item id="cart">
      <img slot="icon" src="./assets/shopcart.png">
      购物车
    </mt-tab-item>
    <mt-tab-item id="search">
      <img slot="icon" src="./assets/search.png">
      查找
    </mt-tab-item>
  </mt-tabbar> -->
    <div class="tabBar">
      <ul>
        <li v-for='(tab,index) in tabs' :key='tab.id'>
          <router-link :to='tab.routerName'>
            <img :src="tab.imgSrc" alt="" />
            <p>{{tab.title}}</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import index from './assets/7.png';
import vip from './assets/7.png'
import shopcart from './assets/7.png'
import search from './assets/7.png'

const tabs = [
  {id:1,title:"首页",imgSrc:index,routerName:{name:'home'}},
  {id:2,title:"会员",imgSrc:vip,routerName:{name:'vip'}},
  {id:3,title:"购物车",imgSrc:shopcart,routerName:{name:'cart'}},
  {id:4,title:"查找",imgSrc:search,routerName:{name:'search'}},
]


export default {
  name: 'App',
  data(){
    return {
      selected:'',
      tabs:tabs
    }
  },
  watch:{
    selected:function(newV,oldV){
      this.$router.push({name:this.selected});
      console.log(newV,oldV);
    }
  }
}
</script>

<style>
*{
  padding:0;
  margin:0;
  
}
body{
  cursor:pointer;
}
.tabBar{
  width:100%;
  position:fixed;
  bottom:0px;
}
.tabBar ul li{
  display:inline-block;
  width:25%;
  background:lightgray;
  height:25%;
  padding:5px 0;
  margin:0px;
  border-radius:5px solid black;
}
.tabBar ul li img{
  height:30%;
  width:30%;
  margin-left:35%;
}
.tabBar ul li p{
  text-align:center;
  text-decoration: none;
  color:black;
  font-size:14px;
  
}
.tabBar ul li:hover{
  
  background-color:antiquewhite;
  border-radius:5px;
}

</style>
