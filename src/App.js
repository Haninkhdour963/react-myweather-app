import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import './index.css';

function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const apiKey = process.env.REACT_APP_WEATHER_KEY;

  const fetchWeather = async (cityName) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`
      );
      if (!res.ok) throw new Error('City not found');
      const data = await res.json();
      setWeather(data);
      setError(null);
    } catch (err) {
      setWeather(null);
      setError(err.message);
    }
  };

  const handleSearch = (cityName) => {
    fetchWeather(cityName);
  };

  return (
    <div className="container">
      <h1>🌦 React Weather App</h1>
      <SearchBar onSearch={handleSearch} />
      {error && <p className="error">{error}</p>}
      {weather && <WeatherCard data={weather} />}
    </div>
  );
}

export default App;
