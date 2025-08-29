import React from 'react';
import { assets } from '../../assets/assets';

const AppDownload = () => {
  return (
    <div className="bg-gray-50 border border-gray-200 py-12 px-6 md:px-12 rounded-xl my-12 mx-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3 font-['Outfit']">
          For Better Experience Download <br /> Tomato App
        </h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Enjoy faster ordering, exclusive deals, and personalized recommendations.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#" 
            className="transition-all duration-300 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 rounded-xl"
          >
            <img 
              src={assets.play_store} 
              alt="Get Tomato on Google Play" 
              className="h-12 md:h-14 w-auto rounded-xl"
            />
          </a>
          <a 
            href="#" 
            className="transition-all duration-300 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 rounded-xl"
          >
            <img 
              src={assets.app_store} 
              alt="Download Tomato on App Store" 
              className="h-12 md:h-14 w-auto rounded-xl"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppDownload;