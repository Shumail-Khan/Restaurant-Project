import React, { useState } from 'react';
import { assets } from '../../assets/assets';

const Add = () => {
  const [image, setImage] = useState(null);
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    category: 'Salad',
    price: ''
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log({ ...productData, image });
    // Reset form after submission
    setProductData({
      name: '',
      description: '',
      category: 'Salad',
      price: ''
    });
    setImage(null);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Add New Product</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Image Upload Section */}
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors duration-200">
          <p className="text-sm font-medium text-gray-700 mb-3">Product Image</p>
          <label htmlFor="image" className="cursor-pointer block">
            <div className="flex justify-center">
              <img 
                src={image || assets.upload_area} 
                alt="Upload preview" 
                className={`max-h-40 ${image ? 'object-cover rounded' : 'opacity-70'}`}
              />
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Click to {image ? 'change' : 'upload'} image
            </p>
          </label>
          <input 
            type="file" 
            id="image" 
            accept="image/*" 
            onChange={handleImageChange}
            className="hidden" 
            required 
          />
        </div>

        {/* Product Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Product Name
          </label>
          <input 
            type="text" 
            id="name"
            name="name" 
            value={productData.name}
            onChange={handleChange}
            placeholder="Enter product name" 
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required 
          />
        </div>

        {/* Product Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Product Description
          </label>
          <textarea 
            id="description"
            name="description" 
            value={productData.description}
            onChange={handleChange}
            rows="6" 
            placeholder="Enter product description" 
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required 
          ></textarea>
        </div>

        {/* Category and Price */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Product Category */}
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
              Product Category
            </label>
            <select 
              id="category"
              name="category" 
              value={productData.category}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Desert">Dessert</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Beverage">Beverage</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>

          {/* Product Price */}
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
              Product Price ($)
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                $
              </span>
              <input 
                type="number" 
                id="price"
                name="price" 
                value={productData.price}
                onChange={handleChange}
                placeholder="20.00" 
                min="0"
                step="0.01"
                className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required 
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 font-medium"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default Add;