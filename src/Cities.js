import React from "react";

export default function Cities() {
  return (
    <div className="Cities">
      <div className="row row-cols-4">
        <div className="col">
          <a href="/" id="kharkov">
            Kharkov
          </a>
        </div>
        <div className="col">
          <a href="/" id="cherkasy">
            Cherkasy
          </a>
        </div>
        <div className="col">
          <a href="/" id="kyiv">
            Kyiv
          </a>
        </div>
        <div className="col">
          <a href="/" id="lviv">
            Lviv
          </a>
        </div>
      </div>
    </div>
  );
}
