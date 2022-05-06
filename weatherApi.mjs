import got from 'got';

class Weather {
    

    fetchWeatherData(city, callback) {
        const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=c8e8d499485b32f7058f597067dd9da8`;
        got(apiUrl).then((response) => {
            const weatherData = JSON.parse(response.body);
            callback(weatherData)
        })
    }
}

export default Weather

const weather = new Weather();
weather.fetchWeatherData('London', (weatherData) => {
    console.log(weatherData.weather[0].main);
});