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
import MyAccount from './components/MyAccount';
import './output.css';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [userData, setUserData] = useState(null);
  const [showMyAccount, setShowMyAccount] = useState(false);

  const toggleLogin = () => {
    setShowLogin(!showLogin);
    if (showSignup) setShowSignup(false);
  };

  const toggleSignup = () => {
    setShowSignup(!showSignup);
    if (showLogin) setShowLogin(false);
  };

  const toggleMyAccount = () => {
    if (isLoggedIn) {
      setShowMyAccount(!showMyAccount);
    } else {
      setShowLogin(true);
    }
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
      
      // For now, just show the account page since we don't have a separate booking page
      setShowMyAccount(true);
    } else {
      // Show login modal
      setShowLogin(true);
    }
  };
  
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserData(null);
    setShowMyAccount(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar 
        isLoggedIn={isLoggedIn} 
        onLoginClick={toggleLogin}
        onSignupClick={toggleSignup}
        onMyAccountClick={toggleMyAccount}
        onLogoutClick={handleLogout}
      />
      
      {showMyAccount ? (
        <MyAccount 
          userData={userData} 
          onBookNow={handleBooking} 
        />
      ) : (
        <>
          <Hero onBookClick={handleBooking} />
          <Features onBookClick={handleBooking} />
          <Pricing onBookClick={handleBooking} />
          <Contact />
        </>
      )}
      
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