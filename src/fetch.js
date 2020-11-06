const url = 'https://api.openweathermap.org/data/2.5/weather?q=';

const fetchWeather = async (city) => {
	try{
		const response = await fetch(`${url}${city}&appid=${config.apiKey}`);
    	const information = await response.json();
    	console.log(information) ;
	} catch (err) {
	console.log(err) ;
	}
};

export default fetchWeather;