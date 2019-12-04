<template>
  <div id="app">
    <mt-header fixed title="我的博客">
      <router-link to="/" slot="left">
        <mt-button icon="back">首页</mt-button>
      </router-link>
      <router-link to="/login"  slot="right">
        <mt-button icon="more">登录</mt-button>
      </router-link> &nbsq
      <router-link to="/sign"  slot="right">
        <mt-button icon="more">注册</mt-button>
      </router-link>&nbsq;&nbsq;
      
    </mt-header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin:0;
  padding:0;
}
body{
  width:100%;
  height:100%;
}
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin:60 auto;
  
}
#app img{
  border-radius:20px;
}
.mint-header{
  height:6%;
  font-size:18px;
  
}

.mintui-more::before { 
  content: "";  
}
*{
    cursor:pointer;
}
.mint-header-title{
  cursor:text;
}
.login_sign{
  margin-top:100px;
  color:green;
}
footer{
  position:absolute;
  left:50%;
  transform:translateX(-50%);
  bottom:50px;
}
</style>
