import React from "react";
import Weather from "./Weather.jsx";

const CountryDetailsOpened = ({ country, toggleOpen }) => {
  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>capital {country.capital[0]}</p>
      <p>area {country.area}</p>
      <h3>languages</h3>
      <ul>
        {Object.keys(country.languages).map((item) => (
          <li key={item}>{country.languages[item]}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt={country.flags.alt} />
      <Weather
        name={country.capital[0]}
        lat={country.capitalInfo.latlng[0]}
        lng={country.capitalInfo.latlng[1]}
      />
    </div>
  );
};

export default CountryDetailsOpened;
