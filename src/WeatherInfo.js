import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="current_block">
        <div className="row row-cols-2">
          <div className="col">
            <div className="text-left">
              <h2 id="city">{props.data.city}</h2>
              <div id="currentFormattedDate">
                <FormattedDate date={props.data.date} />
              </div>
              <div id="date"></div>
              <div id="description">{props.data.description}</div>
              <br />
              <div>
                Humidity: <span id="humidity">{props.data.humidity}%</span>
              </div>
              <div>
                Wind: <span id="wind">{Math.round(props.data.wind)}</span> km/h
              </div>
            </div>
          </div>

          <div className="col">
            <div className="temperature">
              <WeatherIcon code={props.data.icon} size={70} />

              <img
                src={props.data.iconUrl}
                alt=""
                id="icon"
                className="float-right"
              />

              <br />
              <div>
                <strong id="temperature">
                  {Math.round(props.data.temperature)}°C
                </strong>
                <span className="units"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
