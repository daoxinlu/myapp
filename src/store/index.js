import Vue from "vue"           //引入资源文件
import Vuex from "vuex"
Vue.use(Vuex);

const store = new Vuex.Store({      //创建Vuex实例
    state:{
        count:1
    }
})

export default store        //导出store