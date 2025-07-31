import React from 'react';

const WeatherCard = ({ data }) => {
  const { name, sys, main, weather } = data;

  return (
    <div className="weather-card">
      <h2>{name}, {sys.country}</h2>
      <img
        src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
        alt={weather[0].description}
      />
      <p>{weather[0].main} - {weather[0].description}</p>
      <h3>{Math.round(main.temp)}°C</h3>
      <p>Feels like: {Math.round(main.feels_like)}°C</p>
      <p>Humidity: {main.humidity}%</p>
    </div>
  );
};

export default WeatherCard;
