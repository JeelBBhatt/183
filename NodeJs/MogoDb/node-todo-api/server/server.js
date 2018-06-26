//./mongod --dbpath /home/lcom154/Documents/183/NodeJs/MogoDb/mongo-data
const express=require('express');
const bodyParser=require('body-parser');

let {ObjectID}=require('mongodb');
let {mongoose}=require('./db/mongoose');
var {Todo}=require('./models/todo');
var {Users}=require('./models/users');

let app=express();

app.use(bodyParser.json());
app.post('/todos',(req,res)=>{

	//console.log(req.body);
	var todo=new Todo({
		text:req.body.text
	});

	todo.save().then((doc)=>{
		res.send(doc);
	},(e)=>{
		res.send(e);	
	});

});

app.get('/todos',(req,res)=>{
	Todo.find().then((todo)=>{
		res.send({todo});
	},(err)=>{
		res.status(400).send(err);
	});
	
});

app.get('/todos/:id',(req,res)=>{
	//res.send(req.params);
	let id=req.params.id;
	
	if(!ObjectID.isValid(id)){
		return res.status(404).send();
	}

	Todo.findById(id).then((todo)=>{
		if(!todo){
			res.status(404).send();
		}
		res.send({todo});
	}).catch((e)=>{
			res.status(400).send();
	})
	

});
app.listen(3000,()=>{

	console.log('started on port 3000');

});


module.exports={app};






