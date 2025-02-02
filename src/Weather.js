import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.name} is ${response.data.main.temp}ºC`
    );
  }
  let apiKey = "6ef2870404e66ed2d6d7e6a9e918298b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <Loader
      type="Puff"
      color="#fc709b"
      height={100}
      width={100}
      timeout={3000}
    />
  );
}
