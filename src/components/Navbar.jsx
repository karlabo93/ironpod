import React, { useState } from 'react';
import logo from '../assets/logo.jpg';

const Navbar = ({ isLoggedIn, onLoginClick, onSignupClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-indigo-600 shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              {/* Logo */}
              <div>
                <a href="/" className="flex items-center py-5 px-2 text-white">
                  <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
                  <span className="font-bold text-xl">IronPod</span>
                </a>
              </div>
              
              {/* Primary Nav */}
              <div className="hidden md:flex items-center space-x-1">
                <a href="#hero" className="py-5 px-3 text-white hover:text-gray-300">Home</a>
                <a href="#features" className="py-5 px-3 text-white hover:text-gray-300">Features</a>
                <a href="#pricing" className="py-5 px-3 text-white hover:text-gray-300">Pricing</a>
                <a href="#contact" className="py-5 px-3 text-white hover:text-gray-300">Contact</a>
              </div>
            </div>
            
            {/* Secondary Nav */}
            <div className="hidden md:flex items-center space-x-1">
              {isLoggedIn ? (
                <>
                  <a href="/dashboard" className="py-2 px-3 bg-gray-700 hover:bg-gray-600 text-white rounded-md transition duration-300">
                    Dashboard
                  </a>
                  <a href="/booking" className="py-2 px-3 bg-indigo-600 hover:bg-blue-500 text-white rounded-md transition duration-300">
                    Book Now
                  </a>
                </>
              ) : (
                <>
                  <button 
                    onClick={onLoginClick}
                    className="py-2 px-3 bg-gray-700 hover:bg-gray-600 text-white rounded-md transition duration-300"
                  >
                    Login
                  </button>
                  <button 
                    onClick={onSignupClick}
                    className="py-2 px-3 bg-indigo-600 hover:bg-blue-500 text-white rounded-md transition duration-300"
                  >
                    Signup
                  </button>
                </>
              )}
            </div>
            
            {/* Mobile button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsOpen(!isOpen)} className="outline-none mobile-menu-button">
                <svg 
                  className={`w-6 h-6 text-white ${isOpen ? 'hidden' : 'block'}`}
                  fill="none"
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2"
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
                <svg 
                  className={`w-6 h-6 text-white ${isOpen ? 'block' : 'hidden'}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
          <a href="#hero" className="block py-2 px-4 text-sm hover:bg-gray-700 text-white">Home</a>
          <a href="#features" className="block py-2 px-4 text-sm hover:bg-gray-700 text-white">Features</a>
          <a href="#pricing" className="block py-2 px-4 text-sm hover:bg-gray-700 text-white">Pricing</a>
          <a href="#contact" className="block py-2 px-4 text-sm hover:bg-gray-700 text-white">Contact</a>
          <div className="py-2">
            {isLoggedIn ? (
              <>
                <a href="/dashboard" className="block py-2 px-4 text-sm hover:bg-gray-700 text-white">
                  Dashboard
                </a>
                <a href="/booking" className="block py-2 px-4 text-sm hover:bg-gray-700 text-white font-bold">
                  Book Now
                </a>
              </>
            ) : (
              <>
                <button 
                  onClick={onLoginClick}
                  className="block w-full text-left py-2 px-4 text-sm hover:bg-gray-700 text-white"
                >
                  Login
                </button>
                <button 
                  onClick={onSignupClick}
                  className="block w-full text-left py-2 px-4 text-sm hover:bg-gray-700 text-white font-bold"
                >
                  Signup
                </button>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;