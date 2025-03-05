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
import BookingPage from './components/BookingPage';
import './output.css';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [userData, setUserData] = useState(null);
  const [currentPage, setCurrentPage] = useState('home'); // 'home', 'myAccount', 'booking'

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

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserData(null);
    setCurrentPage('home');
  };

  const handleBooking = () => {
    if (isLoggedIn) {
      setCurrentPage('booking');
    } else {
      setShowLogin(true);
    }
  };

  const handleViewAccount = () => {
    if (isLoggedIn) {
      setCurrentPage('myAccount');
    } else {
      setShowLogin(true);
    }
  };

  const goToHome = () => {
    setCurrentPage('home');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'myAccount':
        return (
          <MyAccount 
            userData={userData} 
            onBookNow={handleBooking} 
          />
        );
      case 'booking':
        return (
          <BookingPage 
            onViewAccount={handleViewAccount} 
          />
        );
      case 'home':
      default:
        return (
          <>
            <Hero onBookClick={handleBooking} />
            <Features onBookClick={handleBooking} />
            <Pricing onBookClick={handleBooking} />
            <Contact />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar 
        isLoggedIn={isLoggedIn} 
        onLoginClick={toggleLogin}
        onSignupClick={toggleSignup}
        onMyAccountClick={handleViewAccount}
        onLogoutClick={handleLogout}
        onHomeClick={goToHome}
        onBookNowClick={handleBooking}
        currentPage={currentPage}
      />
      
      {renderPage()}
      
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