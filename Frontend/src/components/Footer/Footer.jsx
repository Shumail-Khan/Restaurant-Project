import React from 'react';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-4">
          {/* Left Section */}
          <div className="flex-1 max-w-md">
            <img 
              src={assets.logo} 
              alt="Tomato Logo" 
              className="w-40 h-auto mb-4 filter brightness-0 invert"
            />
            <p className="text-gray-400 mb-6 leading-relaxed">
              Tomato is your premier destination for delicious meals delivered right to your doorstep. 
              We're committed to providing exceptional food and service that exceeds your expectations.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-gray-800 p-2 rounded-full hover:bg-amber-600 transition-colors duration-300"
                aria-label="Facebook"
              >
                <img src={assets.facebook_icon} alt="Facebook" className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-gray-800 p-2 rounded-full hover:bg-amber-600 transition-colors duration-300"
                aria-label="Twitter"
              >
                <img src={assets.twitter_icon} alt="Twitter" className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-gray-800 p-2 rounded-full hover:bg-amber-600 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <img src={assets.linkedin_icon} alt="LinkedIn" className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Center Section */}
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-4 text-amber-500">COMPANY</h2>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors duration-300">
                  Delivery
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors duration-300">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-4 text-amber-500">GET IN TOUCH</h2>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400">
                <span className="mr-3">📞</span>
                <span>03189764318</span>
              </li>
              <li className="flex items-center text-gray-400">
                <span className="mr-3">✉️</span>
                <span>zk074909@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 my-8" />

        {/* Copyright */}
        <div className="text-center text-gray-500 pt-4">
          <p>Copyright © 2025 Tomato.com - All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;