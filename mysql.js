var data = {};
this.Axios.get('/api/b').then((res)=>{
    console.log(res.data);
}).catch(err=>{
    console.log('数据请求失败'+err);
})

module.export = {
    data:data,
}
