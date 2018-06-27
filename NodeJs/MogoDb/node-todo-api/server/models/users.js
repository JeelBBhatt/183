const mongoose=require('mongoose');
const validator=require('validator');
const jwt=require('jsonwebtoken');
const _ = require('lodash');

let UserSchema=new mongoose.Schema({

	email:{
		type:String,
		require:true,
		trim:true,
		minlength:1,
		unique: true,
		validate:{
			validator: validator.isEmail,
			message	:`{VALUE} is not a valid email`
		}
	},
	password:{

		type:String,
		require:true,
		minlength:6
	},
	tokens:[{
		access:{
		type:String,
		require:true
		},
		token:{
		type:String,
		require:true
		}
	}]
// },{
//   usePushEach: true
 });
UserSchema.methods.toJSON=function() {
	var user=this;
	var userObject=user.toObject();

	return _.pick(userObject,['_id','email']);
}


UserSchema.methods.generateAuthToken=function() {
var user=this;
var access='auth';
var token=jwt.sign({_id:user._id.toHexString(),access},'abc123').toString();

//user.tokens.push({access,token});
user.tokens=user.tokens.concat({access,token});
return user.save().then(()=>{
		return token;
	});
}; 

UserSchema.statics.findByToken=function(token) {
var user=this;
var decoded;
	
	try{
		decoded=jwt.verify(token,'abc123');
	}catch(e) {
		return Promise.reject();
	}
	return User.findOne({
		'_id':decoded._id,
		'tokens.token':token,
		'tokens.access' :'auth'
	})
}
var User=mongoose.model('User',UserSchema);

module.exports={User};







//result
//saved todo { __v: 0, text: 'Walkings', _id: 5b30df0b59194b6b7124ea72 }
//__v for version

// let newTodo=new Todo({text : 'Walkings'});

// newTodo.save().then((result)=>{
// 	console.log('saved todo',result);
// },(err)=>{
// 	console.log('Unable to save todo');
// });

// let newTodo1=new Todo({
// 	text:'Learn Node JS'
// });
//create new todo
// let newTodo1=new Todo({
// 	text : 'Cooking',
// 	completed:true,
// 	completedAt:124});

//add todo to the mongodb database
// newTodo1.save().then((result)=>{
// 	console.log('saved todo',JSON.stringify(result,undefined,2));
// },(err)=>{
// 	console.log('Unable to save todo',err);
// });
