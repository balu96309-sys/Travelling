import React from 'react';
import { MapPin, Clock, Star, Plus, CheckCircle2 } from 'lucide-react';
import { Destination, TripData } from '../App';

interface RouteDisplayProps {
  destinations: Destination[];
  selectedDestinations: Destination[];
  onDestinationSelect: (destinations: Destination[]) => void;
  tripData: TripData;
}

function RouteDisplay({ destinations, selectedDestinations, onDestinationSelect, tripData }: RouteDisplayProps) {
  const toggleDestination = (destination: Destination) => {
    const isSelected = selectedDestinations.find(d => d.id === destination.id);
    if (isSelected) {
      onDestinationSelect(selectedDestinations.filter(d => d.id !== destination.id));
    } else {
      onDestinationSelect([...selectedDestinations, destination]);
    }
  };

  const getRouteDirection = () => {
    // Mock logic for geographic ordering
    const directions = ['South to North', 'North to South', 'East to West', 'West to East'];
    return directions[Math.floor(Math.random() * directions.length)];
  };

  const getTransportInfo = () => {
    switch (tripData.transportMode) {
      case 'train':
        return {
          info: 'Next train: Express 12345 at 14:30',
          station: 'Thrissur Railway Station (2.5 km)'
        };
      case 'bus':
        return {
          info: 'Next bus: Kerala RTC at 15:15',
          station: 'KSRTC Bus Stand (1.8 km)'
        };
      default:
        return {
          info: 'Recommended parking near attractions',
          station: 'Multiple parking spots available'
        };
    }
  };

  const transportInfo = getTransportInfo();

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Discover {tripData.destination}
        </h3>
        <div className="flex items-center justify-between">
          <p className="text-gray-600">
            Optimized route: <span className="font-semibold text-blue-600">{getRouteDirection()}</span>
          </p>
          <div className="text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-full">
            {selectedDestinations.length} places selected
          </div>
        </div>
      </div>

      {/* Transport Information */}
      <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl border border-blue-100">
        <h4 className="font-semibold text-gray-900 mb-2">Transportation Info</h4>
        <div className="space-y-1 text-sm">
          <p className="text-gray-700">{transportInfo.info}</p>
          <p className="text-gray-600">{transportInfo.station}</p>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-gray-900">Recommended Places</h4>
        
        {destinations.map((destination) => {
          const isSelected = selectedDestinations.find(d => d.id === destination.id);
          
          return (
            <div
              key={destination.id}
              className={`border rounded-xl p-5 transition-all duration-200 cursor-pointer ${
                isSelected
                  ? 'border-blue-300 bg-blue-50 shadow-md'
                  : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
              }`}
              onClick={() => toggleDestination(destination)}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h5 className="text-lg font-semibold text-gray-900">
                      {destination.name}
                    </h5>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-gray-700">
                        {destination.rating}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-3">
                    {destination.description}
                  </p>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{destination.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <DollarSign className="h-4 w-4" />
                      <span>₹{destination.estimatedCost}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span className="capitalize">{destination.type}</span>
                    </div>
                  </div>
                </div>
                
                <div className="ml-4">
                  {isSelected ? (
                    <CheckCircle2 className="h-6 w-6 text-blue-600" />
                  ) : (
                    <Plus className="h-6 w-6 text-gray-400" />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {selectedDestinations.length > 0 && (
        <div className="mt-6 p-4 bg-green-50 rounded-xl border border-green-200">
          <h4 className="font-semibold text-green-900 mb-2">Your Itinerary</h4>
          <div className="space-y-2">
            {selectedDestinations.map((dest, index) => (
              <div key={dest.id} className="flex items-center space-x-3 text-sm">
                <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center font-medium">
                  {index + 1}
                </div>
                <span className="text-green-800">{dest.name}</span>
                <span className="text-green-600">• {dest.duration}</span>
              </div>
            ))}
          </div>
          <div className="mt-3 pt-3 border-t border-green-200">
            <p className="text-sm text-green-700">
              Total estimated cost: <span className="font-semibold">
                ₹{selectedDestinations.reduce((sum, dest) => sum + dest.estimatedCost, 0)}
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default RouteDisplay;