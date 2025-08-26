import React, { useEffect, useState } from 'react';
import { assets } from '../assets/assets.js';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-center px-4 md:px-6 mt-6">
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          .animate-fade-in-up {
            animation: fadeInUp 0.8s ease-out forwards;
          }
          .animate-fade-in {
            animation: fadeIn 1s ease-out forwards;
          }
          .delay-100 {
            animation-delay: 0.1s;
          }
          .delay-200 {
            animation-delay: 0.2s;
          }
          .delay-300 {
            animation-delay: 0.3s;
          }
        `}
      </style>
      
      <div className="relative w-[1000px] max-w-6xl h-[450px] overflow-hidden rounded-2xl shadow-xl">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={assets.header_img} 
            alt="Delicious food" 
            className="w-full h-full object-cover"
          />
          {/* Overlay gradient for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
        </div>
        
        {/* Content with animations */}
        <div className="relative z-10 flex flex-col justify-center h-full text-white px-10 md:px-16 max-w-lg">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 font-['Outfit'] ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Order Your Favorite Food Here
          </h2>
          <p className={`text-xl md:text-2xl mb-10 opacity-90 font-light ${isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
            Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise.
          </p>
          <button className={`bg-amber-500 hover:bg-amber-600 text-white font-semibold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 w-fit shadow-lg text-lg ${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
            View Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;