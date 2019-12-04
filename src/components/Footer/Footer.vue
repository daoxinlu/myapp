<template>
  <div id="footer">
    <router-link to="/"><div class="footer"><img slot="icon" src="../../../static/images/首页 (1).png"></div></router-link>
    <router-link to="/"><div class="footer"><img slot="icon" src="../../../static/images/VIP (1).png"></div></router-link>
    <router-link to="/"><div class="footer"><img slot="icon" src="../../../static/images/购物车空.png"><span></span></img></div></router-link>
    <router-link to="/"><div class="footer"><img slot="icon" src="../../../static/images/个人中心 (1).png"></div></router-link>              
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#footer{
    width:100%;
    position:fixed;
    margin-top:100px;
}
.footer{
    display:inline-block;
    
    bottom:0px;
    
}
.footer img{
    padding:100px;
    width:100px;
    height:100px;
}
</style>
