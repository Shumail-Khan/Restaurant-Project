import React, { useState } from 'react';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('Home');
  const [basketItems, setBasketItems] = useState(3);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = ['Home', 'Menu', 'Mobile App', 'Contact Us'];

  const toggleBasket = () => {
    setBasketItems(basketItems > 0 ? 0 : 3);
  };

  const handleNavClick = (item) => {
    setActiveItem(item);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md font-['Outfit']">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#ff9a9e] to-[#fad0c4] flex items-center justify-center text-white font-bold text-xl">
              G
            </div>
            <span className="ml-2 text-xl font-semibold text-gray-800">Gourmet Delight</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                className={`${
                  activeItem === item
                    ? 'text-[#e74c3c] font-semibold'
                    : 'text-[#5d6d7e] hover:text-gray-800'
                } transition duration-300 relative text-lg`}
                onClick={() => handleNavClick(item)}
              >
                {item}
                {activeItem === item && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#e74c3c] to-[#ff9a9e] rounded-full"></span>
                )}
              </button>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-5">
              {/* Search Icon */}
              <button className="w-10 h-10 rounded-full flex items-center justify-center text-[#5d6d7e] hover:text-[#e74c3c] transition duration-300 hover:bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>

              {/* Basket Icon */}
              <div className="relative">
                <button
                  className="w-10 h-10 rounded-full flex items-center justify-center text-[#5d6d7e] hover:text-[#e74c3c] transition duration-300 hover:bg-gray-100"
                  onClick={toggleBasket}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </button>
                {basketItems > 0 && (
                  <div className="absolute -top-1 -right-1 bg-gradient-to-r from-[#e74c3c] to-[#ff9a9e] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold">
                    {basketItems}
                  </div>
                )}
              </div>
            </div>

            {/* Sign In Button */}
            <button className="hidden md:block bg-gradient-to-r from-[#2c3e50] to-[#34495e] hover:from-[#34495e] hover:to-[#2c3e50] text-white px-5 py-2.5 rounded-full transition duration-300 font-semibold text-sm shadow-md hover:shadow-lg">
              Sign In
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-50 px-4 pt-2 pb-4">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item}
                  className={`${
                    activeItem === item
                      ? 'text-[#e74c3c] font-semibold bg-[#fff5f5]'
                      : 'text-[#5d6d7e] hover:text-gray-800'
                  } py-2 px-4 rounded transition duration-300 text-left text-lg`}
                  onClick={() => handleNavClick(item)}
                >
                  {item}
                </button>
              ))}
              <div className="flex items-center justify-between pt-3">
                <div className="flex space-x-4">
                  {/* Search Icon */}
                  <button className="w-10 h-10 rounded-full flex items-center justify-center text-[#5d6d7e] hover:text-[#e74c3c] transition duration-300 hover:bg-gray-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>

                  {/* Basket Icon */}
                  <div className="relative">
                    <button
                      className="w-10 h-10 rounded-full flex items-center justify-center text-[#5d6d7e] hover:text-[#e74c3c] transition duration-300 hover:bg-gray-100"
                      onClick={toggleBasket}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </button>
                    {basketItems > 0 && (
                      <div className="absolute -top-1 -right-1 bg-gradient-to-r from-[#e74c3c] to-[#ff9a9e] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold">
                        {basketItems}
                      </div>
                    )}
                  </div>
                </div>
                <button className="bg-gradient-to-r from-[#2c3e50] to-[#34495e] hover:from-[#34495e] hover:to-[#2c3e50] text-white px-4 py-2 rounded-full transition duration-300 font-semibold text-sm shadow-md hover:shadow-lg">
                  Sign In
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;