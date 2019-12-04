//此应用是基于express+mysql+nodejs
let express = require('express')      //模块引入
let mysql = require('mysql')
let path = require('path')
var fs = require('fs');
var app = express();
// const querystring = require("querystring");

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend:false}));

//统一设置头部
var Header = '"Access-Control-Allow-Origin","*";"Access-Control-Allow-Headers","X-Requested-With";"Access-Control-Allow-Methods","get,post,options"'

//处理登录请求
app.post('/login',function(req,res,next){
	var db = mysql.createPool({
		//创建mysql实例
		host:'localhost',
		port:'3306',
		user:'root',
		password:'185812',
		database:'user'
	});
	
	// db.connect();
	var data = []

	var database = '';
	var params = req.body;
	console.log(req.body);
	var count = 0;		//用于下面的赋值，第一位为用户名，第二位为密码，第三位为验证码
	var userName,pwd;
	for(let index in params){
		
		if(count==0){
			userName = params[index];
		}
		if(count==1){
			pwd = params[index];
		}
		if(count==2){
			if(!params[index]){
				res.send("请输入验证码");
			}
		}
		// if(count==3){
		// 	database = params[index];
		// 	console.log(database);
			
		// }
		count++;
	}
	console.log(userName,pwd);
	// db.database = database;
	// var p1 = userName;
	// var p2 = pwd;
	//var sql = `SELECT * FROM country where userName=? and password=?`;
	db.query('SELECT * FROM userlist where userName=? and passWord=?',[userName,pwd],function(err, result, fields){
		if(err){
			console.log(err);	
		}
		else if(result.length>0){
			data = result;
			res.send(data);
			
		}else{
			console.log("用户名或者密码错误");
			res.send("用户名或者密码错误")
		}
		db.end() //断开连接
	})

	if(!count){
		res.send(`服务器未接收到数据`);
	}
	
})
//注册接口
app.post('/sign',function(req,res,next){
	//先设置响应头部
    res.setHeader("Content-Type","application/json;charset=utf-8");
	var db = mysql.createPool({
		//创建mysql实例
		host:'localhost',
		port:'3306',
		user:'root',
		password:'7777777',
		database:'user'
	});
	
	// db.connect();
	
	var params = req.body;
	console.log(req.body);
	var count = 0;		//用于下面的赋值，第一位为用户名，第二位为密码，第三位为验证码
	var userName,pwd;
	for(let index in params){
		
		if(count==0){
			userName = params[index];
		}
		if(count==1){
			pwd = params[index];
		}
		if(count==2){
			if(params[index]!=pwd){
				res.end("密码前后两次输入不一致");
			}
		}
		// if(count==3){
		// 	database = params[index];
		// 	console.log(database);
			
		// }
		count++;
	}
	console.log(userName,pwd);
	// db.database = database;
	// var p1 = userName;
	// var p2 = pwd;
	//var sql = `SELECT * FROM country where userName=? and password=?`;
	db.query('SELECT * FROM userlist where userName=?',[userName],function(err, result, fields){
		if(err){
			console.log(err);	
		}
		else if(result.length>0){
			
			res.end('该用户已存在,请转到登录页面http://www.daoxinlu.com:3000/login');
			
		}else{
			db.query("insert into userlist (userId,userName,passWord) values(?,?,?)",[4,userName,pwd],function(err, result, fields){
				if(err){
					console.log(err);
					res.end('注册失败');
				}else{
					res.end("恭喜，注册成功")
				}
			})
			
		}
	
	})

	if(!count){
		res.end(`服务器未接收到任何数据`);
	}
	
})

//api获取country信息
app.get('/api/world',function(req,res,next){
	var db = mysql.createPool({
		//创建mysql实例
		host:'localhost',
		port:'3306',
		user:'root',
		password:'185812',
		database:'world'
	});

	console.log(req.query);
	// db.connect();
	var data = []
	
	db.query('SELECT * FROM country',function(err,result){
		if(err){
			console.log('country查询失败'+err.message);
		}
		//将查询结果先保存
		data = result;
		//写入文件
		//str = JSON.stringify(data);
		// fs.writeFile(path.resolve(__dirname, "./json/country.json"), str, function (err,                     
		//     data) {
		//    if (err) {
		//      console.error(err);
		//    }
		//    console.log(data);
		//    console.log('----------新增成功-------------');
		//  })
		res.header("Access-Control-Allow-Origin","*");
		res.header("Access-Control-Allow-Headers","X-Requested-With");
		res.header("Access-Control-Allow-Methods","*");
		res.header('Access-Control-Allow-Methods','GET,post,options');
		res.setHeader("Content-Type","application/json;charset=utf-8");
		
		var params = req.query;
		var count=0;
		// for(let i in params){
		// 	count++
		// }
		// console.log(params);
		if(params.length>0){
			
			res.send('提交成功');
		}
		else{
			res.send(data);
		}
	});
    
})

//提交表单，暂时无用
app.post("/",function(req,res){
	res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","X-Requested-With");
    res.header("Access-Control-Allow-Methods","*");
    res.header('Access-Control-Allow-Methods','GET,post,options');
    res.setHeader("Content-Type","application/json;charset=utf-8");
	var params = req.body;
	console.log(req.body);
	res.end("表单提交成功");
})



//端口监听
app.listen(3000,function(){
    console.log('server running at http://localhost:3000');
});





// app.get('/',function(req,res){
//     res.send("{'hello':'world'}");      //服务器响应
// })

// app.listen(3000,function(){
//     console.log('server running at http://localhost:3000 port');
// });