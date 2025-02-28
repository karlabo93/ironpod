import React from 'react';
import { useState } from 'react';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import LoginModal from './components/LoginModal';
import './output.css';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  const handleLogin = (userData) => {
    setIsLoggedIn(true);
    setShowLogin(false);
    console.log("User logged in:", userData);
  };

  const handleBooking = () => {
    if (isLoggedIn) {
      // Navigate to booking page
      console.log("Navigating to booking page");
      // window.location.href = '/booking';
    } else {
      // Show login modal
      setShowLogin(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar 
        isLoggedIn={isLoggedIn} 
        onLoginClick={toggleLogin} 
      />
      <Hero onBookClick={handleBooking} />
      <Features onBookClick={handleBooking} />
      <Pricing onBookClick={handleBooking} />
      <Contact />
      
      {showLogin && (
        <LoginModal 
          onClose={toggleLogin} 
          onLogin={handleLogin} 
        />
      )}
    </div>
  );
}