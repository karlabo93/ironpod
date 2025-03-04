import React, { useState } from 'react';
import logo from '../assets/logo.jpg';

const Navbar = ({ isLoggedIn, onLoginClick, onSignupClick, onMyAccountClick, onLogoutClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu);
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
              {isLoggedIn ? (
                <div className="relative">
                  <div className="flex items-center">
                    <button 
                      onClick={onMyAccountClick}
                      className="py-2 px-3 bg-gray-700 hover:bg-gray-600 text-white rounded-md transition duration-300 mr-2"
                    >
                      My Account
                    </button>
                    <button 
                      onClick={toggleUserMenu}
                      className="flex items-center py-2 px-2 bg-indigo-700 hover:bg-indigo-800 text-white rounded-full transition duration-300"
                    >
                      <span className="sr-only">User menu</span>
                      <div className="h-7 w-7 rounded-full bg-indigo-500 flex items-center justify-center text-sm font-medium">
                        U
                      </div>
                    </button>
                  </div>
                  
                  {/* User dropdown menu */}
                  {showUserMenu && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                      <button 
                        onClick={onMyAccountClick}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        My Account
                      </button>
                      <a 
                        href="#" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Settings
                      </a>
                      <button 
                        onClick={onLogoutClick}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Sign out
                      </button>
                    </div>
                  )}
                </div>
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
                <button 
                  onClick={onMyAccountClick}
                  className="block w-full text-left py-2 px-4 text-sm hover:bg-gray-700 text-white"
                >
                  My Account
                </button>
                <button 
                  onClick={onLogoutClick}
                  className="block w-full text-left py-2 px-4 text-sm hover:bg-gray-700 text-white"
                >
                  Sign out
                </button>
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