'use client';

import { useState } from 'react';
import Link from 'next/link';

// Placeholder data for a single designer
const designerData = {
  id: 1,
  name: 'Paul Lapkin',
  title: 'Framer Expert',
  avatar: 'https://picsum.photos/300/300?random=1',
  coverImage: 'https://picsum.photos/1200/400?random=100',
  rating: 5.0,
  reviews: 179,
  earnings: "$25k+",
  hired: "21x",
  location: 'Toronto, Canada',
  badges: ['Top Independent', 'Framer Expert'],
  skills: ['UI Design', 'UX Research', 'Framer', 'Prototyping', 'User Testing', 'Motion Design'],
  portfolio: [
    { 
      id: 1, 
      image: 'https://picsum.photos/600/400?random=101', 
      title: 'Creator Tool Theme',
      description: 'Complete redesign of a creative tool interface with colorful geometric patterns and bold typography.',
      category: 'UI/UX Design',
      year: 2023,
      earnings: '$5K+ earned'
    },
    { 
      id: 2, 
      image: 'https://picsum.photos/600/400?random=102', 
      title: 'Design Fonts Pro Tutorial',
      description: 'Educational design tutorial showing how to create professional typography for digital products.',
      category: 'Brand Design',
      year: 2022
    },
    { 
      id: 3, 
      image: 'https://picsum.photos/600/400?random=103', 
      title: 'Digital Designer Portfolio',
      description: 'Portfolio site design with striking visual elements and bold red accent lighting.',
      category: 'Web Design',
      year: 2023
    },
    { 
      id: 4, 
      image: 'https://picsum.photos/600/400?random=104', 
      title: 'Sebastian Camargo',
      description: 'Typographic exploration for personal branding with high-contrast black and white aesthetic.',
      category: 'Typography',
      year: 2022
    }
  ],
  availability: 'Available for work',
  description: 'Passionate UI/UX designer with 5+ years of experience creating intuitive digital experiences for D2C brands. I specialize in user-centered design, focusing on creating solutions that not only look beautiful but also solve real user problems and drive business growth.',
  education: [
    {
      school: 'California College of the Arts',
      degree: 'Bachelor of Fine Arts in Design',
      year: '2015-2019'
    }
  ],
  experience: [
    {
      company: 'Design Studio Co.',
      position: 'Senior UI/UX Designer',
      period: '2020-Present',
      description: 'Leading the design team for multiple D2C clients, creating user-centered digital experiences and managing client relationships.'
    },
    {
      company: 'Digital Agency',
      position: 'UI Designer',
      period: '2018-2020',
      description: 'Designed user interfaces for web and mobile applications, focusing on creating intuitive and engaging user experiences.'
    }
  ],
  clientReviews: [
    {
      id: 1,
      clientName: 'Alex Thompson',
      company: 'Fashion Brand Co.',
      rating: 5,
      date: '2 months ago',
      comment: 'Sarah was an absolute pleasure to work with. She took the time to understand our brand and target audience, and delivered a beautiful, user-friendly design that exceeded our expectations. Her attention to detail and ability to solve complex problems made her an invaluable part of our team.',
      project: 'E-commerce App Redesign'
    },
    {
      id: 2,
      clientName: 'Jennifer Lee',
      company: 'Beauty Startup',
      rating: 5,
      date: '4 months ago',
      comment: 'Working with Sarah was a game-changer for our brand. She created a stunning brand identity that perfectly captured our vision and resonated with our target audience. Her professionalism, creativity, and ability to deliver on time made the entire process smooth and enjoyable.',
      project: 'Brand Identity System'
    },
    {
      id: 3,
      clientName: 'Michael Rodriguez',
      company: 'Fitness App',
      rating: 4,
      date: '6 months ago',
      comment: 'Sarah did an excellent job designing our fitness app. The UI is clean, intuitive, and engaging. She was responsive to our feedback and made the necessary adjustments to ensure we were completely satisfied with the final product.',
      project: 'Mobile App UI'
    }
  ]
};

export default function DesignerProfile() {
  const [activeTab, setActiveTab] = useState('overview');
  
  // In a real app, you would fetch the designer data based on the ID
  // For now, we'll use the placeholder data
  const designer = designerData;
  
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Cover Image & Header */}
      <div className="relative">
        <div className="h-64 bg-gray-800">
          <img 
            src={designer.coverImage} 
            alt="Cover" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        
        <div className="container mx-auto px-4">
          <div className="relative -mt-24 mb-8">
            <div className="flex flex-col">
              <div className="flex items-center mb-4">
                <div className="relative h-24 w-24 rounded-full overflow-hidden bg-gray-800 border-4 border-gray-900">
                  <img 
                    src={designer.avatar} 
                    alt={`${designer.name} profile`} 
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-400 rounded-full border-2 border-gray-900"></div>
                </div>
                
                <div className="ml-4">
                  <div className="flex items-center">
                    <span className="bg-gray-800 text-xs text-gray-400 px-2 py-1 rounded flex items-center mr-2">
                      <span className="h-2 w-2 bg-green-400 rounded-full mr-1"></span>
                      PRO
                    </span>
                  </div>
                  
                  <h1 className="text-4xl font-bold text-white mt-2">{designer.name}</h1>
                  <p className="text-gray-400">{designer.location}</p>
                </div>
                
                <div className="ml-auto space-y-2">
                  <button className="bg-gray-800 text-white py-2 px-6 rounded-full border border-gray-700 hover:bg-gray-700 transition-colors">
                    Follow
                  </button>
                  <button className="bg-indigo-600 text-white py-2 px-6 rounded-full hover:bg-indigo-700 transition-colors flex items-center justify-center">
                    <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Get in touch
                  </button>
                </div>
              </div>
              
              <div className="flex justify-between mt-4 mb-8">
                <div className="flex gap-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold">{designer.earnings}</div>
                    <div className="text-sm text-gray-400">Earned</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">{designer.hired}</div>
                    <div className="text-sm text-gray-400">Hired</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">{designer.rating}</div>
                    <div className="text-sm text-gray-400">Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">{designer.reviews}</div>
                    <div className="text-sm text-gray-400">Followers</div>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  {designer.badges.map((badge, index) => (
                    <div key={index} className="flex items-center px-3 py-1 rounded bg-gray-800 border border-gray-700">
                      <svg className="h-4 w-4 mr-1 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L1 21h22L12 2z" />
                      </svg>
                      <span className="text-sm">{badge}</span>
                    </div>
                  ))}
                  <div className="flex items-center px-3 py-1 rounded bg-gray-800 border border-gray-700">
                    <span className="text-sm">+1</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Tabs */}
          <div className="border-b border-gray-800 mb-8">
            <nav className="flex -mb-px">
              <button
                onClick={() => setActiveTab('overview')}
                className={`py-4 px-6 text-sm font-medium ${
                  activeTab === 'overview'
                    ? 'border-b-2 border-white text-white'
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('work')}
                className={`py-4 px-6 text-sm font-medium ${
                  activeTab === 'work'
                    ? 'border-b-2 border-white text-white'
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                Work
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`py-4 px-6 text-sm font-medium ${
                  activeTab === 'reviews'
                    ? 'border-b-2 border-white text-white'
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                Reviews
              </button>
              <button
                onClick={() => setActiveTab('services')}
                className={`py-4 px-6 text-sm font-medium ${
                  activeTab === 'services'
                    ? 'border-b-2 border-white text-white'
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                Services
              </button>
              <button
                onClick={() => setActiveTab('about')}
                className={`py-4 px-6 text-sm font-medium ${
                  activeTab === 'about'
                    ? 'border-b-2 border-white text-white'
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                About
              </button>
            </nav>
          </div>
          
          {/* Featured Work Section */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Featured work</h2>
              <button className="text-sm text-gray-400 hover:text-white">View all (6)</button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {designer.portfolio.map((item) => (
                <div key={item.id} className="relative bg-gray-800 rounded-lg overflow-hidden group">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full aspect-[4/3] object-cover"
                  />
                  
                  {item.earnings && (
                    <div className="absolute top-3 left-3 bg-gray-900 bg-opacity-75 rounded-full px-3 py-1 flex items-center text-xs">
                      <svg className="h-3 w-3 mr-1 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                      </svg>
                      {item.earnings}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center justify-end space-x-4 text-gray-400 mb-12">
            <Link href="#" className="hover:text-white transition-colors">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
              </svg>
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 