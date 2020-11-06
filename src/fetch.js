const url = 'https://api.openweathermap.org/data/2.5/weather?q=';
/* global config */
const fetchWeather = async (city) => {
  try {
    const response = await fetch(`${url}${city}&appid=${config.apiKey}`);
    const information = await response.json();
    return information;
  } catch (err) {
    return err;
  }
};

export default fetchWeather;