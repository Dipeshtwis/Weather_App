const url = 'https://api.openweathermap.org/data/2.5/weather?q=';
/* global apiKey */
const fetchWeather = async (city) => {
  try {
    const response = await fetch(`${url}${city}&appid=${apiKey}`);
    const information = await response.json();
    return information;
  } catch (err) {
    return err;
  }
};

export default fetchWeather;