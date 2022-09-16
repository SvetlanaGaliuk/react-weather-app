//4_5 Added API integration
import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";

export default function CurrentBlock(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function search() {
    const apiKey = "4c2488c239ed7b711f86f8b237699c06";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="CurrentBlock">
        <form id="search-form" onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <div className="col-8">
              <input
                type="search"
                className="form-control"
                autoComplete="off"
                autoFocus="on"
                placeholder="Enter the city"
                id="city-input"
                onChange={handleCityChange}
              />
            </div>

            <div className="col-4">
              <input
                className="form-control btn btn-primary"
                type="submit"
                value="Search"
                id="button-addon2"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
