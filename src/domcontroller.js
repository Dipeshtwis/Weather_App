const newForm = document.querySelector('[data-new-form]');
const newCityName = document.querySelector('[data-new-city-input]');
const mainContainer = document.getElementById('container');


const resultDiv = document.createElement('div');
  const nameContainer = document.createElement('h1');
  const weatherTypeContainer = document.createElement('p');
  const tempContainer = document.createElement('p');

export {
	newForm,
	newCityName,
	mainContainer,
	resultDiv,
	nameContainer,
	weatherTypeContainer,
	tempContainer,
};