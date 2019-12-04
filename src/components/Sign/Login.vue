<template>
    <div id="login">
       <form method="post" action="http://www.daoxinlu.com:3000/login" >
            <label for="username">用户名</label>
            <input class= "input" name="username"  placeholder="请输入用户名"/><br>
            <label for="password">密码</label>
            <input class= "input" name="password"  placeholder="请输入用户名"/><br>
            <label for="testcode">验证码</label>
            <input class= "input" name="testcode"  placeholder="请输入用户名"/><br>
            <button type="submit">提交</button>
        </form>
        <h2 class="login_sign">登录页面</h2>
    </div>
</template>

<script>
module.export = {
    name:"Login",
}
</script>

<style scoped>
#login{
    font-size:18px;
    
}
.input{
    margin-top:10px;
}
</style>