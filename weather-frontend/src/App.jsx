/* src/App.jsx */
import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Calls your Java Backend
  const fetchWeather = async () => {
    if (!city) return;
    
    setLoading(true);
    setWeather(null);
    setError('');

    try {
      // Connects to Spring Boot endpoint (Localhost 8080)
      const response = await axios.get(`http://localhost:8080/api/v1/weather/${city}`);
      setWeather(response.data);
    } catch (err) {
      console.error(err);
      setWeather(null);
      setError('City not found. Please check spelling.');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      fetchWeather();
    }
  };

  return (
    <div className="weather-container">
      {/* Search Section */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Enter city name (e.g., Pune)"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={handleKeyPress} 
        />
        <button onClick={fetchWeather}>Search</button>
      </div>

      {/* Error Message */}
      {error && <div className="error-msg">⚠️ {error}</div>}

      {/* Loading State */}
      {loading && <p>Loading weather data...</p>}

      {/* Weather Display */}
      {weather && (
        <div className="weather-info">
          <h2>{weather.name}, {weather.sys?.country || 'IN'}</h2>
          
          <div className="temp-container">
            <h1>{Math.round(weather.main.temp)}°C</h1>
          </div>
          
          <p className="description">
            {weather.weather[0].description}
          </p>

          <div className="details">
            <div className="col">
              <small>Humidity</small>
              <p>{weather.main.humidity}%</p>
            </div>
            <div className="col">
              <small>Wind Speed</small>
              <p>{weather.wind.speed} m/s</p>
            </div>
            <div className="col">
              <small>Pressure</small>
              <p>{weather.main.pressure} hPa</p>
            </div>
            <div className="col">
              <small>Feels Like</small>
              <p>{Math.round(weather.main.feels_like)}°C</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;