import fetchWeather from './fetch';
import {
  newForm,
  newCityName,
  mainContainer,
  resultDiv,
  nameContainer,
  weatherTypeContainer,
  tempContainer,
} from './domcontroller';

const clearElement = (element) => {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
};

const display = async (city) => {
  clearElement(mainContainer);
  const res = await fetchWeather(city);
  if (res.cod === 200) {
    nameContainer.innerText = `City name: ${res.name}`;
    weatherTypeContainer.innerText = `Weather type: ${res.weather[0].description}`;
    tempContainer.innerText = `Temperature in Fahrenheit: ${res.main.temp}`;

    weatherTypeContainer.classList.add('city-name');
    tempContainer.classList.add('city-name');
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
