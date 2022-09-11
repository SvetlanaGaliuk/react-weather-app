//4_5_React Weather Search Engine

import OpenSearchCode from "./OpenSearchCode.js";
import Cities from "./Cities";
import SearchForm from "./SearchForm.js";
import CurrentBlock from "./CurrentBlock.js";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Weather App</h1>
          <Cities />
          <SearchForm />
          <CurrentBlock />
          <OpenSearchCode />
        </header>
      </div>
    </div>
  );
}

export default App;
