import React, { useEffect, useState } from "react";
import axios from "axios";

const Weather = ({ lat, lng, name }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${
          import.meta.env.VITE_API_KEY
        }&units=metric`
      )
      .then((res) => {
        setData({
          temp: res.data.main.temp,
          wind: res.data.wind.speed,
          icon: res.data.weather[0].icon,
        });
      });
  }, []);
  if (!data) return <p>Loading weather....</p>;
  return (
    <div>
      <h3>Weather in {name}</h3>
      <p>Temperature {data.temp} Celsius</p>
      <img
        src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
        alt={`Weather image for ${name}`}
      />
      <p>Wind {data.wind}m/s</p>
    </div>
  );
};

export default Weather;
