import got from 'got';

const apiKey = 'c8e8d499485b32f7058f597067dd9da8'; // paste your API key here
const city = 'London';
const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

let weatherData = null;

got(apiUrl).then((response) => {
  weatherData = JSON.parse(response.body);
  console.log(weatherData);
  console.log(weatherData.main.temp)
  console.log(weatherData.weather[0].main)
});

console.log('Requesting weather data');

