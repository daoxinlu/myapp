<template>
  <div class="hello">
    <h1 class="title">{{msg}}</h1>
    <div class="container">
        <div class="items news"><router-link to="/news"><img id="news" class="items" src="../../assets/news.png"></img></router-link></div>
        <div class="items shopping"><router-link to="/go_shopping"><img id="news" src="../../assets/developing.png"></img></router-link></div>
        <div class="items notebook"><router-link to="/country"><img id="news" src="../../assets/marry.png"></img></router-link></div>    
    </div>
	<footer id="beian">备案号：黔ICP备19010113</footer>
  <Footer></Footer>
  </div>
  
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg:"Welcome to my website! Please click one of the following websites to learn more about it.",

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title{
    color:green;
    margin:5% 5%;
    cursor:text;
}
.container{
    display:flex;
    flex:left;
    flex-direction:row;
    margin:0 auto;
    width:60%;
    
    
}
.items{
    margin:10px auto;
    width:30%;
    height:180px;
    border-radius:20px;
    box-shadow: 0 5px 5px rgba(10,16,20,.24),0 0 2px rgba(10,16,20,.12);
}
.items:hover{
    cursor:pointer;
}
.news{
      
}
#news{
    width:100%;
    height:100%;
    margin-top:0%;
    border-radius:20px;
}
.shopping{
}
.notebook{
}

</style>
