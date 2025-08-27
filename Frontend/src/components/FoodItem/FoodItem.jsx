import React, { useContext } from 'react';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContext';

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  
  // Debug: Log the current item's ID and cart status
  console.log(`FoodItem ${id}:`, cartItems[id] !== undefined ? `In cart (${cartItems[id]})` : 'Not in cart');
  
  // Get the quantity for this specific item from the cart
  const itemQuantity = cartItems[id] || 0;

  // Handle adding item to cart
  const handleAddToCart = (e) => {
    e.stopPropagation();
    e.preventDefault();
    console.log(`Adding item ${id} to cart`);
    addToCart(id);
  };

  // Handle removing item from cart
  const handleRemoveFromCart = (e) => {
    e.stopPropagation();
    e.preventDefault();
    console.log(`Removing item ${id} from cart`);
    removeFromCart(id);
  };

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:transform hover:scale-[1.02] border border-gray-100">
      {/* Food Image with Add Button */}
      <div className="h-48 md:h-52 overflow-hidden relative">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        
        {/* Rating Badge */}
        <div className="absolute top-3 right-3 bg-white rounded-full p-1 shadow-md">
          <img src={assets.rating_starts} alt="Rating" className="h-5 w-20" />
        </div>
        
        {/* Add to Cart Button on Image */}
        <div className="absolute bottom-3 right-3">
          {itemQuantity === 0 ? (
            <button 
              onClick={handleAddToCart}
              className="bg-amber-500 hover:bg-amber-600 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300"
              aria-label={`Add ${name} to cart`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
          ) : (
            <div className="flex items-center gap-2 bg-white rounded-full px-2 py-1 shadow-md">
              <button 
                onClick={handleRemoveFromCart}
                className="text-amber-700 hover:text-amber-900 font-bold text-lg transition-colors duration-200 w-6 h-6 flex items-center justify-center rounded-full hover:bg-amber-100"
                aria-label={`Remove one ${name} from cart`}
              >
                −
              </button>
              <span className="text-amber-800 font-medium text-sm">{itemQuantity}</span>
              <button 
                onClick={handleAddToCart}
                className="text-amber-700 hover:text-amber-900 font-bold text-lg transition-colors duration-200 w-6 h-6 flex items-center justify-center rounded-full hover:bg-amber-100"
                aria-label={`Add one more ${name} to cart`}
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
      
      {/* Food Details */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-semibold text-gray-800 font-['Outfit'] line-clamp-1">
            {name}
          </h3>
          <div className="bg-amber-100 text-amber-800 text-xs font-medium px-2 py-1 rounded-full">
            Popular
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 h-10">{description}</p>
        
        {/* Price */}
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-amber-600">${price.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;