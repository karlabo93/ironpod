import React, { useState } from 'react';
import logo from '../assets/logo.jpg';

const Navbar = ({ 
  isLoggedIn, 
  onLoginClick, 
  onSignupClick, 
  onMyAccountClick, 
  onLogoutClick,
  onHomeClick,
  onBookNowClick,
  currentPage
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="bg-indigo-600 shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              {/* Logo */}
              <div>
                <button 
                  onClick={() => { onHomeClick(); closeMenu(); }}
                  className="flex items-center py-5 px-2 text-white"
                >
                  <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
                  <span className="font-bold text-xl">IronPod</span>
                </button>
              </div>
              
              {/* Primary Nav */}
              <div className="hidden md:flex items-center space-x-1">
                {currentPage === 'home' ? (
                  <>
                    <a href="#hero" className="py-5 px-3 text-white hover:text-gray-300">Home</a>
                    <a href="#features" className="py-5 px-3 text-white hover:text-gray-300">Features</a>
                    <a href="#pricing" className="py-5 px-3 text-white hover:text-gray-300">Pricing</a>
                    <a href="#contact" className="py-5 px-3 text-white hover:text-gray-300">Contact</a>
                  </>
                ) : (
                  <button 
                    onClick={onHomeClick} 
                    className="py-5 px-3 text-white hover:text-gray-300"
                  >
                    Home
                  </button>
                )}
                
                {isLoggedIn && (
                  <>
                    <button 
                      onClick={onMyAccountClick}
                      className={`py-5 px-3 text-white hover:text-gray-300 ${currentPage === 'myAccount' ? 'border-b-2 border-white' : ''}`}
                    >
                      My Account
                    </button>
                    <button 
                      onClick={onBookNowClick}
                      className={`py-5 px-3 text-white hover:text-gray-300 ${currentPage === 'booking' ? 'border-b-2 border-white' : ''}`}
                    >
                      Book Session
                    </button>
                  </>
                )}
              </div>
            </div>
            
            {/* Secondary Nav */}
            <div className="hidden md:flex items-center space-x-1">
              {isLoggedIn ? (
                <div className="relative">
                  <div className="flex items-center">
                    <button 
                      onClick={onBookNowClick}
                      className="py-2 px-3 bg-gray-700 hover:bg-gray-600 text-white rounded-md transition duration-300 mr-2"
                    >
                      Book Now
                    </button>
                    <button 
                      onClick={toggleUserMenu}
                      className="flex items-center py-2 px-2 bg-indigo-700 hover:bg-indigo-800 text-white rounded-full transition duration-300"
                    >
                      <span className="sr-only">User menu</span>
                      <div className="h-7 w-7 rounded-full bg-indigo-500 flex items-center justify-center text-sm font-medium">
                        {userData?.name ? userData.name.charAt(0).toUpperCase() : 'U'}
                      </div>
                    </button>
                  </div>
                  
                  {/* User dropdown menu */}
                  {showUserMenu && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                      <button 
                        onClick={() => { onMyAccountClick(); setShowUserMenu(false); }}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        My Account
                      </button>
                      <button 
                        onClick={() => { onBookNowClick(); setShowUserMenu(false); }}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Book Session
                      </button>
                      <a 
                        href="#" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Settings
                      </a>
                      <button 
                        onClick={() => { onLogoutClick(); setShowUserMenu(false); }}
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
          <button 
            onClick={() => { onHomeClick(); closeMenu(); }}
            className="block w-full text-left py-2 px-4 text-sm hover:bg-gray-700 text-white"
          >
            Home
          </button>
          
          {currentPage === 'home' && (
            <>
              <a href="#features" className="block py-2 px-4 text-sm hover:bg-gray-700 text-white" onClick={closeMenu}>Features</a>
              <a href="#pricing" className="block py-2 px-4 text-sm hover:bg-gray-700 text-white" onClick={closeMenu}>Pricing</a>
              <a href="#contact" className="block py-2 px-4 text-sm hover:bg-gray-700 text-white" onClick={closeMenu}>Contact</a>
            </>
          )}
          
          <div className="py-2">
            {isLoggedIn ? (
              <>
                <button 
                  onClick={() => { onMyAccountClick(); closeMenu(); }}
                  className="block w-full text-left py-2 px-4 text-sm hover:bg-gray-700 text-white"
                >
                  My Account
                </button>
                <button 
                  onClick={() => { onBookNowClick(); closeMenu(); }}
                  className="block w-full text-left py-2 px-4 text-sm hover:bg-gray-700 text-white font-bold"
                >
                  Book Now
                </button>
                <button 
                  onClick={() => { onLogoutClick(); closeMenu(); }}
                  className="block w-full text-left py-2 px-4 text-sm hover:bg-gray-700 text-white"
                >
                  Sign out
                </button>
              </>
            ) : (
              <>
                <button 
                  onClick={() => { onLoginClick(); closeMenu(); }}
                  className="block w-full text-left py-2 px-4 text-sm hover:bg-gray-700 text-white"
                >
                  Login
                </button>
                <button 
                  onClick={() => { onSignupClick(); closeMenu(); }}
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