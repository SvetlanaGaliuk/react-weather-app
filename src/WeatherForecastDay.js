//4_6_4_React Weather Project / Forecast / 1 Day
import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./WeatherForecast.css";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return days[day];
  }

  return (
    <div className="WeatherForecast-day">
      <div className="row-day">
        <div className="row-box">
          <div className="row">
            <div className="col text-left">{day()}</div>
            <div className="col-md">
              <span className="WeatherForecast-temperature-max">
                {maxTemperature()}
              </span>
              <span className="WeatherForecast-temperature-min">
                {minTemperature()}
              </span>
            </div>
            <div className="col col-lg">
              <WeatherIcon code={props.data.weather[0].icon} size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
