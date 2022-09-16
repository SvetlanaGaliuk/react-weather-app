import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row-day">
        <div className="row-box">
          <div className="row">
            <div className="col text-left">Thu</div>
            <div className="col-md">
              <span className="WeatherForecast-temperature-max">20 °C</span>
            </div>
            <div className="col col-lg-2">
              <WeatherIcon code="01d" size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
