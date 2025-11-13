import React, { useState } from "react";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

const   MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#008751] text-white shadow-md fixed top-0 left-0 w-full z-50">
      
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        
        <div className="text-2xl font-bold tracking-wide">
          NaijaMarket
        </div>

        <ul className="hidden md:flex space-x-8 font-medium">
          <li><a href="#" className="hover:text-gray-200 transition">Home</a></li>
          <li><a href="#" className="hover:text-gray-200 transition">Shop</a></li>
          <li><a href="#" className="hover:text-gray-200 transition">About</a></li>
          <li><a href="#" className="hover:text-gray-200 transition">Contact</a></li>
        </ul>

    
        <div className="flex items-center space-x-4">
          <FaShoppingCart className="text-2xl cursor-pointer hover:text-gray-200 transition" />
          <button className="bg-white text-[#008751] px-4 py-1.5 rounded-md font-semibold hover:bg-gray-100 transition">
            Login
          </button>

          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

    
      <div
        className={`md:hidden bg-[#008751] overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-60 py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 font-medium">
          <li><a href="#" className="hover:text-gray-200 transition">Home</a></li>
          <li><a href="#" className="hover:text-gray-200 transition">Shop</a></li>
          <li><a href="#" className="hover:text-gray-200 transition">About</a></li>
          <li><a href="#" className="hover:text-gray-200 transition">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default MobileMenu;
