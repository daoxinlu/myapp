<template>
  <div class="news">
      <h2>{{msg}}</h2>
      <mt-swipe :auto="3000" :showIndicators="false">
            <mt-swipe-item v-for='(item,index) in imgs' :key='item'>
                <img id="img" :src="item" />
                <!-- <div :id="style[index]" alt="">{{index+1 }}</div> -->
            </mt-swipe-item> 
      </mt-swipe>
      <div class="navbottom">
        <ul v-model="newslist" v-if="newslist.length" v-for="(item,index) in newslist" :key="index" @mousewheel="loadmore()" >
          <li><h2>{{index}}</h2></li>
          <li><a href="javascript:void(0)">{{item.title}}</a></li>
          <li>{{item.lmodify}}</li>
          
          <li class="newspng"><img :src="item.imgsrc" @click="jump(item.imgsrc)" style="width:40%;height:30%"></img></li>
          <li>{{item.source}}</li><br>
        </ul>
      </div>
  </div>
</template>

<script>

export default {
  name: 'News',
  data () {
    return {
        msg:"轮播图",
        length:10,
        newslength:0,
        newslist:[],
        
        imgs:['../../../static/images/5.png','../../../static/images/6.png','../../../static/images/7.png']
    }
  },
  created(){
    // this.Axios.get(`${/0001%2F(0-9)*.json$/}`).then(res=>{
    //   console.log(res.data)
    // }).catch(err=>{
    //   console.log("数据获取失败"+err);
    // })
    this.Axios.get("/api/a/0-100.html").then(res=>{
      console.log(res.data);
      this.newslength = res.data.T1348647853363.length;
      this.newslist = res.data.T1348647853363;
      this.newslist.length = this.length;
      console.log(this.newslength);
    }).catch(err=>{
      console.log(err);
    })
  },
  methods:{
    jump: function(url){
      window.location.href = url;
    },
    loadmore : function(){
        if(document.documentElement.scrollTop+document.documentElement.clientHeight>=document.documentElement.scrollHeight){
          this.Axios.get("/api/a/0-100.html").then(res=>{
            if(this.length+10<this.newslength){
              this.length+=10;
              console.log(this.length)
            }else if(this.length+10>=this.newslength){
              this.length = this.newslength;
            }
            this.newslist = res.data.T1348647853363;
            this.newslist.length = this.length;
            
          }).catch(err=>{
            console.log(err);
          })
        }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.news{
  
  display: inline-block;
  position:relative;
  width:100%;
  height:300px;
  color:green;
}
.news h2{
  height:100px;
  line-height:100px;
}
.mint-swipe{
    overflow:hidden;
}
#img{
  display:block;
  position:relative;
  margin:0 auto;
  margin-top:50px;
  margin-bottom:50px;
}
.navbottom{
  width:100%;
 
}
.newspng{
  display:flex;
  left:50%;
  justify-content:center;
  align-items:center;
}
</style>
