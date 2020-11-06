import fetchWeather from './fetch';
import {
  newForm,
  newCityName,
  mainContainer,
  resultDiv,
  nameContainer,
  weatherTypeContainer,
  tempContainer,
  humidityContainer,
  temperatureSwitch,
  tempType,
} from './domcontroller';


const clearElement = (element) => {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
};

const convertTemp = (val, type) => {
  let temp = null;
  if (type === ' ℃') {
    temp = (val * (9 / 5) + 32).toFixed(2);
    type = ' ℉';
  } else {
    temp = ((val - 32) * (5 / 9)).toFixed(2);
    type = ' ℃';
  }
  return { temp, type };
};

const display = async (city) => {
  clearElement(mainContainer);
  const res = await fetchWeather(city);
  if (res.cod === 200) {
    const tswitch = temperatureSwitch();
    mainContainer.appendChild(tswitch);
    nameContainer.innerText = `Location: ${res.name}, ${res.sys.country}`;
    weatherTypeContainer.innerText = `Weather type: ${res.weather[0].description}`;
    tempContainer.innerText = `Temperature: ${(res.main.temp) / 10}`;
    humidityContainer.innerText = `Humidity: ${res.main.humidity} %`;
    tempContainer.appendChild(tempType);
    tempType.innerText = ' ℃';
    const mainswitch = document.getElementById('mainSwitch');
    mainswitch.innerText = 'convert in ℉';
    const { temp } = res.main;
    mainswitch.addEventListener('click', e => {
      e.preventDefault();
      mainswitch.innerText = `convert in ${tempType.innerText}`;
      const switched = convertTemp(temp, tempType.innerText);
      tempType.innerText = `${switched.type}`;
      tempContainer.innerText = `Temperature: ${switched.temp}`;
      tempContainer.appendChild(tempType);
    });

    weatherTypeContainer.classList.add('city-name');
    tempContainer.classList.add('city-name');
    humidityContainer.classList.add('city-name');
    if (res.weather[0].main === 'Rain') {
      document.body.className = 'rainy';
    } else if (res.weather[0].main === 'Haze') {
      document.body.className = 'hazy';
    } else if (res.weather[0].main === 'Clouds') {
      document.body.className = 'cloudy';
    } else {
      document.body.className = 'clear';
    }
    resultDiv.appendChild(nameContainer);
    resultDiv.appendChild(weatherTypeContainer);
    resultDiv.appendChild(tempContainer);
    mainContainer.appendChild(resultDiv);
  } else {
    document.body.className = 'error-pic';
    mainContainer.innerHTML = res.message;
    mainContainer.classList.add('city-name');
  }
};

newForm.addEventListener('submit', e => {
  e.preventDefault();
  const city = newCityName.value;
  if (city == null || city === '') return;
  display(city);
  newForm.reset();
});
