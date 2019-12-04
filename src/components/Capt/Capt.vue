<template>
    <div id="capt">
        <img src="" id="capt"  />
    </div>
</template>


<script>
    var express = require('express');
    var rou = express.Router();
    rou.get('/captchapng',function(req,res,next){
        var captchapng = require("captchapng");
        var mynum = parseInt(Math.random()*9000+1000);
        req.session.captchapng = mynum;
        var p = new captchapng(80,30,mynum);
        p.color(0,0,0,0);
        p.color(80,80,80,255);
        var img = p.getBase64();
        var imgbase64 = new Buffer(img,'base64');
        res.writeHead(200,{
            'Content-Type':'image/png'
        });
        console.log(imgbase64);
        //res.end(imgbase64);
    })
    document.getElementById("capt").src= '/captchapng';
    export default {
        name:'Capt',
        data(){
            return{

            }
        }
    }
</script>
