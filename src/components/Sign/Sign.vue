<template>
    <div id="sign">
        <form method="post" action="http://www.daoxinlu.com:3000/sign">
            <label for="username">用户名</label>
            <input class= "input" name="Code"  placeholder="ABW"/><br>
            <label for="pwd">密码</label>
            <input class= "input" type="password" name="pwd" /><br>
            <label for="Cpwd">确认密码</label>
            <input class= "input" name="Cpwd" type="password" /><br>
            <button type="submit">提交</button>
        </form>
        <h2 class="login_sign">注册页面</h2>
    </div>

</template>

<script>
export default {
    name:"Sign",
    data(){
        return{
            username:'',
            email:'',
            password:'',
            phone:'',
            website:'',
            number:'',
            birthday:'',
            introduction:''
        }
    },
    methods:{
        prevent(){
            return  false;
        }
    }
}
</script>

<style scoped>
.input{
    margin-top:10px;
}
</style>