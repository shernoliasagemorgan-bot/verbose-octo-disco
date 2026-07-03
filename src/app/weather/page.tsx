'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HiMapPin,
  HiMagnifyingGlass,
  HiEye,
  HiWind,
  HiTrendingUp,
  HiDroplet,
  HiGaugeCircle,
  HiSun,
} from 'react-icons/hi2';
import { HiCloud, HiCloudRain, HiCloudSnow } from 'react-icons/hi';

interface WeatherData {
  city: string;
  country: string;
  temperature: number;
  feelsLike: number;
  description: string;
  icon: string;
  humidity: number;
  pressure: number;
  windSpeed: number;
  visibility: number;
  uvi: number;
  clouds: number;
  sunrise: number;
  sunset: number;
}

interface ForecastDay {
  date: string;
  icon: string;
  description: string;
  tempMax: number;
  tempMin: number;
  humidity: number;
  windSpeed: number;
}

const WeatherDashboard = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastDay[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');

  const API_KEY = 'b6fd43b5d2d1408609221340242312'; // Using weatherapi.com free tier

  // Load favorites from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('favoriteLocations');
    if (saved) {
      setFavorites(JSON.parse(saved));
    }
    // Load weather for default location
    fetchWeather('New York');
  }, []);

  // Save favorites to localStorage
  useEffect(() => {
    localStorage.setItem('favoriteLocations', JSON.stringify(favorites));
  }, [favorites]);

  const fetchWeather = async (city: string) => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=7&aqi=no`
      );

      if (!response.ok) {
        throw new Error('City not found');
      }

      const data = await response.json();
      const current = data.current;
      const location = data.location;

      setWeather({
        city: location.name,
        country: location.country,
        temperature: Math.round(current.temp_c),
        feelsLike: Math.round(current.feelslike_c),
        description: current.condition.text,
        icon: current.condition.icon,
        humidity: current.humidity,
        pressure: current.pressure_mb,
        windSpeed: current.wind_kph,
        visibility: current.vis_km,
        uvi: current.uv,
        clouds: current.cloud,
        sunrise: new Date(location.localtime).getTime(),
        sunset: new Date(location.localtime).getTime(),
      });

      // Process forecast
      const forecastDays = data.forecast.forecastday.slice(0, 7).map((day: any) => ({
        date: day.date,
        icon: day.day.condition.icon,
        description: day.day.condition.text,
        tempMax: Math.round(day.day.maxtemp_c),
        tempMin: Math.round(day.day.mintemp_c),
        humidity: day.day.avghumidity,
        windSpeed: day.day.maxwind_kph,
      }));
      setForecast(forecastDays);
      setSearchQuery('');
    } catch (err) {
      setError('Unable to fetch weather. Please try another city.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      fetchWeather(searchQuery);
    }
  };

  const toggleFavorite = (city: string) => {
    setFavorites((prev) =>
      prev.includes(city) ? prev.filter((c) => c !== city) : [...prev, city]
    );
  };

  const getWeatherIcon = (description: string) => {
    if (description.includes('rain') || description.includes('drizzle')) {
      return <HiCloudRain size={40} className="text-blue-400" />;
    }
    if (description.includes('cloud')) {
      return <HiCloud size={40} className="text-gray-400" />;
    }
    if (description.includes('snow')) {
      return <HiCloudSnow size={40} className="text-blue-300" />;
    }
    return <HiSun size={40} className="text-yellow-400" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Weather <span className="text-blue-400">Dashboard</span>
          </h1>
          <p className="text-slate-400">Check weather conditions worldwide</p>
        </motion.div>

        {/* Search Bar */}
        <motion.form
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleSearch}
          className="mb-8"
        >
          <div className="flex gap-2 bg-slate-800/50 p-2 rounded-lg border border-slate-700">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for a city..."
              className="flex-1 px-4 py-3 bg-transparent text-white placeholder-slate-400 focus:outline-none"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={loading}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center gap-2 transition-colors disabled:opacity-50"
            >
              <HiMagnifyingGlass size={20} />
              Search
            </motion.button>
          </div>
        </motion.form>

        {/* Error Message */}
        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mb-6 p-4 bg-red-500/20 border border-red-500/30 text-red-200 rounded-lg"
            >
              {error}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Loading State */}
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="inline-block">
              <div className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin" />
            </div>
            <p className="text-slate-300 mt-4">Loading weather data...</p>
          </motion.div>
        )}

        {/* Main Weather Card */}
        {weather && !loading && (
          <>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-8"
            >
              <div className="bg-gradient-to-br from-slate-800/50 to-blue-900/50 rounded-lg p-8 border border-slate-700 backdrop-blur-sm">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <HiMapPin className="text-blue-400" />
                      <h2 className="text-3xl font-bold text-white">
                        {weather.city}, {weather.country}
                      </h2>
                    </div>
                    <p className="text-slate-400 text-sm">
                      {new Date().toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => toggleFavorite(weather.city)}
                    className={`text-3xl transition-colors ${
                      favorites.includes(weather.city)
                        ? 'text-yellow-400'
                        : 'text-slate-500 hover:text-slate-400'
                    }`}
                  >
                    ★
                  </motion.button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Temperature Section */}
                  <div className="flex items-center gap-6">
                    <div className="text-6xl font-bold text-white">
                      {weather.temperature}°C
                    </div>
                    <div className="text-7xl">
                      {getWeatherIcon(weather.description)}
                    </div>
                  </div>

                  {/* Description and Feels Like */}
                  <div className="flex flex-col justify-center">
                    <p className="text-3xl font-semibold text-white mb-2">
                      {weather.description}
                    </p>
                    <p className="text-slate-300 text-lg">
                      Feels like <span className="font-semibold">{weather.feelsLike}°C</span>
                    </p>
                    <div className="mt-6 space-y-2">
                      <p className="text-slate-400 text-sm">UV Index: {weather.uvi}</p>
                      <p className="text-slate-400 text-sm">
                        Cloud Coverage: {weather.clouds}%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Weather Details Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
            >
              {/* Humidity */}
              <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-3">
                  <HiDroplet className="text-blue-400" size={24} />
                  <h3 className="font-semibold text-slate-300">Humidity</h3>
                </div>
                <p className="text-3xl font-bold text-white">{weather.humidity}%</p>
                <p className="text-slate-400 text-sm mt-2">
                  {weather.humidity > 70
                    ? 'High'
                    : weather.humidity > 40
                    ? 'Moderate'
                    : 'Low'}
                </p>
              </div>

              {/* Wind Speed */}
              <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-3">
                  <HiWind className="text-slate-400" size={24} />
                  <h3 className="font-semibold text-slate-300">Wind Speed</h3>
                </div>
                <p className="text-3xl font-bold text-white">{weather.windSpeed} km/h</p>
                <p className="text-slate-400 text-sm mt-2">
                  {weather.windSpeed > 20 ? 'Strong' : weather.windSpeed > 10 ? 'Moderate' : 'Light'}
                </p>
              </div>

              {/* Pressure */}
              <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-3">
                  <HiGaugeCircle className="text-yellow-400" size={24} />
                  <h3 className="font-semibold text-slate-300">Pressure</h3>
                </div>
                <p className="text-3xl font-bold text-white">{weather.pressure} mb</p>
                <p className="text-slate-400 text-sm mt-2">
                  {weather.pressure > 1013 ? 'High' : weather.pressure > 1000 ? 'Normal' : 'Low'}
                </p>
              </div>

              {/* Visibility */}
              <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-3">
                  <HiEye className="text-purple-400" size={24} />
                  <h3 className="font-semibold text-slate-300">Visibility</h3>
                </div>
                <p className="text-3xl font-bold text-white">{weather.visibility} km</p>
                <p className="text-slate-400 text-sm mt-2">
                  {weather.visibility > 10 ? 'Excellent' : weather.visibility > 5 ? 'Good' : 'Limited'}
                </p>
              </div>
            </motion.div>

            {/* 7-Day Forecast */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">7-Day Forecast</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3">
                {forecast.map((day, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -5 }}
                    className="bg-slate-800/50 rounded-lg p-4 border border-slate-700 backdrop-blur-sm text-center hover:border-blue-500/50 transition-colors"
                  >
                    <p className="font-semibold text-slate-300 text-sm mb-2">
                      {new Date(day.date).toLocaleDateString('en-US', {
                        weekday: 'short',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </p>
                    <img
                      src={day.icon}
                      alt={day.description}
                      className="w-12 h-12 mx-auto mb-2"
                    />
                    <p className="text-xs text-slate-400 mb-2 h-8 line-clamp-2">
                      {day.description}
                    </p>
                    <div className="space-y-1">
                      <p className="text-lg font-bold text-white">
                        {day.tempMax}° / {day.tempMin}°
                      </p>
                      <p className="text-xs text-blue-300 flex items-center justify-center gap-1">
                        <HiDroplet size={12} /> {day.humidity}%
                      </p>
                      <p className="text-xs text-slate-400 flex items-center justify-center gap-1">
                        <HiWind size={12} /> {day.windSpeed} km/h
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Favorites */}
            {favorites.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-8"
              >
                <h3 className="text-2xl font-bold text-white mb-4">Favorite Locations</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                  {favorites.map((fav, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        fetchWeather(fav);
                      }}
                      className="bg-slate-800/50 hover:bg-blue-900/50 rounded-lg p-3 border border-slate-700 text-center transition-colors group"
                    >
                      <p className="font-semibold text-white text-sm group-hover:text-blue-300 transition-colors">
                        {fav}
                      </p>
                      <p className="text-xs text-slate-400 mt-1">★ Saved</p>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default WeatherDashboard;
