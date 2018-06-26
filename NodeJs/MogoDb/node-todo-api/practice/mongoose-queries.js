const {ObjectID}=require('mongodb');
const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');
const {User}=require('./../server/models/users');

var id='5b30e58a388482a2783a7a09';
// var id='5b31fbbd42aae2eb53a99f89';
// if(ObjectID.isValid(id)){
// 	console.log('not valid');
// }
// Todo.findById(
// 	id
// ).then((todo)=>{
// 	if(!todo){
// 		return console.log('Id not found');
// 	}
// 	console.log(todo);
// })

User.findById(id).then((user)=>{
	if(!user){
		return console.log('User not found');
	}
	console.log(user);
}).catch((e)=>{
	console.log("error",e);
});