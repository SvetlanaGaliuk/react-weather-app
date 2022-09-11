import React from "react";

export default function CurrentBlock() {
  return (
    <div className="CurrentBlock">
      <div className="current_block">
        <div className="row row-cols-2">
          <div className="col text-left">
            <h2 id="city">Kharkov</h2>

            <div id="currentFormattedDate">22.05.2022</div>
            <div id="date">Sunday</div>
            <div id="description">Clear</div>
            <br />

            <div>
              Humidity: <span id="humidity">82%</span>
            </div>
            <div>
              Wind: <span id="wind">3</span> km/h
            </div>
          </div>

          <div className="col">
            <div className="temperature">
              <img src="" alt="⛅ Clear" id="icon" className="float-right" />

              <br />
              <div>
                <strong id="temperature">23°C</strong>
                <span className="units"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
