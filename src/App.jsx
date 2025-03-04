import React from 'react';
import { useState } from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import LoginModal from './components/LoginModal';
import SignupModal from './components/SignupModal';
import './output.css';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [userData, setUserData] = useState(null);

  const toggleLogin = () => {
    setShowLogin(!showLogin);
    if (showSignup) setShowSignup(false);
  };

  const toggleSignup = () => {
    setShowSignup(!showSignup);
    if (showLogin) setShowLogin(false);
  };

  const handleLogin = (userData) => {
    setIsLoggedIn(true);
    setUserData(userData);
    setShowLogin(false);
    console.log("User logged in:", userData);
  };

  const handleSignup = (userData) => {
    setIsLoggedIn(true);
    setUserData(userData);
    setShowSignup(false);
    console.log("User signed up:", userData);
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
        onSignupClick={toggleSignup}
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
      
      {showSignup && (
        <SignupModal
          onClose={toggleSignup}
          onSignup={handleSignup}
        />
      )}
    </div>
  );
}