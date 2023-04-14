import React, { useState } from "react";
import Country from "./Country.jsx";
import CountryDetailsOpened from "./CountryDetailsOpened.jsx";

const Countries = ({ filteredCountries }) => {
  if (filteredCountries.length === 1) {
    return (
      <div>
        <CountryDetailsOpened country={filteredCountries[0]} />;
      </div>
    );
  }
  return (
    <div>
      {filteredCountries.length > 10
        ? "Too many matches, specify another filter"
        : filteredCountries.map((country) => (
            <Country key={country.name.common} country={country} />
          ))}
    </div>
  );
};

export default Countries;
