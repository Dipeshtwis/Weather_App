import fetchWeather from './fetch'

const newForm = document.querySelector('[data-new-form]');
const newCityName = document.querySelector('[data-new-city-input]');
const mainContainer= document.getElementById('container');

const display = async (city) => {
	clearElement(mainContainer);
	const res = await fetchWeather(city);
	const resultDiv = document.createElement('div');
	const nameContainer = document.createElement('p');
	const weatherTypeContainer = document.createElement('p');
	const tempContainer = document.createElement('p');
	nameContainer.innerText = `Name of the city: ${res.name}`;
	weatherTypeContainer.innerText = `Weather type: ${res.weather[0].description}`;
	tempContainer.innerText = `City Temperature in Fahrenheit: ${res.main.temp}`;
	resultDiv.appendChild(nameContainer);
	resultDiv.appendChild(weatherTypeContainer);
	resultDiv.appendChild(tempContainer);
	mainContainer.appendChild(resultDiv);

}

newForm.addEventListener('submit', e => {
	e.preventDefault();
	const city = newCityName.value;
	if (city == null || city === '') return;
	display(city);
	newForm.reset();
});

const clearElement = (element) => {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  };
