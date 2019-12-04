<template>
  <div class="hello">
        <div><h3 style="padding-bottom:20px">你的购物车一共有<span style="font-size:24px;font-weight:bold"> {{number}} </span>件商品</h3></div>
        <div><button type="text" @click="push">加入一个</button>
        <button type="text" @click="posh">posh加入一个</button>
        <button type="text" @click="pop">放回一个</button></div>
        <div id="submit"><button>提交订单</button></div>
  </div>
</template>

<script>

export default {
  name: 'Order',
  props:['number'],
  data () {
    return {
        
    }
  },
  created(){
      console.log(123);
  },
  methods:{
      push(){
          this.$emit('push','push');
      },
      pop(){
          this.$emit('push','pop');
      },
      posh(){
          this.$emit('posh','posh');
      },
  },
  
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#submit{
    margin-top:20px;
    
}
#submit button{
    background-color:yellow;
    font-size:24px;
}
</style>
