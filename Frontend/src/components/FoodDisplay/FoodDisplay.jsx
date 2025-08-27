import React, { useContext } from 'react';
import { StoreContext } from '../../Context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = () => {
  const { food_list } = useContext(StoreContext);
  
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-['Outfit'] mb-4">
          Top Dishes Near You
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Discover culinary excellence with our handpicked selection of the finest dishes, crafted to perfection just for you.
        </p>
      </div>

      {/* Food Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {food_list.map((item, index) => (
          <FoodItem 
            key={index} 
            id={item._id} 
            name={item.name} 
            description={item.description} 
            price={item.price} 
            image={item.image}
          />
        ))}
      </div>

      {/* View More Button */}
      <div className="text-center mt-12">
        <button className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
          View More Dishes
        </button>
      </div>
    </div>
  );
};

export default FoodDisplay;