<template>
    <div class="test">
        <h2>系统正在努力开发中...</h2>
        <Cart></Cart>
    </div>
</template>

<script>
import Cart from '../Cart/Cart'
export default {
  name: 'Testing',
  data () {
    return {
      
    }
  },
  components:{
    Cart
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.test h2{
    color:blue;
}
</style>
