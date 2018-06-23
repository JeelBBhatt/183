// console.log("Starting....");

// setTimeout(()=>{
// 	console.log(" callback first ...");
// },2000)

// setTimeout(()=>{
// 	console.log(" callback working second...");
// },0)
// console.log("Ending....");

// var cbfun=(id,callback)=>{
// 	var user={
// 		id:id,
// 		name:'jeel'
// 	}	
// 	setTimeout(()=>{
//  	//console.log(" callback first ...");
//  	callback(user.name);
// 	 },2000)
// 	//callback(user.name);
// }
// cbfun(13,(user)=>{

// 	console.log(user);
// })


// var sp=new Promise((resolve,reject)=>{

// 	setTimeout(()=>{
// 		resolve(`It's resolved`);
// 		resolve();
// 	  reject(`Enable to fullfill promise`);
// 	},2500)

// });

// sp.then((smsg)=>{

// console.log("Success: ",smsg);
// },(emsg)=>{
// console.log("Error: ",emsg);
// });

// var addf=(a,b)=>{
// 	return new Promise((resolve,reject)=>{
// 		setTimeout(()=>{
// 			if(typeof a==='number' && typeof b=== 'number'){
// 				resolve(a+b);
// 			}else{
// 				reject('Arguments must be number');
// 			}
// 		},1500)
// 	})
// }
// addf(8,'3').then((val)=>{
// 	console.log("success",val);
// 	return addf(val,9);
// }).then((res)=>{
// 	console.log("Final value",res);
// }).catch((errormsg)=>{
// 	console.log(errormsg);
// })
const request=require('request');

const geocodeAddress=(address)=>{
	return new Promise((resolve,reject)=>{

		var encodedAddress = encodeURIComponent(address);
		request({
			url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
			json: true
		}, (error, response, body) => {
			if(error){
				reject("unable to connect google server");
	 	}
		else if(body.status='ok'){
		resolve({
			Address:body.results[0].formatted_address,
			Latitude:body.results[0].geometry.location.lat,
			Longitude:body.results[0].geometry.location.lng
		});
	}
});

})

}
geocodeAddress('surat').then((result)=>{

	console.log(JSON.stringify(result,undefined,2));
}).catch((errormsg)=>{
	console.log(errormsg);
})