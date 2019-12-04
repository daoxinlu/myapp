// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import router from './router'
import App from './App.vue'
import Store from "./store/index"
import Vue from 'vue'
import Axios from 'axios'
import Moment from 'moment'
import Mint from 'mint-ui';       //引入mint-ui模块
import Element from 'element-ui'


Vue.config.productionTip = false

Vue.prototype.Axios = Axios;
//注册全局组件
import Footer from '@/components/Footer/Footer.vue'
Vue.component(Footer.name,Footer);

Vue.use(Moment);
Vue.use(Element);
Vue.use(Mint);
import 'mint-ui/lib/style.css';

new Vue({
    el:"#app",
    Store,
    router,
    components:{App},
    template:"<App/>"
});
