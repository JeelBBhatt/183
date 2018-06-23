const request=require('request');


const getWeather=(lat,lng,callback)=>{

	request({
		url:`https://api.darksky.net/forecast/a731c1060a79389288c4f3174cfe1ad7/${lat},${lng}`,
		json: true

	},(error,res,body)=>{
		if(error){
			callback("unable to connect to server");
		}else if(!error && res.statusCode===200){
			callback(undefined,{
				temperature: body.currently.temperature,
				apparentTemperature:  body.currently.apparentTemperature});
		}else{
			callback("unable to fetch weather");
		}

	});
}

module.exports=getWeather;
