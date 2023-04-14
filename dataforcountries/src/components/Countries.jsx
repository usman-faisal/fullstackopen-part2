import React, { useState } from "react";
import Country from "./Country.jsx";

const Countries = ({ filteredCountries }) => {
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
