import React from 'react'
import { menu_list } from '../../assets/assets'

const ExploreMenu = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 font-['Outfit'] mb-4">
          Explore Our Menu
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Choose from a diverse menu featuring a delectable array of dishes. Our mission is to provide a delightful culinary experience that caters to all tastes and preferences.
        </p>
      </div>

      {/* Horizontal Scrolling Menu Container */}
      <div className="overflow-x-auto pb-6">
        <div className="flex space-x-6 md:space-x-8 min-w-max">
          {menu_list.map((item, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-center cursor-pointer transition-all duration-300 hover:transform hover:scale-105 flex-shrink-0"
            >
              {/* Image Container */}
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white p-1 shadow-md border border-gray-100 group-hover:shadow-lg group-hover:border-amber-200 transition-all duration-300 mb-3">
                <img 
                  src={item.menu_image} 
                  alt={item.menu_name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              
              {/* Menu Name */}
              <p className="text-center text-sm md:text-base font-medium text-gray-700 group-hover:text-amber-600 transition-colors duration-300 font-['Outfit']">
                {item.menu_name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Horizontal Rule */}
      <div className="relative flex items-center justify-center my-10">
        <div className="absolute left-0 w-5 h-5 border-2 border-amber-400 rounded-full"></div>
        <div className="flex-grow border-t border-amber-300"></div>
        <div className="mx-4 text-amber-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </div>
        <div className="flex-grow border-t border-amber-300"></div>
        <div className="absolute right-0 w-5 h-5 border-2 border-amber-400 rounded-full"></div>
      </div>
      
    </div>
  )
}

export default ExploreMenu