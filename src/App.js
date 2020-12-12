import React, { useState } from "react";
import "./styles.css";
import travelDB from "./database.js";
import hero from "./cover.jpg";

export default function App() {
  let countries = Object.keys(travelDB);
  // console.log(countries);
  const [selectedCountry, setSelectedCountry] = useState("France");
  function countryClickHandler(country) {
    // console.log(country);
    setSelectedCountry(country);
  }
  // console.log(logo);
  // console.log(hero);

  return (
    <div className="App">
      {/* <div className="heading">
        <img className="" src={logo} alt="Logo" />
      </div> */}

      <img className="hero" src={hero} alt="Logo" />

      {countries.map(function (country) {
        return (
          <button
            className="btns"
            onClick={() => countryClickHandler(country)}
            key={country}
          >
            {country}
          </button>
        );
      })}

      {/* <hr /> */}

      <ul>
        {travelDB[selectedCountry].map(function (city) {
          return (
            <div className="output-div" key={city.name}>
              <section className="outputCity">
                <div className="img-left">
                  <img className="img" src={city.poster} alt="City" />
                </div>
                <div className="text-right">
                  <div className="city-text">City: {city.name}</div>
                  <div className="medium-text">Country: {city.country}</div>
                  <div className="medium-text">
                    Population: {city.population}
                  </div>
                  <div className="medium-text">Area: {city.size}</div>
                  <div className="desc-text">
                    <strong>Description: </strong>
                    {city.fact}
                  </div>
                </div>
              </section>
            </div>
          );
        })}
        {/* {selectedCountry} */}
      </ul>

      <footer>
        <p>© | 2020 | CODE HUB </p>
      </footer>
    </div>
  );
}
