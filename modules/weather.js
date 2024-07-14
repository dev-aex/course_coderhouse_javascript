export function weatherAPI() {
  const API_CALL =
    "https://api.openweathermap.org/data/2.5/forecast?lat=18.486057&lon=-69.931213&appid=c4c77c1db4d681097eab58a7819552d9";
  fetch(API_CALL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      displayWeather(data);
    })
    .catch((error) => {
      console.error("Error fetching weather data", error);
    });
}

function displayWeather(fetchedData) {
  const WEATHER_ICON = document.querySelector(".weather__icon");
  const WEATHER_TEMP = document.querySelector(".weather__temp");
  const WEATHER_DESC = document.querySelector(".weather__desc");
  const WEATHER_FEELS = document.querySelector(".weather__feels");
  const WEATHER_HUM = document.querySelector(".weather__hum");
  const WEATHER_WIND = document.querySelector(".weather__wind");

  let toCelsius = (temp) => {
    return Math.round(temp - 273.15);
  };

  WEATHER_ICON.src = `https://openweathermap.org/img/wn/${fetchedData.list[0].weather[0].icon}.png`;
  WEATHER_TEMP.textContent = `${toCelsius(fetchedData.list[0].main.temp)}°C`;
  WEATHER_DESC.textContent = fetchedData.list[0].weather[0].description;
  WEATHER_HUM.textContent = `${fetchedData.list[0].main.humidity}%`;
  WEATHER_FEELS.textContent = `${toCelsius(
    fetchedData.list[0].main.feels_like
  )}°C`;
  WEATHER_WIND.textContent = `${fetchedData.list[0].wind.speed} m/s`

}



