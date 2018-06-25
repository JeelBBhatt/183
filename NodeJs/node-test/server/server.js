
const express=require('express');

var app=express();


app.get('/',(req,res)=>{

	res.status(404).send({error: 'Page not found'});
});
app.listen(3000,()=>{
	console.log('Server started running at port 3000');
});
app.get('/you',(req,res)=>{

	res.status(200).send(
		[{name:'jeel',age:21},
		{name:'krina',age:21},
		{name:'chhaya',age:45}]);
});
module.exports.app=app;

