import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Star, Edit3, Trash2, Share2, Download } from 'lucide-react';

interface Trip {
  id: string;
  destination: string;
  startDate: string;
  endDate: string;
  status: 'upcoming' | 'ongoing' | 'completed';
  budget: number;
  spent: number;
  places: number;
  rating?: number;
  image: string;
}

function MyTrips() {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'ongoing' | 'completed'>('upcoming');

  // Mock trip data
  const trips: Trip[] = [
    {
      id: '1',
      destination: 'Goa',
      startDate: '2025-02-15',
      endDate: '2025-02-20',
      status: 'upcoming',
      budget: 15000,
      spent: 0,
      places: 8,
      image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg'
    },
    {
      id: '2',
      destination: 'Munnar',
      startDate: '2025-01-10',
      endDate: '2025-01-12',
      status: 'ongoing',
      budget: 8000,
      spent: 3200,
      places: 5,
      image: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg'
    },
    {
      id: '3',
      destination: 'Kochi',
      startDate: '2024-12-20',
      endDate: '2024-12-23',
      status: 'completed',
      budget: 12000,
      spent: 11500,
      places: 12,
      rating: 4.8,
      image: 'https://images.pexels.com/photos/2549018/pexels-photo-2549018.jpeg'
    },
    {
      id: '4',
      destination: 'Alleppey',
      startDate: '2024-11-05',
      endDate: '2024-11-08',
      status: 'completed',
      budget: 10000,
      spent: 9200,
      places: 6,
      rating: 4.5,
      image: 'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg'
    }
  ];

  const filteredTrips = trips.filter(trip => trip.status === activeTab);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming': return 'bg-blue-100 text-blue-800';
      case 'ongoing': return 'bg-green-100 text-green-800';
      case 'completed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">My Trips</h1>
        <p className="text-gray-600">Manage your travel adventures and memories</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">Total Trips</p>
              <p className="text-2xl font-bold">{trips.length}</p>
            </div>
            <MapPin className="h-8 w-8 text-blue-200" />
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm">Places Visited</p>
              <p className="text-2xl font-bold">
                {trips.reduce((sum, trip) => sum + trip.places, 0)}
              </p>
            </div>
            <Star className="h-8 w-8 text-green-200" />
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm">Total Spent</p>
              <p className="text-2xl font-bold">
                ₹{trips.reduce((sum, trip) => sum + trip.spent, 0).toLocaleString()}
              </p>
            </div>
            <Calendar className="h-8 w-8 text-purple-200" />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
        <div className="flex border-b border-gray-200">
          {[
            { id: 'upcoming', label: 'Upcoming', count: trips.filter(t => t.status === 'upcoming').length },
            { id: 'ongoing', label: 'Ongoing', count: trips.filter(t => t.status === 'ongoing').length },
            { id: 'completed', label: 'Completed', count: trips.filter(t => t.status === 'completed').length }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex-1 px-6 py-4 text-center font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? 'border-b-2 border-blue-600 text-blue-600 bg-blue-50'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              {tab.label}
              {tab.count > 0 && (
                <span className="ml-2 bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs">
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Trip Cards */}
        <div className="p-6">
          {filteredTrips.length === 0 ? (
            <div className="text-center py-12">
              <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No {activeTab} trips</h3>
              <p className="text-gray-600">Start planning your next adventure!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTrips.map((trip) => (
                <div key={trip.id} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-200">
                  <div className="relative">
                    <img
                      src={trip.image}
                      alt={trip.destination}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-3 right-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(trip.status)}`}>
                        {trip.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{trip.destination}</h3>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Calendar className="h-4 w-4" />
                        <span>{formatDate(trip.startDate)} - {formatDate(trip.endDate)}</span>
                      </div>
                      
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <MapPin className="h-4 w-4" />
                        <span>{trip.places} places to visit</span>
                      </div>
                      
                      {trip.rating && (
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span>{trip.rating}/5 trip rating</span>
                        </div>
                      )}
                    </div>

                    {/* Budget Progress */}
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600">Budget</span>
                        <span className="text-sm font-medium">
                          ₹{trip.spent.toLocaleString()} / ₹{trip.budget.toLocaleString()}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${Math.min((trip.spent / trip.budget) * 100, 100)}%` }}
                        />
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-2">
                      {trip.status === 'upcoming' && (
                        <>
                          <button className="flex-1 bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium">
                            View Details
                          </button>
                          <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                            <Edit3 className="h-4 w-4 text-gray-600" />
                          </button>
                        </>
                      )}
                      
                      {trip.status === 'ongoing' && (
                        <>
                          <button className="flex-1 bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 text-sm font-medium">
                            Continue Trip
                          </button>
                          <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                            <Share2 className="h-4 w-4 text-gray-600" />
                          </button>
                        </>
                      )}
                      
                      {trip.status === 'completed' && (
                        <>
                          <button className="flex-1 bg-gray-600 text-white px-3 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-200 text-sm font-medium">
                            View Memories
                          </button>
                          <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                            <Download className="h-4 w-4 text-gray-600" />
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MyTrips;