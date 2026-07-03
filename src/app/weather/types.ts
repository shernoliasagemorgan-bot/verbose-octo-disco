export interface WeatherData {
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
}

export interface ForecastDay {
  date: string;
  icon: string;
  description: string;
  tempMax: number;
  tempMin: number;
  humidity: number;
  windSpeed: number;
}

export interface WeatherAPIResponse {
  location: {
    name: string;
    country: string;
    localtime: string;
  };
  current: {
    temp_c: number;
    feelslike_c: number;
    condition: {
      text: string;
      icon: string;
    };
    humidity: number;
    pressure_mb: number;
    wind_kph: number;
    vis_km: number;
    uv: number;
    cloud: number;
  };
}
