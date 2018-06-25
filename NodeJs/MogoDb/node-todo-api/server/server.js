const mongoose=require('mongoose');

mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

//Create Model of tsodos

let Todo=mongoose.model('Todo',{

	text:{
		type: String,
		required:true,
		minlength:1,
		trim:true
	},
	completed:{
		type:Boolean,
		default:false
	},
	completedAt:{

		type:Number,
		default:null
	}

});


let User=mongoose.model('User',{


	email:{
		type:String,
		require:true,
		trim:true,
		minlength:1
	},
	// password:{

	// 	type:Number,
	// 	default:null
	// }

});

let user1=new User({
	email:' a   '
});
user1.save().then((result)=>{
	console.log('saved todo',result);
},(err)=>{
	console.log('Unable to save todo',err);
});

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








//result
//saved todo { __v: 0, text: 'Walkings', _id: 5b30df0b59194b6b7124ea72 }
//__v for version
