import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Contact from './components/Contact'
import './output.css'

export default function App() {
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


