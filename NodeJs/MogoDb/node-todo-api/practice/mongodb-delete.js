//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');//ES6 Destructuring

// let obj=new ObjectID();//generated _id
// console.log(obj)
MongoClient.connect('mongodb://localhost:27017/TodoList',(err,db)=>{
	if(err){
		console.log('Unable to connect to Database');
	}
	console.log('Connected to server');	


		// db.collection('Todos').deleteOne({"text" : "Watching Videos"}).then((result)=>{
		// 	console.log(result);
		// });
		// db.collection('Todos').deleteMany({"text" : "Watching Videos"}).then((result)=>{
		// 	console.log(result);
		// });
		// db.collection('Todos').findOneAndDelete({"text" : "Watching Videos"}).then((result)=>{
		// 	console.log(result);
		// });
		
		// db.collection('Users').deleteMany({"name" : "Jeel"}).then((result)=>{
		// 	console.log(result);
		// });

		db.collection('Users').findOneAndDelete({ _id: new ObjectID('5b30b6de5e298e499910fb19')}).then((result)=>{
			console.log(result);
		});
		
		//db.close();	
	});