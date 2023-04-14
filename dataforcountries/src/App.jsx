import React, { useEffect, useState } from "react";
import axios from "axios";
import Filter from "./components/Filter.jsx";
import Countries from "./components/Countries.jsx";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setCountries(res.data);
    });
  }, []);
  const filteredCountries = countries.filter((country) => {
    if (!filter) return;
    return country.name.common.toLowerCase().includes(filter.toLowerCase());
  });
  return (
    <div>
      <Filter filter={filter} setFilter={setFilter} />
      <Countries filteredCountries={filteredCountries} />
    </div>
  );
};

export default App;
