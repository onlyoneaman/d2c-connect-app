'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// Placeholder data for designers
const designers = [
  {
    id: 1,
    name: 'Sarah Johnson',
    title: 'UI/UX Designer',
    avatar: 'https://picsum.photos/300/300?random=1',
    rating: 4.9,
    reviews: 127,
    hourlyRate: 75,
    skills: ['UI Design', 'UX Research', 'Figma', 'Prototyping'],
    portfolio: [
      { id: 1, image: 'https://picsum.photos/300/200?random=11', title: 'E-commerce App Redesign' },
      { id: 2, image: 'https://picsum.photos/300/200?random=12', title: 'Brand Identity System' },
      { id: 3, image: 'https://picsum.photos/300/200?random=13', title: 'Mobile App UI' },
    ],
    location: 'San Francisco, CA',
    availability: 'Available for work',
    description: 'Passionate UI/UX designer with 5+ years of experience creating intuitive digital experiences for D2C brands.',
  },
  {
    id: 2,
    name: 'Michael Chen',
    title: 'Brand Designer',
    avatar: 'https://picsum.photos/300/300?random=2',
    rating: 5.0,
    reviews: 98,
    hourlyRate: 85,
    skills: ['Branding', 'Logo Design', 'Typography', 'Illustration'],
    portfolio: [
      { id: 1, image: 'https://picsum.photos/300/200?random=21', title: 'Brand Identity for Food Startup' },
      { id: 2, image: 'https://picsum.photos/300/200?random=22', title: 'Packaging Design System' },
      { id: 3, image: 'https://picsum.photos/300/200?random=23', title: 'Logo Collection' },
    ],
    location: 'New York, NY',
    availability: 'Available for work',
    description: 'Award-winning brand designer specializing in creating memorable brand identities for D2C companies.',
  },
  {
    id: 3,
    name: 'Emma Davis',
    title: 'Packaging Designer',
    avatar: 'https://picsum.photos/300/300?random=3',
    rating: 4.8,
    reviews: 112,
    hourlyRate: 70,
    skills: ['Packaging Design', 'Typography', 'Adobe Illustrator', 'Print Production'],
    portfolio: [
      { id: 1, image: 'https://picsum.photos/300/200?random=31', title: 'Sustainable Packaging' },
      { id: 2, image: 'https://picsum.photos/300/200?random=32', title: 'Product Label Collection' },
      { id: 3, image: 'https://picsum.photos/300/200?random=33', title: 'Brand Packaging System' },
    ],
    location: 'Los Angeles, CA',
    availability: 'Available for work',
    description: 'Specialized in creating eye-catching packaging for D2C products with a focus on sustainability.',
  },
  {
    id: 4,
    name: 'Alex Rivera',
    title: 'Web Designer',
    avatar: 'https://picsum.photos/300/300?random=4',
    rating: 4.7,
    reviews: 86,
    hourlyRate: 65,
    skills: ['Web Design', 'HTML/CSS', 'WordPress', 'Shopify'],
    portfolio: [
      { id: 1, image: 'https://picsum.photos/300/200?random=41', title: 'E-commerce Website' },
      { id: 2, image: 'https://picsum.photos/300/200?random=42', title: 'Landing Page Design' },
      { id: 3, image: 'https://picsum.photos/300/200?random=43', title: 'Web UI Kit' },
    ],
    location: 'Austin, TX',
    availability: 'Available for work',
    description: 'Web designer focused on creating beautiful, conversion-focused websites for D2C brands.',
  },
  {
    id: 5,
    name: 'Olivia Wilson',
    title: 'Graphic Designer',
    avatar: 'https://picsum.photos/300/300?random=5',
    rating: 4.9,
    reviews: 103,
    hourlyRate: 60,
    skills: ['Graphic Design', 'Social Media', 'Adobe Creative Suite', 'Print Design'],
    portfolio: [
      { id: 1, image: 'https://picsum.photos/300/200?random=51', title: 'Social Media Campaign' },
      { id: 2, image: 'https://picsum.photos/300/200?random=52', title: 'Marketing Materials' },
      { id: 3, image: 'https://picsum.photos/300/200?random=53', title: 'Brand Guidelines' },
    ],
    location: 'Chicago, IL',
    availability: 'Available for work',
    description: 'Versatile graphic designer with expertise in creating cohesive visual content for D2C marketing campaigns.',
  },
  {
    id: 6,
    name: 'James Taylor',
    title: 'Product Designer',
    avatar: 'https://picsum.photos/300/300?random=6',
    rating: 4.8,
    reviews: 91,
    hourlyRate: 90,
    skills: ['Product Design', 'User Research', 'Sketch', 'InVision'],
    portfolio: [
      { id: 1, image: 'https://picsum.photos/300/200?random=61', title: 'SaaS Product Design' },
      { id: 2, image: 'https://picsum.photos/300/200?random=62', title: 'Mobile App Design' },
      { id: 3, image: 'https://picsum.photos/300/200?random=63', title: 'Design System' },
    ],
    location: 'Seattle, WA',
    availability: 'Available for work',
    description: 'Product designer with a background in software development, creating intuitive digital products for D2C companies.',
  },
];

// Categories for filtering
const categories = [
  'All',
  'UI/UX Design',
  'Brand Design',
  'Packaging Design',
  'Web Design',
  'Graphic Design',
  'Product Design',
  'Illustration',
];

export default function DesignerList() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState('All');
  const [sortBy, setSortBy] = useState('Recommended');
  
  // Authentication check - would be replaced with real auth logic
  useEffect(() => {
    // Simulate auth check with delay
    const checkAuth = setTimeout(() => {
      // For demo purposes, we're setting this to true
      // In a real app, you would check if the user is logged in from your auth provider
      const userLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
      setIsAuthenticated(userLoggedIn);
      setIsLoading(false);
      
      if (!userLoggedIn) {
        router.push('/login?redirect=/list');
      }
    }, 500);
    
    return () => clearTimeout(checkAuth);
  }, [router]);
  
  // Filter designers based on search term and category
  const filteredDesigners = designers.filter(designer => {
    const matchesSearch = 
      designer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      designer.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      designer.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = 
      selectedCategory === 'All' || 
      designer.title.includes(selectedCategory);
    
    return matchesSearch && matchesCategory;
  });
  
  // Sort designers based on selected option
  const sortedDesigners = [...filteredDesigners].sort((a, b) => {
    if (sortBy === 'Highest Rated') {
      return b.rating - a.rating;
    } else if (sortBy === 'Most Reviews') {
      return b.reviews - a.reviews;
    } else if (sortBy === 'Price: Low to High') {
      return a.hourlyRate - b.hourlyRate;
    } else if (sortBy === 'Price: High to Low') {
      return b.hourlyRate - a.hourlyRate;
    }
    return 0; // Default sorting (Recommended)
  });
  
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center text-white">
        <div className="text-center">
          <svg className="animate-spin h-10 w-10 mx-auto mb-4 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p className="text-lg">Loading designer listings...</p>
        </div>
      </div>
    );
  }
  
  if (!isAuthenticated) {
    return null; // This will redirect in the useEffect
  }
  
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-white mb-2">Find the Perfect Designer</h1>
          <p className="text-gray-300 max-w-3xl">
            Browse our curated network of talented designers specialized in D2C brands. 
            Find the perfect match for your project needs.
          </p>
        </div>
      </div>
      
      {/* Search and Filters */}
      <div className="bg-gray-800 border-b border-gray-700 sticky top-16 z-10 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by name, skills, or expertise..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Category Filter */}
            <div className="w-full md:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Price Range Filter */}
            <div className="w-full md:w-48">
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
              >
                <option value="All">All Prices</option>
                <option value="Under $50">Under $50/hr</option>
                <option value="$50-$100">$50-$100/hr</option>
                <option value="Over $100">Over $100/hr</option>
              </select>
            </div>
            
            {/* Sort By */}
            <div className="w-full md:w-48">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
              >
                <option value="Recommended">Recommended</option>
                <option value="Highest Rated">Highest Rated</option>
                <option value="Most Reviews">Most Reviews</option>
                <option value="Price: Low to High">Price: Low to High</option>
                <option value="Price: High to Low">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      
      {/* Results */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-300">
            Showing <span className="font-medium text-white">{sortedDesigners.length}</span> designers
          </p>
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-400 hover:text-purple-400">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <button className="p-2 text-purple-400">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Designer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedDesigners.map((designer) => (
            <Link href={`/designer/${designer.id}`} key={designer.id}>
              <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-indigo-500 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-900/10 group">
                {/* Designer Card Header */}
                <div className="relative overflow-hidden h-40">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/80 to-gray-900/90 z-10"></div>
                  <img 
                    src={designer.portfolio[0].image} 
                    alt={designer.portfolio[0].title}
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 z-20">
                    <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-900/80 text-gray-300">
                      <span className="h-2 w-2 bg-green-400 rounded-full mr-1.5"></span>
                      dir
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3 z-20">
                    <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-indigo-900/80 text-indigo-300">
                      From ${designer.hourlyRate}/hr
                    </div>
                  </div>
                </div>
                
                {/* Designer Info */}
                <div className="p-5">
                  <div className="flex items-start mb-4">
                    <img 
                      src={designer.avatar} 
                      alt={designer.name}
                      className="w-12 h-12 rounded-full border-2 border-gray-700 -mt-10 z-20 shadow-lg"
                    />
                    <div className="ml-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">{designer.name}</h3>
                      <p className="text-gray-400 text-sm">{designer.title}</p>
                    </div>
                    <div className="ml-auto flex items-center">
                      <div className="flex items-center">
                        <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="ml-1 text-sm text-gray-400">{designer.rating}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-gray-400 text-sm line-clamp-2">
                      {designer.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {designer.skills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="inline-block px-2.5 py-1 rounded-full text-xs font-medium bg-gray-900 text-gray-300 border border-gray-700"
                      >
                        {skill}
                      </span>
                    ))}
                    {designer.skills.length > 3 && (
                      <span className="inline-block px-2.5 py-1 rounded-full text-xs font-medium bg-gray-900 text-gray-300 border border-gray-700">
                        +{designer.skills.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex justify-between items-center pt-2 border-t border-gray-700">
                    <div className="flex gap-1">
                      {['#web', '#design', '#ui'].map((tag, index) => (
                        <span key={index} className="text-gray-500 text-xs">{tag}</span>
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">{designer.location}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Pagination */}
        <div className="mt-8 flex justify-center">
          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-700 bg-gray-800 text-sm font-medium text-gray-400 hover:bg-gray-700"
            >
              <span className="sr-only">Previous</span>
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href="#"
              aria-current="page"
              className="z-10 bg-gray-900 border-purple-500 text-purple-400 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            >
              1
            </a>
            <a
              href="#"
              className="bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            >
              2
            </a>
            <a
              href="#"
              className="bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            >
              3
            </a>
            <span className="relative inline-flex items-center px-4 py-2 border border-gray-700 bg-gray-800 text-sm font-medium text-gray-400">
              ...
            </span>
            <a
              href="#"
              className="bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            >
              8
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-700 bg-gray-800 text-sm font-medium text-gray-400 hover:bg-gray-700"
            >
              <span className="sr-only">Next</span>
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
} 