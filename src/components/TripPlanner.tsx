import React, { useState } from 'react';
import { Calendar, DollarSign, MapPin, Navigation } from 'lucide-react';
import { TripData } from '../App';

interface TripPlannerProps {
  onTripPlan: (data: TripData) => void;
}

function TripPlanner({ onTripPlan }: TripPlannerProps) {
  const [formData, setFormData] = useState({
    destination: '',
    days: 1,
    budget: 5000,
    transportMode: 'bus' as 'bus' | 'train' | 'car',
    currentLocation: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onTripPlan(formData);
  };

  const handleInputChange = (field: string, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Plan Your Journey</h2>
        <p className="text-gray-600">Tell us about your trip and we'll create the perfect itinerary</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
              <MapPin className="h-4 w-4 text-blue-600" />
              <span>Current Location</span>
            </label>
            <input
              type="text"
              value={formData.currentLocation}
              onChange={(e) => handleInputChange('currentLocation', e.target.value)}
              placeholder="Where are you starting from?"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
              <Navigation className="h-4 w-4 text-teal-600" />
              <span>Destination</span>
            </label>
            <input
              type="text"
              value={formData.destination}
              onChange={(e) => handleInputChange('destination', e.target.value)}
              placeholder="Where do you want to go?"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
              <Calendar className="h-4 w-4 text-orange-600" />
              <span>Days</span>
            </label>
            <select
              value={formData.days}
              onChange={(e) => handleInputChange('days', parseInt(e.target.value))}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            >
              {[...Array(14)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1} day{i + 1 > 1 ? 's' : ''}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
              <DollarSign className="h-4 w-4 text-green-600" />
              <span>Budget (₹)</span>
            </label>
            <input
              type="number"
              value={formData.budget}
              onChange={(e) => handleInputChange('budget', parseInt(e.target.value))}
              min="1000"
              step="500"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              required
            />
          </div>
        </div>

        <div className="space-y-3">
          <label className="text-sm font-medium text-gray-700">Transportation Mode</label>
          <div className="flex space-x-4">
            {[
              { value: 'bus', label: 'Bus', icon: '🚌' },
              { value: 'train', label: 'Train', icon: '🚂' },
              { value: 'car', label: 'Car', icon: '🚗' }
            ].map((mode) => (
              <button
                key={mode.value}
                type="button"
                onClick={() => handleInputChange('transportMode', mode.value)}
                className={`flex-1 px-4 py-3 border-2 rounded-lg font-medium transition-all duration-200 ${
                  formData.transportMode === mode.value
                    ? 'border-blue-600 bg-blue-50 text-blue-700'
                    : 'border-gray-200 text-gray-700 hover:border-gray-300'
                }`}
              >
                <div className="text-center">
                  <div className="text-lg mb-1">{mode.icon}</div>
                  <div className="text-sm">{mode.label}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-blue-700 hover:to-teal-700 transform hover:scale-[1.02] transition-all duration-200 shadow-lg"
        >
          Create My Trip Plan
        </button>
      </form>
    </div>
  );
}

export default TripPlanner;