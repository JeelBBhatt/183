//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');//ES6 Destructuring

// let obj=new ObjectID();//generated _id
// console.log(obj)
MongoClient.connect('mongodb://localhost:27017/TodoList',(err,db)=>{
	if(err){
		console.log('Unable to connect to Database');
	}
		console.log('Connected to server');	

		// db.collection('Todos').insertOne({
		// 	text :'Lets do something',
		// 	completed:false
		// },(err,result)=>{
		// 	if(err){
		// 		return console.log('Unable to insert Todo',err);
		// 	}
		// 	console.log(JSON.stringify(result.ops,undefined,2));
		// });

		db.collection('Users').insertOne({
			name :'Jeel',
			age	: 21,
			location: 'Surat'
			},(err,result)=>{
			if(err){
				return console.log('Unable to insert User',err);
			}
			console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
		});
		db.close();	
});