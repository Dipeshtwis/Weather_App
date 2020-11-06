const newForm = document.querySelector('[data-new-form]');
const newCityName = document.querySelector('[data-new-city-input]');
const mainContainer = document.getElementById('container');
const tempTemplate = document.getElementById('temp-template');

const resultDiv = document.createElement('div');
const nameContainer = document.createElement('h1');
const weatherTypeContainer = document.createElement('p');
const tempContainer = document.createElement('p');
const humidityContainer = document.createElement('p');
const tempType = document.createElement('span');

const temperatureSwitch = () => {
  const tempElement = document.importNode(tempTemplate.content, true);
  return tempElement;
};

export {
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
};