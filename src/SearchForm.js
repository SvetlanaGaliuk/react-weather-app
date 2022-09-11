import React from "react";

export default function SearchForm() {
  return (
    <div className="SearchForm">
      <form id="search-form">
        <div className="input-group mb-3">
          <div className="col-8">
            <input
              type="text"
              className="form-control"
              autoComplete="off"
              autoFocus="on"
              placeholder="Enter the city"
              id="city-input"
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
    </div>
  );
}
