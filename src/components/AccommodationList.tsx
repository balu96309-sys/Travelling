import React, { useState } from 'react';
import { Star, MapPin, Wifi, Car, Coffee, Users } from 'lucide-react';
import { Destination } from '../App';

interface AccommodationListProps {
  destinations: Destination[];
}

function AccommodationList({ destinations }: AccommodationListProps) {
  const [selectedType, setSelectedType] = useState<'all' | 'hotel' | 'homestay' | 'resort'>('all');

  // Mock accommodation data
  const accommodations = [
    {
      id: '1',
      name: 'Heritage Homestay Thrissur',
      type: 'homestay',
      rating: 4.8,
      price: 1200,
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
      amenities: ['Wifi', 'Parking', 'Breakfast'],
      distance: '2.5 km from city center',
      description: 'Traditional Kerala home with authentic local experience'
    },
    {
      id: '2',
      name: 'Crowne Plaza Kochi',
      type: 'hotel',
      rating: 4.5,
      price: 3500,
      image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg',
      amenities: ['Wifi', 'Pool', 'Spa', 'Restaurant'],
      distance: '1.2 km from city center',
      description: 'Luxury hotel with modern amenities and city views'
    },
    {
      id: '3',
      name: 'Backwater Resort Kumarakom',
      type: 'resort',
      rating: 4.6,
      price: 4200,
      image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg',
      amenities: ['Wifi', 'Pool', 'Boat rides', 'Ayurveda'],
      distance: '45 km from Thrissur',
      description: 'Serene resort surrounded by Kerala backwaters'
    }
  ];

  const filteredAccommodations = selectedType === 'all' 
    ? accommodations 
    : accommodations.filter(acc => acc.type === selectedType);

  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case 'wifi':
        return <Wifi className="h-4 w-4" />;
      case 'parking':
        return <Car className="h-4 w-4" />;
      case 'breakfast':
        return <Coffee className="h-4 w-4" />;
      default:
        return <Users className="h-4 w-4" />;
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Accommodations</h3>
        <p className="text-gray-600">Handpicked stays based on traveler reviews</p>
      </div>

      {/* Filter Tabs */}
      <div className="flex space-x-2 mb-6 bg-gray-50 p-1 rounded-lg">
        {[
          { value: 'all', label: 'All' },
          { value: 'hotel', label: 'Hotels' },
          { value: 'homestay', label: 'Homestays' },
          { value: 'resort', label: 'Resorts' }
        ].map((filter) => (
          <button
            key={filter.value}
            onClick={() => setSelectedType(filter.value as any)}
            className={`flex-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
              selectedType === filter.value
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Accommodation Cards */}
      <div className="space-y-4">
        {filteredAccommodations.map((accommodation) => (
          <div
            key={accommodation.id}
            className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-200"
          >
            <div className="md:flex">
              <div className="md:w-1/3">
                <img
                  src={accommodation.image}
                  alt={accommodation.name}
                  className="w-full h-48 md:h-full object-cover"
                />
              </div>
              
              <div className="p-5 md:w-2/3">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      {accommodation.name}
                    </h4>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium text-gray-700">
                          {accommodation.rating}
                        </span>
                      </div>
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full capitalize">
                        {accommodation.type}
                      </span>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-xl font-bold text-blue-600">
                      ₹{accommodation.price}
                    </div>
                    <div className="text-sm text-gray-500">per night</div>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-3">
                  {accommodation.description}
                </p>
                
                <div className="flex items-center space-x-1 mb-3 text-sm text-gray-500">
                  <MapPin className="h-4 w-4" />
                  <span>{accommodation.distance}</span>
                </div>
                
                <div className="flex items-center space-x-3 mb-4">
                  {accommodation.amenities.map((amenity) => (
                    <div key={amenity} className="flex items-center space-x-1 text-xs text-gray-600">
                      {getAmenityIcon(amenity)}
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
                
                <button className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white font-medium py-2 px-4 rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all duration-200">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Registration CTA */}
      <div className="mt-6 p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border border-orange-200">
        <div className="text-center">
          <h4 className="font-semibold text-orange-900 mb-2">Own a property?</h4>
          <p className="text-sm text-orange-700 mb-3">
            Register your homestay, resort, or hotel with us
          </p>
          <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors duration-200 text-sm font-medium">
            Register Property
          </button>
        </div>
      </div>
    </div>
  );
}

export default AccommodationList;