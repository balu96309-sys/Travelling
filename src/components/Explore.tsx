import React, { useState } from 'react';
import { Search, Filter, Star, MapPin, Heart, Camera, TrendingUp as Trending, Award, Calendar } from 'lucide-react';

interface Destination {
  id: string;
  name: string;
  state: string;
  category: string;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  bestTime: string;
  highlights: string[];
  trending: boolean;
  featured: boolean;
}

function Explore() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedState, setSelectedState] = useState('all');

  const destinations: Destination[] = [
    {
      id: '1',
      name: 'Munnar',
      state: 'Kerala',
      category: 'hill-station',
      rating: 4.7,
      reviews: 2847,
      image: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg',
      description: 'Breathtaking tea plantations and misty mountains',
      bestTime: 'Oct - Mar',
      highlights: ['Tea Gardens', 'Eravikulam National Park', 'Mattupetty Dam'],
      trending: true,
      featured: true
    },
    {
      id: '2',
      name: 'Hampi',
      state: 'Karnataka',
      category: 'heritage',
      rating: 4.6,
      reviews: 1923,
      image: 'https://images.pexels.com/photos/3573382/pexels-photo-3573382.jpeg',
      description: 'Ancient ruins and UNESCO World Heritage Site',
      bestTime: 'Nov - Feb',
      highlights: ['Virupaksha Temple', 'Stone Chariot', 'Hippie Island'],
      trending: false,
      featured: true
    },
    {
      id: '3',
      name: 'Rishikesh',
      state: 'Uttarakhand',
      category: 'adventure',
      rating: 4.5,
      reviews: 3156,
      image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg',
      description: 'Yoga capital and adventure sports hub',
      bestTime: 'Mar - Jun, Sep - Nov',
      highlights: ['River Rafting', 'Lakshman Jhula', 'Beatles Ashram'],
      trending: true,
      featured: false
    },
    {
      id: '4',
      name: 'Udaipur',
      state: 'Rajasthan',
      category: 'heritage',
      rating: 4.8,
      reviews: 4521,
      image: 'https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg',
      description: 'City of Lakes with royal palaces',
      bestTime: 'Oct - Mar',
      highlights: ['City Palace', 'Lake Pichola', 'Jag Mandir'],
      trending: false,
      featured: true
    },
    {
      id: '5',
      name: 'Gokarna',
      state: 'Karnataka',
      category: 'beach',
      rating: 4.4,
      reviews: 1687,
      image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg',
      description: 'Pristine beaches and spiritual vibes',
      bestTime: 'Oct - Mar',
      highlights: ['Om Beach', 'Kudle Beach', 'Mahabaleshwar Temple'],
      trending: true,
      featured: false
    },
    {
      id: '6',
      name: 'Manali',
      state: 'Himachal Pradesh',
      category: 'hill-station',
      rating: 4.3,
      reviews: 2934,
      image: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg',
      description: 'Snow-capped peaks and adventure activities',
      bestTime: 'May - Jun, Oct - Feb',
      highlights: ['Rohtang Pass', 'Solang Valley', 'Old Manali'],
      trending: false,
      featured: false
    }
  ];

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'beach', label: 'Beaches' },
    { value: 'hill-station', label: 'Hill Stations' },
    { value: 'heritage', label: 'Heritage' },
    { value: 'adventure', label: 'Adventure' },
    { value: 'spiritual', label: 'Spiritual' }
  ];

  const states = [
    { value: 'all', label: 'All States' },
    { value: 'Kerala', label: 'Kerala' },
    { value: 'Karnataka', label: 'Karnataka' },
    { value: 'Rajasthan', label: 'Rajasthan' },
    { value: 'Uttarakhand', label: 'Uttarakhand' },
    { value: 'Himachal Pradesh', label: 'Himachal Pradesh' }
  ];

  const filteredDestinations = destinations.filter(dest => {
    const matchesSearch = dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         dest.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || dest.category === selectedCategory;
    const matchesState = selectedState === 'all' || dest.state === selectedState;
    
    return matchesSearch && matchesCategory && matchesState;
  });

  const featuredDestinations = destinations.filter(dest => dest.featured);
  const trendingDestinations = destinations.filter(dest => dest.trending);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Explore India</h1>
        <p className="text-gray-600">Discover amazing destinations curated by fellow travelers</p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search destinations..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {categories.map(cat => (
              <option key={cat.value} value={cat.value}>{cat.label}</option>
            ))}
          </select>
          
          <select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {states.map(state => (
              <option key={state.value} value={state.value}>{state.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Featured Destinations */}
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
        <div className="flex items-center space-x-3 mb-6">
          <Award className="h-6 w-6 text-yellow-500" />
          <h2 className="text-2xl font-bold text-gray-900">Featured Destinations</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredDestinations.map((dest) => (
            <div key={dest.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">{dest.name}</h3>
                  <p className="text-sm opacity-90">{dest.state}</p>
                </div>
                <button className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200">
                  <Heart className="h-4 w-4 text-white" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trending Now */}
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
        <div className="flex items-center space-x-3 mb-6">
          <Trending className="h-6 w-6 text-red-500" />
          <h2 className="text-2xl font-bold text-gray-900">Trending Now</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {trendingDestinations.map((dest) => (
            <div key={dest.id} className="flex space-x-4 p-4 border border-gray-200 rounded-xl hover:shadow-md transition-shadow duration-200">
              <img
                src={dest.image}
                alt={dest.name}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900">{dest.name}</h3>
                    <p className="text-sm text-gray-600">{dest.state}</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{dest.rating}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-1">{dest.description}</p>
                <div className="flex items-center space-x-2 mt-2">
                  <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">Trending</span>
                  <span className="text-xs text-gray-500">Best: {dest.bestTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* All Destinations */}
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">All Destinations</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDestinations.map((dest) => (
            <div key={dest.id} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-200 group">
              <div className="relative">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 flex space-x-2">
                  {dest.trending && (
                    <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      Trending
                    </span>
                  )}
                  {dest.featured && (
                    <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      Featured
                    </span>
                  )}
                </div>
                <button className="absolute top-3 right-3 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200">
                  <Heart className="h-4 w-4 text-white" />
                </button>
              </div>
              
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{dest.name}</h3>
                    <p className="text-sm text-gray-600">{dest.state}</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{dest.rating}</span>
                    <span className="text-xs text-gray-500">({dest.reviews})</span>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-3">{dest.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <span>Best time: {dest.bestTime}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {dest.highlights.slice(0, 2).map((highlight) => (
                      <span key={highlight} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                        {highlight}
                      </span>
                    ))}
                    {dest.highlights.length > 2 && (
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                        +{dest.highlights.length - 2} more
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium">
                    Plan Trip
                  </button>
                  <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    <Camera className="h-4 w-4 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredDestinations.length === 0 && (
          <div className="text-center py-12">
            <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No destinations found</h3>
            <p className="text-gray-600">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Explore;