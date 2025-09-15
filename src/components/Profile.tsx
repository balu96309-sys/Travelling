import React, { useState } from 'react';
import { User, MapPin, Calendar, Star, Camera, Settings, Bell, CreditCard, Shield, LogOut } from 'lucide-react';

function Profile() {
  const [activeTab, setActiveTab] = useState<'overview' | 'settings' | 'preferences'>('overview');

  // Mock user data
  const userData = {
    name: 'Rahul Kumar',
    email: 'rahul.kumar@email.com',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
    joinDate: '2024-06-15',
    location: 'Bangalore, Karnataka',
    tripsCompleted: 12,
    placesVisited: 47,
    totalDistance: 15420,
    favoriteDestination: 'Munnar',
    travelStyle: 'Solo Adventurer',
    badges: [
      { name: 'Explorer', icon: '🗺️', description: 'Visited 10+ destinations' },
      { name: 'Budget Master', icon: '💰', description: 'Stayed under budget 5 times' },
      { name: 'Culture Enthusiast', icon: '🏛️', description: 'Visited 15+ heritage sites' },
      { name: 'Mountain Lover', icon: '⛰️', description: 'Completed 3+ hill station trips' }
    ]
  };

  const recentActivity = [
    { action: 'Completed trip to Kochi', date: '2024-12-23', type: 'trip' },
    { action: 'Rated Hotel Elite International', date: '2024-12-22', type: 'review' },
    { action: 'Saved "Budget Travel in Rajasthan" guide', date: '2024-12-20', type: 'save' },
    { action: 'Shared photos from Alleppey', date: '2024-11-08', type: 'share' }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="h-32 bg-gradient-to-r from-blue-500 to-teal-500"></div>
        <div className="px-8 pb-8">
          <div className="flex items-end space-x-6 -mt-16">
            <img
              src={userData.avatar}
              alt={userData.name}
              className="w-24 h-24 rounded-full border-4 border-white object-cover"
            />
            <div className="flex-1 pb-4">
              <h1 className="text-2xl font-bold text-gray-900">{userData.name}</h1>
              <p className="text-gray-600">{userData.email}</p>
              <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <MapPin className="h-4 w-4" />
                  <span>{userData.location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>Joined {formatDate(userData.joinDate)}</span>
                </div>
              </div>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
        <div className="flex border-b border-gray-200">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'settings', label: 'Settings' },
            { id: 'preferences', label: 'Preferences' }
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
            </button>
          ))}
        </div>

        <div className="p-6">
          {activeTab === 'overview' && (
            <div className="space-y-8">
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-2xl font-bold text-blue-600">{userData.tripsCompleted}</div>
                  <div className="text-sm text-gray-600">Trips Completed</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <div className="text-2xl font-bold text-green-600">{userData.placesVisited}</div>
                  <div className="text-sm text-gray-600">Places Visited</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-xl">
                  <div className="text-2xl font-bold text-purple-600">{userData.totalDistance.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">KM Traveled</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-xl">
                  <div className="text-2xl font-bold text-orange-600">4.8</div>
                  <div className="text-sm text-gray-600">Avg Rating</div>
                </div>
              </div>

              {/* Badges */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Travel Badges</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {userData.badges.map((badge) => (
                    <div key={badge.name} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-xl">
                      <div className="text-3xl">{badge.icon}</div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{badge.name}</h4>
                        <p className="text-sm text-gray-600">{badge.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Activity */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Activity</h3>
                <div className="space-y-3">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-gray-900">{activity.action}</p>
                        <p className="text-sm text-gray-500">{formatDate(activity.date)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-gray-900">Account Settings</h3>
                
                <div className="space-y-4">
                  <button className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors duration-200">
                    <div className="flex items-center space-x-3">
                      <User className="h-5 w-5 text-gray-600" />
                      <span className="font-medium text-gray-900">Personal Information</span>
                    </div>
                    <span className="text-gray-400">›</span>
                  </button>
                  
                  <button className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors duration-200">
                    <div className="flex items-center space-x-3">
                      <Bell className="h-5 w-5 text-gray-600" />
                      <span className="font-medium text-gray-900">Notifications</span>
                    </div>
                    <span className="text-gray-400">›</span>
                  </button>
                  
                  <button className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors duration-200">
                    <div className="flex items-center space-x-3">
                      <CreditCard className="h-5 w-5 text-gray-600" />
                      <span className="font-medium text-gray-900">Payment Methods</span>
                    </div>
                    <span className="text-gray-400">›</span>
                  </button>
                  
                  <button className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors duration-200">
                    <div className="flex items-center space-x-3">
                      <Shield className="h-5 w-5 text-gray-600" />
                      <span className="font-medium text-gray-900">Privacy & Security</span>
                    </div>
                    <span className="text-gray-400">›</span>
                  </button>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <button className="flex items-center space-x-3 text-red-600 hover:text-red-700 transition-colors duration-200">
                  <LogOut className="h-5 w-5" />
                  <span className="font-medium">Sign Out</span>
                </button>
              </div>
            </div>
          )}

          {activeTab === 'preferences' && (
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-gray-900">Travel Preferences</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Transportation
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option value="bus">Bus</option>
                      <option value="train">Train</option>
                      <option value="car">Car</option>
                      <option value="flight">Flight</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Budget Range (per trip)
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option value="budget">₹5,000 - ₹15,000</option>
                      <option value="mid">₹15,000 - ₹30,000</option>
                      <option value="luxury">₹30,000+</option>
                    </select>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Travel Style
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option value="solo">Solo Traveler</option>
                      <option value="couple">Couple</option>
                      <option value="family">Family</option>
                      <option value="group">Group</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Accommodation Type
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option value="homestay">Homestays</option>
                      <option value="hotel">Hotels</option>
                      <option value="resort">Resorts</option>
                      <option value="hostel">Hostels</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Notification Preferences */}
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">Notification Preferences</h4>
                <div className="space-y-3">
                  {[
                    { label: 'Trip reminders', description: 'Get notified about upcoming trips' },
                    { label: 'Weather alerts', description: 'Receive weather updates for your destinations' },
                    { label: 'Budget notifications', description: 'Alerts when approaching budget limits' },
                    { label: 'New destination suggestions', description: 'Discover new places based on your preferences' }
                  ].map((pref) => (
                    <div key={pref.label} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
                      <div>
                        <p className="font-medium text-gray-900">{pref.label}</p>
                        <p className="text-sm text-gray-600">{pref.description}</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full bg-blue-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Save Preferences
              </button>
            </div>
          )}
        </div>
      </div>

      {activeTab === 'overview' && (
        <>
          {/* Travel Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{userData.tripsCompleted}</p>
                  <p className="text-sm text-gray-600">Trips Completed</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Star className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{userData.placesVisited}</p>
                  <p className="text-sm text-gray-600">Places Visited</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Calendar className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{userData.totalDistance.toLocaleString()}</p>
                  <p className="text-sm text-gray-600">KM Traveled</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Camera className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <p className="text-lg font-bold text-gray-900">{userData.favoriteDestination}</p>
                  <p className="text-sm text-gray-600">Favorite Place</p>
                </div>
              </div>
            </div>
          </div>

          {/* Badges */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Travel Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {userData.badges.map((badge) => (
                <div key={badge.name} className="flex items-center space-x-4 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-200">
                  <div className="text-3xl">{badge.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{badge.name}</h4>
                    <p className="text-sm text-gray-600">{badge.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h3>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-xl">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-gray-900">{activity.action}</p>
                    <p className="text-sm text-gray-500">{formatDate(activity.date)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Profile;