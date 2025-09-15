import React from 'react';
import { MapPin, Compass } from 'lucide-react';

function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-2 rounded-lg">
              <Compass className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">TripGuide</h1>
              <p className="text-sm text-gray-600">Your AI Travel Companion</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <MapPin className="h-4 w-4" />
            <span>Plan • Explore • Experience</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;