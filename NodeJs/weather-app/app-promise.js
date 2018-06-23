
const yargs=require('yargs');
const axios=require('axios');


const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true,
      default:'surat'
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl=`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geocodeUrl).then((response)=>{

	
	let latitude=response.data.results[0].geometry.location.lat;
	let longitude=response.data.results[0].geometry.location.lng;
	let weatherUrl=`https://api.darksky.net/forecast/a731c1060a79389288c4f3174cfe1ad7/${latitude},${longitude}`;
	console.log(response.data.results[0].formatted_address);
	return axios.get(weatherUrl);
}).then((response)=>{

	var temperature= response.data.currently.temperature;
	var apparentTemperature=  response.data.currently.apparentTemperature;
	console.log(`${temperature} : ${apparentTemperature}`);
}).catch((e)=>{
	if(e.code==='ENOTFOUNDs'){
		console.log('enable to connect api');
	}else{
		console.log(e.message);
	}
});




