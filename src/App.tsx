import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import TripPlanner from './components/TripPlanner';
import RouteDisplay from './components/RouteDisplay';
import BudgetTracker from './components/BudgetTracker';
import WeatherInfo from './components/WeatherInfo';
import AccommodationList from './components/AccommodationList';
import MyTrips from './components/MyTrips';
import Explore from './components/Explore';
import Profile from './components/Profile';
import TravelGuides from './components/TravelGuides';

export interface Destination {
  id: string;
  name: string;
  type: 'attraction' | 'food' | 'accommodation';
  rating: number;
  description: string;
  coordinates: { lat: number; lng: number };
  estimatedCost: number;
  duration: string;
}

export interface TripData {
  destination: string;
  days: number;
  budget: number;
  transportMode: 'bus' | 'train' | 'car';
  currentLocation: string;
}

function App() {
  const [currentSection, setCurrentSection] = useState<'home' | 'trips' | 'explore' | 'guides' | 'profile'>('home');
  const [tripData, setTripData] = useState<TripData | null>(null);
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [selectedDestinations, setSelectedDestinations] = useState<Destination[]>([]);
  const [expenses, setExpenses] = useState<number>(0);

  const handleTripPlan = (data: TripData) => {
    setTripData(data);
    // Mock data for demonstration - in real app this would come from API
    const mockDestinations: Destination[] = [
      {
        id: '1',
        name: 'Vadakkunnathan Temple',
        type: 'attraction',
        rating: 4.7,
        description: 'Ancient Shiva temple with traditional Kerala architecture',
        coordinates: { lat: 10.5276, lng: 76.2144 },
        estimatedCost: 0,
        duration: '2 hours'
      },
      {
        id: '2',
        name: 'Kerala Sahitya Akademi',
        type: 'attraction',
        rating: 4.3,
        description: 'Cultural center showcasing Malayalam literature',
        coordinates: { lat: 10.5186, lng: 76.2144 },
        estimatedCost: 50,
        duration: '1.5 hours'
      },
      {
        id: '3',
        name: 'Pathans Restaurant',
        type: 'food',
        rating: 4.6,
        description: 'Famous for traditional Kerala meals and biryanis',
        coordinates: { lat: 10.5216, lng: 76.2144 },
        estimatedCost: 300,
        duration: '1 hour'
      },
      {
        id: '4',
        name: 'Lulu Mall Thrissur',
        type: 'attraction',
        rating: 4.4,
        description: 'Large shopping and entertainment complex',
        coordinates: { lat: 10.5129, lng: 76.2049 },
        estimatedCost: 500,
        duration: '3 hours'
      },
      {
        id: '5',
        name: 'Hotel Elite International',
        type: 'accommodation',
        rating: 4.2,
        description: 'Comfortable hotel with modern amenities',
        coordinates: { lat: 10.5276, lng: 76.2144 },
        estimatedCost: 2500,
        duration: 'per night'
      }
    ];
    setDestinations(mockDestinations);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <Navigation currentSection={currentSection} onSectionChange={setCurrentSection} />
      
      <main className="container mx-auto px-4 py-8">
        {currentSection === 'home' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              <TripPlanner onTripPlan={handleTripPlan} />
              
              {tripData && (
                <>
                  <RouteDisplay 
                    destinations={destinations}
                    selectedDestinations={selectedDestinations}
                    onDestinationSelect={setSelectedDestinations}
                    tripData={tripData}
                  />
                  <AccommodationList destinations={destinations} />
                </>
              )}
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {tripData && (
                <>
                  <WeatherInfo 
                    destination={tripData.destination} 
                    currentLocation={tripData.currentLocation}
                  />
                  <BudgetTracker 
                    totalBudget={tripData.budget}
                    expenses={expenses}
                    onExpenseUpdate={setExpenses}
                  />
                </>
              )}
            </div>
          </div>
        )}

        {currentSection === 'trips' && <MyTrips />}
        {currentSection === 'explore' && <Explore />}
        {currentSection === 'guides' && <TravelGuides />}
        {currentSection === 'profile' && <Profile />}
      </main>
    </div>
  );
}

export default App;