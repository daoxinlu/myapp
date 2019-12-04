<template>
  <div class="country">
    <div>
        <ul  v-for="(item,index) in countryList" :key="index">
            <li>{{item}}</li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Country',
  data () {
    return {
      countryList:[],
    }
  },
  created(){
        this.Axios.get('/api/b/api').then((res)=>{
            
            this.countryList = res.data;
            console.log(this.countryList);
        }).catch(err=>{
            console.log('数据请求失败'+err);
        })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
