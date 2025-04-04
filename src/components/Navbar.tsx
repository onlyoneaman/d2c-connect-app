'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();

  // Set isClient to true when component mounts (client-side only)
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Check login status for demo purposes
  useEffect(() => {
    if (isClient) {
      setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
    }
  }, [pathname, isClient]);

  // Handle login/logout for demo purposes
  const handleAuth = () => {
    if (isClient) {
      if (isLoggedIn) {
        localStorage.setItem('isLoggedIn', 'false');
        setIsLoggedIn(false);
      } else {
        localStorage.setItem('isLoggedIn', 'true');
        setIsLoggedIn(true);
      }
    }
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              D2C Connect
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/list" className="text-gray-700 hover:text-purple-600 transition">
              Browse Designers
            </Link>
            {isLoggedIn && (
              <Link href="/work" className="text-gray-700 hover:text-purple-600 transition">
                Find Work
              </Link>
            )}
            <Link href="/about" className="text-gray-700 hover:text-purple-600 transition">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-purple-600 transition">
              Contact
            </Link>
            
            {isLoggedIn ? (
              <button 
                onClick={handleAuth}
                className="text-gray-700 hover:text-purple-600 transition"
              >
                Log Out
              </button>
            ) : (
              <>
                <Link href="/login" className="text-gray-700 hover:text-purple-600 transition">
                  Log In
                </Link>
                <Link href="/signup" className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-purple-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link href="/list" className="text-gray-700 hover:text-purple-600 transition">
                Browse Designers
              </Link>
              {isLoggedIn && (
                <Link href="/work" className="text-gray-700 hover:text-purple-600 transition">
                  Find Work
                </Link>
              )}
              <Link href="/about" className="text-gray-700 hover:text-purple-600 transition">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-purple-600 transition">
                Contact
              </Link>
              
              {isLoggedIn ? (
                <button 
                  onClick={handleAuth}
                  className="text-gray-700 hover:text-purple-600 transition text-left"
                >
                  Log Out
                </button>
              ) : (
                <>
                  <Link href="/login" className="text-gray-700 hover:text-purple-600 transition">
                    Log In
                  </Link>
                  <Link href="/signup" className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition text-center">
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 