
const mongoose=require('mongoose');

var Todo=mongoose.model('Todo',{

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
	},
	_creator:{
		type:mongoose.Schema.Types.ObjectId,
		required:true
	}

});
module.exports={Todo};


//export MONGOLAB_URI="mongodb://username:password@ds01316.mlab.com:1316/food"

//SET MONGOLAB_URI="mongodb://janekya:123abc@@ds018168.mlab.com:18168/todoapp"