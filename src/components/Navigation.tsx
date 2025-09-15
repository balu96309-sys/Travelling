import React from 'react';
import { Home, Map, Compass, BookOpen, User } from 'lucide-react';

interface NavigationProps {
  currentSection: 'home' | 'trips' | 'explore' | 'guides' | 'profile';
  onSectionChange: (section: 'home' | 'trips' | 'explore' | 'guides' | 'profile') => void;
}

function Navigation({ currentSection, onSectionChange }: NavigationProps) {
  const navItems = [
    { id: 'home', label: 'Plan Trip', icon: Home },
    { id: 'trips', label: 'My Trips', icon: Map },
    { id: 'explore', label: 'Explore', icon: Compass },
    { id: 'guides', label: 'Guides', icon: BookOpen },
    { id: 'profile', label: 'Profile', icon: User }
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center space-x-8 py-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentSection === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id as any)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="hidden sm:inline">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default Navigation;