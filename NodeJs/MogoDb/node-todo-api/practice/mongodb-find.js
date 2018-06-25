//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');//ES6 Destructuring

// let obj=new ObjectID();//generated _id
// console.log(obj)
MongoClient.connect('mongodb://localhost:27017/TodoList',(err,db)=>{
	if(err){
		console.log('Unable to connect to Database');
	}
	console.log('Connected to server');	

		// db.collection('Todos').find({
		// 	_id: new ObjectID('5b30add724d2e2df315139ec')
		// }).toArray().then((docs)=>{
		// 	console.log(JSON.stringify(docs,undefined,2));
		// },(err)=>{
		// 	console.log(`Unable to fetch Todos`,err);
		// });


		// db.collection('Todos').find({}).count().then((count)=>{
		// 	console.log(`Todos Count : ${count}`);
		// },(err)=>{
		// 	console.log(`Unable to fetch Todos`,err);
		// });

		db.collection('Users').find({name:'Chhaya'}).toArray().then((docs)=>{
			console.log(JSON.stringify(docs,undefined,2));
		},(err)=>{
			console.log(`Unable to fetch Todos`,err);
		});
		
		//db.close();	
	});