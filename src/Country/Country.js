import React from "react";
import { useEffect } from 'react';
import { useState } from 'react';
import CountryShow from "../CountryShow/CountryShow";

const Country = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);
  return (
    
      <div>
        <h1>Total Country: {countries.length}</h1>
        {
            countries.map(country => <CountryShow country={country}></CountryShow>)
        }
      </div>
    
  );
};

export default Country;
