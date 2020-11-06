const url = 'https://api.openweathermap.org/data/2.5/weather?q=';
const apikey = '23f95263438cd05c860d3dc7f6c8bc0c';

const fetchWeather = async (city) => {
  try {
    const response = await fetch(`${url}${city}&appid=${apikey}`);
    const information = await response.json();
    return information;
  } catch (err) {
    return err;
  }
};

export default fetchWeather;