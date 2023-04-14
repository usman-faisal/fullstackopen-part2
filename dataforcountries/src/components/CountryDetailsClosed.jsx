import React from "react";

const CountryDetailsClosed = ({ country, toggleOpen }) => {
  return (
    <div>
      <span>{country.name.common}</span>
      <button onClick={toggleOpen}>show</button>
    </div>
  );
};

export default CountryDetailsClosed;
