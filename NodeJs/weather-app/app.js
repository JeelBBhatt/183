
const yargs=require('yargs');
const geocode=require('./geocode/geocode.js');
const weather=require('./weather/weather.js');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

geocode.geocodeAddress(argv.address,(errroMessage,result)=>{

	if(errroMessage){
		console.log(errroMessage);
	}else{
		console.log(result.Address);
		weather.getWeather(result.Latitude,result.Longitude,(errroMessage,result)=>{

	if(errroMessage){
		console.log(errroMessage);
	}else{
		console.log(JSON.stringify(result,undefined,2));
	}
});
	}
});



