import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  const [city, setCity] = useState("");
  const [results, setResults] = useState("");

  // Receive API response, display city weather data results
  function handleResponse(response) {
    let temperature = Math.round(response.data.main.temp);
    let description = response.data.weather[0].description;
    let humidity = response.data.main.humidity;
    let wind = Math.round(response.data.wind.speed * 3.6);
    let iconId = response.data.weather[0].icon;
    let iconUrl = `http://openweathermap.org/img/wn/${iconId}@2x.png`;

    setResults(
      <ul>
        <li>Temperature: {temperature}°C</li>
        <li>Description: {description}</li>
        <li>Humidity: {humidity}%</li>
        <li>Wind: {wind}km/h</li>
        <li>
          <img src={iconUrl} alt={description} />
        </li>
      </ul>
    );
  }

  // Search form submitted, call weather API
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "aca4dd3643b89e94dbd3cac6cf6f2638";
    let units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(handleResponse);
  }

  // Receive and save user-input city name
  function captureCity(event) {
    setCity(event.target.value);
  }

  // Search form
  return (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter a city" onChange={captureCity} />
        <input type="submit" value="Search" />
      </form>
      {results}
    </div>
  );
}
