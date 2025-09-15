import React from 'react';
import { Cloud, Sun, CloudRain, Thermometer, Wind, Droplets } from 'lucide-react';

interface WeatherInfoProps {
  destination: string;
  currentLocation: string;
}

function WeatherInfo({ destination, currentLocation }: WeatherInfoProps) {
  // Mock weather data - in real app this would come from weather API
  const currentWeather = {
    location: currentLocation,
    temperature: 28,
    condition: 'Partly Cloudy',
    humidity: 65,
    windSpeed: 12
  };

  const destinationWeather = {
    location: destination,
    temperature: 32,
    condition: 'Sunny',
    humidity: 58,
    windSpeed: 8
  };

  const getWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'sunny':
        return <Sun className="h-8 w-8 text-yellow-500" />;
      case 'rainy':
        return <CloudRain className="h-8 w-8 text-blue-500" />;
      default:
        return <Cloud className="h-8 w-8 text-gray-500" />;
    }
  };

  const WeatherCard = ({ weather, title }: { weather: typeof currentWeather; title: string }) => (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-5 border border-blue-200">
      <h4 className="font-semibold text-gray-900 mb-3">{title}</h4>
      <div className="flex items-center justify-between mb-4">
        {getWeatherIcon(weather.condition)}
        <div className="text-right">
          <div className="text-2xl font-bold text-gray-900">{weather.temperature}°C</div>
          <div className="text-sm text-gray-600">{weather.condition}</div>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2">
            <Droplets className="h-4 w-4 text-blue-500" />
            <span className="text-gray-600">Humidity</span>
          </div>
          <span className="font-medium">{weather.humidity}%</span>
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2">
            <Wind className="h-4 w-4 text-gray-500" />
            <span className="text-gray-600">Wind</span>
          </div>
          <span className="font-medium">{weather.windSpeed} km/h</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
      <div className="flex items-center space-x-3 mb-6">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-2 rounded-lg">
          <Thermometer className="h-5 w-5 text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">Weather Updates</h3>
      </div>

      <div className="space-y-4">
        <WeatherCard weather={currentWeather} title="Current Location" />
        <WeatherCard weather={destinationWeather} title="Destination" />
      </div>

      {/* Weather Advisory */}
      <div className="mt-4 p-4 bg-yellow-50 rounded-xl border border-yellow-200">
        <div className="flex items-start space-x-2">
          <Sun className="h-5 w-5 text-yellow-600 mt-0.5" />
          <div>
            <h5 className="font-medium text-yellow-900">Travel Advisory</h5>
            <p className="text-sm text-yellow-800 mt-1">
              Perfect weather for outdoor activities. Don't forget sunscreen!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherInfo;