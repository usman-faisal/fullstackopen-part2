import React, { useState } from "react";
import CountryDetailsOpened from "./CountryDetailsOpened.jsx";
import CountryDetailsClosed from "./CountryDetailsClosed.jsx";

const Country = ({ country }) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      {open ? (
        <CountryDetailsOpened key={country.name.common} country={country} />
      ) : (
        <CountryDetailsClosed country={country} toggleOpen={toggleOpen} />
      )}
      <hr />
    </>
  );
};

export default Country;
