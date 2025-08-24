import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Google Fonts Import */}
      <link 
        href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700&display=swap" 
        rel="stylesheet"
      />
      
      <nav className="bg-white/80 backdrop-blur-md border-b border-white/20 shadow-lg shadow-black/5" style={{ fontFamily: 'Kanit, sans-serif' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-green-600">Carbonly</span>
              <div className="w-6 h-4 bg-gray-800 rounded-sm"></div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition-colors duration-200"
              >
                <span>How it Works</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
              >
                Buy
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
              >
                Articles
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
              >
                Contact
              </a>
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <button className="px-6 py-2 text-white bg-gradient-to-r from-blue-500/90 to-purple-600/90 hover:from-blue-600/90 hover:to-purple-700/90 backdrop-blur-sm rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 active:scale-95 border border-white/20">
                Login
              </button>
              <button className="px-6 py-2 text-white bg-gradient-to-r from-purple-500/90 to-pink-600/90 hover:from-purple-600/90 hover:to-pink-700/90 backdrop-blur-sm rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25 active:scale-95 border border-white/20">
                Sign Up
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-white/50 backdrop-blur-sm transition-all duration-200 border border-white/20 hover:shadow-md"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu Panel */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-white/20 bg-white/70 backdrop-blur-md">
              <div className="py-4 space-y-1">
                {/* Mobile Navigation Links */}
                <div className="flex flex-col space-y-1">
                  <a
                    href="#"
                    className="flex items-center justify-between px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-white/50 backdrop-blur-sm rounded-md transition-all duration-200 border border-transparent hover:border-white/30"
                  >
                    <span>How it Works</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-white/50 backdrop-blur-sm rounded-md transition-all duration-200 border border-transparent hover:border-white/30"
                  >
                    Buy
                  </a>
                  <a
                    href="#"
                    className="px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-white/50 backdrop-blur-sm rounded-md transition-all duration-200 border border-transparent hover:border-white/30"
                  >
                    About
                  </a>
                  <a
                    href="#"
                    className="px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-white/50 backdrop-blur-sm rounded-md transition-all duration-200 border border-transparent hover:border-white/30"
                  >
                    Articles
                  </a>
                  <a
                    href="#"
                    className="px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-white/50 backdrop-blur-sm rounded-md transition-all duration-200 border border-transparent hover:border-white/30"
                  >
                    Contact
                  </a>
                </div>

                {/* Mobile Action Buttons */}
                <div className="flex flex-col space-y-3 pt-4 px-4 border-t border-white/30">
                  <button className="w-full px-4 py-3 text-white bg-gradient-to-r from-blue-500/90 to-purple-600/90 hover:from-blue-600/90 hover:to-purple-700/90 backdrop-blur-sm rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 active:scale-95 border border-white/20">
                    Login
                  </button>
                  <button className="w-full px-4 py-3 text-white bg-gradient-to-r from-purple-500/90 to-pink-600/90 hover:from-purple-600/90 hover:to-pink-700/90 backdrop-blur-sm rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25 active:scale-95 border border-white/20">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;