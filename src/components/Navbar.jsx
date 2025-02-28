import React, { useState } from 'react';
import logo from '../assets/logo.jpg';
import LoginModal from './LoginModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false); 

  // Function to toggle login modal
  const toggleLogin = () => {
    setShowLoginModal(!showLoginModal);
  };

  // Function to handle successful login
  const handleLogin = (userData) => {
    setShowLoginModal(false);
    // Here you would handle the logged in state, perhaps via context or props
    console.log("User logged in:", userData);
    // You might also want to redirect or update UI elements based on login status
  };

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
              <button 
                onClick={toggleLogin}
                className="py-2 px-3 bg-gray-700 hover:bg-gray-600 text-white rounded-md transition duration-300"
              >
                Login
              </button>
              <a href="/signup" className="py-2 px-3 bg-indigo-600 hover:bg-blue-500 text-white rounded-md transition duration-300">Signup</a>
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
          <a href="#contact" className="block py-2 px-4 text-sm hover:bg-gray-700 text-white">About</a>
          <div className="py-2">
            <button 
              onClick={toggleLogin}
              className="block w-full text-left py-2 px-4 text-sm hover:bg-gray-700 text-white"
            >
              Login
            </button>
            <a href="/signup" className="block py-2 px-4 text-sm hover:bg-gray-700 text-white font-bold">Signup</a>
          </div>
        </div>
      </nav>

      {/* Login Modal - Render conditionally */}
      {showLoginModal && (
        <LoginModal onClose={toggleLogin} onLogin={handleLogin} />
      )}
    </>
  );
};

export default Navbar;