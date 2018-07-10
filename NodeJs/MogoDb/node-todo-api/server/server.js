//limitless-chamber-73498
//./mongod --dbpath /home/lcom154/Documents/183/NodeJs/MogoDb/mongo-data
require('./config/config');

const _ = require('lodash');
const express=require('express');
const bodyParser=require('body-parser');

let {ObjectID}=require('mongodb');
let {mongoose}=require('./db/mongoose');
var {Todo}=require('./models/todo');
var {User}=require('./models/users');
var {authenticate}=require('./middleware/authenticate');

var port=process.env.PORT || 3000;
let app=express();

app.use(bodyParser.json());
app.post('/todos',authenticate,(req,res)=>{

	//console.log(req.body);
	var todo=new Todo({
		text:req.body.text,
		_creator: req.user._id
	});

	todo.save().then((doc)=>{
		res.send(doc);
	},(e)=>{
		res.send(e);	
	});
});

app.get('/todos',authenticate,(req,res)=>{
	Todo.find({
		_creator:req.user._id
	}).then((todo)=>{
		res.send({todo});
	},(err)=>{
		res.status(400).send(err);
	});
	
});

app.get('/todos/:id',authenticate,(req,res)=>{
	//res.send(req.params);
	let id=req.params.id;
	
	if(!ObjectID.isValid(id)){
		return res.status(404).send();
	}

	Todo.findOne({
		_id:id,
		_creator:req.user._id
	}).then((todo)=>{
		if(!todo){
			res.status(404).send();
		}
		res.send({todo});
	}).catch((e)=>{
		res.status(400).send();
	})
	

});
app.delete('/todos/:id',authenticate,async (req, res) => {
	const id = req.params.id;

	if (!ObjectID.isValid(id)) {
		return res.status(404).send();
	}

	try{
		const todo= await Todo.findOneAndRemove({
			_id:id,
			_creator:req.user._id
		})
		if (!todo) {
			return res.status(404).send();
		}

		res.send({todo});
	}catch((e) {
		res.status(400).send();
	});

	app.patch('/todos/:id',authenticate,(req, res) => {
		var id = req.params.id;
		var body = _.pick(req.body, ['text', 'completed']);

		if (!ObjectID.isValid(id)) {
			return res.status(404).send();
		}

		if (_.isBoolean(body.completed) && body.completed) {
			body.completedAt = new Date().getTime();
		} else {
			body.completed = false;
			body.completedAt = null;
		}

		Todo.findOneAndUpdate({
			_id:id,
			_creator:req.user._id
		}, {$set: body}, {new: true}).then((todo) => {
			if (!todo) {
				return res.status(404).send();
			}

			res.send({todo});
		}).catch((e) => {
			res.status(400).send();
		})
	});


	/*************************************USERS***************************************/

	app.post('/user',(req,res)=>{
		try{
			var body = _.pick(req.body, ['email', 'password']);
			var user=new User(body);
			await user.save();
			const token= user.generateAuthToken();
			res.header('x-auth',token).send(user);
		}catch(e) {

			res.status(400).send(e);	
		}

	// user.save().then(()=>{
	// 	//console.log(user);
	// 	return user.generateAuthToken();
	// }).then((token)=>{
	// 	console.log(user);

	// }).catch((e)=>{
		
	// });

});


	app.get('/user/me',authenticate,(req,res)=>{

		res.send(req.user);

	});

	app.post('/user/login',async (req,res)=>{

		try{
			const body = _.pick(req.body, ['email', 'password']);
			const user= await User.findByCredetials(body.email,body.password);
			const token=await user.generateAuthToken();
			res.header('x-auth',token).send(user);
		}catch(e) {
			res.status(400).send();
		}

	// User.findByCredetials(body.email,body.password).then((user)=>{
	// 	return user.generateAuthToken().then((token)=>{
	// 	res.header('x-auth',token).send(user);
	// 	});
	// }).catch((e)=>{
	// 	res.status(400).send();
	// });
});

	app.delete('/user/me/token',authenticate,async (req,res)=>{
		try{
			await req.user.removeToken(req.token);
			res.status(200).send();
		}catch(e) {
			res.status(400).send();
		}

	});

	app.listen(port,()=>{

		console.log(`started on port ${port}`);

	});

	module.exports={app};

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YjM0YTZiZmVhNzViZmFmMmVhMWM4OTkiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTMwMTc3MjE1fQ.LO50ROKidT8M3_VeHCsQ3B_6Vto7hsimIwS0zyrP3xg
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YjM0YTZiZmVhNzViZmFmMmVhMWM4OTkiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTMwMTc3MzA5fQ.nKbFLm3qjkLggcLFOfk30Ehc0UyqJGzMLJiRcjj7fq8



