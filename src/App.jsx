import React from 'react';
import { useState } from 'react';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Contact from './components/Contact'
import './output.css'

export default function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  const handleLogin = (userData) => {
    setIsLoggedIn(true);
    setShowLogin(false)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Contact />
      <main className="container mx-auto px-4 py-8">
    
      </main>
    </div>
  );
}


