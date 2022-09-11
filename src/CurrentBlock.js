import React, { useState } from "react";
import axios from "axios";

export default function CurrentBlock(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: "Wednesday",
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="CurrentBlock">
        <div className="current_block">
          <div className="row row-cols-2">
            <div className="col">
              <div className="text-left">
                <h2 id="city">{weatherData.city}</h2>

                <div id="currentFormattedDate">22.05.2022</div>
                <div id="date">{weatherData.date}</div>
                <div id="description">{weatherData.description}</div>
                <br />

                <div>
                  Humidity: <span id="humidity">{weatherData.humidity}%</span>
                </div>
                <div>
                  Wind: <span id="wind">{Math.round(weatherData.wind)}</span>{" "}
                  km/h
                </div>
              </div>
            </div>

            <div className="col">
              <div className="temperature">
                <img
                  src={weatherData.iconUrl}
                  alt={weatherData.description}
                  id="icon"
                  className="float-right"
                />

                <br />
                <div>
                  <strong id="temperature">
                    {Math.round(weatherData.temperature)}°C
                  </strong>
                  <span className="units"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "4c2488c239ed7b711f86f8b237699c06";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
