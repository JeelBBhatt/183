//API key: a731c1060a79389288c4f3174cfe1ad7
//Sample: https://api.darksky.net/forecast/a731c1060a79389288c4f3174cfe1ad7/37.8267,-122.4233


const request=require('request');

const geocodeAddress=(address,callback)=>{


var encodedAddress = encodeURIComponent(address);
request({
  url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
  //url: `https://maps.googleapis.com/maps/api/geocode/json?address=surat`,
  json: true
}, (error, response, body) => {
	if(error){
		callback("unable to connect google server");
	 }//else if(body.status='ZERO_RESULTS'){
	// 	callback("unable to find that address");
	// 	//callback(error);
	// }
	else if(body.status='ok'){
		callback(undefined,{
			Address:body.results[0].formatted_address,
			Latitude:body.results[0].geometry.location.lat,
			Longitude:body.results[0].geometry.location.lng
		})
}
});
}

module.exports=geocodeAddress;

