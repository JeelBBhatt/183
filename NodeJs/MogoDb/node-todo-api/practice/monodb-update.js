//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');//ES6 Destructuring

// let obj=new ObjectID();//generated _id
// console.log(obj)
MongoClient.connect('mongodb://localhost:27017/TodoList',(err,db)=>{
	if(err){
		console.log('Unable to connect to Database');
	}
	console.log('Connected to server');	

		// db.collection('Todos').findOneAndUpdate({"_id" : ObjectID("5b30add724d2e2df315139ec")},{
		// 	$set:{
		// 		completed: false
		// 	}
		// },
		// {
		// 	returnOriginal : false
		// }).then((result)=>{
		// 	console.log(result);
		// });

		db.collection('Users').findOneAndUpdate({"_id" : ObjectID("5b30a79467af563bb870226a")},{
			$set:{
				name: 'jeel'
			},
			$inc: {
				age:1
			}
		},
		{
			returnOriginal : false
		}).then((result)=>{
			console.log(result);
		});

		//db.close();	
	});