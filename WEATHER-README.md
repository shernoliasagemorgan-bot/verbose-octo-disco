# Weather Dashboard

A modern weather dashboard application built with Next.js, React, and Tailwind CSS. Fetches real-time weather data from WeatherAPI.com (free tier).

## Features

### 🌍 Real-time Weather
- **Current Conditions** - Temperature, feels like, description
- **Detailed Metrics**:
  - Humidity levels
  - Wind speed
  - Atmospheric pressure
  - Visibility
  - UV Index
  - Cloud coverage

### 📅 7-Day Forecast
- Daily high/low temperatures
- Weather conditions
- Humidity
- Wind speed
- Weather icons

### 🔍 Search & Navigation
- Search for any city worldwide
- Real-time search suggestions
- Location-based weather
- Error handling for invalid cities

### ⭐ Favorites System
- Save favorite locations
- Quick access to saved cities
- Persistent storage with localStorage
- One-click weather updates

### 💾 Data Persistence
- Favorites saved to browser localStorage
- Quick access to previously searched cities
- Data persists across sessions

### 🎨 Modern UI
- Dark theme with blue accents
- Smooth animations with Framer Motion
- Responsive design for all devices
- Interactive weather icons
- Real-time icon updates

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Internet connection (for weather API)

### Installation

1. Navigate to project directory
   ```bash
   cd verbose-octo-disco
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Run development server
   ```bash
   npm run dev
   ```

4. Open browser
   - Weather Dashboard: http://localhost:3000/weather

## API Information

### WeatherAPI.com (Current)
- **Free Tier**: 1 million calls/month
- **Features**: Current weather, forecast, air quality
- **Rate Limit**: 1 call/second on free tier
- **Documentation**: https://www.weatherapi.com/

### Alternative APIs

**OpenWeatherMap**
```
https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric
```
- Free tier: 60 calls/minute
- Sign up: https://openweathermap.org/

**Open-Meteo** (No API key required)
```
https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current=temperature_2m,weather_code&timezone=auto
```
- Completely free
- No authentication required

## Usage

### Searching for Weather
1. Enter city name in search bar
2. Click "Search" or press Enter
3. Dashboard updates with current weather and forecast

### Saving Favorites
1. Click the star icon (★) on the location header
2. Location is saved to favorites
3. Access favorites from the "Favorite Locations" section
4. Click any favorite to quickly check its weather

### Understanding Weather Data

**Temperature Ranges**:
- High: >25°C (77°F)
- Moderate: 15-25°C (59-77°F)
- Cold: <15°C (59°F)

**Wind Speed**:
- Light: 0-10 km/h
- Moderate: 10-20 km/h
- Strong: >20 km/h

**Humidity**:
- Low: <40%
- Moderate: 40-70%
- High: >70%

**Pressure**:
- High: >1013 mb (rising)
- Normal: ~1013 mb
- Low: <1000 mb (falling, bad weather)

## Customization

### Change API Provider

Edit `src/app/weather/page.tsx` and update the `fetchWeather` function:

```typescript
// For OpenWeatherMap
const response = await fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`
);
```

### Update Colors
Modify Tailwind classes in the component:
- `bg-blue-900` - Background gradient
- `text-blue-400` - Accent color
- `bg-slate-800` - Card backgrounds

### Add More Details
Extend the weather card with:
- UV Index breakdown
- Air quality index
- Sunrise/sunset times
- Historical data
- Weather alerts

## Browser Support
- Chrome/Edge: ✅ Full Support
- Firefox: ✅ Full Support
- Safari: ✅ Full Support
- Mobile Browsers: ✅ Full Support

## API Troubleshooting

### Rate Limit Exceeded
- WeatherAPI free tier: 1 million calls/month
- Implement request throttling
- Use caching strategies

### City Not Found
- Ensure correct spelling
- Try country code: "London, UK"
- Some cities require region: "Springfield, Illinois"

### No Data
- Check internet connection
- Verify API key (if using paid service)
- Check API rate limits

## Data Storage

Favorites are stored in browser localStorage:
```javascript
// Accessing favorites
const favorites = JSON.parse(localStorage.getItem('favoriteLocations') || '[]');

// Adding a favorite
localStorage.setItem('favoriteLocations', JSON.stringify([...favorites, 'Paris']));
```

## Future Enhancements
- Weather alerts and warnings
- Air quality index (AQI)
- Historical weather data
- Weather maps (radar, satellite)
- Multiple location comparison
- Weather notifications
- Dark/Light theme toggle
- Metric/Imperial unit toggle
- Severe weather alerts
- Precipitation timeline

## License

MIT License - Feel free to use and modify!
