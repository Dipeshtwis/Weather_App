const url = 'https://api.openweathermap.org/data/2.5/weather?q=';
/* global apikey */
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