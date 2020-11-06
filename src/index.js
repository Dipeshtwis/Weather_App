import fetchWeather from './fetch'

const newForm = document.querySelector('[data-new-form]');
const newCityName = document.querySelector('[data-new-city-input]');


newForm.addEventListener('submit', e => {
	e.preventDefault();
	const city = newCityName.value;
	if (city == null || city === '') return;
	fetchWeather(city);
	newForm.reset();
});
