import React from 'react';
import { assets } from '../../assets/assets';
import { NavLink } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className="h-full w-64 bg-white shadow-lg">
      <div className="flex items-center p-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">Admin Panel</h2>
      </div>

      <nav className="mt-6">
        <NavLink
          to="/add"
          className={({ isActive }) =>
            `flex items-center gap-3 p-4 mx-2 rounded-md transition-colors duration-200 ${
              isActive
                ? 'bg-blue-100 text-blue-600 font-medium'
                : 'text-gray-600 hover:bg-gray-100'
            }`
          }
        >
          <img src={assets.add_icon} alt="Add Items" className="w-5 h-5" />
          <span>Add Items</span>
        </NavLink>

        <NavLink
          to="/list"
          className={({ isActive }) =>
            `flex items-center gap-3 p-4 mx-2 rounded-md transition-colors duration-200 ${
              isActive
                ? 'bg-blue-100 text-blue-600 font-medium'
                : 'text-gray-600 hover:bg-gray-100'
            }`
          }
        >
          <img src={assets.order_icon} alt="List Items" className="w-5 h-5" />
          <span>List Items</span>
        </NavLink>

        <NavLink
          to="/orders"
          className={({ isActive }) =>
            `flex items-center gap-3 p-4 mx-2 rounded-md transition-colors duration-200 ${
              isActive
                ? 'bg-blue-100 text-blue-600 font-medium'
                : 'text-gray-600 hover:bg-gray-100'
            }`
          }
        >
          <img src={assets.order_icon} alt="Orders" className="w-5 h-5" />
          <span>Orders</span>
        </NavLink>
      </nav>

      <div className="absolute bottom-0 w-full p-4 border-t border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-sm font-medium text-gray-600">A</span>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-800">Admin User</p>
            <p className="text-xs text-gray-500">Administrator</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;