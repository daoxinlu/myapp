<template>
    <div id="cart">
        <keep-alive>
        <main>
            <div class="row product">
                <div class="col">
                    <figure>
                        <img v-bind:src="product.src">
                    </figure>
                </div>
                <div>
                    
                    <h2 v-text="product.name"></h2>
                    <p v-text="product.price"></p>
                    <p v-model="product.count">当前库存为:{{product.count}}件商品</p>
                    <p v-model="number">购物车一共:{{number}}件商品</p>
                </div>
                
                <button type="text" @click="add_item()">加入一个</button>
                <button type="text" @click="push_item()">放回一个</button>
                <span id="info"></span>
                <button class="showcart" @click="showcart()" v-bind:msg="msg">{{msg}}</button>
                <div v-show="show" ><Order @push="receive($event)" v-bind:number="number" /></div>
                
                 
            </div>
        </main>
        </keep-alive>
    </div>
</template>

<script>
import Vue from 'vue'
import Order from '@/components/Order/Order'
Vue.component(Order.name,Order);
    export default {
        name:'Cart',
        data(){
            return{
                product:{
                    src:'../../../static/images/7.png',
                    id:1,
                    name:'iphone 11',
                    count:9999,
                    description:'iphone is the best phone of the world!'
                },
                number:0,
                show:false,
                msg:'展示结算页面',
            }
        },
        methods:{
            add_item:function(){
                
                if(this.product.count>0){
                    info.innerHTML = ""
                    this.product.count--;
                    this.number++;
                    
                }  
            },
            push_item:function(){
                if(this.number>0){
                    var info = document.getElementById('info')
                    this.product.count++;
                    this.number--;
                    if(this.number==0){
                     info.innerHTML = "购物车没有东西"
                    }
                    
                }
                
            },
            showcart:function(){
                this.show = !this.show;
                if(this.show===true){
                    this.msg='收起结算页面';
                }
                else{
                    this.msg='展示结算页面'
                }
            },
            receive(arg){
                var info = document.getElementById('info');
                if(arg == 'push'){
                    info.innerHTML = '';
                    this.number++
                }else{
                    if(this.number>0){
                        this.number--;
                    }else{
                        
                        info.innerHTML = '已经没有东西放回了'
                    }   
                }
                    
            }
        }
    }
</script>

<style scoped >
body{
    background-color:#cc9900;
}
p{
    padding:10px;
}
button{
    margin:20px;
}
.buy{
    color:black;
    font-size:16px;
    background-color:yellow;
}
#info{
    color:red;
    font-size:12px;
}
.showcart{
    background:yellow;
    font-size:16px;
}
</style>