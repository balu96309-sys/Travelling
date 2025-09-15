import React, { useState } from 'react';
import { BookOpen, Clock, User, Eye, ThumbsUp, Share2, Bookmark } from 'lucide-react';

interface Guide {
  id: string;
  title: string;
  author: string;
  authorAvatar: string;
  category: string;
  readTime: number;
  views: number;
  likes: number;
  image: string;
  excerpt: string;
  publishedDate: string;
  featured: boolean;
}

function TravelGuides() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const guides: Guide[] = [
    {
      id: '1',
      title: 'Complete Guide to Kerala Backwaters: A Solo Traveler\'s Paradise',
      author: 'Priya Sharma',
      authorAvatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      category: 'solo-travel',
      readTime: 8,
      views: 12500,
      likes: 847,
      image: 'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg',
      excerpt: 'Discover the serene beauty of Kerala\'s backwaters with insider tips on houseboats, local cuisine, and hidden gems that only locals know about.',
      publishedDate: '2025-01-05',
      featured: true
    },
    {
      id: '2',
      title: 'Budget Travel in Rajasthan: Royal Experiences Under ₹10,000',
      author: 'Arjun Patel',
      authorAvatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
      category: 'budget-travel',
      readTime: 12,
      views: 18200,
      likes: 1203,
      image: 'https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg',
      excerpt: 'Experience the grandeur of Rajasthan without breaking the bank. From palace stays to street food tours, here\'s how to travel like royalty on a budget.',
      publishedDate: '2025-01-03',
      featured: true
    },
    {
      id: '3',
      title: 'Himalayan Trek Safety: Essential Tips for First-Time Trekkers',
      author: 'Meera Singh',
      authorAvatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      category: 'adventure',
      readTime: 15,
      views: 9800,
      likes: 654,
      image: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg',
      excerpt: 'Everything you need to know before embarking on your first Himalayan adventure. Safety protocols, gear recommendations, and acclimatization tips.',
      publishedDate: '2024-12-28',
      featured: false
    },
    {
      id: '4',
      title: 'South Indian Temple Architecture: A Cultural Journey',
      author: 'Dr. Lakshmi Nair',
      authorAvatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg',
      category: 'culture',
      readTime: 10,
      views: 7300,
      likes: 432,
      image: 'https://images.pexels.com/photos/3573382/pexels-photo-3573382.jpeg',
      excerpt: 'Explore the magnificent temple architecture of South India, from Dravidian masterpieces to intricate stone carvings that tell stories of ancient civilizations.',
      publishedDate: '2024-12-25',
      featured: false
    },
    {
      id: '5',
      title: 'Goa Beyond Beaches: Hidden Cultural Gems',
      author: 'Carlos D\'Souza',
      authorAvatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg',
      category: 'culture',
      readTime: 6,
      views: 15600,
      likes: 923,
      image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg',
      excerpt: 'Discover Goa\'s rich Portuguese heritage, spice plantations, and traditional villages that showcase the state\'s authentic cultural identity.',
      publishedDate: '2024-12-20',
      featured: false
    }
  ];

  const categories = [
    { value: 'all', label: 'All Guides' },
    { value: 'solo-travel', label: 'Solo Travel' },
    { value: 'budget-travel', label: 'Budget Travel' },
    { value: 'adventure', label: 'Adventure' },
    { value: 'culture', label: 'Culture & Heritage' },
    { value: 'food', label: 'Food & Cuisine' }
  ];

  const filteredGuides = selectedCategory === 'all' 
    ? guides 
    : guides.filter(guide => guide.category === selectedCategory);

  const featuredGuides = guides.filter(guide => guide.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Travel Guides</h1>
        <p className="text-gray-600">Expert insights and local knowledge from experienced travelers</p>
      </div>

      {/* Featured Guides */}
      {featuredGuides.length > 0 && (
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center space-x-3 mb-6">
            <BookOpen className="h-6 w-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Featured Guides</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {featuredGuides.map((guide) => (
              <div key={guide.id} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-200">
                <img
                  src={guide.image}
                  alt={guide.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium capitalize">
                      {guide.category.replace('-', ' ')}
                    </span>
                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-medium">
                      Featured
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                    {guide.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {guide.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <img
                        src={guide.authorAvatar}
                        alt={guide.author}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-sm font-medium text-gray-900">{guide.author}</p>
                        <p className="text-xs text-gray-500">{formatDate(guide.publishedDate)}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{guide.readTime} min</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span>{guide.views.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Category Filter */}
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
        <div className="flex flex-wrap gap-3 mb-6">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                selectedCategory === category.value
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Guide List */}
        <div className="space-y-6">
          {filteredGuides.map((guide) => (
            <div key={guide.id} className="flex space-x-6 p-6 border border-gray-200 rounded-xl hover:shadow-md transition-shadow duration-200">
              <img
                src={guide.image}
                alt={guide.title}
                className="w-32 h-24 object-cover rounded-lg flex-shrink-0"
              />
              
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium capitalize">
                        {guide.category.replace('-', ' ')}
                      </span>
                      {guide.featured && (
                        <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-medium">
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer transition-colors duration-200">
                      {guide.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-3">{guide.excerpt}</p>
                    
                    <div className="flex items-center space-x-6 text-sm text-gray-500">
                      <div className="flex items-center space-x-2">
                        <img
                          src={guide.authorAvatar}
                          alt={guide.author}
                          className="w-6 h-6 rounded-full object-cover"
                        />
                        <span>{guide.author}</span>
                      </div>
                      
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{guide.readTime} min read</span>
                      </div>
                      
                      <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span>{guide.views.toLocaleString()}</span>
                      </div>
                      
                      <div className="flex items-center space-x-1">
                        <ThumbsUp className="h-4 w-4" />
                        <span>{guide.likes}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2 ml-4">
                    <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                      <Bookmark className="h-4 w-4 text-gray-600" />
                    </button>
                    <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                      <Share2 className="h-4 w-4 text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TravelGuides;