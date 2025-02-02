import React, { useState } from "react";
import axios from "axios";
import "./App.css";

const WeatherApp = (props) => {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);

  const showTemperature = (response) => {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3a94f3778290bfeee61278505dbbe51d&units=metric`;
    axios.get(url).then(showTemperature);
  };

  const updateCity = (event) => {
    setCity(event.target.value);
  };

  let searchForm = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        onChange={updateCity}
        placeholder="What's the city?"
      />
      <input type="submit" value="Search" />
    </form>
  );

  if (loaded) {
    return (
      <div>
        {searchForm}
        <br />
        <ul>
          <li>
            Temperature:{" "}
            <strong> {Math.round(weather.temperature)}°C | </strong>
            {Math.round((weather.temperature * 9) / 5) + 32}°F
          </li>
          <li>
            Description: <strong> {weather.description} </strong>
          </li>
          <li>
            Humidity: <strong> {weather.humidity}% </strong>{" "}
          </li>
          <li>
            Wind: <strong> {Math.round(weather.wind)}km/h </strong>{" "}
          </li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return searchForm;
  }
};

export default WeatherApp;
