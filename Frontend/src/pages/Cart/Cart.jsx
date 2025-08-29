import React, { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'
import { food_list } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const navigate = useNavigate()
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext)
  
  // Calculate total amount
  const calculateTotalAmount = () => {
    let total = 0;
    food_list.forEach(item => {
      if (cartItems[item._id] > 0) {
        total += item.price * cartItems[item._id];
      }
    });
    return total;
  };
  
  const totalAmount = calculateTotalAmount();
  const deliveryFee = totalAmount > 0 ? 2 : 0;
  const finalTotal = totalAmount + deliveryFee;
  
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Your Cart</h1>
        <p className="text-gray-600 mt-2">Review your items and proceed to checkout</p>
      </div>
      
      {totalAmount === 0 ? (
        // Empty Cart State
        <div className="bg-white rounded-xl shadow-sm p-8 text-center">
          <div className="text-6xl mb-4">🛒</div>
          <h2 className="text-2xl font-semibold text-gray-600 mb-2">Your cart is empty</h2>
          <p className="text-gray-500 mb-6">Looks like you haven't added any items yet</p>
          <button className="bg-gradient-to-r from-red-600 to-red-500 text-white px-6 py-3 rounded-lg font-medium hover:from-red-700 hover:to-red-600 transition-all shadow-md hover:shadow-lg">
            Browse Menu
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              {/* Table Header */}
              <div className="hidden md:grid grid-cols-12 gap-4 bg-gray-50 px-6 py-4 border-b border-gray-200">
                <div className="col-span-6 font-medium text-gray-700">Product</div>
                <div className="col-span-2 text-center font-medium text-gray-700">Price</div>
                <div className="col-span-2 text-center font-medium text-gray-700">Quantity</div>
                <div className="col-span-2 text-right font-medium text-gray-700">Total</div>
              </div>
              
              {/* Cart Items */}
              <div className="divide-y divide-gray-100">
                {food_list.map((item) => {
                  if (cartItems[item._id] > 0) {
                    return (
                      <div key={item._id} className="grid grid-cols-12 gap-4 items-center p-6">
                        {/* Product Info */}
                        <div className="col-span-12 md:col-span-6 flex items-center">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-20 h-20 object-cover rounded-lg shadow-sm"
                          />
                          <div className="ml-4">
                            <h3 className="font-medium text-gray-800">{item.name}</h3>
                            <p className="text-sm text-gray-500 mt-1">Fresh & Delicious</p>
                          </div>
                        </div>
                        
                        {/* Price */}
                        <div className="col-span-4 md:col-span-2">
                          <div className="md:text-center">
                            <span className="md:hidden text-sm text-gray-500 mr-2">Price:</span>
                            <span className="font-medium text-gray-800">${item.price.toFixed(2)}</span>
                          </div>
                        </div>
                        
                        {/* Quantity Controls */}
                        <div className="col-span-4 md:col-span-2">
                          <div className="flex items-center justify-center">
                            <div className="flex items-center border border-gray-300 rounded-full">
                              <button 
                                onClick={() => removeFromCart(item._id)}
                                className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors rounded-l-full"
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                </svg>
                              </button>
                              <span className="px-3 py-1 text-gray-800 font-medium">{cartItems[item._id]}</span>
                              <button 
                                onClick={() => addToCart(item._id)}
                                className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors rounded-r-full"
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                        
                        {/* Total */}
                        <div className="col-span-4 md:col-span-2">
                          <div className="flex items-center justify-end">
                            <span className="md:hidden text-sm text-gray-500 mr-2">Total:</span>
                            <span className="font-medium text-gray-800">${(item.price * cartItems[item._id]).toFixed(2)}</span>
                          </div>
                        </div>
                      </div>
                    )
                  }
                  return null;
                })}
              </div>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${totalAmount.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery Fee</span>
                  <span className="font-medium">${deliveryFee.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">${(totalAmount * 0.08).toFixed(2)}</span>
                </div>
                
                <hr className="my-4 border-gray-200" />
                
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span>${(finalTotal + (totalAmount * 0.08)).toFixed(2)}</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <button onClick={() => navigate('/order')}  className="w-full bg-gradient-to-r from-red-600 to-red-500 text-white py-3.5 rounded-xl font-semibold hover:from-red-700 hover:to-red-600 transition-all shadow-md hover:shadow-lg">
                  Proceed to Checkout
                </button>
                
                <button className="w-full border border-gray-300 text-gray-700 py-3.5 rounded-xl font-medium hover:bg-gray-50 transition-colors">
                  Continue Shopping
                </button>
              </div>
              
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-600">Free delivery on orders over $50</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart