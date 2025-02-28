import React from 'react';
import herobg from '../assets/bg1.jpg';

const Hero = ({ onBookClick }) => {
  return (
    <div id="hero" className="relative h-96 md:h-[500px] lg:h-[600px] w-full">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: `url(${herobg})`
        }}
      ></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-55 z-10"></div>
      
      {/* Content */}
      <div className="relative h-full w-full flex flex-col justify-center items-center text-center px-4 z-20">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Power Forged In Solitude.
        </h1>
        <p className="text-white text-lg md:text-xl lg:text-2xl max-w-3xl mb-8">
          Own your grind, own your gym. A private space for unmatched focus and maximum results.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <button 
            onClick={onBookClick}
            className="bg-indigo-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;